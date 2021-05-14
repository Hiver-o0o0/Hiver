<template>
  <div>
    <span style="width: 50px;height:50px;text-align:center;line-height:50px;background-color: #ccc;" :style="mColor">
      Aa
    </span>
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
      return `color: ${this.color};`
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
