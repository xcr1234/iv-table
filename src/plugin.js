import Vue from 'vue'
import IvTable from './compoents/iv-table.vue'
import IvTableColumn from './compoents/iv-table-column.vue'

export default {
  install (options) {
    Vue.component('IvTable', IvTable)
    Vue.component('IvTableColumn', IvTableColumn)
  }
}
