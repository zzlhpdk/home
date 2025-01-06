# Javascript

## 深拷贝

### 浅拷贝问题
  * 浅拷贝只复制指向某个对象的指针，而不复制对象本身，新旧对象还是共享同一块内存。
  * 浅拷贝是按位拷贝对象，它会创建一个新的对象，这个对象有着原始对象属性值的一份精确拷贝。如果属性是基本类型，拷贝的就是基本类型的值；如果属性是引用
### 对象浅拷贝方法
   **1.JSON转化法**
   1. 利用JSON.stringify将对象转成字符串，再用JSON.parse转回来
   2. 缺点：会忽略`undefined`、函数以及symbol值
   3. 缺点：不能复制函数、undefined
   
  **2.object.assign**
   1. 只能拷贝对象的可枚举属性
   2. 不能拷贝继承的属性
   3. 不能拷贝Symbol
   
  **3.扩展运算符**
   1. 扩展运算符
   2. 只能拷贝一级属性，二级以上属性为引用类型无法复制
   3. 不能拷贝继承的属性
   
  **4.递归**
  1. 递归拷贝对象比较完美的解决方法

### 数组浅拷贝方法
  **1.JSON转化法** 
  1. 利用JSON.stringify将对象转成字符串，再用JSON.parse转回来
  2. 缺点：会忽略`undefined`、函数以及symbol值
  **2.Object.assign** 
  1. 只能拷贝一级属性，二级以上属性为引用类型的话无法复制

  **3.扩展运算符** 
  1. 只能拷贝一级属性，二级以上属性为引用类型的话无法复制

  **4.递归** 
  1. 递归拷贝数组比较完美的解决方法


### 递归
```js
const deepClone = (data: any) => {
  const newData: any = Array.isArray(data) ? [] : {};
  for (let key in data) {
    if (data[key] && data[key] === 'object') {
      newData[key] = deepClone(data[key]);
    } else {
      newData[key] = data[key];
    }
  }
  return newData;
};
```
 

