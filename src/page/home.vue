<template>
    <div id="home">
      <div id="container">

      </div>
    </div>
</template>

<script>
  import AMap from 'AMap'
  import AMapUI from 'AMapUI'
  console.log(AMap)
  console.log(AMapUI)
  export default {
      name: 'home',
      data () {
        return {}
      },
      components: {},
      computed: {},
      watch: {},
      methods: {
        init () {
          console.log('加载了')
          const map = new AMap.Map('container', {
            resizeEnable: true,
            zoom: 10
          })
          console.log(map)
          AMap.plugin(['AMap.ToolBar', 'AMap.Scale', 'AMap.OverView', 'AMap.Geolocation', 'AMap.MapType'], function () {
            map.addControl(new AMap.ToolBar())
            map.addControl(new AMap.Scale())
            map.addControl(new AMap.OverView({isOpen: true}))
            map.addControl(new AMap.Geolocation())
            map.addControl(new AMap.MapType())
          })
          AMapUI.load(['ui/misc/PathSimplifier', 'lib/$'], function (PathSimplifier, $) {
            if (!PathSimplifier.supportCanvas) {
              alert('当前环境不支持 Canvas！')
              return
            }
            initPage(PathSimplifier, $)
          })
          function initPage (PathSimplifier, $) {
            let emptyLineStyle = {
              lineWidth: 0,
              fillStyle: null,
              strokeStyle: null,
              borderStyle: null
            }
            console.log(emptyLineStyle)
            let pathSimplifierIns = new PathSimplifier({
              zIndex: 100,
              map: map,
              getPath: function (pathData, pathIndex) {
                return pathData.path
              },
              getHoverTitle: function (pathData, pathIndex, pointIndex) {
                return null
              }
            })
            window.pathSimplifierIns = pathSimplifierIns
            pathSimplifierIns.setData([{
              name: '测试',
              path: [
                [116.405289, 39.904987],
                [113.964458, 40.54664],
                [111.47836, 41.135964],
                [108.949297, 41.670904],
                [106.380111, 42.149509],
                [103.774185, 42.56996],
                [101.135432, 42.930601],
                [98.46826, 43.229964],
                [95.777529, 43.466798],
                [93.068486, 43.64009],
                [90.34669, 43.749086],
                [87.61792, 43.793308]
              ]
            }])
            function onload () {
              pathSimplifierIns.renderLater()
            }
            function onerror (e) {
              alert('图片加载失败！')
            }
            let pathNavigatorStyles = [{
              width: 16,
              height: 24,
              content: 'defaultPathNavigator'
            },
              {
                content: 'none'
              },
              {
                width: 24,
                height: 24,
                content: PathSimplifier.Render.Canvas.getImageContent('@/assets/timg.jpg', onload, onerror)
              },
              {
                width: 16,
                height: 32,
                content: PathSimplifier.Render.Canvas.getImageContent('./imgs/car.png', onload, onerror)
              }
            ]
            function extend (dst) {
              if (!dst) {
                dst = {}
              }
              let slist = Array.prototype.slice.call(arguments, 1)
              for (var i = 0, len = slist.length; i < len; i++) {
                var source = slist[i]
                if (!source) {
                  continue
                }
                for (let prop in source) {
                  if (source.hasOwnProperty(prop)) {
                    dst[prop] = source[prop]
                  }
                }
              }
              return dst
            }
            let idx = 0
            let navg1 = pathSimplifierIns.createPathNavigator(0, {
              loop: true,
              speed: 1000000,
              pathNavigatorStyle: extend({}, pathNavigatorStyles[0])
            })
            navg1.start()

            function changeNavgContent () {
              var pathNavigatorStyle = navg1.getStyleOptions()
              extend(pathNavigatorStyle, pathNavigatorStyles[(++idx) % pathNavigatorStyles.length])
              pathSimplifierIns.renderLater()
            }
            setInterval(changeNavgContent, 500)
          }
        }
      },
      created () {
      },
      mounted () {
        this.init()
      }
  }
</script>

<style lang="less" scoped>
  #home {
    height: 100%;
    #container {
      height: 100%;
      width: 100%;
    }
  }
</style>
