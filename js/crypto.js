// crypto.js
import { JWT_SECRET } from './jwt_token.js';

// AES 암/복호화 함수
export function encodeByAES256(key, data) {
  const cipher = CryptoJS.AES.encrypt(
    data,
    CryptoJS.enc.Utf8.parse(key),
    { iv: CryptoJS.enc.Utf8.parse(key.slice(0, 16)),  // IV는 16바이트
      padding: CryptoJS.pad.Pkcs7,
      mode: CryptoJS.mode.CBC
    }
  );
  return cipher.toString();
}

export function decodeByAES256(key, data) {
  const bytes = CryptoJS.AES.decrypt(
    data,
    CryptoJS.enc.Utf8.parse(key),
    { iv: CryptoJS.enc.Utf8.parse(key.slice(0, 16)),
      padding: CryptoJS.pad.Pkcs7,
      mode: CryptoJS.mode.CBC
    }
  );
  return bytes.toString(CryptoJS.enc.Utf8);
}

// encrypt_text/decrypt_text 에서는 `this` 대신 직접 호출
export function encrypt_text(password) {
  const k = JWT_SECRET.padEnd(32, ' ');   // 예시: 비밀키 재활용
  const eb = encodeByAES256(k, password);
  console.log('encrypted:', eb);
  return eb;
}

export function decrypt_text(cipherText) {
  const k = JWT_SECRET.padEnd(32, ' ');
  const pt = decodeByAES256(k, cipherText);
  console.log('decrypted:', pt);
  return pt;
}
