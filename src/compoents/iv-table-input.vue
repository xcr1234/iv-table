<!--解决iview table 中input 失去焦点的bug-->
<script>
export default {
  name: 'IvTableInput',
  props: {
    data: {
      type: Array,
      required: true
    },
    scope: {
      type: Object,
      required: true
    },
    attr: {
      type: String,
      required: true
    }
  },
  render (h) {
    return h('i-input', {
      props: {
        ...this.$attrs,
        value: this.scope.row[this.attr]
      },
      on: {
        ...this.$listeners,
        'on-change': (e) => {
          this.scope.row[this.attr] = e.target.value
          this.data[this.scope.index] = this.scope.row
        }
      }
    })
  }
}
</script>
