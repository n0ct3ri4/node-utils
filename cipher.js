// import crypto and fs
const crypto = require("crypto");
const fs = require("fs");

module.exports = {
  // cipher file with password
  cipher(file, password) {
    const cipher = crypto.createCipher("aes-256-cbc", password);
    const input = fs.createReadStream(file);
    const output = fs.createWriteStream(file + ".enc");
    input
      .pipe(cipher)
      .pipe(output)
      .on("finish", () => {
        console.log("File encrypted");

        // delete original file
        fs.unlinkSync(file);
      });
  },

  // decipher file with password
  decipher(file, password) {
    const decipher = crypto.createDecipher("aes-256-cbc", password);
    const input = fs.createReadStream(file);
    const output = fs.createWriteStream(file.replace(".enc", ""));
    input
      .pipe(decipher)
      .pipe(output)
      .on("finish", () => {
        console.log("File decrypted");

        // delete encrypted file
        fs.unlinkSync(file);
      });
  },
};
