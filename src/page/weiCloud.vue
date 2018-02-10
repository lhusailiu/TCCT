<template>
    <div id="wei-cloud">
        <div class="wei-cloud-header">
           <h4>AAAAA</h4>
          <!--<div class="wei-cloud-header-right">-->
            <!--<el-button type="text">会员中心</el-button>-->
            <!--<el-button type="text">下载客户端</el-button>-->
            <!--<el-input v-model="input" placeholder="请输入内容" prepend-icon="el-icon-search"></el-input>-->
            <!--<div class="cloud-header-pic">-->
              <!--<i class="pics"></i>-->
              <!--<i class="el-icon-caret-bottom"></i>-->
            <!--</div>-->
          <!--</div>-->
        </div>
      <div class="wei-cloud-main">
        <el-upload
          class="upload-demo"
          action="https://jsonplaceholder.typicode.com/posts/"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :before-remove="beforeRemove"
          multiple
          :limit="3"
          :on-exceed="handleExceed"
          :file-list="fileList">
        </el-upload>
      </div>
        <div class="wei-cloud-nav">
          <el-row class="tac">
            <el-col :span="6">
              <el-menu
                default-active="2"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose">
                <el-submenu index="1">
                  <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>导航一</span>
                  </template>
                  <el-menu-item-group>
                    <el-menu-item index="1-1">选项1</el-menu-item>
                    <el-menu-item index="1-2">选项2</el-menu-item>
                  </el-menu-item-group>
                  <el-menu-item-group title="分组2">
                    <el-menu-item index="1-3">选项3</el-menu-item>
                  </el-menu-item-group>
                  <el-submenu index="1-4">
                    <template slot="title">选项4</template>
                    <el-menu-item index="1-4-1">选项1</el-menu-item>
                  </el-submenu>
                </el-submenu>
                <el-menu-item index="2">
                  <i class="el-icon-menu"></i>
                  <span slot="title">导航二</span>
                </el-menu-item>
                <el-menu-item index="3">
                  <i class="el-icon-setting"></i>
                  <span slot="title">导航三</span>
                </el-menu-item>
              </el-menu>
            </el-col>
          </el-row>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'wei-cloud',
        props: [],
        data () {
            return {
              input: ''
            }
        },
        components: {},
        computed: {},
        methods: {
          handleOpen (key, keyPath) {
            console.log(key, keyPath)
          },
          handleClose (key, keyPath) {
            console.log(key, keyPath)
          }
        },
        created () {
        },
        mounted () {
        },
        watch: {}
    }
</script>

<style scoped lang="less">
  #wei-cloud {
    width: 100%;
    height: 100%;
    .wei-cloud-header {
      display: flex;
      justify-content: space-between;
      height: 60px;
      border-bottom: 1px solid #cbcbcb;
      h4 {
      }
      .wei-cloud-header-right {
        flex: 1/3;
        display: flex;
        .cloud-header-pic {
          i {

          }
          .pics {
            height: 70px;
            width: 70px;
          }
          .el-input {
            margin-top: 18px;
            .el-input__inner {
              width: 200px;
            }
          }
          .el-button--text {
            padding: 0;
          }
        }
      }
    }
    .wei-cloud-main {
      height: 50px;
      /*background-color: #05ffc7;*/
    }
}
</style>
