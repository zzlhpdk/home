# 文件下载

## 概述

在前端项目中，经常会遇到需要下载文件的需求，比如导出Excel、图片等。通常的做法有两个
* 后端直接提供一个文件地址，通过浏览器打开就可以下载。
  
* 需要发送请求，后端返回二进制流数据，前端解析流数据，生成URL实现下载。

前端对应的实质是a标签和Blob文件下载，这两者的区别：
* a标签：txt、png、jpg、gif等文件，是不提供直接下载，有兼容性问题，特别是IE。
* blob：利用 Blob对象可以将文件流转化成 Blob二进制对象。该对象兼容性良好，适用于需要动态生成或处理非同源文件的情况。‌通过URL.createObjectURL()方法将Blob对象转换为一个临时的URL下载。
   
### Blob对象
Blob对象表示一个不可变、原始数据的类文件对象。它的数据可以按文本或二进制的格式进行读取，也可以转换成 ReadableStream来用于数据操作。Blob对象是html5新增的对象，它的作用是用来存储二进制数据的，比如图片、视频、音频等。

#### 创建Blob对象 
```js
//data 获取到的文件流数据
const blob = new Blob([data], { type: "application/vnd.ms-excel;chartset=UTF-8" });
```

#### 创建Blob对象URL
```js
// 创建一个指向blob的url，这个url可以赋值给a标签的href属性实现下载功能。
let url = window.URL.createObjectURL(blob);
```

## 发送请求


1. 首先在前端发送请求时就应在请求头中，用responseType告知服务器需要返回的数据类型，responseType默认是“json”，这里我们请求的是文件流：“blob”。

2. 不同的请求插件设置header的方式不同，用axios来说，axios.post(url, data, config)，responseType是在config里设置的（这些设置应该是在底层赋给请求头，如果不定义下载下来的文件内容会乱码。
3. 示例
   ```js
   export function download(url, data) {
    return axiosInstance.post(url,data,{
            responseType: 'blob'
        }
    );
    }
   ```

## 接收文件

1. 服务返回文件流数据（blob对象），需要用JS对象Blob构造函数来接收并储存，然后用URL.createObjectURL生成一个可使用的URL地址，之后把这个URL地址赋给一个临时创建的a标签，用a标签HTML5新属性download实现本地储存，以达到实现下载需求：
2. 示例
  ```js
// 下载/导出
// 接口地址exportApi
// 下载参数param
// 文件名类型type 
const exportFile = (exportApi, param = {}, type = "application/vnd.ms-excel;chartset=UTF-8") => {
  exportApi(param).then(response => {
    const { data, headers } = response
    const fileName = headers["Content-Disposition".toLowerCase()].split("attachment;filename=")[1]
    const blob = new Blob([data], { type: type })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement("a")
    const date = new Date()
    document.body.appendChild(a)
    a.href = url
    a.download = fileName ?? `文件${date.toLocaleTimeString()}`
    a.click()
    document.body.removeChild(a)
    window.URL.revokeObjectURL(url)
  })
}
  ```

