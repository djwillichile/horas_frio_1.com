var size = 0;
var placement = 'point';

var style_2050_4 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("Horas frío");
    var labelText = "";
    size = 0;
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    if (value >= -9999.000000 && value <= 400.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(199,69,40,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 400.000000 && value <= 600.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(211,146,66,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 600.000000 && value <= 800.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(176,215,147,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 800.000000 && value <= 1000.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(126,185,233,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 1000.000000 && value <= 1500.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(54,95,198,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 1500.000000 && value <= 9999.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(19,22,180,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    };

    return style;
};
