# Vue面试题

## VUE2和VUE3的区别

### 响应式系统
 * vue2 使用Object.defineProperty()循环遍历来劫持各个属性的getter/setter，后添加、删除的数据劫持不到，不能监听到对象中的属性的新增、删除。需要用到this.set this.delete 属性删除和新增和响应式。

 * Vue3使用 Proxy 进行响应式处理，直接修改对象的属性（包括新增）会自动触发视图更新，而且是响应式的。

### API
  * Vue3中新增了很多API，比如：
    1. Composition API（组合式API）
    2. Teleport 传送门组件
    3. Fragments 片段
    4. Suspense 异步加载
    5. 全局API的改变
       * Vue2中使用Vue.use()来安装插件，而在Vue3中，全局API已经被重构。如果要使用插件，可以直接导入并调用install方法即可。
       * Vue2中使用Vue.component和Vue.directive注册全局组件和指令，在Vue3中，全局API已经被移除，需要通过app.component和app.directive进行注册。

### 性能优化
  * Vue3中对虚拟DOM的实现进行了改进，使用了静态标记技术，可以更快地识别哪些元素是静态的，从而减少不必要的更新操作。
  * Vue3还引入了Fragment、Teleport等新特性，使得模板更加灵活，同时也提高了渲染效率。

### 其他变化
  * Vue3支持更好的TypeScript集成，提供了更丰富的类型定义和更好的类型推断能力。
  * Vue3对自定义事件的处理也做了改进，可以通过v-model指令实现双向绑定，并且支持多个修饰
  
### 生命周期
  * Vue3中移除了beforeDestroy和destroyed两个生命周期钩子，新增了onBeforeUnmount和onUnmounted两个新的生命周期钩子。

### 组件
  * Vue3中对组件的封装方式进行了改进，引入了Composition API（组合式API），使得代码更加模块化、易于维护和理解。

### 其他
  * Vue3还对虚拟DOM的实现进行了优化，提高了渲染性能。
  * Vue3支持更好的TypeScript集成，提供了更丰富的类型定义和更好的类型推断能力。
  * Vue3对自定义事件的处理也做了改进，可以通过v-model指令实现双向绑定，并且支持多个修饰符。

