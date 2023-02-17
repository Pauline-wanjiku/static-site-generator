import fs from "fs";
import matter from "gray-matter";
import { marked } from "marked";
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
export default readFile;
