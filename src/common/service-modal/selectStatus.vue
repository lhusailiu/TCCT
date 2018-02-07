<template>
  <div id="select-status">
    <div class="checkstyle">
      <el-checkbox-group v-model="checkList" @change="changeList">
        <el-checkbox v-for="(item, index) in selectStatus"  :label="item.id":key="index">{{item.label}}</el-checkbox>
      </el-checkbox-group>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'select-status',
        props: ['selectStatus'],
        data () {
            return {
              checkList: []
            }
        },
        components: {},
        computed: {},
        methods: {
          changeList (val) {
            console.log(val)
          }
        },
        created () {
        },
        mounted () {
        },
        watch: {}
    }
</script>

<style scoped>

</style>
