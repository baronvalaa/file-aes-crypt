const { createReadStream, createWriteStream, existsSync } = require("fs");
const { Encrypt, Decrypt } = require("node-aescrypt");
const path = require("path");
const makeDir = require("make-dir");

module.exports = class FileCrypt {
  constructor(key) {
    this.key = key || "fage";
  }
  encrypt(fileFrom, fileTo) {
    return new Promise(async (resolve, reject) => {
      if (!existsSync(fileFrom)) {
        return reject(fileFrom + " not found.");
      }
      const dir = path.dirname(fileTo);
      if (!existsSync(dir)) {
        await makeDir(dir);
      }
      const from = createReadStream(fileFrom);
      const to = createWriteStream(fileTo);
      from
        .pipe(new Encrypt(this.key))
        .pipe(to)
        .on("error", reject)
        .on("finish", resolve);
    });
  }
  decrypt(fileFrom, fileTo) {
    return new Promise(async (resolve, reject) => {
      if (!existsSync(fileFrom)) {
        return reject(fileFrom + " not found.");
      }
      const dir = path.dirname(fileTo);
      if (!existsSync(dir)) {
        await makeDir(dir);
      }
      const from = createReadStream(fileFrom);
      const to = createWriteStream(fileTo);
      from
        .pipe(new Decrypt(this.key))
        .pipe(to)
        .on("error", reject)
        .on("finish", resolve);
    });
  }
};
