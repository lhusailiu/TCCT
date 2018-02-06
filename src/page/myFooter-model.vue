<template>
    <div>
      <div id="myFooterMode">
        <mt-tabbar>
          <mt-tab-item id="tab1">
            <i class="fa fa-comments"  @click="getComments"></i>
          </mt-tab-item>
          <mt-tab-item id="tab2">
            <i class="fa  fa-user-circle" @click="getUsers"></i>
          </mt-tab-item>
          <mt-tab-item id="tab3">
            <i class="fa fa-bandcamp" @click="getBandcamp"></i>
          </mt-tab-item>
          <mt-tab-item id="tab4">
            <i class="fa fa-user-o" @click="getMainList"></i>
          </mt-tab-item>
        </mt-tabbar>
      </div>
    </div>
</template>

<script>
    export default {
        name: 'my-footer-model',
        data () {
            return {}
        },
        components: {},
        computed: {},
        watch: {},
        methods: {
          getComments () {
            this.$router.push({
              name: 'comment'
            })
            this.$store.commit('saveBbInfo', {
              isBgImgas: true,
              isTitels: false,
              isContents: false,
              isChuangkou: true,
              isFriendKou: false,
              isAllFriend: false
            })
            console.log(1)
          },
          getBandcamp () {
            this.$router.push({
              name: 'news'
            })
          },
          getUsers () {
            this.$router.push({
              name: 'lianxiren'
            })
          },
          getMainList () {
            this.$router.push({
              name: 'mainList'
            })
          }
        },
        created () {
        },
        mounted () {
        }
    }
</script>

<style lang="less">
  #myFooterMode {
    position: fixed;
    height: 50px;
    bottom: 0px;
    width: 100%;
    left: 0px;
    border-top: 1px solid #15fcff;
    /*background-color: #ff5d42;*/
    z-index: 999;
    .mint-tabbar {
      height: 100%;
      padding: 0;
      .mint-tab-item {
        background-color: #fff;
        padding: 0;
        line-height: 50px;
        i {
          font-size: 26px;
          line-height: 50px;
          color: #42ecff;
          width: 100%;
        }
      }
    }
  }
</style>
