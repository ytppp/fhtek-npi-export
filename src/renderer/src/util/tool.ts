/**
 * 删除字符串的重复前缀，例如，“00001”，重复前缀为“0”，删除后为“1”
 * @param str 需要删除重复前缀的字符串
 * @param prefix 删除的前缀
 * @returns 删除重复前缀后的字符串
 */
const delPrefixDuplicates = (str: string, prefix: string): string =>
  str.replace(new RegExp(`^${prefix}*`), '') || prefix

/**
 * 增加字符串的重复前缀，例如，“1”，需要用“0”填充到长度为5，填充后为“00001”
 * @param str 需要增加重复前缀的字符串
 * @param length 填充到多长
 * @param prefix 填充的前缀
 * @returns 填充前缀后的字符串
 */
const addPrefixDuplicates = (str: string, length: number, prefix: string): string => {
  if (str.length >= length) {
    return str
  }
  return str.padStart(length, prefix)
}

/**
 * 进制字符串递增
 * @param numStr 进制字符串
 * @param step 递增值
 * @param afterBase 转换前的进制
 * @param beforeBase 转换后的进制
 * @returns 递增后的字符串
 */
export const stepAddBaseString = (
  numStr: string,
  step: number,
  afterBase = 16,
  beforeBase = 16
): string => (parseInt(numStr, afterBase) + step).toString(beforeBase).toUpperCase()

/**
 * 递增字符串
 * @param str
 * @param step 递增值
 * @param base 进制
 * @param length 填充到多长
 * @param prefix 删除或填充的前缀
 * @returns 递增后的 mac
 */
export const stepAddStr = (str: string, step = 8, base = 16, length = 5, prefix = '0'): string => {
  const strRemoveZero = delPrefixDuplicates(str, prefix)
  const hexStr = stepAddBaseString(strRemoveZero, step, base, base)
  return addPrefixDuplicates(hexStr, length, prefix)
}

/**
 * 生成密码
 * @param length 生成密码长度
 * @param hasSymbol 是否添加符号，默认不添加，为true时添加
 * @returns 生成的密码
 */
export const generateRandomPassword = (length, hasSymbol = false) => {
  let characterSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  if (hasSymbol) {
    characterSet += '!@*_~.?#=+-'
  }
  let password = ''

  for (let i = 0; i < length; i++) {
    let randomIndex = 0
    if (i == 0 && hasSymbol) {
      // 不能以#, =, +, -作为开头
      randomIndex = Math.floor(Math.random() * (characterSet.length - 4))
    } else {
      randomIndex = Math.floor(Math.random() * characterSet.length)
    }
    password += characterSet.charAt(randomIndex)
  }

  return password
}

/**
 * 判断是不是符合要求的整数
 * @param value 判断的值
 * @param min 最小值
 * @param max 最大值
 * @returns 是不是符合要求，符合要求返回true，不符合返回true
 */
export const isValidInteger = (value: any, min: number, max: number) => {
  const reg = /^-?[1-9]\d*$/
  const val = Number(value)
  if (!value.trim().length) {
    return false
  }
  if (!reg.test(value)) {
    return false
  }
  if (min && val < min) {
    return false
  }
  if (max && val > max) {
    return false
  }
  return true
}

/**
 * 是否指定长度的数字字符串
 * @param value 要校验的字符串
 * @param type 进制类型，'hex'：16进制， 'dec'：十进制，默认16进制
 * @param length 指定长度，默认长度5
 * @returns 是不是符合要求，符合要求返回true，不符合返回true
 */
export const isValidNumStr = (value, type: 'hex' | 'dec' = 'hex', length = 5) => {
  const reg = new RegExp(`^[\\d${type === 'hex' ? 'a-f' : ''}]{${length}}$`, 'i')
  return reg.test(value)
}
