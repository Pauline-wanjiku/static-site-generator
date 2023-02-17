import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";

const readFile = (fileName) => {
  try {
    const readFile = fs.readFileSync(fileName, "utf8");
    const parsed = matter(readFile);
    const htmlMarked = marked(parsed.content);
    return { ...parsed, htmlMarked };
  } catch (error) {
    console.log(error);
  }
};
const fileName = path.join(path.resolve(), "/markDownPages/homePage.md");
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

export default templatize;
