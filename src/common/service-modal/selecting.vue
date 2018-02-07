<template>
    <div id="selecting">
      <el-select v-model="value" placeholder="请选择" @change="hanldChange">
        <el-option
          v-for="(item, index) in selectIn"
          :key="index"
          :label="item.label"
          :value="item.id"
          >
        </el-option>
      </el-select>
    </div>
</template>

<script>
    export default {
        name: 'selecting',
        props: ['selectIn'],
        data () {
            return {
              value: ''
            }
        },
        components: {},
        computed: {},
        methods: {
          hanldChange (val) {
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
