<template>
    <div id="edit-ziliao">
        <div class="top-pic">
          <img :src="topItems.userPicItems" alt="">
          <i class="el-icon-edit"></i>
        </div>
        <div class="ziliao-main">
            <h3>{{topItems.userPicItemName}}</h3>
            <div class="main-list-info">
                <ul>
                  <li><span>账号：</span><span>{{user}}</span></li>
                  <li><span>昵称：</span><span>{{topItems.userPicItemName}}</span></li>
                  <li><span>手机：</span><span>{{allItems.tel}}</span></li>
                  <li><span>邮箱：</span><span>{{allItems.email}}</span></li>
                  <li><span>职业：</span><span>{{allItems.works}}</span></li>
                  <li><span>空间：</span><span>{{topItems.userPicItemName}} {{allItems.kongjian}}</span></li>
                  <li><span>服务：</span><span>{{allItems.services}}</span></li>
                  <li><span>个人：</span><span>{{allItems.age}}  {{allItems.sex}}</span></li>
                  <li><span>所在地：</span><span>{{allItems.city}}</span></li>
                  <li><span>公司：</span><span>{{allItems.gongsi}}</span></li>
                  <li><span>学校：</span><span>{{allItems.school}}</span></li>
                  <li><span>故乡：</span><span>{{allItems.address}}</span></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
  import {getUsers} from '../api/getData'
  import {mapState} from 'vuex'
  export default {
        name: 'edit-ziliao',
        props: [],
        data () {
            return {
              topItems: {},
              allItems: {}
            }
        },
        components: {
        },
        computed: {
          ...mapState(['user'])
        },
        watch: {
        },
        methods: {
          init () {
            this.topItems = this.$route.params
            console.log(this.topItems)
            this.getUsers()
          },
          getUsers () {
            getUsers({}).then((res) => {
              this.allItems = res.nature[0]
              console.log(this.allItems)
            })
          }
        },
        created () {
        },
        mounted () {
          this.init()
        }
    }
</script>

<style lang="less" >
  #edit-ziliao {
    background-color: #fff;
    height: 100%;
    .top-pic {
      position: relative;
      height: 360px;
      img {
        height: 100%;
        width: 100%;
      }
      i {
        border-radius: 50%;
        height: 60px;
        width: 60px;
        background-color: #2c73ff;
        color: #fff;
        font-size: 30px;
        text-align: center;
        line-height: 60px;
        position: absolute;
        right: 30px;
        bottom:-30px;

      }
    }
    .ziliao-main {
      background-color: #fff;
      width: 100%;
      height: 100%;
      padding: 20px 40px 50px 40px;
      box-sizing: border-box;
      h3 {
        text-align: center;
      }
      .main-list-info {
        padding-top: 20px;
        font-size: 12px;
        ul {
          li{
            width: 100%;
            span {
              display: inline-block;
              height: 30px;
              line-height: 30px;
              width: 40%;
              text-align: right;
            }
            span:nth-of-type(even) {
              text-align: left;
              width: 60%;
            }
          }
        }
      }
    }
  }
</style>
