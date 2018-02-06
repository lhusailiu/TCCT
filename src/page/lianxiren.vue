<template>
      <div id="lianxiren" ref="lianxiren">
        <a href="http://threejs.org" target="_blank" rel="noopener">three.js</a> - procedural 3D text by <a href="http://www.lab4games.net/zz85/blog" target="_blank" rel="noopener">zz85</a> &amp; alteredq
        <br/>type to enter new text, drag to spin the text
        <br/><span class="button" id="color">change color</span>,
        <span class="button" id="font">change font</span>,
        <span class="button" id="weight">change weight</span>,
        <span class="button" id="bevel">change bevel</span>
        <a id="permalink" href="#" ref='permalinks'>permalink</a>
      </div>
</template>

<script>
    export default {
        name: 'lianxiren',
        data () {
          return {}
        },
        components: {},
        computed: {},
        watch: {},
        methods: {
          init () {}
        },
        created () {
        },
        mounted () {
          this.init()
        }
    }
</script>

<style lang="less" scoped>
  #lianxiren {
    position: absolute;
    top: 60px;
    width: 100%;
    text-align: center;
    z-index: 100;
    display:block;
  }
</style>
