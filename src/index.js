import fs from "fs";
import path from "path";
import finalProcessedFile from "./finalProcessedFiles.js";

//read markdown file

const fileName = path.join(path.resolve(), "./markDownPages/homePage.md");
const outPath = path.join(path.resolve(), "dist");
const myTemplate = fs.readFileSync(
  path.join(path.resolve(), "/templates/template.html"),
  "utf8"
);
finalProcessedFile(fileName, myTemplate, outPath);
