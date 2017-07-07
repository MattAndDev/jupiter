// generates random Ipv4
module.exports = function () {
  randomByte = function () {
    return Math.round(Math.random() * 256)
  }
  let ip = randomByte() + '.' + randomByte() + '.' + randomByte() + '.' + randomByte()
  return ip
}
