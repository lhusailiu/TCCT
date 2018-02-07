<template>
    <div id="select-radio">
      <el-radio-group v-model="radio2" @change="hanldChange">
        <el-radio v-for="(item, index) in radios" :key="index" :label="item.id">{{item.label}}</el-radio>
      </el-radio-group>

    </div>
</template>

<script>
    export default {
        name: 'select-radio',
        props: ['radios'],
        data () {
            return {
              radio2: ''
            }
        },
        components: {},
        computed: {},
        methods: {
          hanldChange (val) {
            console.log(val)
            if (val === 'TXR3') {
              this.$emit('isAdd', true)
            } else {
              this.$emit('isAdd', false)
            }
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
