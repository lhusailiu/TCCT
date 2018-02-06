<template>
  <div id="tab-haoyou-modal">
    <div class="shezhiList">
      <ul>
        <li v-for="(item, index) in friendData" :key="index" @mouseover="handMose(index, item.id)" @mouseleave="handLeave" @contextmenu.prevent="yuoClick"  @click.prevent="meauFa(item)">
          <i><img :src="item.url"></i>
          <span>{{item.NAME}}</span>
          <b @click="remove(item.id)"  ref="isCloses"></b>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'tab-haoyou-modal',
        props: ['friendData'],
        data () {
            return {
              isMeau: false,
              saveId: '',
              meauData: {},
              paramsItem: {},
              paramsIsShow: {
                isBgImgas: false,
                isTitels: true,
                isContents: true,
                isChuangkou: true,
                isFriendKou: false,
                isAllFriend: false
              }
            }
        },
        components: {},
        computed: {},
        watch: {},
        methods: {
          handMose (index, id) {
            this.saveId = id
            let isCloses = this.$refs.isCloses
            for (let i = isCloses.length - 1; i >= 0; i--) {
              let temp = isCloses[i]
              if (i === index) {
                temp.className = 'el-icon-circle-close'
              }
            }
          },
          remove (id) {
            for (let i = this.friendData.length - 1; i >= 0; i--) {
              let temp = this.friendData[i]
              if (temp.id === id) {
                this.friendData.splice(i, 1)
              }
            }
          },
          handLeave () {
            let isCloses = this.$refs.isCloses
            for (let i = isCloses.length - 1; i >= 0; i--) {
              let temp = isCloses[i]
              temp.className = ''
            }
          },
          yuoClick (e) {
            this.$emit('rightClick', e)
          },
          meauFa (val) {
            if (val) {
              this.isMeau = false
              this.paramsItem = {
                isMeau: this.isMeau,
                parma: val
              }
              this.$store.commit('saveBbInfo', this.paramsIsShow)
              this.$emit('getparams', this.paramsItem)
              console.log('执行了')
            }
            return false
          },
          isMeauOff () {
            this.isMeau = false
            this.$emit('getparams', this.isMeau)
          }
        },
        created () {
        },
        mounted () {
          window.addEventListener('click', this.isMeauOff)
        }
    }
</script>

<style lang="less">
  #tab-haoyou-modal {
    .shezhiList {
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

</style>
