<template>
    <div id="sets-modal">
      <div class="tabsClass">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane><span slot="label"><i class="fa fa-cog"></i>基本设置</span>
            <tab-she-zhi :sheZhiItem="shezhiList"></tab-she-zhi>
          </el-tab-pane>
          <el-tab-pane><span slot="label"><i class="fa fa-shield"></i> 安全设置</span>
            <tab-an-quan-set :sheZhiItem="shezhiList" ></tab-an-quan-set>
          </el-tab-pane>
          <el-tab-pane><span slot="label"><i class="fa fa-lock"></i> 权限设置</span>
            <quan-xian-set :sheZhiItem="shezhiList" ></quan-xian-set>
          </el-tab-pane>
        </el-tabs>
      </div>
         <div class="search-user" v-show="isInput">
            <el-input v-model="input" suffix-icon="el-icon-search"></el-input>
         </div>
        </div>
</template>


<script>
  import tabSheZhi from '../components/setInfo/quanXianSet'
  import tabAnQuanSet from '../components/setInfo/tabAnQuanSet'
  import quanXianSet from '../components/setInfo/tabSheZhi'
  export default {
    name: 'sets-modal',
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
    components: {tabSheZhi, tabAnQuanSet, quanXianSet},
    computed: {},
    watch: {
      'visibile' (val) {
        this.inVisible = val
      }
    },
    methods: {
      handleClick () {
      }
    },
    created () {
    },
    mounted () {
      // window.addEventListener('resize', this.getDialogW)
    }
  }
</script>

<style lang="less" >
  #sets-modal {
    height: 100%;
    position:relative;
    .tabsClass {
      padding-top: 40px;
      box-sizing: border-box;
      .el-tabs--top {
        .el-tabs__header {
          position: fixed;
          top:60px;
          margin: 0px;
          padding-left: 15px;
          z-index: 109;
          width: 100%;
          background-color: #eaeaea;
          .el-tabs__nav-scroll {
            .el-tabs__nav {
              width: 100%;
              .el-tabs__item{
                padding: 0px;
                padding-right: 15px;
              }
            }
          }
        }
        .el-tabs__content {
          box-sizing: border-box;
          width: 100%;
          height: 100%;
          .el-tab-pane {
            height: 100%;
          }
        }
      }
    }
    .search-user {
      position: fixed;
      top:68px;
      right: 5px;
      z-index: 110;
      .el-input__inner {
        border-radius: 20px;
        width: 120px;
      }
    }
  }
</style>
