<template>
  <div>
    <div id="se-in-model">
      <div class="setIn "title="系统设置" >
        <div ref="dialogW">
          <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane><span slot="label"><i class="fa fa-cog"></i>基本设置</span>
              <div class="shezhiList">
                <ul >
                  <li v-for="(item, index) in shezhiList" :key="index">
                    <span>{{item.label}}</span>
                  </li>
                </ul>
              </div>
              <div class="she-content">
                <ul>
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
                  <li>1</li>
                  <li>1</li>
                  <li>1</li>
                  <li>1</li>
                  <li>1</li>
                  <li>1</li>
                  <li>1</li>

                </ul>
              </div>
            </el-tab-pane>
            <el-tab-pane><span slot="label"><i class="fa fa-shield"></i> 安全设置</span>我的行程</el-tab-pane>
            <el-tab-pane><span slot="label"><i class="fa fa-lock"></i> 权限设置</span>我的行程</el-tab-pane>
          </el-tabs>
        </div>
        <div class="search-user" v-show="isInput">
          <el-input v-model="input" suffix-icon="el-icon-search"></el-input>
        </div>

        </el-dialog>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'se-in-model',
    props: ['visibile'],
    data () {
      return {
        shezhiList: [
          {label: '登录', id: 'dl'},
          {label: '状态', id: 'zt'},
          {label: '主窗口', id: 'zck'},
          {label: '提醒', id: 'tx'},
          {label: '热键', id: 'rj'},
          {label: '声音', id: 'sy'},
          {label: '软件更新', id: 'rjgx'},
          {label: '文件管理', id: 'wjgl'},
          {label: '音频通话', id: 'ypth'}
        ],
        inVisible: false,
        activeName: '',
        isInput: true,
        input: ''
      }
    },
    components: {},
    computed: {},
    watch: {
      'visibile' (val) {
        this.inVisible = val
      }
    },
    methods: {
      closeDialog () {
        this.inVisible = false
        this.$emit('close', this.inVisible)
      },
      handleClick () {
      }
      // getDialogW () {
      //   let DialogW = this.$refs.dialogW.offsetWidth
      //   console.log(DialogW)
      //   if (DialogW < 432) {
      //     this.isInput = false
      //   } else {
      //     this.isInput = true
      //   }
      // }
    },
    created () {
    },
    mounted () {
      // window.addEventListener('resize', this.getDialogW)
    }
  }
</script>

<style lang="less" >
  #se-in-model {
    .el-dialog {
      height: 492px;
      box-sizing: border-box;
      background-color: #f1f1f1;
      .el-tabs--top {
        .el-tabs__header {
          margin: 0px;
          .el-tabs__nav-wrap {
            padding: 0px;
            /*width: 60%;*/
            .el-tabs__nav-scroll {
              padding-left: 20px;
              .el-tabs__item {
                padding: 0px 10px 0px 0px;
                font-size: 10px;
                span {
                }
              }
              .el-tabs__nav {

              }
            }
            .resize-triggers {

            }
          }
        }
      }
      .el-tabs__content {
        .el-tab-pane {
          display: flex;
          box-sizing: border-box;
          width: 100%;
          .shezhiList {
            width: 30%;
            height: 426px;
            ul {
              width: 100%;
              padding-bottom: 110px;
              li {
                width: 100%;
                height: 35px;
                padding-left:20px;
                box-sizing: border-box;
                line-height: 35px;
                font-size: 8px;
              }
              li:hover {
                background-color: #fff;
              }
            }
          }
          .she-content {
            position: relative;
            flex:1;
            width: 70%;
            box-sizing: border-box;
            padding-bottom: 80px;
            background-color: #fff;
            ul {
              position: absolute;
              li {

              }
            }
          }
        }
      }
      .search-user {
        position: absolute;
        z-index: 2100;
        top: 8px;
        right: 5px;
        width: 100px;
        height: 32px;
        .el-input {
          margin: 0px;
          width: 100%;
        }
      }
    }
  }
</style>
