<template>
    <div id="table-edit">
      <div class="l-headers">
          表格编辑
      </div>
    </div>
</template>

<script>
    export default {
        name: 'table-edit',
        props: [],
        data () {
            return {}
        },
        components: {},
        computed: {},
        methods: {},
        created () {
        },
        mounted () {
        },
        watch: {}
    }
</script>

<style lang="less" scoped>
  #table-edit {
    height: 100%;
    background-color: #fff;
    .l-headers {
      height: 35px;
      line-height: 35px;
      text-indent: 1em;
      font-size: 12px;
      background-color: #ffff;
      border-bottom: 1px solid #eaeaea;
    }
  }
</style>
