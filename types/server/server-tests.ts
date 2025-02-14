import server = require("server");
import { del, error, get, post, socket, sub } from "server/router";

import { cookie, download, header, json, jsonp, redirect, render, send, status, type } from "server/reply";

server([
    get("/log", ctx => {
        ctx.log.info("Logged message");
        return status(200).send("Look at the console.");
    }),
    get("/", ctx => "Hello, World!"),
    post("/", ctx => console.log(ctx.data)),
    del("/", ctx => ({ ok: true })),
    error("special", ctx => {
        console.log(ctx.error);
    }),
    sub("/name", ctx => "Hello, World!"),
    socket("message", ctx => "Hello, " + ctx.data.name),
    ctx => cookie("cool", "yes"),
    ctx =>
        cookie("name", "tobi", {
            domain: ".example.com",
            path: "/admin",
            secure: true,
        }),
    ctx =>
        cookie("rememberme", "1", {
            expires: new Date(Date.now() + 900000),
            httpOnly: true,
        }),
    ctx => download("/report-12345.pdf"),
    ctx => download("/report-12345.pdf", "report.pdf"),
    ctx => header("cool"),
    ctx => header("cool", "yes"),
    ctx => json(),
    ctx => json({ cool: true }),
    ctx => jsonp(),
    ctx => jsonp({ cool: true }),
    ctx => redirect("/cool"),
    ctx => redirect(304, "/cool"),
    ctx => render("index.pug"),
    ctx => send(),
    ctx => send({}),
    ctx => send("Hello, World!"),
    ctx => status(200),
    ctx => type("application/json"),
]);

// Test all the options work
server(
    {
        port: 3000,
        secret: "my-secret",
        public: "public",
        views: "views",
        engine: "pug",
        env: "development",
        favicon: "public/logo.png",
        parser: { body: { limit: "1mb" } },
        security: {
            csrf: false,
            dnsPrefetchControl: { allow: true },
        },
        session: {
            resave: false,
            saveUninitialized: true,
            cookie: {},
            secret: "INHERITED",
            store: undefined,
        },
        log: "alert",
    },
    [get("/", ctx => "Hello, World!")],
);
