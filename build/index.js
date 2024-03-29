var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
};

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@remix-run/node";
import { RemixServer } from "@remix-run/react";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { jsxDEV } from "react/jsx-dev-runtime";
var ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  return isbot(request.headers.get("user-agent") || "") ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsxDEV(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 51,
          columnNumber: 7
        },
        this
      ),
      {
        onAllReady() {
          shellRendered = !0;
          let body = new PassThrough(), stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsxDEV(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 101,
          columnNumber: 7
        },
        this
      ),
      {
        onShellReady() {
          shellRendered = !0;
          let body = new PassThrough(), stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links
});
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "@remix-run/react";
import { jsxDEV as jsxDEV2 } from "react/jsx-dev-runtime";
var links = () => [
  ...void 0 ? [{ rel: "stylesheet", href: void 0 }] : []
];
function App() {
  return /* @__PURE__ */ jsxDEV2("html", { lang: "en", children: [
    /* @__PURE__ */ jsxDEV2("head", { children: [
      /* @__PURE__ */ jsxDEV2("meta", { charSet: "utf-8" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 20,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 21,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 22,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 23,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 19,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV2("body", { children: [
      /* @__PURE__ */ jsxDEV2(Outlet, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 26,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 27,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 28,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 29,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 25,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 18,
    columnNumber: 5
  }, this);
}

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  default: () => Index,
  meta: () => meta
});
import { Link } from "@remix-run/react";
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var meta = () => [
  { title: "New Remix App" },
  { name: "description", content: "Welcome to Remix!" }
];
function Index() {
  return /* @__PURE__ */ jsxDEV3("main", { style: { fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }, children: [
    /* @__PURE__ */ jsxDEV3("h1", { children: "Welcome to Remix" }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 14,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV3(Link, { to: "Items", children: "Items" }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 15,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 13,
    columnNumber: 5
  }, this);
}

// app/routes/Items.tsx
var Items_exports = {};
__export(Items_exports, {
  action: () => action,
  default: () => DisplayItems,
  loader: () => loader
});

// app/db/config.server.ts
import { drizzle } from "drizzle-orm/better-sqlite3";
import { migrate } from "drizzle-orm/better-sqlite3/migrator";
import Database from "better-sqlite3";
if (!process.env.DATABASE_PATH)
  throw new Error(
    "Missing environment variable: DATABASE_PATH"
  );
var db = drizzle(
  new Database(process.env.DATABASE_PATH)
);
migrate(db, { migrationsFolder: "./app/db/migrations" });

// app/routes/Items.tsx
import { json } from "@remix-run/node";
import { Form, Link as Link2, useLoaderData } from "@remix-run/react";

// app/db/schema.server.ts
import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";
var dogs = sqliteTable("dogs", {
  id: integer("id").primaryKey(),
  name: text("name").notNull(),
  breed: text("breed").notNull()
}), items = sqliteTable("items", {
  id: integer("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description"),
  createdAt: text("createdAt").notNull().default('datetime("now")'),
  updatedAt: text("updatedAt").notNull().default('datetime("now")')
});

// app/routes/Items.tsx
import { eq } from "drizzle-orm";
import { jsxDEV as jsxDEV4 } from "react/jsx-dev-runtime";
async function loader() {
  let dataSets = db.select().from(items).all();
  return json(dataSets);
}
async function action({
  request
}) {
  let formData = await request.formData(), { _action, ...values } = Object.fromEntries(formData);
  return console.log("content of values:", values, "title:", values.title, "description:", values.description), _action == "create" ? (db.insert(items).values({
    title: values.title,
    description: values.description,
    createdAt: String((/* @__PURE__ */ new Date()).toLocaleDateString("en-PK")),
    updatedAt: String((/* @__PURE__ */ new Date()).toLocaleDateString("en-PK"))
  }).run(), {
    success: !0
  }) : _action == "delete" ? await db.delete(items).where(eq(items.id, values.id)) : {
    success: !0
  };
}
function DisplayItems() {
  let Items = useLoaderData();
  return /* @__PURE__ */ jsxDEV4("main", { children: [
    /* @__PURE__ */ jsxDEV4("h1", { children: "Items" }, void 0, !1, {
      fileName: "app/routes/Items.tsx",
      lineNumber: 72,
      columnNumber: 11
    }, this),
    Items.length ? /* @__PURE__ */ jsxDEV4("ul", { children: Items.map((item) => /* @__PURE__ */ jsxDEV4("li", { children: [
      item.id,
      " ",
      " ",
      " ",
      item.title,
      " ",
      item.description,
      /* @__PURE__ */ jsxDEV4(Form, { style: { display: "inline" }, method: "post", children: [
        /* @__PURE__ */ jsxDEV4("input", { type: "hidden", name: "id", value: item.id }, void 0, !1, {
          fileName: "app/routes/Items.tsx",
          lineNumber: 79,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ jsxDEV4("input", { type: "hidden", name: "createAt", value: item.createdAt }, void 0, !1, {
          fileName: "app/routes/Items.tsx",
          lineNumber: 80,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ jsxDEV4(
          "button",
          {
            type: "submit",
            "aria-label": "delete",
            name: "_action",
            value: "delete",
            children: "X"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/Items.tsx",
            lineNumber: 82,
            columnNumber: 23
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/Items.tsx",
        lineNumber: 78,
        columnNumber: 20
      }, this)
    ] }, item.id, !0, {
      fileName: "app/routes/Items.tsx",
      lineNumber: 76,
      columnNumber: 17
    }, this)) }, void 0, !1, {
      fileName: "app/routes/Items.tsx",
      lineNumber: 74,
      columnNumber: 13
    }, this) : /* @__PURE__ */ jsxDEV4("p", { children: " No Items" }, void 0, !1, {
      fileName: "app/routes/Items.tsx",
      lineNumber: 95,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV4(Form, { method: "post", children: [
      /* @__PURE__ */ jsxDEV4("input", { type: "text", name: "title", placeholder: "Enter title", required: !0 }, void 0, !1, {
        fileName: "app/routes/Items.tsx",
        lineNumber: 98,
        columnNumber: 13
      }, this),
      " ",
      " ",
      /* @__PURE__ */ jsxDEV4("input", { type: "text", name: "description", placeholder: "Enter description", required: !0 }, void 0, !1, {
        fileName: "app/routes/Items.tsx",
        lineNumber: 99,
        columnNumber: 13
      }, this),
      " ",
      " ",
      /* @__PURE__ */ jsxDEV4("button", { type: "submit", name: "_action", value: "create", children: "Add" }, void 0, !1, {
        fileName: "app/routes/Items.tsx",
        lineNumber: 100,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/Items.tsx",
      lineNumber: 97,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ jsxDEV4(Link2, { to: "/", children: "Home" }, void 0, !1, {
      fileName: "app/routes/Items.tsx",
      lineNumber: 102,
      columnNumber: 10
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/Items.tsx",
    lineNumber: 71,
    columnNumber: 9
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-4VAG2W3N.js", imports: ["/build/_shared/chunk-ZWGWGGVF.js", "/build/_shared/chunk-RCRIGMCI.js", "/build/_shared/chunk-GIAAE3CH.js", "/build/_shared/chunk-XU7DNSPJ.js", "/build/_shared/chunk-HZBUXPXQ.js", "/build/_shared/chunk-UWV35TSL.js", "/build/_shared/chunk-BOXFZXVX.js", "/build/_shared/chunk-PNG5AS42.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-ZMIR3BMT.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/Items": { id: "routes/Items", parentId: "root", path: "Items", index: void 0, caseSensitive: void 0, module: "/build/routes/Items-U5IX4N67.js", imports: void 0, hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-DVBQ7XCU.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 } }, version: "b2609a0e", hmr: { runtime: "/build/_shared/chunk-HZBUXPXQ.js", timestamp: 1706201947650 }, url: "/build/manifest-B2609A0E.js" };

// server-entry-module:@remix-run/dev/server-build
var mode = "development", assetsBuildDirectory = "public/build", future = { v3_fetcherPersist: !1, v3_relativeSplatPath: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
  },
  "routes/Items": {
    id: "routes/Items",
    parentId: "root",
    path: "Items",
    index: void 0,
    caseSensitive: void 0,
    module: Items_exports
  }
};
export {
  assets_manifest_default as assets,
  assetsBuildDirectory,
  entry,
  future,
  mode,
  publicPath,
  routes
};
//# sourceMappingURL=index.js.map
