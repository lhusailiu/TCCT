<template>
  <div id="mainList" ref="mainList">
  </div>
</template>

<script>
  import * as THREE from 'three'
  export default {
    name: 'mainList',
    components: {},
    data () {
      return {
        renderer: null,
        camera: null,
        scene: null,
        light: null,
        cube: null,
        geometry: null,
        material: null,
        line: null,
        line1: null,
        line2: null,
        mesh: null,
        num: 0,
        color: null,
        r: 10,
        x: 14,
        y: 14,
        a: null,
        b: null,
        size: null,
        particles: null,
        stats: null
      }
    },
    computed: {},
    watch: {},
    methods: {
      init () {
        this.initThree()
        this.initCamera()
        this.initScene()
        this.initLight()
        this.initObject()
        this.renderers()
      },
      initThree () {
        this.renderer = new THREE.WebGLRenderer({
          antialias: true
        })
        this.renderer.setSize(window.innerWidth, window.innerHeight)
        let mainList = this.$refs.mainList
        mainList.appendChild(this.renderer.domElement)
        // this.stats = new Stats()
        // mainList.appendChild(this.stats.dom)
        // this.renderer.setClearColor(0xFFFFFF, 1.0)
      },
      initCamera () {
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000)
        this.camera.position.x = 0
        this.camera.position.y = 0
        this.camera.position.z = 50
        this.camera.up.x = 0
        this.camera.up.y = 0
        this.camera.up.z = 0
        // this.camera.lookAt({
        //   x: 0,
        //   y: 0,
        //   z: 0
        // })
      },
      initScene () {
        this.scene = new THREE.Scene()
        this.scene.fog = new THREE.FogExp2(0x000000, 0.0007)
      },
      initLight () {
        console.log(THREE.AmbientLight)
        this.light = new THREE.DirectionalLight(0xFF00FF, 1.0, 0)
        this.light.position.set(100, 100, 200)
        // this.light = new THREE.AmbientLight(0xFFFFFF)
        // this.light.position.set(100, 1000, 200)
        // this.scene.add(this.light)
        // console.log(THREE.PointLight)
        // this.light = new THREE.PointLight(0x00FF00)
        // this.light.position.set(0, 0, 300)
        this.scene.add(this.light)
      },
      initObject () {
        // 立方体物体
        // this.geometry = new THREE.BoxGeometry(1.6, 1.6, 1.6)
        // this.material = new THREE.MeshBasicMaterial({color: 11397866})
        // this.cube = new THREE.Mesh(this.geometry, this.material)
        // this.scene.add(this.cube)
        // 定义一条直线物体
        // this.geometry = new THREE.Geometry()
        // this.material = new THREE.LineBasicMaterial({vertexColors: true})
        // let color1 = new THREE.Color(11397866)
        // let color2 = new THREE.Color(0xFF0000)
        // let p1 = new THREE.Vector3(-100, 0, 100)
        // let p2 = new THREE.Vector3(100, 0, -100)
        // this.geometry.vertices.push(p1)
        // this.geometry.vertices.push(p2)
        // this.geometry.colors.push(color1, color2)
        // this.line = new THREE.Line(this.geometry, this.material, THREE.LinePieces)
        // this.scene.add(this.line)
        // 定义方格坐标
        //   this.geometry = new THREE.Geometry()
        //   this.geometry.vertices.push(new THREE.Vector3(-500, 0, 0))
        //   this.geometry.vertices.push(new THREE.Vector3(500, 0, 0))
        //   for (var i = 0; i <= 20; i++) {
        //     this.line1 = new THREE.Line(this.geometry, new THREE.LineBasicMaterial({color: 11397866, opacity: 0.2}))
        //     this.line1.position.z = (i * 50) - 500
        //     this.scene.add(this.line1)
        //     this.line2 = new THREE.Line(this.geometry, new THREE.LineBasicMaterial({color: 'red', opacity: 0.2}))
        //     this.line2.position.x = (i * 50) - 500
        //     this.line2.rotation.y = 90 * Math.PI / 180
        //     this.scene.add(this.line2)
        //   }
        //  定义场景
        // this.geometry = new THREE.CylinderGeometry(100, 150, 400)
        // this.material = new THREE.MeshLambertMaterial({color: 0xFFFF00})
        // console.log(THREE.Mesh)
        // this.mesh = new THREE.Mesh(this.geometry, this.material)
        // console.log(THREE.Vector3)
        // let Position = new THREE.Vector3(0, 0, 0)
        // console.log(Position)
        // this.mesh.position.x = Position.x
        // this.mesh.position.y = Position.y
        // this.mesh.position.z = Position.z
        // this.scene.add(this.mesh)
        // this.geometry = new THREE.CylinderBufferGeometry(0.5, 0.5, 2, 3)
        // this.material = new THREE.MeshBasicMaterial({color: 11397866})
        // this.mesh = new THREE.Mesh(this.geometry, this.material)
        // this.scene.add(this.mesh)
        this.geometry = new THREE.Geometry()
        for (let i = 0; i < 20000; i++) {
          let vertex = new THREE.Vector3()
          vertex.x = Math.random() * 2000 - 1000
          vertex.y = Math.random() * 2000 - 1000
          vertex.z = Math.random() * 2000 - 1000
          this.geometry.vertices.push(vertex)
        }
        let parameters = [[[1, 1, 0.5], 5], [[0.95, 1, 0.5], 4], [[0.90, 1, 0.5], 3], [[0.85, 1, 0.5], 2], [[0.80, 1, 0.5], 1]
        ]
        for (let i = 0; i < parameters.length; i++) {
          this.color = parameters[i][0]
          this.size = parameters[i][1]
          this.materials[i] = new THREE.PointsMaterial({size: this.size})
          this.particles = new THREE.Points(this.geometry, this.materials[i])
          this.particles.rotation.x = Math.random() * 6
          this.particles.rotation.y = Math.random() * 6
          this.particles.rotation.z = Math.random() * 6
          this.scene.add(this.particles)
        }
      },
      renderers () {
      requestAnimationFrame(this.renderers)
        // this.num++
        // this.a = Math.sin(this.num * Math.PI / 180) * this.r
        // this.b = Math.cos(this.num * Math.PI / 180) * this.r
        // this.mesh.position.x = this.b + this.x
        // this.mesh.position.y = this.a + this.y
        // this.mesh.rotation.y += 0.05
      // 立方体
      // this.cube.rotation.x += 0.05
      // this.cube.rotation.y += 0.05
      // this.cube.rotation.z += 0.05
      // 直线
      // this.line.rotation.x += 0.05
      // this.line.rotation.y += 0.05
      // this.line.rotation.z += 0.05
      // 坐标格子
      // this.line2.rotation.y += 0.05
      // 定义场景
      // this.mesh.rotation.y += 0.05
      // this.mesh.rotation.z += 0.05
      // this.mesh.rotation.z += 0.05
      //   this.mesh.position.x += 0.01
        // if (this.mesh.position.x < -3) {
        //   this.mesh.position.x += 0.01
        // }
      //   this.mesh.position.y += 1
        this.renderer.render(this.scene, this.camera)
      },
      dragover (event) {
        console.log(event)
      },
      dragenter (event) {
        console.log(event)
      },
      dragleave (event) {
        console.log(event)
      },
      drop (event) {
        console.log(event)
      },
      getClick (event) {
        console.log('被点击了')
        console.log(event)
      },
      onMouseDown (event) {
        console.log(event)
      }
    },
    mounted () {
      this.init()
      window.addEventListener('dragover', this.dragover, false)
      window.addEventListener('dragenter', this.dragenter, false)
      window.addEventListener('dragleave', this.dragleave, false)
      window.addEventListener('drop', this.drop, false)
      this.$refs.mainList.addEventListener('click', this.getClick, false)
      this.$refs.mainList.addEventListener('mousedown', this.onMouseDown, false)
    }
  }
</script>

<style lang="less" scoped>
  #mainList {
  }
</style>
