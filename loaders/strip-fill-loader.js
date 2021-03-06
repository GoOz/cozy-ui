const isIcon = function (resourcePath) {
  return resourcePath.indexOf('/icon-') > -1 && resourcePath.indexOf('-white') === -1
}

module.exports = function (source) {
  this.cacheable(true)
  if (!isIcon(this.resourcePath)) {
    // Bail out if it is not an icon
    return source
  }
  const replaced = source
    .replace('fill="#FFF"', '')
    .replace('fill="#FFFFFF"', '')
    .replace('fill=\'#FFF\'', '')
    .replace('fill=\'#FFFFFF\'', '')
  return replaced
}
