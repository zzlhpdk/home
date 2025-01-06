# 网络请求

## 安装Axios
```js
 npm install axios
```

## 引入Axios

```js 
import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
```

## 使用
**1.创建控制器**
```js 
//控制器对象，可根据需要终止/取消一个或多个Web请求/监听事件
const controller = new AbortController();
// 登录失效操作 token失效
const failureToken = () => {
	controller.abort();
  if (confirm("令牌状态已过期，请点击重新登录")) {
   sessionStorage.clear(); // 清除浏览器全部临时缓存
			window.location.href = '/'; // 去登录页
  } else {
    return;
  }

};

```
**2.创建并配置一个 Axios 实例对象**
```js 

// 创建Axios实例对象，用于发起请求
const service: AxiosInstance = axios.create({
	baseURL: import.meta.env.VITE_API_URL,
	timeout: 60000, // 全局超时时间
  baseURL: process.env.VUE_APP_BASE_API,
  signal: controller.signal,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8'
  }
});
```
**3.请求拦截器，对请求进行处理**
```js 
service.interceptors.request.use(
	(config: AxiosRequestConfig) => {
		// 统一增加Authorization请求头
		const token = sessionStorage.getItem('token');
    config.headers['Authorization']= token ? `Bearer ${token}` : '';
		return config
	},
	(error) => {
		// 对请求错误进行处理
		return Promise.reject(error);
	}
);
```
**4.响应拦截器，用于全局响应结果处理**
```js 
service.interceptors.response.use(
	//请求头200处理
	(response) => {
		const {
			config: {
				responseType,
				headers: { showSuccessMessage, allResponse },
			},
			data: { code, msg, data,  },
		} = response;
		//allResponse，直接返回respones，二进制文件流也直接返回response
		if (allResponse || responseType === 'blob') {
			return response.data;
		}
    //没有权限，终止请求
		if (code === 401) {
			failureToken();
			return;
		}
		//成功
		if (code === 200) {
			//showSuccessMessage 是否展示操作结果消息，如删除成功，修改成功等。
			if (showSuccessMessage) {
				alert(msg || '操作成功');
			}
			return data;
		}
		// 失败
		else {
		  alert(`${msg || '发生未知错误，请联系管理员'}`);
			Promise.reject(response);
		}
	},
	// 请求头非200处理
	(error) => {
		//token失效
		if (error.response.status === 401) {
			failureToken();
			return;
		}
		alert(`${error.response.data.msg || error.message || '发生未知错误，请联系管理员'}`);
		return Promise.reject(error);
	}
);
```
**5.导出 axios 实例**

```js 
export default service;

```

