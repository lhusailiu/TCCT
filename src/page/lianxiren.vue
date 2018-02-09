<template>
      <div id="lianxiren" ref="lianxiren">
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
          <el-button size="small" type="primary">点击上传</el-button>
          <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
      </div>
</template>

<script>
    export default {
        name: 'lianxiren',
        data () {
          return {}
        },
        components: {},
        computed: {},
        watch: {},
        methods: {
          init () {}
        },
        created () {
        },
        mounted () {
          this.init()
        }
    }
</script>

<style lang="less" scoped>
  #lianxiren {
    position: absolute;
    top: 60px;
    width: 100%;
    text-align: center;
    z-index: 100;
    display:block;
  }
</style>
