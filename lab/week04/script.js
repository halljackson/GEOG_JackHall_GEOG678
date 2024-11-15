// This is my first attempt at using JS
// Let's see how this goes
// Wish me luck

function Run() {
    console.log(theJSON);

    var topLeftPoint = findTopLeft(theJSON.data);
    var topRightPoint = findTopRight(theJSON.data);
    var bottomLeftPoint = findBottomLeft(theJSON.data);
    var bottomRightPoint = findBottomRight(theJSON.data);

    var boundingBox = {
        topLeft: topLeftPoint,
        topRight: topRightPoint,
        bottomLeft: bottomLeftPoint,
        bottomRight: bottomRightPoint
    };

    console.log("Bounding box computed for jacksonhall@tamu.edu: ");
    console.log(boundingBox);
}


function findTopLeft(data) {
    return data.reduce((min, point) => 
        (point.lat < min.lat && point.lon < min.lon) ? point : min, data[0]);
}

function findTopRight(data) {
    return data.reduce((min, point) => 
        (point.lat < min.lat && point.lon > min.lon) ? point : min, data[0]);
}

function findBottomLeft(data) {
    return data.reduce((max, point) => 
        (point.lat > max.lat && point.lon < max.lon) ? point : max, data[0]);
}

function findBottomRight(data) {
    return data.reduce((max, point) => 
        (point.lat > max.lat && point.lon > max.lon) ? point : max, data[0]);
}

