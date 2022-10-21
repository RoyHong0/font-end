<template>
    <div id="cesiumContainer"></div>
</template>

<script setup>
import * as Cesium from 'cesium';
import { onMounted } from 'vue';

onMounted(() => {
    // const viewer = new Cesium.Viewer('cesiumContainer');
    var custom = new Cesium.ArcGisMapServerImageryProvider({
        url: '//services.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer'
    })
    var viewer = new Cesium.Viewer('cesiumContainer', {
        // 不创建baseLayerPicker 小部件
        baseLayerPicker:false,
        // 设置图像提供的程序
        imageryProvider: custom,
        // 设置cesium世界地形   
        terrainProvider: Cesium.createWorldTerrain({
            requestWaterMask:true,
            requestVertexNormals: true,
        })
    });
})
</script>

<style scoped>
html,
body,
#cesiumContainer {
    width: 100vw;
    height: 100vh;
    margin: 0;
    padding: 0;
    overflow: hidden;
}
</style>
