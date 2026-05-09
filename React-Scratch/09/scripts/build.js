import fs from "fs-extra"
import path from "path";
import { fileURLToPath } from "url";
import App from "../src/App.js";
import {teas} from "../src/data";
import ReactDOMServer from "react-dom/server"
import React from "react";
// Get _dirname

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

//Define output path
const outputPath = path.join(__dirname,"../dist")
const htmlTemplatePath = path.join(__dirname,"../src/template.html")
const outputHtmlPath = path.join(outputPath , "index.html");

const template = fs.readFileSync(htmlTemplatePath , "utf8");

const appHtml = ReactDOMServer.renderToStaticMarkup(React.createElement(App,{teas}))

const finalHtml = template.replace("<!--app-->" ,appHtml);

//write output HTML file
fs.ensureDirSync(outputPath)
fs.writeFileSync(outputHtmlPath , finalHtml, "utf8")