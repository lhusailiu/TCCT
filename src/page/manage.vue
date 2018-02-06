<template>

    <div id="manage">
        <my-header :userItem="usersPro"></my-header>
          <keep-alive>
            <router-view></router-view>
          </keep-alive>
        <my-footer @getCHuangkou="getItem"></my-footer>
  </div>
</template>

<script>
  import myHeader from './headert'
  import myFooter from './myFooter-model'
  import {friends} from '../api/getData'

  export default {
    name: 'manage',
    data () {
      return {
        getChuangk: {},
        usersPro: ''
      }
    },
    components: {
      myHeader,
      myFooter
    },
    methods: {
      getItem (val) {
        this.getChuangk = val
      },
      getPicUser () {
        friends({}).then((res) => {
          if (res.flag) {
            this.usersPro = res.messageInfo[15]
            this.$store.commit('saveAdmintInfo', {userPic: this.usersPro.url})
          }
        })
      }
    },
    created () {
      this.getPicUser()
    }
  }
</script>

<style lang="less" >
  #manage {
    height: 100%;
    position: relative ;
    padding-top: 60px;
    box-sizing: border-box;
    padding-bottom: 50px;
    /*background-color: #eaeaea;*/
    /*padding-bottom: 50px;*/
  }
</style>
