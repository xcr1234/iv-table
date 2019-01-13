# iv-table

在iview框架中，默认的Table组件，需要写一个复杂的 `column` 对象，如果表格列数较多，column对象比较难维护。

本框架，支持以标签的形式，写iview的table组件

## 引入


```bash
npm install iv-tables
```

```javascript
import IvTable from 'iv-tables'

Vue.use(IvTable)
```

如果是在浏览器中使用：

```html
<script type="text/javascript" src="https://unpkg.com/iv-tables/dist/iv-table.umd.js"></script>

<script>
Vue.use(window['iv-table'].default)
</script>
```

## 基本用法

本框架有两个组件 `iv-table` 和 `iv-table-column` 分别表示表格主体，和表格的列

[在线运行](http://jsfiddle.net/7cmf9goq/)

```html
<template>
    <iv-table v-bind:data="data1">
        <iv-table-column type="index" label="#"></iv-table-column>
        <iv-table-column prop="name" label="Name"></iv-table-column>
        <iv-table-column prop="age" label="Age"></iv-table-column>
        <iv-table-column prop="address" label="Address"></iv-table-column>
    </iv-table>
</template>

<script>
    export default {
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
        }
    }
</script>
```
 
 
## 自定义列

使用标签 `<template slot-scope="scope">` 可以实现自定义列：

```html
<iv-table-column label="操作">
      <template slot-scope="scope">
           <!--自定义列的内容-->
      </template>
</iv-table-column>
```

scope是参数，可以拿到参数 `scope.row` 、 `scope.index`，分别表示当前行数据，和索引

需要注意的是，`scope.row` 和 原始对象 是两个不同的对象 如果修改 `scope.row` ，原始对象不会修改

## 可展开 

当表格内容较多不能一次性完全展示时使用。用法与自定义列一样，只是加上了 `type="expand"` 参数，[参考](https://www.iviewui.com/components/table#KZK)

```html
<iv-table-column type="expand">
     <template slot-scope="scope">
     </template>
</iv-table-column>
```

## 自定义表头

有时候，表头需要自定义渲染，可以使用 `slot="head"` 的[插槽](https://cn.vuejs.org/v2/guide/components-slots.html )

```html
<iv-table-column>
    <template slot-scope="scope" slot="head">
        <!-- 自定义表头的内容 -->
    </template>
</iv-table-column>
```

这里的scope，是列数据，包含 `scope.column` 和 `scope.index`，分别为当前列数据和当前列索引。

## 表头分组

`iv-table-column` 支持嵌套关系，可以渲染出分组表头。

```html
<iv-table-column label="Block">
      <iv-table-column label="Name" prop="name"></iv-table-column>
      <iv-table-column label="Age" prop="age" align="right"></iv-table-column>
</iv-table-column>
```

## 属性/事件

框架兼容标准Table组件的所有属性/事件，例如：

```html
<iv-table border @on-row-click="rowClick">

</iv-table>
```

这里赋值了 `border` 属性，并且监听了 `on-row-click` 事件

具体参考[官方文档](https://www.iviewui.com/components/table)

## 样式

行：通过属性 row-class-name 可以给某一行指定一个样式名称。

```html
<iv-table row-class-name="">

</iv-table>
```

列：通过设置字段 className 可以给某一列指定一个样式。

```html
<iv-table-column className=""></iv-table-column>
```

由于`iv-table-column` 并没有真正的渲染，因此该标签上的 `style` `class` 等属性会被忽略

单元格：通过给数据 data 设置字段 cellClassName 可以给任意一个单元格指定样式。


## 自定义 column 列表

column列表 默认是自动生成的，如果你需要自行定制，可以使用 `columnMethod` 函数

```html
<template>
    <iv-table v-bind:columnMethod="myColumn">

    </iv-table>
</template>


<script>
export default {
    data(){
        return {
            myColumn(columns){
                // columns 是 默认生成的columns对象，这里可以对其进行修改
                return columns
            }
        }
    }
}
</script>

```
