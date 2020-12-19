import CryptoJS from 'crypto-js'

const secretKey = 'wuxjian123454321'

export function encrypt() {
  const key = CryptoJS.enc.Utf8.parse(secretKey)
  const plainText = new Date().getTime() + ''
  let encryptedData = CryptoJS.AES.encrypt(plainText, key, {
    iv: key,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7
  })
  encryptedData = encryptedData.ciphertext.toString()
  return encryptedData
}

export function getAuthHeader() {
  return encrypt()
}
