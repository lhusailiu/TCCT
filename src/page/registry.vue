<template>
      <div class="registry">

      </div>
</template>

<script>
    export default {
      name: 'registry',
      data () {
        return {
          isClick: false
        }
      },
      methods: {
        getIner () {
          this.isClick = true
          if (this.isClick) {
            return
          }
          if (!this.isClick) {
            this.$store.commit('saveUsert', this.isClick)
          }
        }
      },
      computed () {
      },
      mounted () {
        window.addEventListener('click', this.getIner)
      }
    }
</script>

<style scoped>

</style>
