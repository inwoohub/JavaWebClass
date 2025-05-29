// 1) SECRET 문자열 → Uint8Array (정확히 32바이트)
const SECRET = 'my_very_secret_key_32_bytes_len!!';
const enc = new TextEncoder();
const raw = enc.encode(SECRET).slice(0, 32);

// 2) AES-GCM 키로 import
const keyPromise = crypto.subtle.importKey(
  'raw',
  raw,
  { name: 'AES-GCM' },
  false,
  ['encrypt','decrypt']
);

// 3) 암호화
export async function encryptSession(plainText) {
  const key = await keyPromise;
  const iv  = crypto.getRandomValues(new Uint8Array(12));
  const ct  = await crypto.subtle.encrypt(
    { name: 'AES-GCM', iv },
    key,
    enc.encode(plainText)
  );
  const toB64 = buf => btoa(String.fromCharCode(...new Uint8Array(buf)));
  return `${toB64(iv)}:${toB64(ct)}`;
}

// 4) 복호화
export async function decryptSession(data) {
  const [ivB64, ctB64] = data.split(':');
  const fromB64 = s => Uint8Array.from(atob(s), c=>c.charCodeAt(0));
  const iv  = fromB64(ivB64);
  const ct  = fromB64(ctB64);
  const key = await keyPromise;
  try {
    const buf = await crypto.subtle.decrypt(
      { name: 'AES-GCM', iv },
      key,
      ct
    );
    return new TextDecoder().decode(buf);
  } catch (e) {
    console.error('복호화 실패(인증 태그 검증 실패):', e);
    throw e;
  }
}
