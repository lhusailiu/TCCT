<template>
      <div id="text-edit">
        <div class="l-headers">
            文本编辑
        </div>
        <div>
          <quill-editor ></quill-editor>
        </div>
        <div class="save-btn">
          <el-button type="primary" size="mini">保存</el-button>
          <el-button type="primary" size="mini">取消</el-button>
        </div>
      </div>
</template>

<script>
  import 'quill/dist/quill.core.css'
  import 'quill/dist/quill.snow.css'
  import 'quill/dist/quill.bubble.css'
  import { quillEditor } from 'vue-quill-editor'
    export default {
        name: 'text-edit',
        data () {
            return {}
        },
        components: {
          quillEditor
        },
        computed: {},
        watch: {},
        methods: {},
        created () {
        },
        mounted () {
        }
    }
</script>

<style lang="less">
  #text-edit {
    background-color: #fff;
    height: 100%;
    .l-headers {
      height: 35px;
      line-height: 35px;
      text-indent: 1em;
      font-size: 12px;
      background-color: #ffff;
      border-bottom: 1px solid #eaeaea;
    }
    .quill-editor {
      /*height: 300px;*/
      border: 0;
      .ql-toolbar {
        background-color: #fff;
        border: 0;
        border-bottom: 1px solid #eaeaea;
      }
      .ql-container {
        border: 0;
        border-bottom: 1px solid #eaeaea;
        .ql-editor {
          background-color: #fff;
          border: 0;
          height: 400px;

        }
      }
    }
  }
    .save-btn {
      text-align: center;
      margin-top: 10px;
    }
</style>
