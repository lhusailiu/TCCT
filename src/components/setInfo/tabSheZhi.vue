<template>
    <div id="tab-she-zhi">
      <div class="shezhiList">
        <ul >
          <li v-for="(item, index) in sheZhiItem" :key="index">
            <span>{{item.label}}</span>
          </li>
        </ul>
      </div>
      <div class="she-content">
        <ul>

          <li>222</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
        </ul>
      </div>
    </div>
</template>

<script>
    export default {
        name: 'tab-she-zhi',
        props: ['sheZhiItem'],
        data () {
            return {
              selectBox: [{id: '001', label: '开机时自动登录'}]
            }
        },
        components: {},
        computed: {},
        methods: {},
        created () {
        },
        mounted () {
        },
        watch: {}
    }
</script>

<style lang="less" scoped>
  #tab-she-zhi {
    position: relative;
    height: 100%;
    width: 100%;
    background-color: #eaeaea;
    .shezhiList {
      height: 100%;
      width: 25%;
      position: fixed;
      ul {

        li {
          height: 40px;
          line-height: 40px;
          font-size: 10px;
          box-sizing: border-box;
          padding-left: 15px;
        }
        li:hover{
          background-color: #fff;
        }
      }
    }
    .she-content {
      width: 75%;
      margin-left: 25%;
      background-color: #fff;
      ul {
        padding-bottom: 50px;
        box-sizing: border-box;
        width: 100%;
        li {
        }
      }
    }
  }
</style>
