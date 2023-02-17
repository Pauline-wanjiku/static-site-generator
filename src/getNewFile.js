import path from "path";

const getOutPutFileName = (fileName, outPath) => {
  const baseName = path.basename(fileName);
  const newFileName = baseName.slice(0, -3) + ".html";
  const outPutFile = path.join(outPath, newFileName);
  return outPutFile;
};



export default getOutPutFileName;
