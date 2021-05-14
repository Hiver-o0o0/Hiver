<template>
  <div style="width: 100px;height:50px;" :style="mColor">
  </div>
</template>
<script>
export default {
  data () {
    return {
    }
  },
  props: {
    color: {
      type: String,
      default: '#ffffff'
    }
  },
  computed: {
    mColor() {
      return `background-color: ${this.color};`
    }
  },
  created () {
  },
  mounted () {
  },
  methods: {
  }
}
</script>
<style lang='scss' scoped>
</style>
