const within = (list: Array<string>) => {
  return `in (${list.map((item) => `"${item}"`).join(',')})`
}

export default within
