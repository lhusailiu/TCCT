<template>
  <div>
    <div class="login_page-fileer" v-if="isRemove" ref="loginRotate">
      <transition>
         <div class="form-contianer">
           <div class="tip-pic">
              <div class="tip-pic-ico">
                <i class="el-icon-arrow-down" @click="rotate"></i>
                <i class="el-icon-minus"></i>
                <i class="el-icon-close" @click="close"></i>
              </div>
           </div>
           <div class="manage-tip">
             <div class="user-pic">
               <img :src="userPic" alt="">
             </div>
             <div class="user-in">
               <el-form :model="loginForm" status-icon ref="ruleForm1" label-width="40px" class="demo-ruleForm">
                 <el-form-item label="用户" prop="user">
                   <el-input  v-model="loginForm.user" auto-complete="off"></el-input>
                   <router-link to="/registry">注册账号</router-link>
                 </el-form-item>
                 <el-form-item label="密码" prop="password">
                   <el-input type="password" v-model="loginForm.password" auto-complete="off"></el-input>
                   <router-link to="/foundPass">找回密码</router-link>
                 </el-form-item>
                 <check-select @checkBox="handCheckBox" :dranger="drangerIn"></check-select>
                 <el-form-item>
                   <el-button @click="loginIn">登录</el-button>
                 </el-form-item>
               </el-form>
             </div>
           </div>
         </div>
      </transition>
    </div>
  </div>
</template>

<script>
    import CheckSelect from '../common/service-modal/service-checkbox'
    import {getDranger} from '../api/getData'
    import {mapState} from 'vuex'
    export default {
      name: 'login',
      components: {
        CheckSelect
      },
      data () {
        return {
          loginForm: {
            user: '',
            password: ''
          },
          isRemove: true,
          checkBoxsStr: '',
          drangerIn: []
        }
      },
      methods: {
        close () {
          this.isRemove = false
        },
        rotate () {
          let rotate3ds = this.$refs.loginRotate
          console.log(rotate3ds)
          rotate3ds.style.transformOrigin = 'centers'
          rotate3ds.style.transform = 'rotateY(-180deg) translate(-50%,-50%)'
        },
        handCheckBox (val) {
          this.checkBoxsStr = val
          console.log(this.checkBoxsStr)
        },
        loginIn () {
          if (!this.loginForm.user) {
            return
          }
          if (!this.loginForm.password) {
            return
          }
          console.log(this.loginForm.password)
          console.log(this.loginForm.user)
          this.$store.commit('saveAdmintInfo', {user: this.loginForm.user, password: this.loginForm.password})
          this.$router.push({
            path: '/manage'
          })
        },
        firstLogin () {
          let url = '/dranger'
          getDranger(url).then((res) => {
            this.drangerIn = res
          })
          if (this.user && this.password) {
            this.loginForm.password = this.$store.state.password
            this.loginForm.user = this.$store.state.user
          }
        }
      },
      computed: {
        ...mapState(['user', 'password', 'userPic'])
      },
      created () {
        this.firstLogin()
      },
      mounted () {
        this.firstLogin()
      }
    }
</script>

<style lang="less" scoped>
  .login_page-fileer {
    transform-style: preserve-3d;
    transition: transform 3s;
    transform-origin:50% 50%;
    width: 430px;
    height: 320px;
    background-color: #19ffe9;
    position: absolute;
    left: 50%;
    top:50%;
    transform: translate(-50%,-50%);
    .tip-pic {
      height: 150px;
      width: 100%;
      background-color: #3e77ff;
      .tip-pic-ico {
        float: right;
        font-size: 18px;
        box-sizing: border-box;;
        padding-right: 5px;
        color: #fff;
      }
    }
    .manage-tip {
      display: flex;
      margin-top:20px;
      padding-left: 20px;
      box-sizing: border-box;
      font-size: 12px;
      .user-pic {
        background-color: #cb2aff;
        height: 70px;
        width: 70px;
        border-radius: 50%;
        margin-right: 20px;
        margin-top: 10px;
        overflow: hidden;
        img {
          width: 100%;
        }
      }
      .user-in {
        flex:1;
        .el-form {
          /*background-color: #555555;*/
          .el-form-item {
            margin: 0px;
            .el-form-item__content {
              margin-bottom: 1px;
              .el-input {
                width: 200px;
              }
              .el-button {
                width: 200px;
                height: 24px;
                padding: 0px;
              }
            }
          }
        }
      }
    }
  }
</style>
