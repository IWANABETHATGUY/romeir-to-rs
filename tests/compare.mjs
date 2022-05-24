import { readdirSync, readFileSync, existsSync, writeFileSync } from "fs";
import * as path from "path";
import { fileURLToPath } from "url";

import { generate } from "../src/index.mjs";

import Parser from "web-tree-sitter";
import { diff, diffStringsUnified } from "jest-diff";
const { init } = Parser;

const enableUpdate = !!process.env.UPDATE_RESULT;

/**
 *
 * @param {string} source
 * @returns
 */
export async function parseIr(source) {
  await init();
  const parser = new Parser();
  const Lang = await Parser.Language.load(path.resolve(getDirName(), "../assets/tree-sitter-rome_ir.wasm"));
  parser.setLanguage(Lang);
  const tree = parser.parse(source, null);
  // console.log(generate(tree, source));
  return tree;
}

const excludeList = ["1.ir"];

const fixturesDirPath = path.resolve(getDirName(), "./fixtures");
const expectedDirPath = path.resolve(getDirName(), "./expected");
const fixtures = readdirSync(fixturesDirPath);

fixtures.forEach(async fixtureName => {
  if (excludeList.includes(fixtureName)) {
    return;
  }

  const nameWithoutExtension = fixtureName.slice(0, -3);

  const abFixturesPath = path.resolve(fixturesDirPath, fixtureName);
  const irContent = readFileSync(abFixturesPath).toString();
  const tree = await parseIr(irContent);
  const rustCode = generate(tree);
  const expectedFilename = `${nameWithoutExtension}.rs`;
  const expectedFilePath = path.resolve(expectedDirPath, expectedFilename);
  if (!existsSync(expectedFilePath)) {
    console.error("expected file not found");
    writeFileSync(expectedFilePath, rustCode);
  } else {
    if (enableUpdate) {
      writeFileSync(expectedFilePath, rustCode);
      return;
    }
    const expectedRustCode = readFileSync(expectedFilePath).toString();
    if (expectedRustCode !== rustCode) {
      const result = diffStringsUnified(expectedRustCode, rustCode);
      console.log(result);
    }
  }
});

/**
 *
 * @returns string
 */
function getDirName() {
  const fileName = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(fileName);
  return __dirname;
}
