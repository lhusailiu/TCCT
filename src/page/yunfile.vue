<template>
      <div id="yunfile">
        <div class="headers">
          <h3>云文件</h3>
          <div class="header-in">
            <i class="el-icon-search"></i>
            <i class="el-icon-refresh"></i>
            <el-dropdown  @command="handleCommand" trigger="click">
              <el-button type="primary" size="mini">
                新建<i class="el-icon-arrow-down el-icon--right" ></i>
              </el-button>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="wendang">在线文档</el-dropdown-item>
                <el-dropdown-item command="biaoge">在线表格</el-dropdown-item>
                <el-dropdown-item command="wenjian">文件夹</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
            <el-upload
              class="upload-demo"
              action="https://jsonplaceholder.typicode.com/posts/"
              :on-preview="handlePreview"
              :on-remove="handleRemove"
              :before-remove="beforeRemove"
              :on-success="handleSuccess"
              :on-error="handleError"
              multiple
              :limit="3"
              :on-exceed="handleExceed"
              :file-list="fileList">
              <!--<el-button size="small" >点击上传</el-button>-->
              <!--<div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>-->
            </el-upload>
          </div>
        </div>
        <div class="yunMain">
          <ul>
            <li></li>
          </ul>
        </div>
        <div class="footer-main">
          <p>TIM云文件，剩余54G,共100G <router-link to="">了解更多 > </router-link> </p>
        </div>
      </div>
</template>

<script>
    export default {
        name: 'yunfile',
        data () {
            return {
              fileList: []
            }
        },
        components: {},
        computed: {},
        watch: {},
        methods: {
          handleCommand (command) {
            if (command === 'upload') {
            }
            if (command === 'wendang') {
              this.$router.push({
                name: 'textEdit'
              })
            }
            if (command === 'biaoge') {
              this.$router.push({
                name: 'tableEdit'
              })
            }
          },
          handlePreview (file) {
            console.log(file)
          },
          handleRemove (file, fileList) {
            console.log(file)
            console.log(fileList)
          },
          beforeRemove (file, fileList) {
            console.log(file)
            console.log(fileList)
          },
          handleSuccess (response, file, fileList) {
            console.log(file)
            console.log(fileList)
            console.log(response)
          },
          handleError (err, file, fileList) {
            console.log(file)
            console.log(fileList)
            console.log(err)
          },
          handleExceed (file, fileList) {
            console.log(file)
            console.log(fileList)
          }
        },
        created () {
        },
        mounted () {
        }
    }
</script>

<style lang="less" scoped>
  #yunfile {
    height: 100%;
    position: relative;
    box-sizing: border-box;
    background-color: #fff;
    .headers {
      position: fixed;
      top:60px;
      display: flex;
      width: 100%;
      background-color: #fff;
      justify-content: space-between;
      height: 50px;
      border-bottom: 1px solid #ebebeb;
      h3 {
        line-height: 50px;
        padding-left: 20px;
        font-size: 14px;
      }
      .header-in {
        display: flex;
        padding-top: 10px;
        padding-right: 20px;
        i {
          font-size: 24px;
          vertical-align: middle;
          margin-right: 10px;
          padding-top: 5px;
        }
        .el-dropdown{
          margin-right: 10px;
          .el-button {
           height: 32px;
            width: 80px;
            padding: 0px;
            padding-left: 12px;
            font-size: 10px;
            i {
              font-size: 12px;
              padding-top: 0px;
            }
         }
        }
        .upload-demo {

          .el-upload-list {
          }
          .el-upload__tip {
            display: none;
          }
        }
        .upload-demo:hover .el-upload__tip {
          display: block;
        }
      }
    }
    .yunMain {
      padding-bottom: 50px;
      padding-top: 60px;
      background-color: #fff;
      ul {
        padding-bottom: 50px;
        box-sizing: border-box;
        display: flex;
        flex-wrap: wrap;
        /*justify-content: center;*/
        li {
          height: 140px;
          width: 120px;
          margin-bottom: 20px;
          margin: 0px 10px 20px 10px;
        }
        li:hover {
          border: 1px solid #ebebeb;
        }
      }
    }
    .footer-main {
      border-top: 1px solid #ebebeb;
      position: fixed;
      bottom: 50px;
      z-index: 202;
      background-color: #fff;
      width: 100%;
      height: 50px;
      line-height: 50px;
      p {
        text-align: center;
        font-size: 10px;

      }
    }
  }
</style>
