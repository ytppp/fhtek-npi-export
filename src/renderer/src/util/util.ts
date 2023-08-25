const delPrefixDuplicates = (str, prefix) => str.replace(new RegExp(`^${prefix}*`), '') || 0

const addPrefixDuplicates = (str, length, prefix) => {
  if (str.length >= length) {
    return str
  }
  return str.padStart(length, prefix)
}

const stepAddHexString = (numStr, step) => (parseInt(numStr, 16) + step).toString(16).toUpperCase()

export const stepAddMac = (appendStr) => {
  const strRemoveZero = delPrefixDuplicates(appendStr, '0')
  const hexStr = stepAddHexString(strRemoveZero, 8)
  return addPrefixDuplicates(hexStr, 5, '0')
}
