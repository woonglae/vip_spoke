const fs = require('fs');

// read JSON file which have url we want to change
var rawJSON = fs.readFileSync('./test.json');
var jsonFile = JSON.parse(rawJSON);
if (!jsonFile) {
    console.log("Cannot read JSON");   
}
if (!jsonFile["url"]) {
    console.log("There is no url in JSON");
} else {
    var urlFromJSON = jsonFile["url"];
    console.log("url is " + urlFromJSON);
    
}

// read GLTF file 
var rawGLTF = fs.readFileSync('./North Ballroom.gltf');
var gltfFile = JSON.parse(rawGLTF);
if (!gltfFile) {
    console.log("Cannot read gltf file");
}

// a variable for url object
var modifiedURL;



if (gltfFile) {
    var nodes = gltfFile["nodes"];
    for (var k in nodes) {
        // console.log(nodes[k]);
        
        if (nodes[k]["name"]=="Twitch Stream") {
            var temp = nodes[k]["extensions"]["MOZ_hubs_components"]["video"]["src"];
            nodes[k]["extensions"]["MOZ_hubs_components"]["video"]["src"] = jsonFile["url"];
            console.log("url has changes from " +temp + " to " + jsonFile["url"]);
            break;
        }
    }
} else {
    console.log("GLTF file has not been read");
}

fs.writeFileSync('modified.gltf', JSON.stringify(gltfFile));




