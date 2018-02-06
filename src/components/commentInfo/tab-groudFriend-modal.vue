<template>
    <div id="tab-groud-friend-modal">
      <el-tree :data="getGronddata" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
      <div class="addGround">
        <el-dropdown trigger="click" @command="handleCommand">
                 <span class="el-dropdown-link"><i class="el-icon-circle-plus"></i>
                </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="a">加好友/加群</el-dropdown-item>
            <el-dropdown-item command="b">创建群</el-dropdown-item>
            <el-dropdown-item command="c">发起多人聊天</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>

      </div>
    </div>
</template>

<script>
    export default {
        name: 'tab-groud-friend-modal',
        props: [],
        data () {
            return {
                defaultProps: {
                children: 'children',
                label: 'label'
              },
                getGronddata: [
                  {
                    label: '我的设备',
                    children: [
                      {
                        label: '二级 1-1'
                      }
                    ]
                  },
                  {
                    label: '我的好友',
                    children: [
                      {
                      label: '二级 1-1'
                      }
                    ]
                  },
                  {
                    label: '同学',
                    children: [
                      {
                        label: '二级 1-1'
                      }
                    ]
                  }
                ]
            }
        },
        components: {},
        computed: {},
        methods: {
          handleNodeClick (data) {
            console.log(data)
          },
          handleCommand (command) {
            if (command === 'a') {
              this.$router.push({
               name: 'addFriends'
              })
            }
          }
        },
        created () {
        },
        mounted () {
        }
    }
</script>

<style lang="less" scoped>
  #tab-groud-friend-modal {
    height: 100%;
    position: relative;
    .el-tree {
      background-color: #eaeaea;
      .el-tree-node {
      }
      .el-tree-node:hover {

      }
    }
    .addGround {
      position: fixed;
      bottom: 70px;
      left:30%;
      transform: translateX(-115%);
      i {
        font-size: 32px;
        color: #298ef5;
      }
    }
  }
</style>
