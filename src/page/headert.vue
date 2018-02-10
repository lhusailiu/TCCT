<template>
    <div>
      <div id="headert">
          <div class="user-pic">
          <div>
          <el-dropdown trigger="click" @command="handleCommandziliao">
                 <span class="el-dropdown-link"><i title="设置"><img :src="userItem.url" alt=""></i>
                </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="aa"><p class="clear"> <b>{{userItem.NAME}}</b><i class="fa fa-pencil-square-o"></i> </p>编辑个性签名</el-dropdown-item>
                <el-dropdown-item command="bb"><i class="fa fa-cloud"></i>微云</el-dropdown-item>
                <el-dropdown-item command="cc"><i class="fa fa-calendar-check-o"></i>
                  <el-badge is-dot class="item">日程</el-badge>
                </el-dropdown-item>
                <el-dropdown-item command="dd"><i class="fa fa-star"></i>收藏</el-dropdown-item>
                <el-dropdown-item command="ee"><i class="fa fa-envelope-o"></i> <el-badge is-dot class="item">邮箱</el-badge></el-dropdown-item>
                <el-dropdown-item command="ff"><i class="fa fa-volume-up"></i>消息管理编辑器</el-dropdown-item>
                <el-dropdown-item command="gg"><i class="fa fa-trophy"></i> <el-badge is-dot class="item">福利</el-badge></el-dropdown-item>
                <el-dropdown-item command="hh" class="inUp">
                  <i class="fa fa-circle"></i>在线 <i class=" fa fa-angle-right right" ></i>
                   <div class="inUpItem">
                      <ul>
                        <li><i class="fa fa-circle"></i>在线</li>
                        <li><i class="fa fa-circle"></i>忙碌</li>
                        <li><i class="fa fa-circle"></i>隐身</li>
                        <li><i class="fa fa-circle"></i>离线</li>
                      </ul>
                   </div>
                </el-dropdown-item>
                <el-dropdown-item command="jj">切换账号</el-dropdown-item>
                <el-dropdown-item command="kk">退出账号</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
            </div>
          </div>
          <div class="search-user">
            <el-input v-model="input" suffix-icon="el-icon-search" @focus="getSearch" @blur="getNoSearch"></el-input>
          </div>
          <div class="user-grund">
              <div class="friend">
                <router-link to="/home"><i class="fa fa-home" title="首页"></i></router-link>
                <router-link to="/echarts"><i class="fa fa-bar-chart" title="图表"></i></router-link>
                <router-link to="/yunfile"><i class="el-icon-upload" title="云文件"></i></router-link>
              </div>
          </div>
          <div class="tip-pic">
            <div class="tip-pic-ico">
              <el-dropdown trigger="click" @command="handleCommand">
                 <span class="el-dropdown-link"><i class="fa fa-bars" title="设置"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item command="a">窗口置顶</el-dropdown-item>
                  <el-dropdown-item command="b">升级</el-dropdown-item>
                  <el-dropdown-item command="c">设置</el-dropdown-item>
                  <el-dropdown-item command="d">安全</el-dropdown-item>
                  <el-dropdown-item command="e">帮助</el-dropdown-item>
                  <el-dropdown-item command="f">反馈问题</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
              <i class="el-icon-minus" title="最小化"></i>
              <i class="fa fa-window-maximize" title="缩放"></i>
              <i class="el-icon-close" title="关闭"></i>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import bus from '../test/index'
    export default {
        name: 'headert',
        props: ['userItem'],
        data () {
          return {
            input: '',
            userPicItems: {},
            isSearchALl: {
              isTabFriends: true,
              isSearch: false
            }
          }
        },
        components: {},
        computed: {},
        watch: {
        },
        methods: {
          handleCommand (command) {
            console.log(command)
            if (command === 'c') {
              this.$router.push({
                name: 'setsModal'
              })
            }
          },
          handleCommandziliao (command) {
            if (command === 'aa') {
              this.userPicItems = this.userItem
              this.$router.push({
                  name: 'editZiliao',
                  params: {
                    userPicItems: this.userPicItems.url,
                    userPicItemName: this.userPicItems.NAME,
                    userId: this.userPicItems.id
                  }
              })
              this.$nextTick(() => {
                console.log(this.$route)
              })
            }
            if (command === 'bb') {
              this.$router.push({
                name: 'weiCloud'
              })
            }
            if (command === 'kk') {
              this.$router.push({
                path: '/'
              })
            }
          },
          getSearch () {
            console.log('获取到了')
            this.isSearchALl.isTabFriends = false
            this.isSearchALl.isSearch = true
            bus.$emit('propsShow', this.isSearchALl)
            return false
          },
          getNoSearch () {
            this.isSearchALl.isTabFriends = true
            this.isSearchALl.isSearch = false
            bus.$emit('propsNoShow', this.isSearchALl)
            return false
          }
        },
        created () {
        },
        mounted () {

        }
    }
</script>

<style lang="less"  scoped>
  #headert {
    position: fixed;
    top:0px;
    left:0px;
    display: flex;
    padding: 0px 5px;
    box-sizing: border-box;
    height: 60px;
    background-color: #1ca0ff;
    width: 100%;
    z-index: 99;
    .user-pic {
      i {
        display: block;
        height: 40px;
        width: 40px;
        background-color: #cb2aff;
        border-radius: 50%;
        margin-top: 10px;
        overflow: hidden;
        img {
          width: 100%;
        }
      }
    }
    .search-user {
      flex: 1/3;
      /*background-color: #e253ff;*/
      .el-input {
        width: 60%;
        margin-left: 10px;
        margin-top: 18px;
        .el-input__inner {
          border-radius: 40px;
          padding-left:20px;

        }
      }
    }
    .user-grund {
      flex: 2/3;
      /*background-color: #0bffb0;*/
      margin-top: 18px;
      i {
        margin-left: 10px;
        font-size: 18px;
        color: #fff;
      }
    }
    .tip-pic {
      float: right;
      margin-top: 18px;
      i {
        margin-right: 5px;
        font-size: 18px;
        color: #fff;
      }
    }

  }
  .el-dropdown-menu {
    width: 200px;
    left:0px;
    .el-dropdown-menu__item {
      font-size: 10px;
      p {
        b{
          font-size: 18px;
          float: left;
        }
        i {
          margin-top: 10px;
          float: right;
          font-size: 24px;
        }
      }
      i {
        font-size: 14px;
        margin-right: 4px;
        vertical-align: middle;
      }
      .fa-circle {
        color: #1cff9e;
      }
      .right {
        margin-top: 10px;
      }
    }
    .inUp {
      position: relative;
      .inUpItem {
        position: absolute;
        display: none;
        top:-43px;
        left:202px;
        z-index: 200;
        width: 200px;
        border: 1px solid  #FAFAFA;
        background-color: #fff;
        ul {
          li {
            height: 40px;
            line-height: 40px;
            text-align: center;
          }
          li:hover {
            background-color: #d1f5d5;
          }
        }
      }
    }
    .inUp:hover .inUpItem {
      display: block;
    }
  }
</style>
