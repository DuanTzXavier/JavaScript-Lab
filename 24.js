const crypto = require('crypto')

const hamc = crypto.createHmac('sha256', 'secret-key')

hamc.update('Hello, world!')
hamc.update('Hello, nodejs!')

console.log(hamc.digest('hex'))
