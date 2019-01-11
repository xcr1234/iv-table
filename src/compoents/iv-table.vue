<script>
import Vue from 'vue'
export default {
  name: 'IvTable',
  props: {
    data: Array
  },
  computed: {
    columns () {
      return this.$slots.default.map(slot => {
        const column = { ...slot.data.attrs }
        column.title = slot.componentOptions.propsData.label
        column.key = slot.componentOptions.propsData.prop
        if (slot.data.scopedSlots && typeof slot.data.scopedSlots.default === 'function') {
          column.render = (h, scope) => {
            return slot.data.scopedSlots.default(scope)
          }
          if (Vue.config.devtools) {
            column.name = 'slot-template' // 在vue devtools显示正常，不会显示unknown components
          }
        }
        return column
      })
    }
  },
  render (h) {
    return h('i-table', {
      props: {
        ...this.$attrs,
        data: this.data,
        columns: this.columns
      }
    })
  }
}
</script>
