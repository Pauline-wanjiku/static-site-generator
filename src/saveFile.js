import { mkdirp } from "mkdirp";
import path from "path";
import fs from "fs";

const saveOutputFile = (fileName, contents) => {
  const dir = path.dirname(fileName);
  mkdirp.sync(dir);
  fs.writeFileSync(fileName, contents);
};

export default saveOutputFile;
