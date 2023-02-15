import fs from "fs";
import matter from "gray-matter";
import { marked } from "marked";
import { mkdirp } from "mkdirp";
import glob from "glob"
import path from "path";

//read markdown file
const readFile = (fileName) => {
  try {
    const readFile = fs.readFileSync(fileName, "utf8");
    const parsed = matter(readFile);
    // console.log(parsed);
    const htmlMarked = marked(parsed.content);
    // console.log(htmlMarked);
    return { ...parsed, htmlMarked };
  } catch (error) {
    console.log(error);
  }
};
const fileName = path.join(path.resolve(), "./markDownPages/homePage.md");
const processedFile = readFile(fileName);

//Read Contents on Template file
const myTemplate = fs.readFileSync(
  path.join(path.resolve(), "./templates/template.html"),
  "utf8"
);
//inject the md content to the new template.
const templatize = (
  template,
  { content, title, description, quote, date, author }
) =>
  template
    .replace(/<!--CONTENT-->/g, content)
    .replace(/<!-- TITLE -->/g, title)
    .replace(/<!--DESCRIPTION-->/g, description)
    .replace(/<!--QUOTE-->/g, quote)
    .replace(/<!--DATE-->/g, date)
    .replace(/<!--AUTHOR-->/g, author);

console.log(templatize);
const updatedTemplateFile = templatize(myTemplate, {
  content: processedFile.htmlMarked,
  title: processedFile.data.title,
  description: processedFile.data.description,
  quote: processedFile.data.quote,
  date: processedFile.data.date,
  author: processedFile.data.author,
});
// console.log(updatedTemplateFile);
//get the file
const getOutPutFileName = (fileName, outPath) => {
  const baseName = path.basename(fileName);
  const newFileName = baseName.slice(0, -3) + ".html";
  const outPutFile = path.join(outPath, newFileName);
  console.log(baseName);
  console.log(newFileName);
  console.log(outPutFile);
  return outPutFile;
};
const outPath = path.join(path.resolve(), "dist");
console.log(outPath);
const newTemplate = getOutPutFileName(fileName, outPath); //save file
const saveOutputFile = (fileName, contents) => {
  const dir = path.dirname(fileName);
  mkdirp.sync(dir);
  fs.writeFileSync(fileName, contents);
};
saveOutputFile(newTemplate, updatedTemplateFile);
//each file that has a md extension
