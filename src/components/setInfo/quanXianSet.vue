<template>
  <div id="qusn-xian-set">
    <div class="shezhiList">
      <ul >
        <li v-for="(item, index) in sheZhiItem" :key="index">
          <span>{{item.label}}</span>
        </li>
      </ul>
    </div>
    <div class="she-content">
      <ul>
        <li>
          <p>登录</p>
          <ul>
            <li><check-box :dranger="selectBox"></check-box></li>
          </ul>
        </li>
        <li>
          <p>状态</p>
          <ul>
            <li><span>登录后的状态为：</span><select-box :selectIn="selsction"></select-box></li>
            <li>
              <select-status :selectStatus="statusLogs"></select-status>
            </li>
            <li style="color: #c6c6c6" class="indents"> 仅在"我在线上"状态下生效</li>
            <li>
              <select-status :selectStatus="statusLogsi"></select-status>
              <el-input-number v-model="nums" controls-position="right" @change="handleChange" :min="1" :max="10"></el-input-number>
              <span>分钟后：</span>
            </li>
          </ul>
        </li>
        <li>
          <p>主窗口</p>
          <ul>
            <li>
              <select-status :selectStatus="zhuMain"></select-status>
            </li>
          </ul>
        </li>
        <li>
          <p>提醒</p>
          <ul>
            <li>
              <select-status :selectStatus="tixing"></select-status>
            </li>
            <li>设置提醒</li>
            <li><selecting-radios :radios="tixingRaio" @isAdd="changeIsShow"></selecting-radios></li>
            <li v-show="isAdd">
              <div class="addStyle"></div>
              <el-button type="primary" @click="addFriendIn">添加</el-button>
            </li>
          </ul>
        </li>
        <li>
          <p>热键</p>
          <ul>
            <li>你可以根据点击选择来更改热键</li>
            <li><el-button type="primary" @click="setCodes">设置热键</el-button></li>

          </ul>
        </li>
        <li>
          <p>声音</p>
          <ul>
            <li> <select-status :selectStatus="closeTsy"></select-status></li>
            <li> <li><el-button type="primary" @click="setCodes">设置提示音</el-button></li>
          </ul>
        </li>
        <li>
          <p>软件更新</p>
          <ul>
            <li>你可以在本台计算机选择更新方式</li>
            <li><selecting-radios :radios="updaTxt"></selecting-radios></li>
            <li class="indents">更新说明</li>
            <li><selecting-radios :radios="updaTxb"></selecting-radios></li>
            <li class="indents">更新说明</li>
          </ul>
        </li>
        <li>
          <p>文件管理</p>
        </li>
        <li>
          <p>音视频通话</p>
        </li>

      </ul>
    </div>
  </div>
</template>

<script>
  import checkBox from '../../common/service-modal/service-checkbox'
  import selectBox from '../../common/service-modal/selecting'
  import selectStatus from '../../common/service-modal/selectStatus'
  import selectingRadios from '../../common/service-modal/selecting-radios'
  export default {
    name: 'qusn-xian-set',
    props: ['sheZhiItem'],
    data () {
      return {
        selectBox: [
          {id: '001', label: '开机时自动登录'},
          {id: '002', label: '启动时自动登录'},
          {id: '003', label: '打开登录提示'}
        ],
        selsction: [
          {id: '0001', label: '我在线'},
          {id: '0002', label: '忙碌'},
          {id: '0003', label: '隐身'}
        ],
        statusLogs: [
          {id: 'T01', label: '运行全屏程序时切换至"忙碌"状态'}
        ],
        statusLogsi: [
          {id: 'T02', label: '鼠标键盘无动作'}
        ],
        nums: '',
        zhuMain: [
          {id: 'Z1', label: '允许来消息自动弹出窗口'},
          {id: 'Z2', label: '允许接收窗口抖动'},
          {id: 'Z3', label: '显示历史消息记录'},
          {id: 'Z4', label: '在任务栏通知区域显示图标'}
        ],
        tixing: [
          {id: 'TX1', label: '会话消息提醒'},
          {id: 'TX2', label: '新邮件提醒'}
        ],
        tixingRaio: [
          {id: 'TXR1', label: '关闭好友上线提醒'},
          {id: 'TXR2', label: '全部好友上线提醒'},
          {id: 'TXR3', label: '以下好友上线提醒'}
        ],
        updaTxt: [
          {id: 'GX1', label: '有更新时自动更新安装'}
        ],
        updaTxb: [
          {id: 'GX2', label: '有更新时不要安装,但要提醒我'}
        ],
        closeTsy: [
          {id: 'TSM1', label: '关闭所有声音'}
        ],
        isAdd: false
      }
    },
    components: {checkBox, selectBox, selectStatus, selectingRadios},
    computed: {},
    methods: {
      init () {
      },
      handleChange () {
      },
      changeIsShow (val) {
        this.isAdd = val
      },
      addFriendIn () {
        this.$router.push({
          name: 'setAddFriend'
        })
      }
    },
    created () {
      this.init()
    },
    mounted () {
    },
    watch: {}
  }
</script>

<style lang="less" >
  #qusn-xian-set {
    position: relative;
    height: 100%;
    width: 100%;
    .shezhiList {
      height: 100%;
      width: 25%;
      position: fixed;
      ul {
        li {
          height: 40px;
          line-height: 40px;
          font-size: 10px;
          box-sizing: border-box;
          padding-left: 15px;
        }
        li:hover{
          background-color: #fff;
        }
      }
    }
    .she-content {
      width: 75%;
      margin-left: 25%;
      background-color: #fff;
      padding-top: 20px;
      ul {
        box-sizing: border-box;
        width: 100%;
        li {
          display: flex;
          font-size: 12px;
          padding-bottom: 28px;
          p {
            padding-left: 40px;
            width: 90px;
            box-sizing: border-box;
          }
          ul {
            flex: 1;
            li {
              font-size: 12px;
              padding-left: 30px;
              padding-bottom: 5px;
              .checkstyle {
              padding: 0;
                .el-checkbox {
                  display: block;
                  margin: 0px;
                  padding: 0;
                }
              }
              .el-radio {
                display: block;
                margin: 0px;
                padding: 0;
                padding-bottom: 5px;
              }
              .addStyle {
                height: 100px;
                width: 200px;
                background-color: #d1f5d5;
                margin-right: 15px;
              }
              .el-button {
                height: 20px;
                /*width: 40px;*/
                padding: 0;
                background-color: #e4f5e8;
                color: #555555;
                font-size: 12px;
              }

              .el-select>.el-input {
                width: 120px;
                height: 20px;
                .el-input__inner {
                  height: 20px;
                }
                .el-input__suffix {
                  top:-2px;
                }
              }
            }
            .indents {
              text-indent: 2em;
            }
          }
        }
      }
    }
  }
</style>
