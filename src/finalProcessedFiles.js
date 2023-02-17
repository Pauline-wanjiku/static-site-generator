import readFile from "../src/readmdFile.js";
import templatize from "../src/templatize.js";
import getOutPutFileName from "../src/getNewFile.js";
import saveOutputFile from "../src/saveFile.js";

const finalProcessedFile = (fileName, template, outPath) => {
  const newFileName = getOutPutFileName(fileName, outPath);
  const processedFile = readFile(fileName);
  const updatedTemplateFile = templatize(template, {
    content: processedFile.htmlMarked,
    title: processedFile.data.title,
    description: processedFile.data.description,
    quote: processedFile.data.quote,
    date: processedFile.data.date,
    author: processedFile.data.author,
  });
  saveOutputFile(newFileName, updatedTemplateFile);
};
export default finalProcessedFile;
