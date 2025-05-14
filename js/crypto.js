function encodeByAES256(key, data){ //
    const cipher = CryptoJS.AES.encrypt(data, CryptoJS.enc.Utf8.parse(key), {
    iv: CryptoJS.enc.Utf8.parse(""), // IV 초기화 벡터
    padding: CryptoJS.pad.Pkcs7, // 패딩
    mode: CryptoJS.mode.CBC // 운영 모드
    });
    return cipher.toString();
}

function decodeByAES256(key, data){
    const cipher = CryptoJS.AES.decrypt(data, CryptoJS.enc.Utf8.parse(key), {
    iv: CryptoJS.enc.Utf8.parse(""),
    padding: CryptoJS.pad.Pkcs7,
    mode: CryptoJS.mode.CBC
    });
    return cipher.toString(CryptoJS.enc.Utf8);
}
    

function encrypt_text(password) {
    const k = "key".padEnd(32, " ");
    const eb = this.encodeByAES256(k, password);
    console.log("encrypted:", eb);
    return eb;
  }
  
function decrypt_text(eb) {
const k = "key".padEnd(32, " ");
const b = this.decodeByAES256(k, eb);
console.log("decrypted:", b);
return b;
}
  