const FileCrypt = require("./index.js");

async function test() {
  try {
    const fc = new FileCrypt("chenbinfa");
    let result = await fc.encrypt("package.json", "./tmp/package-aes.json");
    console.log("encrypt ok");
    result = await fc.decrypt("./tmp/package-aes.json", "./temp/package2.json");
    console.log("decrypt ok");
  } catch (e) {
    console.log(e);
  }
}

test().then((t) => {});
