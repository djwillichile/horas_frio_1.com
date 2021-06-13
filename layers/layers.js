var wms_layers = [];


        var lyr_GoogleTerrain_0 = new ol.layer.Tile({
            //'title': 'Google Terrain',
            //'type': 'base',
            'opacity': 1.000000,
            
maxResolution:28004.466152261964,

            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=p&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OSMStandard_1 = new ol.layer.Tile({
            //'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 0.650000,
            
maxResolution:28004.466152261964,

            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_2090_2 = new ol.format.GeoJSON();
var features_2090_2 = format_2090_2.readFeatures(json_2090_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2090_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2090_2.addFeatures(features_2090_2);
var lyr_2090_2 = new ol.layer.Vector({
                declutter: true,
                'type': 'base',
                'opacity': .6,
                source:jsonSource_2090_2, 
                style: style_2090_2,
                interactive: true,
    title: '2090<br />\
    <img src="styles/legend/2090_2_0.png" /> <400<br />\
    <img src="styles/legend/2090_2_1.png" /> 400 - 600<br />\
    <img src="styles/legend/2090_2_2.png" /> 600 - 800<br />\
    <img src="styles/legend/2090_2_3.png" /> 800 - 1000<br />\
    <img src="styles/legend/2090_2_4.png" /> 1000 - 1500<br />\
    <img src="styles/legend/2090_2_5.png" /> >1400<br />'
        });
var format_2070_3 = new ol.format.GeoJSON();
var features_2070_3 = format_2070_3.readFeatures(json_2070_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2070_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2070_3.addFeatures(features_2070_3);
var lyr_2070_3 = new ol.layer.Vector({
                declutter: true,
                'type': 'base',
                'opacity': .6,
                source:jsonSource_2070_3, 
                style: style_2070_3,
                interactive: true,
    title: '2070<br />\
    <img src="styles/legend/2070_3_0.png" /> <400<br />\
    <img src="styles/legend/2070_3_1.png" /> 400 - 600<br />\
    <img src="styles/legend/2070_3_2.png" /> 600 - 800<br />\
    <img src="styles/legend/2070_3_3.png" /> 800 - 1000<br />\
    <img src="styles/legend/2070_3_4.png" /> 1000 - 1500<br />\
    <img src="styles/legend/2070_3_5.png" /> >1400<br />'
        });
var format_2050_4 = new ol.format.GeoJSON();
var features_2050_4 = format_2050_4.readFeatures(json_2050_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2050_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2050_4.addFeatures(features_2050_4);
var lyr_2050_4 = new ol.layer.Vector({
                declutter: true,
                'type': 'base',
                'opacity': .6,
                source:jsonSource_2050_4, 
                style: style_2050_4,
                interactive: true,
    title: '2050<br />\
    <img src="styles/legend/2050_4_0.png" /> <400<br />\
    <img src="styles/legend/2050_4_1.png" /> 400 - 600<br />\
    <img src="styles/legend/2050_4_2.png" /> 600 - 800<br />\
    <img src="styles/legend/2050_4_3.png" /> 800 - 1000<br />\
    <img src="styles/legend/2050_4_4.png" /> 1000 - 1500<br />\
    <img src="styles/legend/2050_4_5.png" /> >1400<br />'
        });
var format_2030_5 = new ol.format.GeoJSON();
var features_2030_5 = format_2030_5.readFeatures(json_2030_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2030_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2030_5.addFeatures(features_2030_5);
var lyr_2030_5 = new ol.layer.Vector({
                declutter: true,
                'type': 'base',
                'opacity': .6,
                source:jsonSource_2030_5, 
                style: style_2030_5,
                interactive: true,
    title: '2030<br />\
    <img src="styles/legend/2030_5_0.png" /> <400<br />\
    <img src="styles/legend/2030_5_1.png" /> 400 - 600<br />\
    <img src="styles/legend/2030_5_2.png" /> 600 - 800<br />\
    <img src="styles/legend/2030_5_3.png" /> 800 - 1000<br />\
    <img src="styles/legend/2030_5_4.png" /> 1000 - 1500<br />\
    <img src="styles/legend/2030_5_5.png" /> >1400<br />'
        });
var format_ACTUAL_6 = new ol.format.GeoJSON();
var features_ACTUAL_6 = format_ACTUAL_6.readFeatures(json_ACTUAL_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ACTUAL_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ACTUAL_6.addFeatures(features_ACTUAL_6);
var lyr_ACTUAL_6 = new ol.layer.Vector({
                declutter: true,
                'type': 'base',
                'opacity': .6,
                source:jsonSource_ACTUAL_6, 
                style: style_ACTUAL_6,
                interactive: true,
    title: 'ACTUAL<br />\
    <img src="styles/legend/ACTUAL_6_0.png" /> <400<br />\
    <img src="styles/legend/ACTUAL_6_1.png" /> 400 - 600<br />\
    <img src="styles/legend/ACTUAL_6_2.png" /> 600 - 800<br />\
    <img src="styles/legend/ACTUAL_6_3.png" /> 800 - 1000<br />\
    <img src="styles/legend/ACTUAL_6_4.png" /> 1000 - 1500<br />\
    <img src="styles/legend/ACTUAL_6_5.png" /> >1400<br />'
        });
var format_Comuna_7 = new ol.format.GeoJSON();
var features_Comuna_7 = format_Comuna_7.readFeatures(json_Comuna_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Comuna_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Comuna_7.addFeatures(features_Comuna_7);
var lyr_Comuna_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Comuna_7, 
                style: style_Comuna_7,
                interactive: true,
                //title: '<img src="styles/legend/Comuna_7.png" /> Comuna'
            });
var format_Regin_8 = new ol.format.GeoJSON();
var features_Regin_8 = format_Regin_8.readFeatures(json_Regin_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Regin_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Regin_8.addFeatures(features_Regin_8);
var lyr_Regin_8 = new ol.layer.Vector({
                declutter: true,
                'opacity': 1,
                source:jsonSource_Regin_8, 
                style: style_Regin_8,
                interactive: true,
                //title: '<img src="styles/legend/Regin_8.png" /> Región'
            });

lyr_GoogleTerrain_0.setVisible(true);lyr_OSMStandard_1.setVisible(true);lyr_2090_2.setVisible(false);lyr_2070_3.setVisible(false);lyr_2050_4.setVisible(false);lyr_2030_5.setVisible(false);lyr_ACTUAL_6.setVisible(true);lyr_Comuna_7.setVisible(true);lyr_Regin_8.setVisible(true);
var layersList = [lyr_GoogleTerrain_0,lyr_OSMStandard_1,lyr_2090_2,lyr_2070_3,lyr_2050_4,lyr_2030_5,lyr_ACTUAL_6,lyr_Comuna_7,lyr_Regin_8];
lyr_2090_2.set('fieldAliases', {'Horas frío': 'Horas frío', });
lyr_2070_3.set('fieldAliases', {'Horas frío': 'Horas frío', });
lyr_2050_4.set('fieldAliases', {'Horas frío': 'Horas frío', });
lyr_2030_5.set('fieldAliases', {'Horas frío': 'Horas frío', });
lyr_ACTUAL_6.set('fieldAliases', {'Horas frío': 'Horas frío', });
lyr_Comuna_7.set('fieldAliases', {'Provincia': 'Provincia', 'Comuna': 'Comuna', });
lyr_Regin_8.set('fieldAliases', {'DESC_REGIO': 'DESC_REGIO', });
lyr_2090_2.set('fieldImages', {'Horas frío': 'Range', });
lyr_2070_3.set('fieldImages', {'Horas frío': '', });
lyr_2050_4.set('fieldImages', {'Horas frío': '', });
lyr_2030_5.set('fieldImages', {'Horas frío': '', });
lyr_ACTUAL_6.set('fieldImages', {'Horas frío': 'Range', });
lyr_Comuna_7.set('fieldImages', {'Provincia': 'TextEdit', 'Comuna': 'TextEdit', });
lyr_Regin_8.set('fieldImages', {'DESC_REGIO': 'TextEdit', });
lyr_2090_2.set('fieldLabels', {'Horas frío': 'header label', });
lyr_2070_3.set('fieldLabels', {'Horas frío': 'header label', });
lyr_2050_4.set('fieldLabels', {'Horas frío': 'header label', });
lyr_2030_5.set('fieldLabels', {'Horas frío': 'header label', });
lyr_ACTUAL_6.set('fieldLabels', {'Horas frío': 'header label', });
lyr_Comuna_7.set('fieldLabels', {'Provincia': 'no label', 'Comuna': 'no label', });
lyr_Regin_8.set('fieldLabels', {'DESC_REGIO': 'no label', });
lyr_Regin_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
