# zzlhpdk-ui

 :100:
基于 Vue3+Element-plus 进行二次封装的组件,主要针对常用的表单组件封装，方便快速搭建表单页面。

## 快速开始

我们建议您使用包管理器（如 NPM、Yarn 或 pnpm）安装 zzlhpdk-ui，然后您就可以使用打包工具，例如 Vite 或 webpack。

**1.安装**

```md
npm install zzlhpdk-ui
```

**2.引用**

```js{4}
import zzlhpdk from 'zzlhpdk-ui/zzlhpdk-ui';
```

**3.表单示例**

```js{4}
<template>
  <zz-form :formConfig="formConfig" :formFields="formFields"  />
</template>

<script setup lang="ts">
const formConfig = {
  labelWidth: '120px',
  type: 'submit',
  labelPosition: 'right'
};
const formFields = {
  name: {
    type: 'input',
    label: '姓名',
    defaultValue: '张三',
    required: true,

  },
  sex: {
    type: 'select',
    label: '性别',
    defaultValue: 1,
    options: [
      { label: '男', value: 1 },
      { label: '女', value: 2 }
    ]
  }
};
</script>

```

**4.分页查询示例**

```js{4}
<template>
   <zz-table
    :searchFields="searchFields"
    :searchConfig="searchConfig"
    :tableColumns="tableColumns"
    :tableConfig="tableConfig"
    />
</template>

<script setup lang="ts">
const searchConfig = {
  labelWidth: '120px',
  type: 'submit',
  labelPosition: 'right'
};
const searchFields = {
  name: {
    type: 'input',
    label: '姓名',
    defaultValue: '张三',
    required: true,

  },
  sex: {
    type: 'select',
    label: '性别',
    defaultValue: 1,
    options: [
      { label: '男', value: 1 },
      { label: '女', value: 2 }
    ]
  }
};
const tableColumns = [
  { prop: 'id', label: '编号' },
  { prop: 'name', label: '姓名' },
  { prop: 'sex', label: '性别' },
];
</script>

```

## API

### Attribute

**1.formConfig**

| 属性名        |                                     说明                                      |     类型      | 默认值 |
| ------------- | :---------------------------------------------------------------------------: | :-----------: | ------ |
| labelWidth    |                                  label 宽度                                   | string/number | 120px  |
| type          | submit：提交； view：查看，表单内容不可操作； search： 搜索，没有必输校验规则 |    string     | submit |
| labelPosition |               lebel 位置，left 左对齐，right 右对齐，top 上对齐               |    string     | right  |

**2.formFields**
::: tip
以下属性为基于[element-plus](https://element-plus.org/zh-CN/)表单组件进行的新增或修改的属性，其他属性请参考[表单组件](https://element-plus.org/zh-CN/component/form.html)文档。
:::

| 属性名        |                                                         说明                                                         |                                                                                类型                                                                                 | 默认值                                     |
| ------------- | :------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------------------------------: | ------------------------------------------ |
| type          | input 输入框 ；select 下拉框； date 期/时间选择 ；textarea 多行输入；checkBox 多选框； cascader 级联：custom：自定义 |                                                                               string                                                                                |                                            |
| remove        |                                                     是否移出 dom                                                     |                                                                               boolean                                                                               | false                                      |
| label         |                                                        中文名                                                        |                                                                               string                                                                                |                                            |
| labelWidth    |                                                      中文宽度，                                                      |                                                                     string &#124;&#124; number                                                                      | formConfig.labelWidth &#124;&#124; '120px' |
| style         |                                                    自定义表单样式                                                    |                                                                             styleObject                                                                             |                                            |
| hidden        |                                                       是否隐藏                                                       |                                                                                false                                                                                |                                            |
| picker        |                                                       显示类型                                                       | 'year' &#124;&#124; 'month' &#124;&#124; 'date' &#124;&#124; 'datetime' &#124;&#124; 'week' &#124;&#124; 'datetimerange' &#124;&#124; 'daterange'&#124;&#124;string | date                                       |
| showFormat    |                                                       展示类型                                                       |                                                                               string                                                                                | YYYY/MM/DD HH:mm:ss                        |
| valueFormat   |                                                       数据类型                                                       |                                                                               string                                                                                | YYYY/MM/DD HH:mm:ss                        |
| disabledDate  |                                                     不可操作时间                                                     |                                                                              function                                                                               |                                            |
| default-time  |                               选择日期后的默认时间值。 如未指定则默认时间值为 00:00:00                               |                                                                   Date &#124;&#124; [Date, Date]                                                                    | 00:00:00                                   |
| rows          |                                                   多行输入默认行数                                                   |                                                                               number                                                                                | 4                                          |
| showAllLevels |                                                   级联是否展示全部                                                   |                                                                               boolean                                                                               | false                                      |

**3.searchFields**
::: info
同 formFields
:::
**4.searchConfig**
::: info
同 formConfig, 增加默认搜索属性：defaultSearch:{}
:::
**5.tableConfig**
| 属性名 | 说明 | 类型 | 默认值 |
| ------ | :------: | :------------: | ------- |
| rowKey | 唯一值 | string | id |
| showSearch | 是否展示搜索 | boolean | true |
| multiple | 是否多选 | boolean | false |
| singleSelect | 是否单选 | boolean | false |
| pageApi | 分页查询接口 | function | |
| hiddenPageInfo | 是否隐藏分页信息 | boolean | false |
| reserveSelection | 是否保留已选择项 | boolean | false |

**6.tableColumns**
::: tip
以下属性为基于[element-plus](https://element-plus.org/zh-CN/)表格组件进行的新增或修改的属性，其他属性请参考[表格组件](https://element-plus.org/zh-CN/component/table.html)文档。
:::
| 属性名 | 说明 | 类型 | 默认值 |
| ------ | :------: | :------------: | ------- |
| slot | 自定义插槽 | template | |

### Exposes

**1.zz-form**
| 方法名 | 说明 | 类型 | 返回值 |
| ------ | :------: | :------------: | ------- |
| check | 表单校验 | async function | boolean |
| submit | 表单提交 | function | object |

**2.zz-table**
| 方法名 | 说明 | 类型 | 返回值 |
| ------ | :------: | :------------: | ------- |
| getTableData | 获取分页 | async function | |
| tableData | 分页数据 | array | data |
| selectionChange | 单选/多选事件 | function | array
