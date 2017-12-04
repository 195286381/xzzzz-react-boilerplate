import Map from 'ol/map'
import View from 'ol/view'
import Tile from 'ol/layer/tile'
import XYZ from 'ol/source/xyz'
import proj from 'ol/proj'

// 加载高德地图
const gaodeMapLayer = new Tile({
source: new XYZ({
    url:'http://webrd03.is.autonavi.com/appmaptile?x={x}&y={y}&z={z}&lang=zh_cn&size=1&scale=1&style=8'
}),
projection: 'EPSG:3857'
})

let map

// 处理所有的添加图层
let globalLayers = []

// 添加图层
function addLayer(url, layers, cqlFilter) {
  if (url === '' || layers === '') {
    alert('参数不能为空')
    return
  }
  // create a new Layer
  var newLayer = new Tile({
    source: new Tile(
    {
      url:url,
      params: {
        'LAYERS': layers,
        'TILED': true,
        'CQL_FILTER': cqlFilter,
      },
      serverType: 'geoserver' // 服务器类型
    })
  })
  map.addLayer(newLayer)
  globalLayers.push(newLayer)
}

// 删除所有图层
function removeAllLayers() {
  globalLayers.forEach(function(layer) {
    removeLayer(layer)
  })
}

/**
 * 删除指定传入的图层
 * @param {object} layer
 */
function removeLayer(layer) {
  map.removeLayer(layer)
}

/* 导出地图相关操作的接口 */

const operator = {
  _map: null,
  init: function(options) {
    if (!this._map) {
      this._map = map
    }
    const id = options.id;
    map = new Map({
      target: id,
      layers: [
        gaodeMapLayer
      ],
      view: new View({
        center: proj.fromLonLat([104.02524948120117, 30.57822351518676]),
        zoom: 10,
      }),
    // overlays: [overlay]
    });
  }
}

export default operator
