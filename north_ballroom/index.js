const fs = require('fs');

var rawJSON = fs.readFileSync('./test.json');
var jsonFile = JSON.parse(rawJSON);
console.log(jsonFile);

var rawGLTF = fs.readFileSync('./North Ballroom.hltf');
var gltfFile = JSON.parse(rawGLTF);

