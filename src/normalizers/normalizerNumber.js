const normalizerNumber = (value) => {
  if (!value) {
    return value
  }

  const onlyNums = value ? value.replace(/[^\d]/g, '') : value;
  return onlyNums
}

export default normalizerNumber