<template>
      <div id="comments">
          <div class="comments-left">
            <el-tabs v-model="activeName" @tab-click="handleClick">
              <el-tab-pane label="消息" name="first">
                <tab-haoyou-modal :friendData="friendList" @rightClick="yuoClick" @getparams="getParamsData" ></tab-haoyou-modal>
              </el-tab-pane>
              <el-tab-pane label="好友" name="second">
                <tab-groud-friend-modal></tab-groud-friend-modal>
              </el-tab-pane>
              <el-tab-pane label="多人聊天" name="third">角色管理</el-tab-pane>
            </el-tabs>
          </div>
          <div class="comments-right">
            <chuang-kou :userItem="paramsItem" v-show="isChuangkou">{{isChuangkou}}</chuang-kou>
            <friend-kou :userItem="paramsItem" v-show="isFriendKou">{{isFriendKou}}</friend-kou>
            <all-friend :userItem="paramsItem" v-show="isAllFriend">{{isAllFriend}}</all-friend>
        </div>
          <div class="meau" ref="userMeau" v-show="isMeau">
            <ul>
              <li v-for="(temp, indexs) in meauData" :key="indexs">
                {{temp.content}}
              </li>
            </ul>
        </div>
      </div>
</template>

<script>
    import bus from '../test/index'
    import chuangKou from '../components/commentInfo/chuangkou'
    import tabHaoyouModal from '../components/commentInfo/tab-haoyou-modal'
    import tabGroudFriendModal from '../components/commentInfo/tab-groudFriend-modal'
    import friendKou from '../components/commentInfo/friendKou'
    import allFriend from '../components/commentInfo/allFriendKou'
    import {friends, meaus} from '../api/getData'
    import {mapState} from 'vuex'
    export default {
      name: 'comment',
      components: {chuangKou, tabHaoyouModal, tabGroudFriendModal, friendKou, allFriend},
      data () {
        return {
          meauData: [],
          friendList: [],
          isClose: false,
          activeName: 'first',
          isMeau: false,
          saveId: '',
          paramsItem: {},
          serachFiendsId: '',
          serachUser: {}
        }
      },
      computed: {...mapState(['isChuangkou', 'isFriendKou', 'isAllFriend'])
      },
      watch: {
      },
      methods: {
        getFriendsTel (val) {
          console.log(val)
        },
        handleClick (obj) {
          if (obj.name === 'first') {
            this.$store.commit('saveBbInfo', {
              isBgImgas: true,
              isTitels: false,
              isContents: false,
              isChuangkou: true,
              isFriendKou: false,
              isAllFriend: false
            })
          }
          if (obj.name === 'second') {
            this.$store.commit('saveBbInfo', {
              isBgImgas: true,
              isTitels: false,
              isContents: false,
              isChuangkou: false,
              isFriendKou: true,
              isAllFriend: false
            })
          }
          if (obj.name === 'third') {
            this.$store.commit('saveBbInfo', {
              isBgImgas: true,
              isTitels: false,
              isContents: false,
              isChuangkou: false,
              isFriendKou: false,
              isAllFriend: true
            })
          }
        },
        getFriends () {
          this.$store.commit('saveBbInfo', {
            isBgImgas: true,
            isTitels: false,
            isContents: false,
            isChuangkou: true,
            isFriendKou: false,
            isAllFriend: false
          })
          friends({}).then((res) => {
            if (res.flag) {
              this.friendList = res.messageInfo
            }
          })
        },
        yuoClick (e) {
          this.isMeau = true
          let meau = this.$refs.userMeau
          meau.style.left = e.clientX + 'px'
          meau.style.top = e.clientY - 60 + 'px'
          meaus({}).then((res) => {
            if (res.flag) {
              this.meauData = res.messageInfo
            }
          })
        },
        getParamsData (obj) {
          if (typeof obj === 'object') {
            this.isMeau = obj.isMeau
            this.paramsItem = obj.parma
            // this.$store.commit('saveBbInfo', {isChuangKou: false})
          } else {
            this.isMeau = obj
          }
        },
        getSerachFriends () {
          this.friendList.forEach((item, index) => {
            if (item.userId === this.serachFiendsId) {
              this.serachUser = item
              bus.$emit('propsFriendsData', this.serachUser)
            }
          })
        }
      },
      created () {
        this.getFriends()
      },
      mounted () {
        bus.$on('getfriendsTelData', (Data) => {
          this.serachFiendsId = Data.telNumber
          this.getSerachFriends()
        })
      }
    }
</script>

<style lang="less" >
  #comments {
    position: relative;
    height: 100%;
    .comments-left {
      height: 100%;
      width: 30%;
      float: left;
      box-sizing: border-box;
      .el-tabs {
        height: 100%;
        .el-tabs__header {
          position: fixed;
          width: 30%;
          z-index: 102;
          background-color: #eaeaea;
          margin: 0px;
          .el-tabs__nav-wrap {
            .el-tabs__nav-scroll {
              .el-tabs__active-bar {
                /*height: 0;*/
                width: 100%;
              }
              .el-tabs__nav {
                width: 100%;
                text-align: center;
                .el-tabs__item {
                  font-size: 12px;
                  height: 50px;
                  line-height: 50px;
                  padding: 0px;
                  width: 25%;
                }
                .el-tabs__item:last-of-type {
                  width: 50%;
                }
              }
            }
          }
        }
      }
      .el-tabs__content {
        padding-bottom: 50px;
        padding-top: 50px;
        ul {
          background-color: #ebebeb;

          li {
            padding-left: 5px;
            box-sizing: border-box;
            height: 50px;
            line-height: 50px;
            width: 100%;
            vertical-align: middle;
            background-color: #ebebeb;
            i {
              display: block;
              float: left;
              height: 40px;
              width: 40px;
              margin-top:5px;
              overflow: hidden;
              /*background-color: #15fcff;*/
              border: 1px solid #15fcff;
              border-radius: 50%;
              img {
                width: 100%;
                transition: transform 2s;
              }
              img:hover {
                transform: scale(1.4);
              }
            }
            span {
              margin-left: 10px;
              font-size: 12px;
            }
            b {
              float: right;
              line-height: 50px;
              margin-right: 2px;
            }
          }
          li:hover {
            background-color: #fff;

          }
        }
        }
      }
    .meau {
      position: absolute;
      top:0px;
      left:0px;
      z-index: 999;
      ul {
        li {
          width: 180px;
          background-color: #fff;
          border-left: 1px solid #c1c1c1;
          border-right: 1px solid #c1c1c1;
          border-bottom: 1px solid #c1c1c1;
          height: 40px;
          line-height: 40px;
          text-align: center;
          font-size: 12px;
        }
        li:first-of-type {
          border-top: 1px solid #c1c1c1;
        }
        li:hover{
        background-color: #eaeaea;
      }
      }
    }
    .comments-right {
      height: 100%;
      border-left: 1px solid #d0d0d0;
      width: 70%;
      float: right;
      position: fixed;
      /*top:60px;*/
      left: 30%;
      background-color: #fff;
      padding-bottom: 110px;
      box-sizing: border-box;
    }
  }
</style>
