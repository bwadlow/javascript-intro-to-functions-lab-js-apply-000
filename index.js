function shout (str) {
  return str.toUpperCase()
}

function whisper (str) {
  return str.toLowerCase()
}

function  logShout(str) {
  console.log(str.toUpperCase())
}

function logWhisper(str) {
  console.log(str.toLowerCase())
}

function sayHiToGrandma (str) {
  return str === 'I love you, Grandma.' ? 'I love you, too.' : str === str.toUpperCase() ?  'YES INDEED!' : 'I can\'t hear you!'
}