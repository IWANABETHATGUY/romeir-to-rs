// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"6R2PZ":[function(require,module,exports) {
"use strict";
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "9ac1948506e7c16f";
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {};
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = it.call(o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else if ('reload' in location) location.reload();
            else {
                // Web extension context
                var ext = typeof chrome === 'undefined' ? typeof browser === 'undefined' ? null : browser : chrome;
                if (ext && ext.runtime && ext.runtime.reload) ext.runtime.reload();
            }
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                var oldDeps = modules[asset.id][1];
                for(var dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    var id = oldDeps[dep];
                    var parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    var modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        var deps = modules[id1][1];
        var orphans = [];
        for(var dep in deps){
            var parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach(function(id) {
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    var parents = getParents(module.bundle.root, id);
    var accepted = false;
    while(parents.length > 0){
        var v = parents.shift();
        var a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            var p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push.apply(parents, _toConsumableArray(p));
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"2oYPr":[function(require,module,exports) {
var process = require("process");
var __dirname = "playground";
var Module = void 0 !== Module ? Module : {}, TreeSitter = function() {
    var e2, t1 = "object" == typeof window ? {
        currentScript: window.document.currentScript
    } : null;
    class Parser {
        constructor(){
            this.initialize();
        }
        initialize() {
            throw new Error("cannot construct a Parser before calling `init()`");
        }
        static init(r1) {
            return e2 || (Module = Object.assign({}, Module, r1), e2 = new Promise((e3)=>{
                var r2, n1 = {};
                for(r2 in Module)Module.hasOwnProperty(r2) && (n1[r2] = Module[r2]);
                var s1, o1, _1 = [], a1 = "./this.program", u1 = function(e, t) {
                    throw t;
                }, i1 = !1, l1 = !1;
                i1 = "object" == typeof window, l1 = "function" == typeof importScripts, s1 = "object" == typeof process && "object" == typeof process.versions && "string" == typeof process.versions.node, o1 = !i1 && !s1 && !l1;
                var d1, c1, m1, f1, p, h = "";
                s1 ? (h = l1 ? require("path").dirname(h) + "/" : __dirname + "/", d1 = function(e, t) {
                    return f1 || (f1 = require("fs")), p || (p = require("path")), e = p.normalize(e), f1.readFileSync(e, t ? null : "utf8");
                }, m1 = function(e) {
                    var t = d1(e, !0);
                    return t.buffer || (t = new Uint8Array(t)), k(t.buffer), t;
                }, process.argv.length > 1 && (a1 = process.argv[1].replace(/\\/g, "/")), _1 = process.argv.slice(2), module.exports = Module, u1 = function(e) {
                    process.exit(e);
                }, Module.inspect = function() {
                    return "[Emscripten Module object]";
                }) : o1 ? ("undefined" != typeof read && (d1 = function(e) {
                    return read(e);
                }), m1 = function(e) {
                    var t;
                    return "function" == typeof readbuffer ? new Uint8Array(readbuffer(e)) : (k("object" == typeof (t = read(e, "binary"))), t);
                }, "undefined" != typeof scriptArgs ? _1 = scriptArgs : void 0 !== arguments && (_1 = arguments), "function" == typeof quit && (u1 = function(e) {
                    quit(e);
                }), "undefined" != typeof print && ("undefined" == typeof console && (console = {}), console.log = print, console.warn = console.error = "undefined" != typeof printErr ? printErr : print)) : (i1 || l1) && (l1 ? h = self.location.href : void 0 !== t1 && t1.currentScript && (h = t1.currentScript.src), h = 0 !== h.indexOf("blob:") ? h.substr(0, h.lastIndexOf("/") + 1) : "", d1 = function(e) {
                    var t = new XMLHttpRequest;
                    return t.open("GET", e, !1), t.send(null), t.responseText;
                }, l1 && (m1 = function(e) {
                    var t = new XMLHttpRequest;
                    return t.open("GET", e, !1), t.responseType = "arraybuffer", t.send(null), new Uint8Array(t.response);
                }), c1 = function(e, t, r) {
                    var n = new XMLHttpRequest;
                    n.open("GET", e, !0), n.responseType = "arraybuffer", n.onload = function() {
                        200 == n.status || 0 == n.status && n.response ? t(n.response) : r();
                    }, n.onerror = r, n.send(null);
                });
                Module.print || console.log.bind(console);
                var g = Module.printErr || console.warn.bind(console);
                for(r2 in n1)n1.hasOwnProperty(r2) && (Module[r2] = n1[r2]);
                n1 = null, Module.arguments && (_1 = Module.arguments), Module.thisProgram && (a1 = Module.thisProgram), Module.quit && (u1 = Module.quit);
                var w = 16;
                var y, M = [];
                function b(e4, t2) {
                    if (!y) {
                        y = new WeakMap;
                        for(var r = 0; r < K.length; r++){
                            var n = K.get(r);
                            n && y.set(n, r);
                        }
                    }
                    if (y.has(e4)) return y.get(e4);
                    var s2 = function() {
                        if (M.length) return M.pop();
                        try {
                            K.grow(1);
                        } catch (e) {
                            if (!(e instanceof RangeError)) throw e;
                            throw "Unable to grow wasm table. Set ALLOW_TABLE_GROWTH.";
                        }
                        return K.length - 1;
                    }();
                    try {
                        K.set(s2, e4);
                    } catch (r3) {
                        if (!(r3 instanceof TypeError)) throw r3;
                        var o2 = function(e, t) {
                            if ("function" == typeof WebAssembly.Function) {
                                for(var r = {
                                    i: "i32",
                                    j: "i64",
                                    f: "f32",
                                    d: "f64"
                                }, n = {
                                    parameters: [],
                                    results: "v" == t[0] ? [] : [
                                        r[t[0]]
                                    ]
                                }, s = 1; s < t.length; ++s)n.parameters.push(r[t[s]]);
                                return new WebAssembly.Function(n, e);
                            }
                            var o = [
                                1,
                                0,
                                1,
                                96
                            ], _ = t.slice(0, 1), a = t.slice(1), u = {
                                i: 127,
                                j: 126,
                                f: 125,
                                d: 124
                            };
                            for(o.push(a.length), s = 0; s < a.length; ++s)o.push(u[a[s]]);
                            "v" == _ ? o.push(0) : o = o.concat([
                                1,
                                u[_]
                            ]), o[1] = o.length - 2;
                            var i = new Uint8Array([
                                0,
                                97,
                                115,
                                109,
                                1,
                                0,
                                0,
                                0
                            ].concat(o, [
                                2,
                                7,
                                1,
                                1,
                                101,
                                1,
                                102,
                                0,
                                0,
                                7,
                                5,
                                1,
                                1,
                                102,
                                0,
                                0
                            ])), l = new WebAssembly.Module(i);
                            return new WebAssembly.Instance(l, {
                                e: {
                                    f: e
                                }
                            }).exports.f;
                        }(e4, t2);
                        K.set(s2, o2);
                    }
                    return y.set(e4, s2), s2;
                }
                var v, E = function(e) {}, I = Module.dynamicLibraries || [];
                Module.wasmBinary && (v = Module.wasmBinary);
                var A, S = Module.noExitRuntime || !0;
                function x(e, t, r, n) {
                    switch("*" === (r = r || "i8").charAt(r.length - 1) && (r = "i32"), r){
                        case "i1":
                        case "i8":
                            R[e >> 0] = t;
                            break;
                        case "i16":
                            L[e >> 1] = t;
                            break;
                        case "i32":
                            W[e >> 2] = t;
                            break;
                        case "i64":
                            ue = [
                                t >>> 0,
                                (ae = t, +Math.abs(ae) >= 1 ? ae > 0 ? (0 | Math.min(+Math.floor(ae / 4294967296), 4294967295)) >>> 0 : ~~+Math.ceil((ae - +(~~ae >>> 0)) / 4294967296) >>> 0 : 0)
                            ], W[e >> 2] = ue[0], W[e + 4 >> 2] = ue[1];
                            break;
                        case "float":
                            O[e >> 2] = t;
                            break;
                        case "double":
                            Z[e >> 3] = t;
                            break;
                        default:
                            oe("invalid type for setValue: " + r);
                    }
                }
                function N(e, t, r) {
                    switch("*" === (t = t || "i8").charAt(t.length - 1) && (t = "i32"), t){
                        case "i1":
                        case "i8":
                            return R[e >> 0];
                        case "i16":
                            return L[e >> 1];
                        case "i32":
                        case "i64":
                            return W[e >> 2];
                        case "float":
                            return O[e >> 2];
                        case "double":
                            return Z[e >> 3];
                        default:
                            oe("invalid type for getValue: " + t);
                    }
                    return null;
                }
                "object" != typeof WebAssembly && oe("no native wasm support detected");
                var P = !1;
                function k(e, t) {
                    e || oe("Assertion failed: " + t);
                }
                var C = 1;
                var q, R, T, L, W, O, Z, F = "undefined" != typeof TextDecoder ? new TextDecoder("utf8") : void 0;
                function $(e, t, r) {
                    for(var n = t + r, s = t; e[s] && !(s >= n);)++s;
                    if (s - t > 16 && e.subarray && F) return F.decode(e.subarray(t, s));
                    for(var o = ""; t < s;){
                        var _ = e[t++];
                        if (128 & _) {
                            var a = 63 & e[t++];
                            if (192 != (224 & _)) {
                                var u = 63 & e[t++];
                                if ((_ = 224 == (240 & _) ? (15 & _) << 12 | a << 6 | u : (7 & _) << 18 | a << 12 | u << 6 | 63 & e[t++]) < 65536) o += String.fromCharCode(_);
                                else {
                                    var i = _ - 65536;
                                    o += String.fromCharCode(55296 | i >> 10, 56320 | 1023 & i);
                                }
                            } else o += String.fromCharCode((31 & _) << 6 | a);
                        } else o += String.fromCharCode(_);
                    }
                    return o;
                }
                function j(e, t) {
                    return e ? $(T, e, t) : "";
                }
                function U(e, t, r, n) {
                    if (!(n > 0)) return 0;
                    for(var s = r, o = r + n - 1, _ = 0; _ < e.length; ++_){
                        var a = e.charCodeAt(_);
                        if (a >= 55296 && a <= 57343) a = 65536 + ((1023 & a) << 10) | 1023 & e.charCodeAt(++_);
                        if (a <= 127) {
                            if (r >= o) break;
                            t[r++] = a;
                        } else if (a <= 2047) {
                            if (r + 1 >= o) break;
                            t[r++] = 192 | a >> 6, t[r++] = 128 | 63 & a;
                        } else if (a <= 65535) {
                            if (r + 2 >= o) break;
                            t[r++] = 224 | a >> 12, t[r++] = 128 | a >> 6 & 63, t[r++] = 128 | 63 & a;
                        } else {
                            if (r + 3 >= o) break;
                            t[r++] = 240 | a >> 18, t[r++] = 128 | a >> 12 & 63, t[r++] = 128 | a >> 6 & 63, t[r++] = 128 | 63 & a;
                        }
                    }
                    return t[r] = 0, r - s;
                }
                function D(e, t, r) {
                    return U(e, T, t, r);
                }
                function z(e) {
                    for(var t = 0, r = 0; r < e.length; ++r){
                        var n = e.charCodeAt(r);
                        n >= 55296 && n <= 57343 && (n = 65536 + ((1023 & n) << 10) | 1023 & e.charCodeAt(++r)), n <= 127 ? ++t : t += n <= 2047 ? 2 : n <= 65535 ? 3 : 4;
                    }
                    return t;
                }
                function G(e) {
                    var t = z(e) + 1, r = ze(t);
                    return U(e, R, r, t), r;
                }
                function H(e) {
                    q = e, Module.HEAP8 = R = new Int8Array(e), Module.HEAP16 = L = new Int16Array(e), Module.HEAP32 = W = new Int32Array(e), Module.HEAPU8 = T = new Uint8Array(e), Module.HEAPU16 = new Uint16Array(e), Module.HEAPU32 = new Uint32Array(e), Module.HEAPF32 = O = new Float32Array(e), Module.HEAPF64 = Z = new Float64Array(e);
                }
                var B = Module.INITIAL_MEMORY || 33554432;
                (A = Module.wasmMemory ? Module.wasmMemory : new WebAssembly.Memory({
                    initial: B / 65536,
                    maximum: 32768
                })) && (q = A.buffer), B = q.byteLength, H(q);
                var K = new WebAssembly.Table({
                    initial: 17,
                    element: "anyfunc"
                }), V = [], X = [], Q = [], J = [], Y = !1;
                var ee = 0, te = null, re = null;
                function ne(e) {
                    ee++, Module.monitorRunDependencies && Module.monitorRunDependencies(ee);
                }
                function se(e) {
                    if (ee--, Module.monitorRunDependencies && Module.monitorRunDependencies(ee), 0 == ee && (null !== te && (clearInterval(te), te = null), re)) {
                        var t = re;
                        re = null, t();
                    }
                }
                function oe(e) {
                    throw Module.onAbort && Module.onAbort(e), g(e += ""), P = !0, e = "abort(" + e + "). Build with -s ASSERTIONS=1 for more info.", new WebAssembly.RuntimeError(e);
                }
                Module.preloadedImages = {}, Module.preloadedAudios = {}, Module.preloadedWasm = {};
                var _e, ae, ue, ie = "data:application/octet-stream;base64,";
                function le(e) {
                    return e.startsWith(ie);
                }
                function de(e) {
                    return e.startsWith("file://");
                }
                function ce(e) {
                    try {
                        if (e == _e && v) return new Uint8Array(v);
                        if (m1) return m1(e);
                        throw "both async and sync fetching of the wasm failed";
                    } catch (e5) {
                        oe(e5);
                    }
                }
                le(_e = "tree-sitter.wasm") || (_e = function(e) {
                    return Module.locateFile ? Module.locateFile(e, h) : h + e;
                }(_e));
                var me = {}, fe = {
                    get: function(e, t) {
                        return me[t] || (me[t] = new WebAssembly.Global({
                            value: "i32",
                            mutable: !0
                        })), me[t];
                    }
                };
                function pe(e) {
                    for(; e.length > 0;){
                        var t = e.shift();
                        if ("function" != typeof t) {
                            var r = t.func;
                            "number" == typeof r ? void 0 === t.arg ? K.get(r)() : K.get(r)(t.arg) : r(void 0 === t.arg ? null : t.arg);
                        } else t(Module);
                    }
                }
                function he(e) {
                    var t = 0;
                    function r4() {
                        for(var r = 0, n = 1;;){
                            var s = e[t++];
                            if (r += (127 & s) * n, n *= 128, !(128 & s)) break;
                        }
                        return r;
                    }
                    if (e instanceof WebAssembly.Module) {
                        var n2 = WebAssembly.Module.customSections(e, "dylink");
                        k(0 != n2.length, "need dylink section"), e = new Int8Array(n2[0]);
                    } else k(1836278016 == new Uint32Array(new Uint8Array(e.subarray(0, 24)).buffer)[0], "need to see wasm magic number"), k(0 === e[8], "need the dylink section to be first"), t = 9, r4(), k(6 === e[t]), k(e[++t] === "d".charCodeAt(0)), k(e[++t] === "y".charCodeAt(0)), k(e[++t] === "l".charCodeAt(0)), k(e[++t] === "i".charCodeAt(0)), k(e[++t] === "n".charCodeAt(0)), k(e[++t] === "k".charCodeAt(0)), t++;
                    var s3 = {};
                    s3.memorySize = r4(), s3.memoryAlign = r4(), s3.tableSize = r4(), s3.tableAlign = r4();
                    var o = r4();
                    s3.neededDynlibs = [];
                    for(var _ = 0; _ < o; ++_){
                        var a = r4(), u = e.subarray(t, t + a);
                        t += a;
                        var i = $(u, 0);
                        s3.neededDynlibs.push(i);
                    }
                    return s3;
                }
                var ge = 0;
                function we() {
                    return S || ge > 0;
                }
                function ye(e) {
                    return 0 == e.indexOf("dynCall_") || [
                        "stackAlloc",
                        "stackSave",
                        "stackRestore"
                    ].includes(e) ? e : "_" + e;
                }
                function Me(e, t) {
                    for(var r in e)if (e.hasOwnProperty(r)) {
                        Fe.hasOwnProperty(r) || (Fe[r] = e[r]);
                        var n = ye(r);
                        Module.hasOwnProperty(n) || (Module[n] = e[r]);
                    }
                }
                var be = {
                    nextHandle: 1,
                    loadedLibs: {},
                    loadedLibNames: {}
                };
                function ve(e6, t3, r5) {
                    return e6.includes("j") ? function(e, t, r) {
                        var n = Module["dynCall_" + e];
                        return r && r.length ? n.apply(null, [
                            t
                        ].concat(r)) : n.call(null, t);
                    }(e6, t3, r5) : K.get(t3).apply(null, r5);
                }
                var Ee = 5250880;
                function Ie(e) {
                    return [
                        "__cpp_exception",
                        "__wasm_apply_data_relocs",
                        "__dso_handle",
                        "__set_stack_limits"
                    ].includes(e);
                }
                function Ae(e7, t4) {
                    var r6 = {};
                    for(var n3 in e7){
                        var s = e7[n3];
                        "object" == typeof s && (s = s.value), "number" == typeof s && (s += t4), r6[n3] = s;
                    }
                    return function(e) {
                        for(var t in e)if (!Ie(t)) {
                            var r = !1, n = e[t];
                            t.startsWith("orig$") && (t = t.split("$")[1], r = !0), me[t] || (me[t] = new WebAssembly.Global({
                                value: "i32",
                                mutable: !0
                            })), (r || 0 == me[t].value) && ("function" == typeof n ? me[t].value = b(n) : "number" == typeof n ? me[t].value = n : g("unhandled export type for `" + t + "`: " + typeof n));
                        }
                    }(r6), r6;
                }
                function Se(e8, t5) {
                    var r, n;
                    return t5 && (r = Fe["orig$" + e8]), r || (r = Fe[e8]), r || (r = Module[ye(e8)]), !r && e8.startsWith("invoke_") && (n = e8.split("_")[1], r = function() {
                        var e = Ue();
                        try {
                            return ve(n, arguments[0], Array.prototype.slice.call(arguments, 1));
                        } catch (t) {
                            if (De(e), t !== t + 0 && "longjmp" !== t) throw t;
                            Ge(1, 0);
                        }
                    }), r;
                }
                function xe(e9, t6) {
                    var r7 = he(e9);
                    function n4() {
                        var n5 = Math.pow(2, r7.memoryAlign);
                        n5 = Math.max(n5, w);
                        var s4, o4, _, a = (s4 = function(e) {
                            if (Y) return $e(e);
                            var t = Ee, r = t + e + 15 & -16;
                            return Ee = r, me.__heap_base.value = r, t;
                        }(r7.memorySize + n5), (o4 = n5) || (o4 = w), Math.ceil(s4 / o4) * o4), u = K.length;
                        K.grow(r7.tableSize);
                        for(var i = a; i < a + r7.memorySize; i++)R[i] = 0;
                        for(i = u; i < u + r7.tableSize; i++)K.set(i, null);
                        var l = new Proxy({}, {
                            get: function(e10, t7) {
                                switch(t7){
                                    case "__memory_base":
                                        return a;
                                    case "__table_base":
                                        return u;
                                }
                                if (t7 in Fe) return Fe[t7];
                                var r;
                                t7 in e10 || (e10[t7] = function() {
                                    return r || (r = function(e) {
                                        var t = Se(e, !1);
                                        return t || (t = _[e]), t;
                                    }(t7)), r.apply(null, arguments);
                                });
                                return e10[t7];
                            }
                        }), d = {
                            "GOT.mem": new Proxy({}, fe),
                            "GOT.func": new Proxy({}, fe),
                            env: l,
                            wasi_snapshot_preview1: l
                        };
                        function c(e) {
                            for(var n = 0; n < r7.tableSize; n++){
                                var s = K.get(u + n);
                                s && y.set(s, u + n);
                            }
                            _ = Ae(e.exports, a), t6.allowUndefined || Pe();
                            var o = _.__wasm_call_ctors;
                            return o || (o = _.__post_instantiate), o && (Y ? o() : X.push(o)), _;
                        }
                        if (t6.loadAsync) {
                            if (e9 instanceof WebAssembly.Module) {
                                var m = new WebAssembly.Instance(e9, d);
                                return Promise.resolve(c(m));
                            }
                            return WebAssembly.instantiate(e9, d).then(function(e) {
                                return c(e.instance);
                            });
                        }
                        var f = e9 instanceof WebAssembly.Module ? e9 : new WebAssembly.Module(e9);
                        return c(m = new WebAssembly.Instance(f, d));
                    }
                    return t6.loadAsync ? r7.neededDynlibs.reduce(function(e, r) {
                        return e.then(function() {
                            return Ne(r, t6);
                        });
                    }, Promise.resolve()).then(function() {
                        return n4();
                    }) : (r7.neededDynlibs.forEach(function(e) {
                        Ne(e, t6);
                    }), n4());
                }
                function Ne(e11, t) {
                    "__main__" != e11 || be.loadedLibNames[e11] || (be.loadedLibs[-1] = {
                        refcount: 1 / 0,
                        name: "__main__",
                        module: Module.asm,
                        global: !0
                    }, be.loadedLibNames.__main__ = -1), t = t || {
                        global: !0,
                        nodelete: !0
                    };
                    var r8, n6 = be.loadedLibNames[e11];
                    if (n6) return r8 = be.loadedLibs[n6], t.global && !r8.global && (r8.global = !0, "loading" !== r8.module && Me(r8.module)), t.nodelete && r8.refcount !== 1 / 0 && (r8.refcount = 1 / 0), r8.refcount++, t.loadAsync ? Promise.resolve(n6) : n6;
                    function s(e12) {
                        if (t.fs) {
                            var r = t.fs.readFile(e12, {
                                encoding: "binary"
                            });
                            return r instanceof Uint8Array || (r = new Uint8Array(r)), t.loadAsync ? Promise.resolve(r) : r;
                        }
                        var n;
                        return t.loadAsync ? (n = e12, fetch(n, {
                            credentials: "same-origin"
                        }).then(function(e) {
                            if (!e.ok) throw "failed to load binary file at '" + n + "'";
                            return e.arrayBuffer();
                        }).then(function(e) {
                            return new Uint8Array(e);
                        })) : m1(e12);
                    }
                    function o() {
                        if (void 0 !== Module.preloadedWasm && void 0 !== Module.preloadedWasm[e11]) {
                            var r = Module.preloadedWasm[e11];
                            return t.loadAsync ? Promise.resolve(r) : r;
                        }
                        return t.loadAsync ? s(e11).then(function(e) {
                            return xe(e, t);
                        }) : xe(s(e11), t);
                    }
                    function _(e) {
                        r8.global && Me(e), r8.module = e;
                    }
                    return n6 = be.nextHandle++, r8 = {
                        refcount: t.nodelete ? 1 / 0 : 1,
                        name: e11,
                        module: "loading",
                        global: t.global
                    }, be.loadedLibNames[e11] = n6, be.loadedLibs[n6] = r8, t.loadAsync ? o().then(function(e) {
                        return _(e), n6;
                    }) : (_(o()), n6);
                }
                function Pe() {
                    for(var e in me)if (0 == me[e].value) {
                        var t = Se(e, !0);
                        "function" == typeof t ? me[e].value = b(t, t.sig) : "number" == typeof t ? me[e].value = t : k(!1, "bad export type for `" + e + "`: " + typeof t);
                    }
                }
                Module.___heap_base = Ee;
                var ke, Ce = new WebAssembly.Global({
                    value: "i32",
                    mutable: !0
                }, 5250880);
                function qe() {
                    oe();
                }
                Module._abort = qe, qe.sig = "v", ke = s1 ? function() {
                    var e = process.hrtime();
                    return 1e3 * e[0] + e[1] / 1e6;
                } : "undefined" != typeof dateNow ? dateNow : function() {
                    return performance.now();
                };
                var Re = !0;
                function Te(e, t) {
                    var r, n;
                    if (0 === e) r = Date.now();
                    else {
                        if (1 !== e && 4 !== e || !Re) return n = 28, W[je() >> 2] = n, -1;
                        r = ke();
                    }
                    return W[t >> 2] = r / 1e3 | 0, W[t + 4 >> 2] = r % 1e3 * 1000000 | 0, 0;
                }
                function Le(e) {
                    try {
                        return A.grow(e - q.byteLength + 65535 >>> 16), H(A.buffer), 1;
                    } catch (e13) {}
                }
                function We(e) {
                    Ve(e);
                }
                function Oe(e) {
                    E(e);
                }
                Te.sig = "iii", We.sig = "vi", Oe.sig = "vi";
                var Ze, Fe = {
                    __heap_base: Ee,
                    __indirect_function_table: K,
                    __memory_base: 1024,
                    __stack_pointer: Ce,
                    __table_base: 1,
                    abort: qe,
                    clock_gettime: Te,
                    emscripten_memcpy_big: function(e, t, r) {
                        T.copyWithin(e, t, t + r);
                    },
                    emscripten_resize_heap: function(e) {
                        var t, r, n = T.length;
                        if ((e >>>= 0) > 2147483648) return !1;
                        for(var s = 1; s <= 4; s *= 2){
                            var o = n * (1 + .2 / s);
                            if (o = Math.min(o, e + 100663296), Le(Math.min(2147483648, ((t = Math.max(e, o)) % (r = 65536) > 0 && (t += r - t % r), t)))) return !0;
                        }
                        return !1;
                    },
                    exit: We,
                    memory: A,
                    setTempRet0: Oe,
                    tree_sitter_log_callback: function(e, t) {
                        if (ct) {
                            const r = j(t);
                            ct(r, 0 !== e);
                        }
                    },
                    tree_sitter_parse_callback: function(e14, t8, r9, n7, s5) {
                        var o5 = dt(t8, {
                            row: r9,
                            column: n7
                        });
                        "string" == typeof o5 ? (x(s5, o5.length, "i32"), function(e, t, r) {
                            if (void 0 === r && (r = 2147483647), r < 2) return 0;
                            for(var n = (r -= 2) < 2 * e.length ? r / 2 : e.length, s = 0; s < n; ++s){
                                var o = e.charCodeAt(s);
                                L[t >> 1] = o, t += 2;
                            }
                            L[t >> 1] = 0;
                        }(o5, e14, 10240)) : x(s5, 0, "i32");
                    }
                }, $e = (function() {
                    var e15 = {
                        env: Fe,
                        wasi_snapshot_preview1: Fe,
                        "GOT.mem": new Proxy(Fe, fe),
                        "GOT.func": new Proxy(Fe, fe)
                    };
                    function t9(e, t) {
                        var r = e.exports;
                        r = Ae(r, 1024), Module.asm = r;
                        var n, s = he(t);
                        s.neededDynlibs && (I = s.neededDynlibs.concat(I)), Me(r), n = Module.asm.__wasm_call_ctors, X.unshift(n), se();
                    }
                    function r10(e) {
                        t9(e.instance, e.module);
                    }
                    function n8(t10) {
                        return (function() {
                            if (!v && (i1 || l1)) {
                                if ("function" == typeof fetch && !de(_e)) return fetch(_e, {
                                    credentials: "same-origin"
                                }).then(function(e) {
                                    if (!e.ok) throw "failed to load wasm binary file at '" + _e + "'";
                                    return e.arrayBuffer();
                                }).catch(function() {
                                    return ce(_e);
                                });
                                if (c1) return new Promise(function(e, t11) {
                                    c1(_e, function(t) {
                                        e(new Uint8Array(t));
                                    }, t11);
                                });
                            }
                            return Promise.resolve().then(function() {
                                return ce(_e);
                            });
                        })().then(function(t) {
                            return WebAssembly.instantiate(t, e15);
                        }).then(t10, function(e) {
                            g("failed to asynchronously prepare wasm: " + e), oe(e);
                        });
                    }
                    if (ne(), Module.instantiateWasm) try {
                        return Module.instantiateWasm(e15, t9);
                    } catch (e16) {
                        return g("Module.instantiateWasm callback failed with error: " + e16), !1;
                    }
                    v || "function" != typeof WebAssembly.instantiateStreaming || le(_e) || de(_e) || "function" != typeof fetch ? n8(r10) : fetch(_e, {
                        credentials: "same-origin"
                    }).then(function(t) {
                        return WebAssembly.instantiateStreaming(t, e15).then(r10, function(e) {
                            return g("wasm streaming compile failed: " + e), g("falling back to ArrayBuffer instantiation"), n8(r10);
                        });
                    });
                }(), Module.___wasm_call_ctors = function() {
                    return (Module.___wasm_call_ctors = Module.asm.__wasm_call_ctors).apply(null, arguments);
                }, Module._malloc = function() {
                    return ($e = Module._malloc = Module.asm.malloc).apply(null, arguments);
                }), je = (Module._calloc = function() {
                    return (Module._calloc = Module.asm.calloc).apply(null, arguments);
                }, Module._realloc = function() {
                    return (Module._realloc = Module.asm.realloc).apply(null, arguments);
                }, Module._free = function() {
                    return (Module._free = Module.asm.free).apply(null, arguments);
                }, Module._ts_language_symbol_count = function() {
                    return (Module._ts_language_symbol_count = Module.asm.ts_language_symbol_count).apply(null, arguments);
                }, Module._ts_language_version = function() {
                    return (Module._ts_language_version = Module.asm.ts_language_version).apply(null, arguments);
                }, Module._ts_language_field_count = function() {
                    return (Module._ts_language_field_count = Module.asm.ts_language_field_count).apply(null, arguments);
                }, Module._ts_language_symbol_name = function() {
                    return (Module._ts_language_symbol_name = Module.asm.ts_language_symbol_name).apply(null, arguments);
                }, Module._ts_language_symbol_for_name = function() {
                    return (Module._ts_language_symbol_for_name = Module.asm.ts_language_symbol_for_name).apply(null, arguments);
                }, Module._ts_language_symbol_type = function() {
                    return (Module._ts_language_symbol_type = Module.asm.ts_language_symbol_type).apply(null, arguments);
                }, Module._ts_language_field_name_for_id = function() {
                    return (Module._ts_language_field_name_for_id = Module.asm.ts_language_field_name_for_id).apply(null, arguments);
                }, Module._memcpy = function() {
                    return (Module._memcpy = Module.asm.memcpy).apply(null, arguments);
                }, Module._ts_parser_delete = function() {
                    return (Module._ts_parser_delete = Module.asm.ts_parser_delete).apply(null, arguments);
                }, Module._ts_parser_reset = function() {
                    return (Module._ts_parser_reset = Module.asm.ts_parser_reset).apply(null, arguments);
                }, Module._ts_parser_set_language = function() {
                    return (Module._ts_parser_set_language = Module.asm.ts_parser_set_language).apply(null, arguments);
                }, Module._ts_parser_timeout_micros = function() {
                    return (Module._ts_parser_timeout_micros = Module.asm.ts_parser_timeout_micros).apply(null, arguments);
                }, Module._ts_parser_set_timeout_micros = function() {
                    return (Module._ts_parser_set_timeout_micros = Module.asm.ts_parser_set_timeout_micros).apply(null, arguments);
                }, Module._memmove = function() {
                    return (Module._memmove = Module.asm.memmove).apply(null, arguments);
                }, Module._memcmp = function() {
                    return (Module._memcmp = Module.asm.memcmp).apply(null, arguments);
                }, Module._ts_query_new = function() {
                    return (Module._ts_query_new = Module.asm.ts_query_new).apply(null, arguments);
                }, Module._ts_query_delete = function() {
                    return (Module._ts_query_delete = Module.asm.ts_query_delete).apply(null, arguments);
                }, Module._iswspace = function() {
                    return (Module._iswspace = Module.asm.iswspace).apply(null, arguments);
                }, Module._iswalnum = function() {
                    return (Module._iswalnum = Module.asm.iswalnum).apply(null, arguments);
                }, Module._ts_query_pattern_count = function() {
                    return (Module._ts_query_pattern_count = Module.asm.ts_query_pattern_count).apply(null, arguments);
                }, Module._ts_query_capture_count = function() {
                    return (Module._ts_query_capture_count = Module.asm.ts_query_capture_count).apply(null, arguments);
                }, Module._ts_query_string_count = function() {
                    return (Module._ts_query_string_count = Module.asm.ts_query_string_count).apply(null, arguments);
                }, Module._ts_query_capture_name_for_id = function() {
                    return (Module._ts_query_capture_name_for_id = Module.asm.ts_query_capture_name_for_id).apply(null, arguments);
                }, Module._ts_query_string_value_for_id = function() {
                    return (Module._ts_query_string_value_for_id = Module.asm.ts_query_string_value_for_id).apply(null, arguments);
                }, Module._ts_query_predicates_for_pattern = function() {
                    return (Module._ts_query_predicates_for_pattern = Module.asm.ts_query_predicates_for_pattern).apply(null, arguments);
                }, Module._ts_tree_copy = function() {
                    return (Module._ts_tree_copy = Module.asm.ts_tree_copy).apply(null, arguments);
                }, Module._ts_tree_delete = function() {
                    return (Module._ts_tree_delete = Module.asm.ts_tree_delete).apply(null, arguments);
                }, Module._ts_init = function() {
                    return (Module._ts_init = Module.asm.ts_init).apply(null, arguments);
                }, Module._ts_parser_new_wasm = function() {
                    return (Module._ts_parser_new_wasm = Module.asm.ts_parser_new_wasm).apply(null, arguments);
                }, Module._ts_parser_enable_logger_wasm = function() {
                    return (Module._ts_parser_enable_logger_wasm = Module.asm.ts_parser_enable_logger_wasm).apply(null, arguments);
                }, Module._ts_parser_parse_wasm = function() {
                    return (Module._ts_parser_parse_wasm = Module.asm.ts_parser_parse_wasm).apply(null, arguments);
                }, Module._ts_language_type_is_named_wasm = function() {
                    return (Module._ts_language_type_is_named_wasm = Module.asm.ts_language_type_is_named_wasm).apply(null, arguments);
                }, Module._ts_language_type_is_visible_wasm = function() {
                    return (Module._ts_language_type_is_visible_wasm = Module.asm.ts_language_type_is_visible_wasm).apply(null, arguments);
                }, Module._ts_tree_root_node_wasm = function() {
                    return (Module._ts_tree_root_node_wasm = Module.asm.ts_tree_root_node_wasm).apply(null, arguments);
                }, Module._ts_tree_edit_wasm = function() {
                    return (Module._ts_tree_edit_wasm = Module.asm.ts_tree_edit_wasm).apply(null, arguments);
                }, Module._ts_tree_get_changed_ranges_wasm = function() {
                    return (Module._ts_tree_get_changed_ranges_wasm = Module.asm.ts_tree_get_changed_ranges_wasm).apply(null, arguments);
                }, Module._ts_tree_cursor_new_wasm = function() {
                    return (Module._ts_tree_cursor_new_wasm = Module.asm.ts_tree_cursor_new_wasm).apply(null, arguments);
                }, Module._ts_tree_cursor_delete_wasm = function() {
                    return (Module._ts_tree_cursor_delete_wasm = Module.asm.ts_tree_cursor_delete_wasm).apply(null, arguments);
                }, Module._ts_tree_cursor_reset_wasm = function() {
                    return (Module._ts_tree_cursor_reset_wasm = Module.asm.ts_tree_cursor_reset_wasm).apply(null, arguments);
                }, Module._ts_tree_cursor_goto_first_child_wasm = function() {
                    return (Module._ts_tree_cursor_goto_first_child_wasm = Module.asm.ts_tree_cursor_goto_first_child_wasm).apply(null, arguments);
                }, Module._ts_tree_cursor_goto_next_sibling_wasm = function() {
                    return (Module._ts_tree_cursor_goto_next_sibling_wasm = Module.asm.ts_tree_cursor_goto_next_sibling_wasm).apply(null, arguments);
                }, Module._ts_tree_cursor_goto_parent_wasm = function() {
                    return (Module._ts_tree_cursor_goto_parent_wasm = Module.asm.ts_tree_cursor_goto_parent_wasm).apply(null, arguments);
                }, Module._ts_tree_cursor_current_node_type_id_wasm = function() {
                    return (Module._ts_tree_cursor_current_node_type_id_wasm = Module.asm.ts_tree_cursor_current_node_type_id_wasm).apply(null, arguments);
                }, Module._ts_tree_cursor_current_node_is_named_wasm = function() {
                    return (Module._ts_tree_cursor_current_node_is_named_wasm = Module.asm.ts_tree_cursor_current_node_is_named_wasm).apply(null, arguments);
                }, Module._ts_tree_cursor_current_node_is_missing_wasm = function() {
                    return (Module._ts_tree_cursor_current_node_is_missing_wasm = Module.asm.ts_tree_cursor_current_node_is_missing_wasm).apply(null, arguments);
                }, Module._ts_tree_cursor_current_node_id_wasm = function() {
                    return (Module._ts_tree_cursor_current_node_id_wasm = Module.asm.ts_tree_cursor_current_node_id_wasm).apply(null, arguments);
                }, Module._ts_tree_cursor_start_position_wasm = function() {
                    return (Module._ts_tree_cursor_start_position_wasm = Module.asm.ts_tree_cursor_start_position_wasm).apply(null, arguments);
                }, Module._ts_tree_cursor_end_position_wasm = function() {
                    return (Module._ts_tree_cursor_end_position_wasm = Module.asm.ts_tree_cursor_end_position_wasm).apply(null, arguments);
                }, Module._ts_tree_cursor_start_index_wasm = function() {
                    return (Module._ts_tree_cursor_start_index_wasm = Module.asm.ts_tree_cursor_start_index_wasm).apply(null, arguments);
                }, Module._ts_tree_cursor_end_index_wasm = function() {
                    return (Module._ts_tree_cursor_end_index_wasm = Module.asm.ts_tree_cursor_end_index_wasm).apply(null, arguments);
                }, Module._ts_tree_cursor_current_field_id_wasm = function() {
                    return (Module._ts_tree_cursor_current_field_id_wasm = Module.asm.ts_tree_cursor_current_field_id_wasm).apply(null, arguments);
                }, Module._ts_tree_cursor_current_node_wasm = function() {
                    return (Module._ts_tree_cursor_current_node_wasm = Module.asm.ts_tree_cursor_current_node_wasm).apply(null, arguments);
                }, Module._ts_node_symbol_wasm = function() {
                    return (Module._ts_node_symbol_wasm = Module.asm.ts_node_symbol_wasm).apply(null, arguments);
                }, Module._ts_node_child_count_wasm = function() {
                    return (Module._ts_node_child_count_wasm = Module.asm.ts_node_child_count_wasm).apply(null, arguments);
                }, Module._ts_node_named_child_count_wasm = function() {
                    return (Module._ts_node_named_child_count_wasm = Module.asm.ts_node_named_child_count_wasm).apply(null, arguments);
                }, Module._ts_node_child_wasm = function() {
                    return (Module._ts_node_child_wasm = Module.asm.ts_node_child_wasm).apply(null, arguments);
                }, Module._ts_node_named_child_wasm = function() {
                    return (Module._ts_node_named_child_wasm = Module.asm.ts_node_named_child_wasm).apply(null, arguments);
                }, Module._ts_node_child_by_field_id_wasm = function() {
                    return (Module._ts_node_child_by_field_id_wasm = Module.asm.ts_node_child_by_field_id_wasm).apply(null, arguments);
                }, Module._ts_node_next_sibling_wasm = function() {
                    return (Module._ts_node_next_sibling_wasm = Module.asm.ts_node_next_sibling_wasm).apply(null, arguments);
                }, Module._ts_node_prev_sibling_wasm = function() {
                    return (Module._ts_node_prev_sibling_wasm = Module.asm.ts_node_prev_sibling_wasm).apply(null, arguments);
                }, Module._ts_node_next_named_sibling_wasm = function() {
                    return (Module._ts_node_next_named_sibling_wasm = Module.asm.ts_node_next_named_sibling_wasm).apply(null, arguments);
                }, Module._ts_node_prev_named_sibling_wasm = function() {
                    return (Module._ts_node_prev_named_sibling_wasm = Module.asm.ts_node_prev_named_sibling_wasm).apply(null, arguments);
                }, Module._ts_node_parent_wasm = function() {
                    return (Module._ts_node_parent_wasm = Module.asm.ts_node_parent_wasm).apply(null, arguments);
                }, Module._ts_node_descendant_for_index_wasm = function() {
                    return (Module._ts_node_descendant_for_index_wasm = Module.asm.ts_node_descendant_for_index_wasm).apply(null, arguments);
                }, Module._ts_node_named_descendant_for_index_wasm = function() {
                    return (Module._ts_node_named_descendant_for_index_wasm = Module.asm.ts_node_named_descendant_for_index_wasm).apply(null, arguments);
                }, Module._ts_node_descendant_for_position_wasm = function() {
                    return (Module._ts_node_descendant_for_position_wasm = Module.asm.ts_node_descendant_for_position_wasm).apply(null, arguments);
                }, Module._ts_node_named_descendant_for_position_wasm = function() {
                    return (Module._ts_node_named_descendant_for_position_wasm = Module.asm.ts_node_named_descendant_for_position_wasm).apply(null, arguments);
                }, Module._ts_node_start_point_wasm = function() {
                    return (Module._ts_node_start_point_wasm = Module.asm.ts_node_start_point_wasm).apply(null, arguments);
                }, Module._ts_node_end_point_wasm = function() {
                    return (Module._ts_node_end_point_wasm = Module.asm.ts_node_end_point_wasm).apply(null, arguments);
                }, Module._ts_node_start_index_wasm = function() {
                    return (Module._ts_node_start_index_wasm = Module.asm.ts_node_start_index_wasm).apply(null, arguments);
                }, Module._ts_node_end_index_wasm = function() {
                    return (Module._ts_node_end_index_wasm = Module.asm.ts_node_end_index_wasm).apply(null, arguments);
                }, Module._ts_node_to_string_wasm = function() {
                    return (Module._ts_node_to_string_wasm = Module.asm.ts_node_to_string_wasm).apply(null, arguments);
                }, Module._ts_node_children_wasm = function() {
                    return (Module._ts_node_children_wasm = Module.asm.ts_node_children_wasm).apply(null, arguments);
                }, Module._ts_node_named_children_wasm = function() {
                    return (Module._ts_node_named_children_wasm = Module.asm.ts_node_named_children_wasm).apply(null, arguments);
                }, Module._ts_node_descendants_of_type_wasm = function() {
                    return (Module._ts_node_descendants_of_type_wasm = Module.asm.ts_node_descendants_of_type_wasm).apply(null, arguments);
                }, Module._ts_node_is_named_wasm = function() {
                    return (Module._ts_node_is_named_wasm = Module.asm.ts_node_is_named_wasm).apply(null, arguments);
                }, Module._ts_node_has_changes_wasm = function() {
                    return (Module._ts_node_has_changes_wasm = Module.asm.ts_node_has_changes_wasm).apply(null, arguments);
                }, Module._ts_node_has_error_wasm = function() {
                    return (Module._ts_node_has_error_wasm = Module.asm.ts_node_has_error_wasm).apply(null, arguments);
                }, Module._ts_node_is_missing_wasm = function() {
                    return (Module._ts_node_is_missing_wasm = Module.asm.ts_node_is_missing_wasm).apply(null, arguments);
                }, Module._ts_query_matches_wasm = function() {
                    return (Module._ts_query_matches_wasm = Module.asm.ts_query_matches_wasm).apply(null, arguments);
                }, Module._ts_query_captures_wasm = function() {
                    return (Module._ts_query_captures_wasm = Module.asm.ts_query_captures_wasm).apply(null, arguments);
                }, Module._iswdigit = function() {
                    return (Module._iswdigit = Module.asm.iswdigit).apply(null, arguments);
                }, Module._iswalpha = function() {
                    return (Module._iswalpha = Module.asm.iswalpha).apply(null, arguments);
                }, Module._iswlower = function() {
                    return (Module._iswlower = Module.asm.iswlower).apply(null, arguments);
                }, Module._towupper = function() {
                    return (Module._towupper = Module.asm.towupper).apply(null, arguments);
                }, Module.___errno_location = function() {
                    return (je = Module.___errno_location = Module.asm.__errno_location).apply(null, arguments);
                }), Ue = (Module._memchr = function() {
                    return (Module._memchr = Module.asm.memchr).apply(null, arguments);
                }, Module._strlen = function() {
                    return (Module._strlen = Module.asm.strlen).apply(null, arguments);
                }, Module.stackSave = function() {
                    return (Ue = Module.stackSave = Module.asm.stackSave).apply(null, arguments);
                }), De = Module.stackRestore = function() {
                    return (De = Module.stackRestore = Module.asm.stackRestore).apply(null, arguments);
                }, ze = Module.stackAlloc = function() {
                    return (ze = Module.stackAlloc = Module.asm.stackAlloc).apply(null, arguments);
                }, Ge = Module._setThrew = function() {
                    return (Ge = Module._setThrew = Module.asm.setThrew).apply(null, arguments);
                };
                Module.__ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev = function() {
                    return (Module.__ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev = Module.asm._ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev).apply(null, arguments);
                }, Module.__ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE9__grow_byEmmmmmm = function() {
                    return (Module.__ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE9__grow_byEmmmmmm = Module.asm._ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE9__grow_byEmmmmmm).apply(null, arguments);
                }, Module.__ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6__initEPKcm = function() {
                    return (Module.__ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6__initEPKcm = Module.asm._ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6__initEPKcm).apply(null, arguments);
                }, Module.__ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE7reserveEm = function() {
                    return (Module.__ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE7reserveEm = Module.asm._ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE7reserveEm).apply(null, arguments);
                }, Module.__ZNKSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE4copyEPcmm = function() {
                    return (Module.__ZNKSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE4copyEPcmm = Module.asm._ZNKSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE4copyEPcmm).apply(null, arguments);
                }, Module.__ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE9push_backEc = function() {
                    return (Module.__ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE9push_backEc = Module.asm._ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE9push_backEc).apply(null, arguments);
                }, Module.__ZNSt3__212basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEED2Ev = function() {
                    return (Module.__ZNSt3__212basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEED2Ev = Module.asm._ZNSt3__212basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEED2Ev).apply(null, arguments);
                }, Module.__ZNSt3__212basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEE9push_backEw = function() {
                    return (Module.__ZNSt3__212basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEE9push_backEw = Module.asm._ZNSt3__212basic_stringIwNS_11char_traitsIwEENS_9allocatorIwEEE9push_backEw).apply(null, arguments);
                }, Module.__Znwm = function() {
                    return (Module.__Znwm = Module.asm._Znwm).apply(null, arguments);
                }, Module.__ZdlPv = function() {
                    return (Module.__ZdlPv = Module.asm._ZdlPv).apply(null, arguments);
                }, Module.__ZNKSt3__220__vector_base_commonILb1EE20__throw_length_errorEv = function() {
                    return (Module.__ZNKSt3__220__vector_base_commonILb1EE20__throw_length_errorEv = Module.asm._ZNKSt3__220__vector_base_commonILb1EE20__throw_length_errorEv).apply(null, arguments);
                }, Module._orig$ts_parser_timeout_micros = function() {
                    return (Module._orig$ts_parser_timeout_micros = Module.asm.orig$ts_parser_timeout_micros).apply(null, arguments);
                }, Module._orig$ts_parser_set_timeout_micros = function() {
                    return (Module._orig$ts_parser_set_timeout_micros = Module.asm.orig$ts_parser_set_timeout_micros).apply(null, arguments);
                };
                function He(e) {
                    this.name = "ExitStatus", this.message = "Program terminated with exit(" + e + ")", this.status = e;
                }
                Module.allocate = function(e, t) {
                    var r;
                    return r = t == C ? ze(e.length) : $e(e.length), e.subarray || e.slice ? T.set(e, r) : T.set(new Uint8Array(e), r), r;
                };
                re = function e() {
                    Ze || Ke(), Ze || (re = e);
                };
                var Be = !1;
                function Ke(e17) {
                    function t12() {
                        Ze || (Ze = !0, Module.calledRun = !0, P || (Y = !0, pe(X), pe(Q), Module.onRuntimeInitialized && Module.onRuntimeInitialized(), Xe && function(e) {
                            var t = Module._main;
                            if (t) {
                                var r = (e = e || []).length + 1, n = ze(4 * (r + 1));
                                W[n >> 2] = G(a1);
                                for(var s = 1; s < r; s++)W[(n >> 2) + s] = G(e[s - 1]);
                                W[(n >> 2) + r] = 0;
                                try {
                                    Ve(t(r, n), !0);
                                } catch (e) {
                                    if (e instanceof He) return;
                                    if ("unwind" == e) return;
                                    var o = e;
                                    e && "object" == typeof e && e.stack && (o = [
                                        e,
                                        e.stack
                                    ]), g("exception thrown: " + o), u1(1, e);
                                } finally{}
                            }
                        }(e17), function() {
                            if (Module.postRun) for("function" == typeof Module.postRun && (Module.postRun = [
                                Module.postRun
                            ]); Module.postRun.length;)e = Module.postRun.shift(), J.unshift(e);
                            var e;
                            pe(J);
                        }()));
                    }
                    e17 = e17 || _1, ee > 0 || !Be && (function() {
                        if (I.length) {
                            if (!m1) return ne(), void I.reduce(function(e, t) {
                                return e.then(function() {
                                    return Ne(t, {
                                        loadAsync: !0,
                                        global: !0,
                                        nodelete: !0,
                                        allowUndefined: !0
                                    });
                                });
                            }, Promise.resolve()).then(function() {
                                se(), Pe();
                            });
                            I.forEach(function(e) {
                                Ne(e, {
                                    global: !0,
                                    nodelete: !0,
                                    allowUndefined: !0
                                });
                            }), Pe();
                        } else Pe();
                    }(), Be = !0, ee > 0) || (!function() {
                        if (Module.preRun) for("function" == typeof Module.preRun && (Module.preRun = [
                            Module.preRun
                        ]); Module.preRun.length;)e = Module.preRun.shift(), V.unshift(e);
                        var e;
                        pe(V);
                    }(), ee > 0 || (Module.setStatus ? (Module.setStatus("Running..."), setTimeout(function() {
                        setTimeout(function() {
                            Module.setStatus("");
                        }, 1), t12();
                    }, 1)) : t12()));
                }
                function Ve(e, t) {
                    t && we() && 0 === e || (we() || (Module.onExit && Module.onExit(e), P = !0), u1(e, new He(e)));
                }
                if (Module.run = Ke, Module.preInit) for("function" == typeof Module.preInit && (Module.preInit = [
                    Module.preInit
                ]); Module.preInit.length > 0;)Module.preInit.pop()();
                var Xe = !0;
                Module.noInitialRun && (Xe = !1), Ke();
                const Qe = Module, Je = {}, Ye = 4, et = 5 * Ye, tt = 2 * Ye, rt = 2 * Ye + 2 * tt, nt = {
                    row: 0,
                    column: 0
                }, st = /[\w-.]*/g, ot = 1, _t = 2, at = /^_?tree_sitter_\w+/;
                var ut, it, lt, dt, ct;
                class ParserImpl {
                    static init() {
                        lt = Qe._ts_init(), ut = N(lt, "i32"), it = N(lt + Ye, "i32");
                    }
                    initialize() {
                        Qe._ts_parser_new_wasm(), this[0] = N(lt, "i32"), this[1] = N(lt + Ye, "i32");
                    }
                    delete() {
                        Qe._ts_parser_delete(this[0]), Qe._free(this[1]), this[0] = 0, this[1] = 0;
                    }
                    setLanguage(e) {
                        let t;
                        if (e) {
                            if (e.constructor !== Language) throw new Error("Argument must be a Language");
                            {
                                t = e[0];
                                const r = Qe._ts_language_version(t);
                                if (r < it || ut < r) throw new Error(`Incompatible language version ${r}. ` + `Compatibility range ${it} through ${ut}.`);
                            }
                        } else t = 0, e = null;
                        return this.language = e, Qe._ts_parser_set_language(this[0], t), this;
                    }
                    getLanguage() {
                        return this.language;
                    }
                    parse(e, t13, r) {
                        if ("string" == typeof e) dt = (t, r, n)=>e.slice(t, n)
                        ;
                        else {
                            if ("function" != typeof e) throw new Error("Argument must be a string or a function");
                            dt = e;
                        }
                        this.logCallback ? (ct = this.logCallback, Qe._ts_parser_enable_logger_wasm(this[0], 1)) : (ct = null, Qe._ts_parser_enable_logger_wasm(this[0], 0));
                        let n9 = 0, s = 0;
                        if (r && r.includedRanges) {
                            n9 = r.includedRanges.length;
                            let e = s = Qe._calloc(n9, rt);
                            for(let t = 0; t < n9; t++)Et(e, r.includedRanges[t]), e += rt;
                        }
                        const o = Qe._ts_parser_parse_wasm(this[0], this[1], t13 ? t13[0] : 0, s, n9);
                        if (!o) throw dt = null, ct = null, new Error("Parsing failed");
                        const _ = new Tree(Je, o, this.language, dt);
                        return dt = null, ct = null, _;
                    }
                    reset() {
                        Qe._ts_parser_reset(this[0]);
                    }
                    setTimeoutMicros(e) {
                        Qe._ts_parser_set_timeout_micros(this[0], e);
                    }
                    getTimeoutMicros() {
                        return Qe._ts_parser_timeout_micros(this[0]);
                    }
                    setLogger(e) {
                        if (e) {
                            if ("function" != typeof e) throw new Error("Logger callback must be a function");
                        } else e = null;
                        return this.logCallback = e, this;
                    }
                    getLogger() {
                        return this.logCallback;
                    }
                }
                class Tree {
                    constructor(e, t, r, n){
                        pt(e), this[0] = t, this.language = r, this.textCallback = n;
                    }
                    copy() {
                        const e = Qe._ts_tree_copy(this[0]);
                        return new Tree(Je, e, this.language, this.textCallback);
                    }
                    delete() {
                        Qe._ts_tree_delete(this[0]), this[0] = 0;
                    }
                    edit(e18) {
                        !function(e) {
                            let t = lt;
                            bt(t, e.startPosition), bt(t += tt, e.oldEndPosition), bt(t += tt, e.newEndPosition), x(t += tt, e.startIndex, "i32"), x(t += Ye, e.oldEndIndex, "i32"), x(t += Ye, e.newEndIndex, "i32"), t += Ye;
                        }(e18), Qe._ts_tree_edit_wasm(this[0]);
                    }
                    get rootNode() {
                        return Qe._ts_tree_root_node_wasm(this[0]), wt(this);
                    }
                    getLanguage() {
                        return this.language;
                    }
                    walk() {
                        return this.rootNode.walk();
                    }
                    getChangedRanges(e) {
                        if (e.constructor !== Tree) throw new TypeError("Argument must be a Tree");
                        Qe._ts_tree_get_changed_ranges_wasm(this[0], e[0]);
                        const t = N(lt, "i32"), r = N(lt + Ye, "i32"), n = new Array(t);
                        if (t > 0) {
                            let e = r;
                            for(let r11 = 0; r11 < t; r11++)n[r11] = It(e), e += rt;
                            Qe._free(r);
                        }
                        return n;
                    }
                }
                class Node {
                    constructor(e, t){
                        pt(e), this.tree = t;
                    }
                    get typeId() {
                        return gt(this), Qe._ts_node_symbol_wasm(this.tree[0]);
                    }
                    get type() {
                        return this.tree.language.types[this.typeId] || "ERROR";
                    }
                    get endPosition() {
                        return gt(this), Qe._ts_node_end_point_wasm(this.tree[0]), vt(lt);
                    }
                    get endIndex() {
                        return gt(this), Qe._ts_node_end_index_wasm(this.tree[0]);
                    }
                    get text() {
                        return mt(this.tree, this.startIndex, this.endIndex);
                    }
                    isNamed() {
                        return gt(this), 1 === Qe._ts_node_is_named_wasm(this.tree[0]);
                    }
                    hasError() {
                        return gt(this), 1 === Qe._ts_node_has_error_wasm(this.tree[0]);
                    }
                    hasChanges() {
                        return gt(this), 1 === Qe._ts_node_has_changes_wasm(this.tree[0]);
                    }
                    isMissing() {
                        return gt(this), 1 === Qe._ts_node_is_missing_wasm(this.tree[0]);
                    }
                    equals(e) {
                        return this.id === e.id;
                    }
                    child(e) {
                        return gt(this), Qe._ts_node_child_wasm(this.tree[0], e), wt(this.tree);
                    }
                    namedChild(e) {
                        return gt(this), Qe._ts_node_named_child_wasm(this.tree[0], e), wt(this.tree);
                    }
                    childForFieldId(e) {
                        return gt(this), Qe._ts_node_child_by_field_id_wasm(this.tree[0], e), wt(this.tree);
                    }
                    childForFieldName(e) {
                        const t = this.tree.language.fields.indexOf(e);
                        if (-1 !== t) return this.childForFieldId(t);
                    }
                    get childCount() {
                        return gt(this), Qe._ts_node_child_count_wasm(this.tree[0]);
                    }
                    get namedChildCount() {
                        return gt(this), Qe._ts_node_named_child_count_wasm(this.tree[0]);
                    }
                    get firstChild() {
                        return this.child(0);
                    }
                    get firstNamedChild() {
                        return this.namedChild(0);
                    }
                    get lastChild() {
                        return this.child(this.childCount - 1);
                    }
                    get lastNamedChild() {
                        return this.namedChild(this.namedChildCount - 1);
                    }
                    get children() {
                        if (!this._children) {
                            gt(this), Qe._ts_node_children_wasm(this.tree[0]);
                            const e = N(lt, "i32"), t = N(lt + Ye, "i32");
                            if (this._children = new Array(e), e > 0) {
                                let r = t;
                                for(let t14 = 0; t14 < e; t14++)this._children[t14] = wt(this.tree, r), r += et;
                                Qe._free(t);
                            }
                        }
                        return this._children;
                    }
                    get namedChildren() {
                        if (!this._namedChildren) {
                            gt(this), Qe._ts_node_named_children_wasm(this.tree[0]);
                            const e = N(lt, "i32"), t = N(lt + Ye, "i32");
                            if (this._namedChildren = new Array(e), e > 0) {
                                let r = t;
                                for(let t15 = 0; t15 < e; t15++)this._namedChildren[t15] = wt(this.tree, r), r += et;
                                Qe._free(t);
                            }
                        }
                        return this._namedChildren;
                    }
                    descendantsOfType(e, t, r) {
                        Array.isArray(e) || (e = [
                            e
                        ]), t || (t = nt), r || (r = nt);
                        const n = [], s = this.tree.language.types;
                        for(let t16 = 0, r12 = s.length; t16 < r12; t16++)e.includes(s[t16]) && n.push(t16);
                        const o = Qe._malloc(Ye * n.length);
                        for(let e19 = 0, t17 = n.length; e19 < t17; e19++)x(o + e19 * Ye, n[e19], "i32");
                        gt(this), Qe._ts_node_descendants_of_type_wasm(this.tree[0], o, n.length, t.row, t.column, r.row, r.column);
                        const _ = N(lt, "i32"), a = N(lt + Ye, "i32"), u = new Array(_);
                        if (_ > 0) {
                            let e = a;
                            for(let t = 0; t < _; t++)u[t] = wt(this.tree, e), e += et;
                        }
                        return Qe._free(a), Qe._free(o), u;
                    }
                    get nextSibling() {
                        return gt(this), Qe._ts_node_next_sibling_wasm(this.tree[0]), wt(this.tree);
                    }
                    get previousSibling() {
                        return gt(this), Qe._ts_node_prev_sibling_wasm(this.tree[0]), wt(this.tree);
                    }
                    get nextNamedSibling() {
                        return gt(this), Qe._ts_node_next_named_sibling_wasm(this.tree[0]), wt(this.tree);
                    }
                    get previousNamedSibling() {
                        return gt(this), Qe._ts_node_prev_named_sibling_wasm(this.tree[0]), wt(this.tree);
                    }
                    get parent() {
                        return gt(this), Qe._ts_node_parent_wasm(this.tree[0]), wt(this.tree);
                    }
                    descendantForIndex(e, t = e) {
                        if ("number" != typeof e || "number" != typeof t) throw new Error("Arguments must be numbers");
                        gt(this);
                        let r = lt + et;
                        return x(r, e, "i32"), x(r + Ye, t, "i32"), Qe._ts_node_descendant_for_index_wasm(this.tree[0]), wt(this.tree);
                    }
                    namedDescendantForIndex(e, t = e) {
                        if ("number" != typeof e || "number" != typeof t) throw new Error("Arguments must be numbers");
                        gt(this);
                        let r = lt + et;
                        return x(r, e, "i32"), x(r + Ye, t, "i32"), Qe._ts_node_named_descendant_for_index_wasm(this.tree[0]), wt(this.tree);
                    }
                    descendantForPosition(e, t = e) {
                        if (!ht(e) || !ht(t)) throw new Error("Arguments must be {row, column} objects");
                        gt(this);
                        let r = lt + et;
                        return bt(r, e), bt(r + tt, t), Qe._ts_node_descendant_for_position_wasm(this.tree[0]), wt(this.tree);
                    }
                    namedDescendantForPosition(e, t = e) {
                        if (!ht(e) || !ht(t)) throw new Error("Arguments must be {row, column} objects");
                        gt(this);
                        let r = lt + et;
                        return bt(r, e), bt(r + tt, t), Qe._ts_node_named_descendant_for_position_wasm(this.tree[0]), wt(this.tree);
                    }
                    walk() {
                        return gt(this), Qe._ts_tree_cursor_new_wasm(this.tree[0]), new TreeCursor(Je, this.tree);
                    }
                    toString() {
                        gt(this);
                        const e20 = Qe._ts_node_to_string_wasm(this.tree[0]), t18 = function(e) {
                            for(var t = "";;){
                                var r = T[(e++) >> 0];
                                if (!r) return t;
                                t += String.fromCharCode(r);
                            }
                        }(e20);
                        return Qe._free(e20), t18;
                    }
                }
                class TreeCursor {
                    constructor(e, t){
                        pt(e), this.tree = t, Mt(this);
                    }
                    delete() {
                        yt(this), Qe._ts_tree_cursor_delete_wasm(this.tree[0]), this[0] = this[1] = this[2] = 0;
                    }
                    reset(e) {
                        gt(e), yt(this, lt + et), Qe._ts_tree_cursor_reset_wasm(this.tree[0]), Mt(this);
                    }
                    get nodeType() {
                        return this.tree.language.types[this.nodeTypeId] || "ERROR";
                    }
                    get nodeTypeId() {
                        return yt(this), Qe._ts_tree_cursor_current_node_type_id_wasm(this.tree[0]);
                    }
                    get nodeId() {
                        return yt(this), Qe._ts_tree_cursor_current_node_id_wasm(this.tree[0]);
                    }
                    get nodeIsNamed() {
                        return yt(this), 1 === Qe._ts_tree_cursor_current_node_is_named_wasm(this.tree[0]);
                    }
                    get nodeIsMissing() {
                        return yt(this), 1 === Qe._ts_tree_cursor_current_node_is_missing_wasm(this.tree[0]);
                    }
                    get nodeText() {
                        yt(this);
                        const e = Qe._ts_tree_cursor_start_index_wasm(this.tree[0]), t = Qe._ts_tree_cursor_end_index_wasm(this.tree[0]);
                        return mt(this.tree, e, t);
                    }
                    get startPosition() {
                        return yt(this), Qe._ts_tree_cursor_start_position_wasm(this.tree[0]), vt(lt);
                    }
                    get endPosition() {
                        return yt(this), Qe._ts_tree_cursor_end_position_wasm(this.tree[0]), vt(lt);
                    }
                    get startIndex() {
                        return yt(this), Qe._ts_tree_cursor_start_index_wasm(this.tree[0]);
                    }
                    get endIndex() {
                        return yt(this), Qe._ts_tree_cursor_end_index_wasm(this.tree[0]);
                    }
                    currentNode() {
                        return yt(this), Qe._ts_tree_cursor_current_node_wasm(this.tree[0]), wt(this.tree);
                    }
                    currentFieldId() {
                        return yt(this), Qe._ts_tree_cursor_current_field_id_wasm(this.tree[0]);
                    }
                    currentFieldName() {
                        return this.tree.language.fields[this.currentFieldId()];
                    }
                    gotoFirstChild() {
                        yt(this);
                        const e = Qe._ts_tree_cursor_goto_first_child_wasm(this.tree[0]);
                        return Mt(this), 1 === e;
                    }
                    gotoNextSibling() {
                        yt(this);
                        const e = Qe._ts_tree_cursor_goto_next_sibling_wasm(this.tree[0]);
                        return Mt(this), 1 === e;
                    }
                    gotoParent() {
                        yt(this);
                        const e = Qe._ts_tree_cursor_goto_parent_wasm(this.tree[0]);
                        return Mt(this), 1 === e;
                    }
                }
                class Language {
                    constructor(e, t){
                        pt(e), this[0] = t, this.types = new Array(Qe._ts_language_symbol_count(this[0]));
                        for(let e21 = 0, t19 = this.types.length; e21 < t19; e21++)Qe._ts_language_symbol_type(this[0], e21) < 2 && (this.types[e21] = j(Qe._ts_language_symbol_name(this[0], e21)));
                        this.fields = new Array(Qe._ts_language_field_count(this[0]) + 1);
                        for(let e22 = 0, t20 = this.fields.length; e22 < t20; e22++){
                            const t = Qe._ts_language_field_name_for_id(this[0], e22);
                            this.fields[e22] = 0 !== t ? j(t) : null;
                        }
                    }
                    get version() {
                        return Qe._ts_language_version(this[0]);
                    }
                    get fieldCount() {
                        return this.fields.length - 1;
                    }
                    fieldIdForName(e) {
                        const t = this.fields.indexOf(e);
                        return -1 !== t ? t : null;
                    }
                    fieldNameForId(e) {
                        return this.fields[e] || null;
                    }
                    idForNodeType(e, t) {
                        const r = z(e), n = Qe._malloc(r + 1);
                        D(e, n, r + 1);
                        const s = Qe._ts_language_symbol_for_name(this[0], n, r, t);
                        return Qe._free(n), s || null;
                    }
                    get nodeTypeCount() {
                        return Qe._ts_language_symbol_count(this[0]);
                    }
                    nodeTypeForId(e) {
                        const t = Qe._ts_language_symbol_name(this[0], e);
                        return t ? j(t) : null;
                    }
                    nodeTypeIsNamed(e) {
                        return !!Qe._ts_language_type_is_named_wasm(this[0], e);
                    }
                    nodeTypeIsVisible(e) {
                        return !!Qe._ts_language_type_is_visible_wasm(this[0], e);
                    }
                    query(e26) {
                        const t = z(e26), r16 = Qe._malloc(t + 1);
                        D(e26, r16, t + 1);
                        const n = Qe._ts_query_new(this[0], r16, t, lt, lt + Ye);
                        if (!n) {
                            const t = N(lt + Ye, "i32"), n = j(r16, N(lt, "i32")).length, s = e26.substr(n, 100).split("\n")[0];
                            let o, _ = s.match(st)[0];
                            switch(t){
                                case 2:
                                    o = new RangeError(`Bad node name '${_}'`);
                                    break;
                                case 3:
                                    o = new RangeError(`Bad field name '${_}'`);
                                    break;
                                case 4:
                                    o = new RangeError(`Bad capture name @${_}`);
                                    break;
                                case 5:
                                    o = new TypeError(`Bad pattern structure at offset ${n}: '${s}'...`), _ = "";
                                    break;
                                default:
                                    o = new SyntaxError(`Bad syntax at offset ${n}: '${s}'...`), _ = "";
                            }
                            throw o.index = n, o.length = _.length, Qe._free(r16), o;
                        }
                        const s7 = Qe._ts_query_string_count(n), o9 = Qe._ts_query_capture_count(n), _ = Qe._ts_query_pattern_count(n), a = new Array(o9), u = new Array(s7);
                        for(let e23 = 0; e23 < o9; e23++){
                            const t = Qe._ts_query_capture_name_for_id(n, e23, lt), r = N(lt, "i32");
                            a[e23] = j(t, r);
                        }
                        for(let e24 = 0; e24 < s7; e24++){
                            const t = Qe._ts_query_string_value_for_id(n, e24, lt), r = N(lt, "i32");
                            u[e24] = j(t, r);
                        }
                        const i = new Array(_), l = new Array(_), d = new Array(_), c = new Array(_), m = new Array(_);
                        for(let e25 = 0; e25 < _; e25++){
                            const t = Qe._ts_query_predicates_for_pattern(n, e25, lt), r15 = N(lt, "i32");
                            c[e25] = [], m[e25] = [];
                            const s6 = [];
                            let o8 = t;
                            for(let t21 = 0; t21 < r15; t21++){
                                const t23 = N(o8, "i32"), r14 = N(o8 += Ye, "i32");
                                if (o8 += Ye, t23 === ot) s6.push({
                                    type: "capture",
                                    name: a[r14]
                                });
                                else if (t23 === _t) s6.push({
                                    type: "string",
                                    value: u[r14]
                                });
                                else if (s6.length > 0) {
                                    if ("string" !== s6[0].type) throw new Error("Predicates must begin with a literal value");
                                    const t22 = s6[0].value;
                                    let r13 = !0;
                                    switch(t22){
                                        case "not-eq?":
                                            r13 = !1;
                                        case "eq?":
                                            if (3 !== s6.length) throw new Error(`Wrong number of arguments to \`#eq?\` predicate. Expected 2, got ${s6.length - 1}`);
                                            if ("capture" !== s6[1].type) throw new Error(`First argument of \`#eq?\` predicate must be a capture. Got "${s6[1].value}"`);
                                            if ("capture" === s6[2].type) {
                                                const t = s6[1].name, n = s6[2].name;
                                                m[e25].push(function(e) {
                                                    let s, o;
                                                    for (const r of e)r.name === t && (s = r.node), r.name === n && (o = r.node);
                                                    return void 0 === s || void 0 === o || s.text === o.text === r13;
                                                });
                                            } else {
                                                const t = s6[1].name, n = s6[2].value;
                                                m[e25].push(function(e) {
                                                    for (const s of e)if (s.name === t) return s.node.text === n === r13;
                                                    return !0;
                                                });
                                            }
                                            break;
                                        case "not-match?":
                                            r13 = !1;
                                        case "match?":
                                            if (3 !== s6.length) throw new Error(`Wrong number of arguments to \`#match?\` predicate. Expected 2, got ${s6.length - 1}.`);
                                            if ("capture" !== s6[1].type) throw new Error(`First argument of \`#match?\` predicate must be a capture. Got "${s6[1].value}".`);
                                            if ("string" !== s6[2].type) throw new Error(`Second argument of \`#match?\` predicate must be a string. Got @${s6[2].value}.`);
                                            const n = s6[1].name, o6 = new RegExp(s6[2].value);
                                            m[e25].push(function(e) {
                                                for (const t of e)if (t.name === n) return o6.test(t.node.text) === r13;
                                                return !0;
                                            });
                                            break;
                                        case "set!":
                                            if (s6.length < 2 || s6.length > 3) throw new Error(`Wrong number of arguments to \`#set!\` predicate. Expected 1 or 2. Got ${s6.length - 1}.`);
                                            if (s6.some((e)=>"string" !== e.type
                                            )) throw new Error('Arguments to `#set!` predicate must be a strings.".');
                                            i[e25] || (i[e25] = {}), i[e25][s6[1].value] = s6[2] ? s6[2].value : null;
                                            break;
                                        case "is?":
                                        case "is-not?":
                                            if (s6.length < 2 || s6.length > 3) throw new Error(`Wrong number of arguments to \`#${t22}\` predicate. Expected 1 or 2. Got ${s6.length - 1}.`);
                                            if (s6.some((e)=>"string" !== e.type
                                            )) throw new Error(`Arguments to \`#${t22}\` predicate must be a strings.".`);
                                            const _ = "is?" === t22 ? l : d;
                                            _[e25] || (_[e25] = {}), _[e25][s6[1].value] = s6[2] ? s6[2].value : null;
                                            break;
                                        default:
                                            c[e25].push({
                                                operator: t22,
                                                operands: s6.slice(1)
                                            });
                                    }
                                    s6.length = 0;
                                }
                            }
                            Object.freeze(i[e25]), Object.freeze(l[e25]), Object.freeze(d[e25]);
                        }
                        return Qe._free(r16), new Query(Je, n, a, m, c, Object.freeze(i), Object.freeze(l), Object.freeze(d));
                    }
                    static load(e27) {
                        let t24;
                        if (e27 instanceof Uint8Array) t24 = Promise.resolve(e27);
                        else {
                            const r17 = e27;
                            if ("undefined" != typeof process && process.versions && process.versions.node) {
                                const e = require("fs");
                                t24 = Promise.resolve(e.readFileSync(r17));
                            } else t24 = fetch(r17).then((e)=>e.arrayBuffer().then((t)=>{
                                    if (e.ok) return new Uint8Array(t);
                                    {
                                        const r = new TextDecoder("utf-8").decode(t);
                                        throw new Error(`Language.load failed with status ${e.status}.\n\n${r}`);
                                    }
                                })
                            );
                        }
                        const r18 = "function" == typeof loadSideModule ? loadSideModule : xe;
                        return t24.then((e)=>r18(e, {
                                loadAsync: !0
                            })
                        ).then((e28)=>{
                            const t = Object.keys(e28), r = t.find((e)=>at.test(e) && !e.includes("external_scanner_")
                            );
                            r || console.log(`Couldn't find language function in WASM file. Symbols:\n${JSON.stringify(t, null, 2)}`);
                            const n = e28[r]();
                            return new Language(Je, n);
                        });
                    }
                }
                class Query {
                    constructor(e, t, r, n, s, o, _, a){
                        pt(e), this[0] = t, this.captureNames = r, this.textPredicates = n, this.predicates = s, this.setProperties = o, this.assertedProperties = _, this.refutedProperties = a, this.exceededMatchLimit = !1;
                    }
                    delete() {
                        Qe._ts_query_delete(this[0]), this[0] = 0;
                    }
                    matches(e29, t, r, n) {
                        t || (t = nt), r || (r = nt), n || (n = {});
                        let s = n.matchLimit;
                        if (void 0 === s) s = 0;
                        else if ("number" != typeof s) throw new Error("Arguments must be numbers");
                        gt(e29), Qe._ts_query_matches_wasm(this[0], e29.tree[0], t.row, t.column, r.row, r.column, s);
                        const o = N(lt, "i32"), _ = N(lt + Ye, "i32"), a = N(lt + 2 * Ye, "i32"), u = new Array(o);
                        this.exceededMatchLimit = !!a;
                        let i = 0, l = _;
                        for(let t25 = 0; t25 < o; t25++){
                            const r = N(l, "i32"), n = N(l += Ye, "i32");
                            l += Ye;
                            const s = new Array(n);
                            if (l = ft(this, e29.tree, l, s), this.textPredicates[r].every((e)=>e(s)
                            )) {
                                u[i++] = {
                                    pattern: r,
                                    captures: s
                                };
                                const e = this.setProperties[r];
                                e && (u[t25].setProperties = e);
                                const n = this.assertedProperties[r];
                                n && (u[t25].assertedProperties = n);
                                const o = this.refutedProperties[r];
                                o && (u[t25].refutedProperties = o);
                            }
                        }
                        return u.length = i, Qe._free(_), u;
                    }
                    captures(e30, t, r, n) {
                        t || (t = nt), r || (r = nt), n || (n = {});
                        let s = n.matchLimit;
                        if (void 0 === s) s = 0;
                        else if ("number" != typeof s) throw new Error("Arguments must be numbers");
                        gt(e30), Qe._ts_query_captures_wasm(this[0], e30.tree[0], t.row, t.column, r.row, r.column, s);
                        const o = N(lt, "i32"), _ = N(lt + Ye, "i32"), a = N(lt + 2 * Ye, "i32"), u = [];
                        this.exceededMatchLimit = !!a;
                        const i = [];
                        let l = _;
                        for(let t26 = 0; t26 < o; t26++){
                            const t = N(l, "i32"), r = N(l += Ye, "i32"), n = N(l += Ye, "i32");
                            if (l += Ye, i.length = r, l = ft(this, e30.tree, l, i), this.textPredicates[t].every((e)=>e(i)
                            )) {
                                const e = i[n], r = this.setProperties[t];
                                r && (e.setProperties = r);
                                const s = this.assertedProperties[t];
                                s && (e.assertedProperties = s);
                                const o = this.refutedProperties[t];
                                o && (e.refutedProperties = o), u.push(e);
                            }
                        }
                        return Qe._free(_), u;
                    }
                    predicatesForPattern(e) {
                        return this.predicates[e];
                    }
                    didExceedMatchLimit() {
                        return this.exceededMatchLimit;
                    }
                }
                function mt(e, t, r) {
                    const n = r - t;
                    let s = e.textCallback(t, null, r);
                    for(t += s.length; t < r;){
                        const n = e.textCallback(t, null, r);
                        if (!(n && n.length > 0)) break;
                        t += n.length, s += n;
                    }
                    return t > r && (s = s.slice(0, n)), s;
                }
                function ft(e, t, r, n) {
                    for(let s = 0, o = n.length; s < o; s++){
                        const o = N(r, "i32"), _ = wt(t, r += Ye);
                        r += et, n[s] = {
                            name: e.captureNames[o],
                            node: _
                        };
                    }
                    return r;
                }
                function pt(e) {
                    if (e !== Je) throw new Error("Illegal constructor");
                }
                function ht(e) {
                    return e && "number" == typeof e.row && "number" == typeof e.column;
                }
                function gt(e) {
                    let t = lt;
                    x(t, e.id, "i32"), x(t += Ye, e.startIndex, "i32"), x(t += Ye, e.startPosition.row, "i32"), x(t += Ye, e.startPosition.column, "i32"), x(t += Ye, e[0], "i32");
                }
                function wt(e, t = lt) {
                    const r = N(t, "i32");
                    if (0 === r) return null;
                    const n = N(t += Ye, "i32"), s = N(t += Ye, "i32"), o = N(t += Ye, "i32"), _ = N(t += Ye, "i32"), a = new Node(Je, e);
                    return a.id = r, a.startIndex = n, a.startPosition = {
                        row: s,
                        column: o
                    }, a[0] = _, a;
                }
                function yt(e, t = lt) {
                    x(t + 0 * Ye, e[0], "i32"), x(t + 1 * Ye, e[1], "i32"), x(t + 2 * Ye, e[2], "i32");
                }
                function Mt(e) {
                    e[0] = N(lt + 0 * Ye, "i32"), e[1] = N(lt + 1 * Ye, "i32"), e[2] = N(lt + 2 * Ye, "i32");
                }
                function bt(e, t) {
                    x(e, t.row, "i32"), x(e + Ye, t.column, "i32");
                }
                function vt(e) {
                    return {
                        row: N(e, "i32"),
                        column: N(e + Ye, "i32")
                    };
                }
                function Et(e, t) {
                    bt(e, t.startPosition), bt(e += tt, t.endPosition), x(e += tt, t.startIndex, "i32"), x(e += Ye, t.endIndex, "i32"), e += Ye;
                }
                function It(e) {
                    const t = {};
                    return t.startPosition = vt(e), e += tt, t.endPosition = vt(e), e += tt, t.startIndex = N(e, "i32"), e += Ye, t.endIndex = N(e, "i32"), t;
                }
                for (const e1 of Object.getOwnPropertyNames(ParserImpl.prototype))Object.defineProperty(Parser.prototype, e1, {
                    value: ParserImpl.prototype[e1],
                    enumerable: !1,
                    writable: !1
                });
                Parser.Language = Language, Module.onRuntimeInitialized = ()=>{
                    ParserImpl.init(), e3();
                };
            }));
        }
    }
    return Parser;
}();
module.exports = TreeSitter;

},{"process":"dhgxf","path":"4QECa","fs":"dhgxf"}],"dhgxf":[function(require,module,exports) {
"use strict";

},{}],"4QECa":[function(require,module,exports) {
// 'path' module extracted from Node.js v8.11.1 (only the posix part)
// transplited with Babel
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
'use strict';
var process = require("process");
function assertPath(path) {
    if (typeof path !== 'string') throw new TypeError('Path must be a string. Received ' + JSON.stringify(path));
}
// Resolves . and .. elements in a path with directory names
function normalizeStringPosix(path, allowAboveRoot) {
    var res = '';
    var lastSegmentLength = 0;
    var lastSlash = -1;
    var dots = 0;
    var code;
    for(var i = 0; i <= path.length; ++i){
        if (i < path.length) code = path.charCodeAt(i);
        else if (code === 47 /*/*/ ) break;
        else code = 47 /*/*/ ;
        if (code === 47 /*/*/ ) {
            if (lastSlash === i - 1 || dots === 1) ;
            else if (lastSlash !== i - 1 && dots === 2) {
                if (res.length < 2 || lastSegmentLength !== 2 || res.charCodeAt(res.length - 1) !== 46 /*.*/  || res.charCodeAt(res.length - 2) !== 46 /*.*/ ) {
                    if (res.length > 2) {
                        var lastSlashIndex = res.lastIndexOf('/');
                        if (lastSlashIndex !== res.length - 1) {
                            if (lastSlashIndex === -1) {
                                res = '';
                                lastSegmentLength = 0;
                            } else {
                                res = res.slice(0, lastSlashIndex);
                                lastSegmentLength = res.length - 1 - res.lastIndexOf('/');
                            }
                            lastSlash = i;
                            dots = 0;
                            continue;
                        }
                    } else if (res.length === 2 || res.length === 1) {
                        res = '';
                        lastSegmentLength = 0;
                        lastSlash = i;
                        dots = 0;
                        continue;
                    }
                }
                if (allowAboveRoot) {
                    if (res.length > 0) res += '/..';
                    else res = '..';
                    lastSegmentLength = 2;
                }
            } else {
                if (res.length > 0) res += '/' + path.slice(lastSlash + 1, i);
                else res = path.slice(lastSlash + 1, i);
                lastSegmentLength = i - lastSlash - 1;
            }
            lastSlash = i;
            dots = 0;
        } else if (code === 46 /*.*/  && dots !== -1) ++dots;
        else dots = -1;
    }
    return res;
}
function _format(sep, pathObject) {
    var dir = pathObject.dir || pathObject.root;
    var base = pathObject.base || (pathObject.name || '') + (pathObject.ext || '');
    if (!dir) return base;
    if (dir === pathObject.root) return dir + base;
    return dir + sep + base;
}
var posix = {
    // path.resolve([from ...], to)
    resolve: function resolve() {
        var resolvedPath = '';
        var resolvedAbsolute = false;
        var cwd;
        for(var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--){
            var path;
            if (i >= 0) path = arguments[i];
            else {
                if (cwd === undefined) cwd = process.cwd();
                path = cwd;
            }
            assertPath(path);
            // Skip empty entries
            if (path.length === 0) continue;
            resolvedPath = path + '/' + resolvedPath;
            resolvedAbsolute = path.charCodeAt(0) === 47 /*/*/ ;
        }
        // At this point the path should be resolved to a full absolute path, but
        // handle relative paths to be safe (might happen when process.cwd() fails)
        // Normalize the path
        resolvedPath = normalizeStringPosix(resolvedPath, !resolvedAbsolute);
        if (resolvedAbsolute) {
            if (resolvedPath.length > 0) return '/' + resolvedPath;
            else return '/';
        } else if (resolvedPath.length > 0) return resolvedPath;
        else return '.';
    },
    normalize: function normalize(path) {
        assertPath(path);
        if (path.length === 0) return '.';
        var isAbsolute = path.charCodeAt(0) === 47 /*/*/ ;
        var trailingSeparator = path.charCodeAt(path.length - 1) === 47 /*/*/ ;
        // Normalize the path
        path = normalizeStringPosix(path, !isAbsolute);
        if (path.length === 0 && !isAbsolute) path = '.';
        if (path.length > 0 && trailingSeparator) path += '/';
        if (isAbsolute) return '/' + path;
        return path;
    },
    isAbsolute: function isAbsolute(path) {
        assertPath(path);
        return path.length > 0 && path.charCodeAt(0) === 47 /*/*/ ;
    },
    join: function join() {
        if (arguments.length === 0) return '.';
        var joined;
        for(var i = 0; i < arguments.length; ++i){
            var arg = arguments[i];
            assertPath(arg);
            if (arg.length > 0) {
                if (joined === undefined) joined = arg;
                else joined += '/' + arg;
            }
        }
        if (joined === undefined) return '.';
        return posix.normalize(joined);
    },
    relative: function relative(from, to) {
        assertPath(from);
        assertPath(to);
        if (from === to) return '';
        from = posix.resolve(from);
        to = posix.resolve(to);
        if (from === to) return '';
        // Trim any leading backslashes
        var fromStart = 1;
        for(; fromStart < from.length; ++fromStart){
            if (from.charCodeAt(fromStart) !== 47 /*/*/ ) break;
        }
        var fromEnd = from.length;
        var fromLen = fromEnd - fromStart;
        // Trim any leading backslashes
        var toStart = 1;
        for(; toStart < to.length; ++toStart){
            if (to.charCodeAt(toStart) !== 47 /*/*/ ) break;
        }
        var toEnd = to.length;
        var toLen = toEnd - toStart;
        // Compare paths to find the longest common path from root
        var length = fromLen < toLen ? fromLen : toLen;
        var lastCommonSep = -1;
        var i = 0;
        for(; i <= length; ++i){
            if (i === length) {
                if (toLen > length) {
                    if (to.charCodeAt(toStart + i) === 47 /*/*/ ) // We get here if `from` is the exact base path for `to`.
                    // For example: from='/foo/bar'; to='/foo/bar/baz'
                    return to.slice(toStart + i + 1);
                    else if (i === 0) // We get here if `from` is the root
                    // For example: from='/'; to='/foo'
                    return to.slice(toStart + i);
                } else if (fromLen > length) {
                    if (from.charCodeAt(fromStart + i) === 47 /*/*/ ) // We get here if `to` is the exact base path for `from`.
                    // For example: from='/foo/bar/baz'; to='/foo/bar'
                    lastCommonSep = i;
                    else if (i === 0) // We get here if `to` is the root.
                    // For example: from='/foo'; to='/'
                    lastCommonSep = 0;
                }
                break;
            }
            var fromCode = from.charCodeAt(fromStart + i);
            var toCode = to.charCodeAt(toStart + i);
            if (fromCode !== toCode) break;
            else if (fromCode === 47 /*/*/ ) lastCommonSep = i;
        }
        var out = '';
        // Generate the relative path based on the path difference between `to`
        // and `from`
        for(i = fromStart + lastCommonSep + 1; i <= fromEnd; ++i)if (i === fromEnd || from.charCodeAt(i) === 47 /*/*/ ) {
            if (out.length === 0) out += '..';
            else out += '/..';
        }
        // Lastly, append the rest of the destination (`to`) path that comes after
        // the common path parts
        if (out.length > 0) return out + to.slice(toStart + lastCommonSep);
        else {
            toStart += lastCommonSep;
            if (to.charCodeAt(toStart) === 47 /*/*/ ) ++toStart;
            return to.slice(toStart);
        }
    },
    _makeLong: function _makeLong(path) {
        return path;
    },
    dirname: function dirname(path) {
        assertPath(path);
        if (path.length === 0) return '.';
        var code = path.charCodeAt(0);
        var hasRoot = code === 47 /*/*/ ;
        var end = -1;
        var matchedSlash = true;
        for(var i = path.length - 1; i >= 1; --i){
            code = path.charCodeAt(i);
            if (code === 47 /*/*/ ) {
                if (!matchedSlash) {
                    end = i;
                    break;
                }
            } else // We saw the first non-path separator
            matchedSlash = false;
        }
        if (end === -1) return hasRoot ? '/' : '.';
        if (hasRoot && end === 1) return '//';
        return path.slice(0, end);
    },
    basename: function basename(path, ext) {
        if (ext !== undefined && typeof ext !== 'string') throw new TypeError('"ext" argument must be a string');
        assertPath(path);
        var start = 0;
        var end = -1;
        var matchedSlash = true;
        var i;
        if (ext !== undefined && ext.length > 0 && ext.length <= path.length) {
            if (ext.length === path.length && ext === path) return '';
            var extIdx = ext.length - 1;
            var firstNonSlashEnd = -1;
            for(i = path.length - 1; i >= 0; --i){
                var code = path.charCodeAt(i);
                if (code === 47 /*/*/ ) // If we reached a path separator that was not part of a set of path
                // separators at the end of the string, stop now
                {
                    if (!matchedSlash) {
                        start = i + 1;
                        break;
                    }
                } else {
                    if (firstNonSlashEnd === -1) {
                        // We saw the first non-path separator, remember this index in case
                        // we need it if the extension ends up not matching
                        matchedSlash = false;
                        firstNonSlashEnd = i + 1;
                    }
                    if (extIdx >= 0) {
                        // Try to match the explicit extension
                        if (code === ext.charCodeAt(extIdx)) {
                            if (--extIdx === -1) // We matched the extension, so mark this as the end of our path
                            // component
                            end = i;
                        } else {
                            // Extension does not match, so our result is the entire path
                            // component
                            extIdx = -1;
                            end = firstNonSlashEnd;
                        }
                    }
                }
            }
            if (start === end) end = firstNonSlashEnd;
            else if (end === -1) end = path.length;
            return path.slice(start, end);
        } else {
            for(i = path.length - 1; i >= 0; --i){
                if (path.charCodeAt(i) === 47 /*/*/ ) // If we reached a path separator that was not part of a set of path
                // separators at the end of the string, stop now
                {
                    if (!matchedSlash) {
                        start = i + 1;
                        break;
                    }
                } else if (end === -1) {
                    // We saw the first non-path separator, mark this as the end of our
                    // path component
                    matchedSlash = false;
                    end = i + 1;
                }
            }
            if (end === -1) return '';
            return path.slice(start, end);
        }
    },
    extname: function extname(path) {
        assertPath(path);
        var startDot = -1;
        var startPart = 0;
        var end = -1;
        var matchedSlash = true;
        // Track the state of characters (if any) we see before our first dot and
        // after any path separator we find
        var preDotState = 0;
        for(var i = path.length - 1; i >= 0; --i){
            var code = path.charCodeAt(i);
            if (code === 47 /*/*/ ) {
                // If we reached a path separator that was not part of a set of path
                // separators at the end of the string, stop now
                if (!matchedSlash) {
                    startPart = i + 1;
                    break;
                }
                continue;
            }
            if (end === -1) {
                // We saw the first non-path separator, mark this as the end of our
                // extension
                matchedSlash = false;
                end = i + 1;
            }
            if (code === 46 /*.*/ ) {
                // If this is our first dot, mark it as the start of our extension
                if (startDot === -1) startDot = i;
                else if (preDotState !== 1) preDotState = 1;
            } else if (startDot !== -1) // We saw a non-dot and non-path separator before our dot, so we should
            // have a good chance at having a non-empty extension
            preDotState = -1;
        }
        if (startDot === -1 || end === -1 || // We saw a non-dot character immediately before the dot
        preDotState === 0 || // The (right-most) trimmed path component is exactly '..'
        preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) return '';
        return path.slice(startDot, end);
    },
    format: function format(pathObject) {
        if (pathObject === null || typeof pathObject !== 'object') throw new TypeError('The "pathObject" argument must be of type Object. Received type ' + typeof pathObject);
        return _format('/', pathObject);
    },
    parse: function parse(path) {
        assertPath(path);
        var ret = {
            root: '',
            dir: '',
            base: '',
            ext: '',
            name: ''
        };
        if (path.length === 0) return ret;
        var code = path.charCodeAt(0);
        var isAbsolute = code === 47 /*/*/ ;
        var start;
        if (isAbsolute) {
            ret.root = '/';
            start = 1;
        } else start = 0;
        var startDot = -1;
        var startPart = 0;
        var end = -1;
        var matchedSlash = true;
        var i = path.length - 1;
        // Track the state of characters (if any) we see before our first dot and
        // after any path separator we find
        var preDotState = 0;
        // Get non-dir info
        for(; i >= start; --i){
            code = path.charCodeAt(i);
            if (code === 47 /*/*/ ) {
                // If we reached a path separator that was not part of a set of path
                // separators at the end of the string, stop now
                if (!matchedSlash) {
                    startPart = i + 1;
                    break;
                }
                continue;
            }
            if (end === -1) {
                // We saw the first non-path separator, mark this as the end of our
                // extension
                matchedSlash = false;
                end = i + 1;
            }
            if (code === 46 /*.*/ ) {
                // If this is our first dot, mark it as the start of our extension
                if (startDot === -1) startDot = i;
                else if (preDotState !== 1) preDotState = 1;
            } else if (startDot !== -1) // We saw a non-dot and non-path separator before our dot, so we should
            // have a good chance at having a non-empty extension
            preDotState = -1;
        }
        if (startDot === -1 || end === -1 || // We saw a non-dot character immediately before the dot
        preDotState === 0 || // The (right-most) trimmed path component is exactly '..'
        preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
            if (end !== -1) {
                if (startPart === 0 && isAbsolute) ret.base = ret.name = path.slice(1, end);
                else ret.base = ret.name = path.slice(startPart, end);
            }
        } else {
            if (startPart === 0 && isAbsolute) {
                ret.name = path.slice(1, startDot);
                ret.base = path.slice(1, end);
            } else {
                ret.name = path.slice(startPart, startDot);
                ret.base = path.slice(startPart, end);
            }
            ret.ext = path.slice(startDot, end);
        }
        if (startPart > 0) ret.dir = path.slice(0, startPart - 1);
        else if (isAbsolute) ret.dir = '/';
        return ret;
    },
    sep: '/',
    delimiter: ':',
    win32: null,
    posix: null
};
posix.posix = posix;
module.exports = posix;

},{"process":"dhgxf"}]},["6R2PZ","2oYPr"], "2oYPr", "parcelRequireea42")

//# sourceMappingURL=index.06e7c16f.js.map
