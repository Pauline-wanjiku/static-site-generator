import fs from "fs";
import matter from "gray-matter";
import { marked } from "marked";
import path from "path";
import { title } from "process";

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
const myTemplate = fs.readFileSync(
  path.join(path.resolve(), "./templates/index.html"),
  "utf8"
);
//description, quote, date, author

//Read Contents on Template file
const templatize = (
  template,
  { content, title, description, quote, date, author }
) =>
  template
    .replace(/<!--CONTENT-->/g, content)
    .replace(/<!--TITLE-->/g, title)
    .replace(/<!--DESCRIPTION-->/g, description)
    .replace(/<!--QUOTE-->/g, quote)
    .replace(/<!--DATE-->/g, date)
    .replace(/<!--AUTHOR-->/g, author);

console.log(templatize);
const updatedTemplate = templatize(myTemplate, {
  content: processedFile.content,
  title: processedFile.data.title,
  description: processedFile.data.description,
  quote: processedFile.data.quote,
  date: processedFile.data.date,
  author: processedFile.data.author,
});
console.log(updatedTemplate);
