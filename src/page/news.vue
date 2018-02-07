<template>
    <div id="news">
      <nav class="navbar navbar-default">
        <div class="container-fluid">
          <!-- Brand and toggle get grouped for better mobile display -->
          <div class="navbar-header">
            <a class="navbar-brand" href="#">
              <button type="button" class="btn btn-primary" data-toggle="modal"
                      data-target="#exampleModal" @getbootstrap="getbootstraps">关注</button>
            </a>
          </div>
          <!-- Collect the nav links, forms, and other content for toggling -->
          <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav">
              <li><a href="#">Link</a></li>
              <li><a href="#">Link</a></li>
              <li><a href="#">Link</a></li>
              <li><a href="#">Link</a></li>
              <li><a href="#">Link</a></li>
              <li><a href="#">Link</a></li>
              <li><a href="#">Link</a></li>
              <li><a href="#">Link</a></li>
              <li><a href="#">Link</a></li>
            </ul>
          </div><!-- /.navbar-collapse -->
        </div><!-- /.container-fluid -->
      </nav>


      <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
              <h4 class="modal-title" id="exampleModalLabel">New message</h4>
            </div>
            <div class="modal-body">
              <form>
                <div class="form-group">
                  <label for="recipient-name" class="control-label">Recipient:</label>
                  <input type="text" class="form-control" id="recipient-name">
                </div>
                <div class="form-group">
                  <label for="message-text" class="control-label">Message:</label>
                  <textarea class="form-control" id="message-text"></textarea>
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
              <button type="button" class="btn btn-primary" @click="getHot">提交</button>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  // import getHot from '../api/getData'
    export default {
        name: 'bandcamp',
        data () {
            return {
              getHotData: []
            }
        },
        components: {},
        computed: {},
        watch: {},
        methods: {
          getbootstraps () {
              this.$('#exampleModal').on('show.bs.modal', function (event) {
              let that = this
              let button = this.$(event.relatedTarget) // Button that triggered the modal
              let recipient = button.data('whatever') // Extract info from data-* attributes
              // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
              // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
              let modal = this.$(that)
              modal.find('.modal-title').text('New message to ' + recipient)
              modal.find('.modal-body input').val(recipient)
            })
          },
          getHot () {
            // getHot({}).then((res) => {
            //   if (res.messageInfo) {
            //     this.getHotData = res.messageInfo[0]
            //   }
            // })
          }
        },
        created () {
        },
        mounted () {
        }
    }
</script>

<style lang="less" scoped>
  #news {
    height: 100%;
    .navbar-brand {
      padding: 9px 10px;
      .btn-primary {
        color: #333;
        background-color: transparent;
        border: 0;
      }
    }
    ul{

    }
  }
</style>
