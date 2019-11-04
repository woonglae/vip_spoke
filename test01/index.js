const fs = require('fs');

let rawdata = fs.readFileSync('./simple.json');
let jsonFile = JSON.parse(rawdata);

let rawgltf = fs.readFileSync('./OutDoor_Meetup.gltf');
let gltfFile = JSON.parse(rawgltf);


var name = jsonFile["name"]

if (gltfFile) {
    let nameOfTwitch = gltfFile["nodes"][501]["extensions"]["MOZ_hubs_components"]["video"]["src"];
    // console.log(nameOfTwitch);
    gltfFile["nodes"][501]["extensions"]["MOZ_hubs_components"]["video"]["src"] = name;
    // console.log(gltfFile["nodes"][501]["extensions"]["MOZ_hubs_components"]["video"]["src"]);
}

fs.writeFileSync('file.gltf', JSON.stringify(gltfFile));


let rawfile = fs.readFileSync('./file.gltf');
let changedFile = JSON.parse(rawfile);

let changedSRC = changedFile["nodes"][501]["extensions"]["MOZ_hubs_components"]["video"]["src"];
console.log(changedSRC);
