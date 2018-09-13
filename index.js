hex_dec = require('./hex-dec');
jsSHA = require("jssha");
let key = '293d5d2ddd365f54759283a8097ab2640cbe6f8864adc2b1b31e65c14c999f04';
let message = 'ClientSeedForDiceSites.com-0';
var shaObj = new jsSHA("SHA-512", "TEXT");
shaObj.setHMACKey(key, "TEXT");
shaObj.update(message);

var hmac = shaObj.getHMAC('HEX');
let hexNumber = hmac.substring(0, 8);
let theFirstNumber = hex_dec.hexToDec(hexNumber);
console.log(theFirstNumber);
const MAX = 4294967295;
let final = theFirstNumber/MAX;
console.log(Math.round(final * 100));