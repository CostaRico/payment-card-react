const normalizerNumber = (value) => {
  if (!value) {
    return value
  }
  const onlyNums = value.replace(/[^\d]/g, '')
  return onlyNums
}

export default normalizerNumber