import {
  Form,
  Link,
  useLoaderData
} from "/build/_shared/chunk-RCRIGMCI.js";
import "/build/_shared/chunk-GIAAE3CH.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  createHotContext
} from "/build/_shared/chunk-HZBUXPXQ.js";
import "/build/_shared/chunk-UWV35TSL.js";
import "/build/_shared/chunk-BOXFZXVX.js";
import {
  __commonJS,
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// empty-module:~/db/config.server
var require_config = __commonJS({
  "empty-module:~/db/config.server"(exports, module) {
    module.exports = {};
  }
});

// empty-module:@remix-run/node
var require_node = __commonJS({
  "empty-module:@remix-run/node"(exports, module) {
    module.exports = {};
  }
});

// empty-module:~/db/schema.server
var require_schema = __commonJS({
  "empty-module:~/db/schema.server"(exports, module) {
    module.exports = {};
  }
});

// app/routes/Items.tsx
var import_config = __toESM(require_config(), 1);
var import_node = __toESM(require_node(), 1);
var import_schema = __toESM(require_schema(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/Items.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/Items.tsx"
  );
  import.meta.hot.lastModified = "1706201947279.5261";
}
function DisplayItems() {
  _s();
  const Items = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { children: "Items" }, void 0, false, {
      fileName: "app/routes/Items.tsx",
      lineNumber: 87,
      columnNumber: 11
    }, this),
    Items.length ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { children: Items.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: [
      item.id,
      " ",
      " ",
      " ",
      item.title,
      " ",
      item.description,
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { style: {
        display: "inline"
      }, method: "post", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "id", value: item.id }, void 0, false, {
          fileName: "app/routes/Items.tsx",
          lineNumber: 94,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "createAt", value: item.createdAt }, void 0, false, {
          fileName: "app/routes/Items.tsx",
          lineNumber: 95,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", "aria-label": "delete", name: "_action", value: "delete", children: "X" }, void 0, false, {
          fileName: "app/routes/Items.tsx",
          lineNumber: 97,
          columnNumber: 23
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/Items.tsx",
        lineNumber: 91,
        columnNumber: 20
      }, this)
    ] }, item.id, true, {
      fileName: "app/routes/Items.tsx",
      lineNumber: 89,
      columnNumber: 36
    }, this)) }, void 0, false, {
      fileName: "app/routes/Items.tsx",
      lineNumber: 88,
      columnNumber: 26
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: " No Items" }, void 0, false, {
      fileName: "app/routes/Items.tsx",
      lineNumber: 103,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", name: "title", placeholder: "Enter title", required: true }, void 0, false, {
        fileName: "app/routes/Items.tsx",
        lineNumber: 105,
        columnNumber: 13
      }, this),
      " ",
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", name: "description", placeholder: "Enter description", required: true }, void 0, false, {
        fileName: "app/routes/Items.tsx",
        lineNumber: 106,
        columnNumber: 13
      }, this),
      " ",
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", name: "_action", value: "create", children: "Add" }, void 0, false, {
        fileName: "app/routes/Items.tsx",
        lineNumber: 107,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/Items.tsx",
      lineNumber: 104,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/", children: "Home" }, void 0, false, {
      fileName: "app/routes/Items.tsx",
      lineNumber: 109,
      columnNumber: 10
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/Items.tsx",
    lineNumber: 86,
    columnNumber: 10
  }, this);
}
_s(DisplayItems, "gky+tL2sZec11SLy2HF/GDaT1Zg=", false, function() {
  return [useLoaderData];
});
_c = DisplayItems;
var _c;
$RefreshReg$(_c, "DisplayItems");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  DisplayItems as default
};
//# sourceMappingURL=/build/routes/Items-U5IX4N67.js.map
