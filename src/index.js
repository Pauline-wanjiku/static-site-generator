import fs from "fs";
import matter from "gray-matter";
import { marked } from "marked";

//read markdown file
const readFile = (fileName) => {
  try {
    const readFile = fs.readFileSync(fileName, "utf8");

    const { content, data } = matter(readFile);
    const htmlMarked = marked(content, data.title);
    console.log(htmlMarked);
    // console.log({ content: content, data: data.title });
    // return { ...content, data };
  } catch (error) {
    console.log(error);
  }
};
// readFile("./markDownPages/homePage.md");

//Read Contents on Template file
