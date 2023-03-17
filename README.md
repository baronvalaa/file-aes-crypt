# file-crypt

A tool for encrypting or decrypting files using AES.


## Install
```bash
npm i file-crypt --save
//or 
yarn add file-crypt
```


## Example
```javascript
const FileCrypt = require("file-aes-crypt");

async function test() {
  try {
    const fc = new FileCrypt("fage");
    let result = await fc.encrypt("package.json", "./tmp/package-aes.json");
    console.log("encrypt ok");
    result = await fc.decrypt("./tmp/package-aes.json", "./temp/package2.json");
    console.log("decrypt ok");
  } catch (e) {
    console.log(e);
  }
}

test().then((t) => {});

```


### APIs

```javascript
    /// encrypt file 
    /// @fileFrom=source file path
    /// @fileTo=dist encrypt file path
    encrypt(fileFrom:string, fileTo:string):Promise<void>;

    /// decrypt file 
    /// @fileFrom=source encrypt file path
    /// @fileTo=dist source file path
    decrypt(fileFrom:string, fileTo:string):Promise<void>;
    
```
