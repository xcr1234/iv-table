<script>
import Vue from 'vue'

const isIvTableColumn = (slot) => {
  return slot.componentOptions && slot.componentOptions.Ctor && slot.componentOptions.Ctor.extendOptions && slot.componentOptions.Ctor.extendOptions.$ivTableColumn
}

const makeColumn = (slot) => {
  const column = { ...slot.data.attrs }
  const label = slot.componentOptions.propsData.label
  const prop = slot.componentOptions.propsData.prop
  if (prop) {
    column.key = prop
  }
  if (label) {
    column.title = label
  }
  // 如果width是string，自动转成number:
  if (typeof column.width === 'string') {
    column.width = parseFloat(column.width)
  }
  if (typeof column.minWidth === 'string') {
    column.minWidth = parseFloat(column.minWidth)
  }
  if (typeof column.maxWidth === 'string') {
    column.maxWidth = parseFloat(column.maxWidth)
  }
  if (slot.data.scopedSlots) {
    if (typeof slot.data.scopedSlots.default === 'function') {
      column.render = (h, scope) => {
        return slot.data.scopedSlots.default(scope)
      }
    }
    if (typeof slot.data.scopedSlots.head === 'function') {
      column.renderHeader = (h, scope) => {
        return slot.data.scopedSlots.head(scope)
      }
    }
    if (Vue.config.devtools) {
      column.name = 'slot-template' // 在vue devtools显示正常，不会显示unknown components
    }
  }
  if (slot.componentOptions.children) {
    slot.componentOptions.children.forEach(child => {
      if (isIvTableColumn(child)) {
        if (!column.children) {
          column.children = []
        }
        column.children.push(makeColumn(child))
      }
    })
  }
  return column
}

export default {
  name: 'IvTable',
  props: {
    data: Array,
    columnMethod: Function
  },
  computed: {
    columns () {
      const columns = this.$slots.default.filter(isIvTableColumn).map(makeColumn)
      if (this.columnMethod) {
        return this.columnMethod(columns)
      }
      return columns
    }
  },
  render (h) {
    return h('i-table', {
      props: {
        ...this.$attrs,
        data: this.data,
        columns: this.columns
      },
      ref: 'table',
      on: {
        ...this.$listeners
      }
    })
  },
  methods: {
    exportCsv (params) {
      return this.$refs.table.exportCsv(params)
    },
    clearCurrentRow () {
      return this.$refs.table.clearCurrentRow()
    }
  }
}
</script>
