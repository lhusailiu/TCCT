<template>
  <div id="chuangkou">
    <div class="background-img" v-if="isBgImgas">
    </div>
    <div class="chuangkou-title" v-if="isTitels">
      <h3>{{param.NAME}} </h3>
      <div class="right-shi">
        <i class="fa fa-video-camera"></i>
        <i class="fa fa-volume-control-phone"></i>
        <i class="fa fa-arrows"></i>
        <i class="fa fa-gear"></i>
      </div>
    </div>
    <div class="chuangkou-content" v-if="isContents">
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    name: 'chuangkou',
    props: ['userItem'],
    data () {
      return {
        param: {},
        isTitel: false,
        isContent: false,
        isBgImga: true
      }
    },
    components: {
    },
    computed: {
      ...mapState(['isBgImgas', 'isTitels', 'isContents'])
    },
    watch: {
      userItem: {
        handler (newValue) {
          if (newValue) {
            this.getBackGoundImg()
            this.param = newValue
          }
        },
        deep: true
      }
    },
    methods: {
      getBackGoundImg () {
        if (this.param) {
          this.$store.commit('saveBbInfo', {isBgImgas: false, isTitels: true, isContents: true})
        }
      },
      getRoute () {
      }
    },
    created () {
    },
    mounted () {
      this.getRoute()
    }
  }
</script>

<style lang="less" scoped>
  #chuangkou {
    height: 100%;
    .chuangkou-title {
      border-bottom: 1px solid #42ecff;
      height: 50px;
      display: flex;
      justify-content: space-between;
      padding: 0px 20px;
      h3 {
        height: 50px;
        line-height: 50px;
        font-size: 12px;
        box-sizing: border-box;
        /*float: left;*/
      }
      .right-shi {
        /*float: right;*/
        line-height: 50px;
        i {
          font-size: 18px;
          color: #c1c1c1;
          margin: 0px 2px;
        }
      }
    }
    .chuangkou-content {

    }
    .background-img {
      height: 100%;
      background-image: url('../../assets/111.jpg');
      background-size: cover;
    }
  }
</style>
