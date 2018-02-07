<template>
    <div>
      <div class="checkstyle">
        <el-checkbox-group v-model="checkList" @change="changeList">
          <el-checkbox v-for="(item, index) in dranger"  :label="item.id":key="index">{{item.label}}</el-checkbox>
        </el-checkbox-group>
      </div>
    </div>
</template>

<script>
    export default {
      name: 'service-checkbox',
      props: ['dranger'],
      data () {
        return {
          checkList: [],
          checkStr: '',
          checkOption: [{
              id: 1,
              label: '自动登录'
            },
            {
              id: 2,
              label: '找回密码'
          }]
        }
      },
      methods: {
        changeList (val) {
          console.log(val)
          this.checkStr = val.join('')
          this.$emit('chekBox', this.checkStr)
        }
      },
      created () {

      }
    }
</script>

<style scoped>
  .checkstyle {
    padding-left: 40px;
    margin-bottom: 5px;
    margin-top: 2px;
  }
</style>
