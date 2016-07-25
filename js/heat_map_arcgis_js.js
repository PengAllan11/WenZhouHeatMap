/**
 * Created by peng_an on 2016/7/25.
 */

document.write("<script language='javascript' src='../js/heat_map_common_func.js'></script>");

require([
    "dojo/dom",
    "dojo/on",
    "esri/map",
    "esri/layers/FeatureLayer",
    "esri/layers/ArcGISTiledMapServiceLayer",
    "esri/InfoTemplate",
    "esri/SpatialReference",
    "esri/geometry/Point",
    "esri/Color",
    "esri/graphic",
    "esri/layers/GraphicsLayer",
    "esri/renderers/HeatmapRenderer",
    "dojo/domReady!"
], function(dom, on, Map,FeatureLayer,ArcGISTiledMapServiceLayer, InfoTemplate,
            SpatialReference,Point,Color, Graphic,GraphicsLayer,HeatmapRenderer) {
    //create map and add layer
    map = new Map("map", baseMapDef);
    var baseMap = new ArcGISTiledMapServiceLayer("http://192.168.0.235:6080/arcgis/rest/services/Zhejiang_background/MapServer");
    map.addLayer(baseMap);

    var heatmapRenderer = new HeatmapRenderer(heatPointRenderDef);
    var heatmapInfoTem = new InfoTemplate(heatmapInfoTemDef);
    var featureCollection = {
        layerDefinition: heatPointLayerDef,
        featureSet: null
    };
    var heatmapLayer = new FeatureLayer(featureCollection,{
        infoTemplate: heatmapInfoTem
    });
    heatmapLayer.setRenderer(heatmapRenderer);
    map.addLayer(heatmapLayer);

    var graphic = new Array();
    for(var i = 0;i<attr.length;i++){
        graphic[i] = new Graphic(new Point(attr[i].lng, attr[i].lat, map.spatialReference),null,attr[i]);
    }

    map.on("load", function() {
        for(var i = 0;i<attr.length;i++){
            heatmapLayer.applyEdits([graphic[i]]);
        }
        console.log(heatmapLayer);
    });
});