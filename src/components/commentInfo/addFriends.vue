<template>
    <div id="add-friends">
      <div class="l-headers">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="找好友" name="frist">
            <div class="search-fg">
              <el-form :model="friendsTelData" ref="friendsTelData"  class="demo-ruleForm" :rules="rules1">
                <el-form-item prop="telNumber">
                  <el-input v-model.number="friendsTelData.telNumber"  placeholder="请输入号码/昵称" prefix-icon="el-icon-search"></el-input>
                  <el-button type="primary" @click="telNumberForm('friendsTelData')" size="mini">查找</el-button>
                </el-form-item>
              </el-form>
            </div>
            <div class="get-friend-list" v-show="isGetFriendList">
                <div class="header-pic">
                  <img :src="userData.url" alt="">
                </div>
                <div class="users-info">
                  <ul>
                    <li>{{userData.NAME}} <span v-show="isK">(</span>{{userData.userId}}<span v-show="isK">)</span></li>
                    <li>{{userData.sex}}</li>
                    <li><el-button type="primary" size="mini">加好友</el-button></li>
                  </ul>
                </div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="找群" name="second">
            <div class="search-fg">
              <el-form :model="friendsGroupData" ref="friendsGroupData"  class="demo-ruleForm" :rules="rules2">
                <el-form-item prop="groupNumber">
                  <el-input v-model="friendsGroupData.groupNumber"  placeholder="请输入群号" prefix-icon="el-icon-search" size="mini"></el-input>
                  <el-button type="primary" @click="groupNumberForm('friendsGroupData')">查找</el-button>
                </el-form-item>
              </el-form>
            </div>
          </el-tab-pane>
        </el-tabs>
      </div>

    </div>
</template>

<script>
  import bus from '../../test/index'
    export default {
        name: 'add-friends',
        props: [],
        data () {
            return {
              friendsTelData: {
                telNumber: ''
              },
              friendsGroupData: {
                groupNumber: ''
              },
              activeName: 'frist',
              userData: {},
              isK: false,
              isGetFriendList: false,
              rules1: {
                telNumber: [
                  {required: true, message: '请输入号码/昵称', trigger: 'blur'}
                ]
              },
              rules2: {
                groupNumber: [
                  {required: true, message: '请输入群号', trigger: 'blur'}
                ]
              }
            }
        },
        components: {},
        computed: {},
        methods: {
          groupNumberForm (friendsTelData) {
          },
          telNumberForm (friendsGroupData) {
            console.log(friendsGroupData)
            if (this.friendsTelData.telNumber) {
              this.friendsTelData.telNumber = String(this.friendsTelData.telNumber)
              bus.$emit('getfriendsTelData', this.friendsTelData)
            }
          },
          handleClick () {
          },
          init () {
            this.isK = false
            this.isGetFriendList = false
          }
        },
        created () {
          this.init()
        },
        mounted () {
          bus.$on('propsFriendsData', (data) => {
            this.userData = data
            this.isK = true
            this.isGetFriendList = true
            this.friendsTelData.telNumber = ''
          })
        },
        watch: {}
    }
</script>

<style lang="less" >
  #add-friends {
    background-color: #fff;
    height: 100%;
    .l-headers {
      height: 35px;
      line-height: 35px;
      font-size: 12px;
      background-color: #ffff;
      /*border-bottom: 1px solid #eaeaea;*/
      .el-tabs__header {
        .el-tabs__nav-wrap {
          .el-tabs__nav-scroll {
            width: 100%;
            .el-tabs__nav {
              width: 100%;
              .el-tabs__item {
                width: 50%;
                padding: 0;
                text-align: center;
              }
              .el-tabs__active-bar {
                height: 0;
              }
            }
          }
        }
      }
      .el-tabs__content {
        .el-tab-pane {
          .search-fg {
            .el-form {
              .el-form-item {
                .el-form-item__content {
                  display: flex;
                  margin-left: 20px;
                  .el-input {
                    margin-right: 10px;
                    height: 50px;
                    .el-input__inner {
                      padding-left: 30px;
                      height:34px;
                      border-radius: 50px;
                    }
                  }
                  .el-button {
                    height: 34px;
                    margin-right: 30px;
                    margin-top: 3px;
                    padding: 4px 20px;
                  }
                }
              }
            }
          }
          .get-friend-list {
            padding-top: 20px;
            display: flex;
            padding-left: 20px;
           .header-pic {
             height: 90px;
             width: 90px;
             border: 1px solid red;
             img {
               width: 100%;
             }
           }
            .users-info {
              margin-left: 24px;
              ul {
                li {
                  height: 30px;
                  line-height: 30px;
                }
              }
            }
        }
      }
    }
  }
}
</style>
