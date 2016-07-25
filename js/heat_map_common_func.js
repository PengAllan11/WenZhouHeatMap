/**
 * Created by peng_an on 2016/7/25.
 */

var attr=[
    {OBJECTID:1, lng:120, lat:29, heat:5,CITY:"丽水"},
    {OBJECTID:2, lng:119.63, lat:28.51, heat:5,CITY:"温州"},
    {OBJECTID:3, lng:120.56, lat:28.51,heat:15,CITY:"金华"}
];


var baseMapDef = {
    center: [120, 29],
    zoom: 7,
    minZoom: 6,
    maxZoom: 11,
    logo: false
};

var heatPointLayerDef = {
    "objectIdField": "OBJECTID",
    "geometryType": "esriGeometryPoint",
    "fields": [{
        "name": "OBJECTID",
        "type": "esriFieldTypeOID",
        "alias": "OBJECTID",
        "sqlType": "sqlTypeOther"
    },{
        "name": "CITY",
        "type": "esriFieldTypeString",
        "alias": "CITY"
    },{
        "name": "lng",
        "type": "esriFieldTypeInteger",
        "alias": "lng"
    },{
        "name": "lat",
        "type": "esriFieldTypeInteger",
        "alias": "lat"
    },{
        "name": "heat",
        "type": "esriFieldTypeInteger",
        "alias": "heat"
    }]
};

var heatPointRenderDef = {
    field: "heat",
    colorStops:[
        { ratio: 0, color: "rgba(255,0,0,0)" },
        { ratio: 0.6, color: "rgb(91, 252, 57)" },
        { ratio: 0.85, color: "rgb(230, 254, 18)"},
        { ratio: 0.95, color: "rgb(255, 0, 0)"}
    ],
    blurRadius: 10,
    maxPixelIntensity: 30,
    minPixelIntensity: 0
};

var heatmapInfoTemDef = {
    title:"${CITY}",
    content:"${*}"
}