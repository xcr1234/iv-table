<template>
  <div id="app">
      <iv-table v-bind:data="data1" border @on-row-click="rowClick" >
        <iv-table-column type="index" label="#"></iv-table-column>
        <iv-table-column label="Name" prop="name"></iv-table-column>
        <iv-table-column label="Age" prop="age" align="right"></iv-table-column>
        <iv-table-column label="Address" prop="address"></iv-table-column>
        <iv-table-column label="操作">
          <template slot-scope="scope">
            <Button type="primary" @click="editRow(scope.row)">增加年龄</Button>
          </template>
          <template slot="head">
            <span style="color: #f00;font-size: 16px">head</span>
          </template>
        </iv-table-column>
        <iv-table-column label="Block">
          <iv-table-column label="Name" prop="name"></iv-table-column>
          <iv-table-column label="Age" prop="age" align="right"></iv-table-column>
        </iv-table-column>
      </iv-table>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      data1: [
        {
          name: 'John Brown',
          age: 18,
          address: 'New York No. 1 Lake Park',
          date: '2016-10-03'
        },
        {
          name: 'Jim Green',
          age: 24,
          address: 'London No. 1 Lake Park',
          date: '2016-10-01'
        },
        {
          name: 'Joe Black',
          age: 30,
          address: 'Sydney No. 1 Lake Park',
          date: '2016-10-02'
        },
        {
          name: 'Jon Snow',
          age: 26,
          address: 'Ottawa No. 2 Lake Park',
          date: '2016-10-04'
        }
      ]
    }
  },
  methods: {
    editRow (row) {
      console.log(row.age)
      row.age = row.age + 1
    },
    rowClick (row) {
      console.log({ ...row })
    }
  }
}
</script>
