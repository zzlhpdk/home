# 网络传输面试题

## Cookie、签名、Session、Token 和 JWT
### Cookie
- **定义**：早期用于存储用户登录信息的一种技术。
- **工作原理**：
  - 用户登录成功后，用户名和密码存储在 Cookie 中。
  - 当访问其他页面时，浏览器会自动带上存储有账号密码的 Cookie 请求数据，实现无需再次输入账号密码登录。
- **缺点**：Cookie 是明文的，存在泄露风险。

### 签名
- **定义**：为了解决 Cookie 明文泄露问题而采用的一种加密方式。
- **工作原理**：
  - 用户登录成功后，服务器根据特定算法将登录信息加密，生成一个签名。
  - 将签名返回给浏览器写入 Cookie。
  - 由于用户不知道加密算法，无法破解签名，从而提高了安全性。

### Session
- **定义**：服务器根据cookie里面的key查找数据库里面的内容的过程叫做 Session。
- **工作原理**：
  - 服务器将用户数据保存在服务器端，并生成一个加密的 key 与数据关联。
  - 将 key 返回给浏览器写入 Cookie。
  - 浏览器再次访问时，服务器根据 Cookie 中的 key 查找数据库中的内容。


### Token
- **定义**：手机端没有cookie，所有这主要用于移动端的一种认证方式。
- **工作原理**：
  - 遵守 Bearer 认证规范，将 Token 传入 `Authorization` 字段。
  - 会话数据存储在服务器中。
- **缺点**：
  - 多服务器环境下，由于负载均衡，可能会出现A服务器有数据，B服务器没有数据。导致访问失败。
  - 所以一般需要单独设立一个中心化服务器用于存储会话信息（如 Redis）。
  - 但是如果中心化服务器出现问题时，其他所有服务器都无法访问。

### JWT (JSON Web Token)
#### 定义
 基于上述缺点，会话信息还是应该保存在客户端最好。但是加密方式每个人写的都不一样，所以JWT标准应运而生。
#### 工作原理
  **1. 用户登录**
  - 用户输入登录信息给服务器。
  
  **2.服务器认证**
  - 服务器验证用户提供的登录信息是否正确。
  - 果认证成功，进入下一步；如果失败，则返回错误信息。
  
  **3.生成 Header**
   - 指定 JWT 的类型，通常是 {"typ": "JWT"}
   - 指定签名算法，如 {"alg": "HS256"}.
   - 将 Header 序列化为 JSON 字符串，然后进行 Base64Url 编码。
  
  **4.生成 Payload**

  - 根据需要包含用户信息和一些声明，如 {"sub": "1234567890", "name": "John Doe", "iat": 1516239022}.
  - 将 Payload 序列化为 JSON 字符串，然后进行 Base64Url 编码。
  
  **5.生成 Signature**
  - 使用指定的密钥（secret）和签名算法对 Header 和 Payload 进行签名。
  - 将 Header 和 Payload 的 Base64Url 编码字符串用点（.）连接起来，形成待签名字符串。
  - 对待签名字符串进行签名运算，得到 Signature。
  - 将 Signature 进行 Base64Url 编码。
  
  **6.生成 JWT Token**
  -将 Header、Payload 和 Signature 的 Base64Url 编码字符串用点（.）连接起来，形成完整的 JWT 字符串。

#### 使用JWT

**1.用户携带 JWT 访问资源**
- 用户在后续与服务器通信时，将生成的 JWT 字符串放在 HTTP 请求的 Authorization 字段中，格式为 `Bearer <token>`，发送给服务器。

**2.服务器验证 JWT**
- 服务器从请求中提取 JWT 字符串。
- 将JWT 字符串按点（.）分割成 Header、Payload 和 Signature 三部分。
- 使用密钥（secret）和签名算法对 Header 和 Payload 进行签名运算，生成新的 Signature。
- 将新生成的 Signature 与 JWT 中的 Signature 进行比较。
- 如果两者一致，说明 JWT 是真实且未被篡改的，验证通过；否则，验证失败。
  
**3.服务器处理请求**
- 如果 JWT 验证通过，服务器根据 Payload 中的信息识别用户身份，并处理用户的请求。
- 如果 JWT 验证失败，服务器返回错误信息，拒绝请求。

#### 优点
- **无状态和可扩展性**：服务器不保存任何 session 数据，完全依赖 JWT 本身来认定用户身份，实现无状态化，便于扩展。
- **通过密钥签名机制**，确保 JWT 的真实性和完整性，防止用户篡改数据。
- **跨域认证**：JWT 作为客户端携带的令牌，可以在不同域之间传递，实现跨域认证。


## Ajax、Reuest、Response、Fetch、Axios

### Ajax

#### 定义
- Ajax 是一个技术统称，是一个概念模型，它囊括了很多技术，并不特指某一技术，它很重要的特性之一就是让页面实现局部刷新。Asynchronous JavaScript And XML，即异步的 JavaScript 和 XML。简单来说
- XMLHttpRequest 是实现 Ajax的一种方式。
#### 使用
```js
 const ajax= () => {
                // 创建一个xhr对象
                const xhr = new XMLHttpRequest()
                // 设置响应体的类型，设置后会自动对数据进行类型转换
                xhr.responseType = "json"
                // 可以为xhr对象绑定一个load事件
                xhr.onload = function () {
                    // xhr.status 表示响应状态码
                    if (xhr.status === 200) {
                        // xhr.response 表示响应信息
                        const result = xhr.response
                        // 判断数据是否正确
                        if (result.status === "ok") {
                            // 创建一个ul
                            const ul = document.createElement("ul")
                            // 将ul插入到root中
                            root.appendChild(ul)
                            // 遍历数据
                            for (let stu of result.data) {
                                ul.insertAdjacentHTML(
                                    "beforeend",
                                    `<li>${stu.id} - ${stu.name} - ${stu.age} - ${stu.gender} - ${stu.address}</li>`
                                )
                            }
                        }
                    }
                }
                // 设置请求的信息
                xhr.open("get", "http://localhost:3000/students")
                // 发送请求
                xhr.send()
            }

```

### fetch

#### 定义
- 是ES6 引入的一个 API，用于发起网络请求，是 XMLHttpRequest 的替代品。
- 使用 Promise，不使用回调函数，使得异步操作更加简洁和易于处理。
- fetch 返回一个 Promise，可以使用 async/await 进行异步处理。

#### 使用
```js
try {
  const response = await fetch("/api/data", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ key: "value" }),
  });
  if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
  const data = await response.json();
  console.log("Success:", data);
} catch (error) {
  console.error("Error:", error);
}
```
#### 缺点
  - fetch 默认不携带任何认证信息，如果要发送 cookie 或其他凭证，需要设置 credentials 为 'include'。
  - 不支持请求拦截、取消请求、超时设置等功能，需要手动封装
  - 网络错误会触发 catch，但 HTTP 错误（如 400、500）不会抛出异常，需要手动检查 response.ok
  - 无法直接监控上传和下载进度

### Axios

#### 定义
- 是一个基于Promise 封装的网络请求库，对XHR进行二次封装。
- 支持从浏览器和 Node.js 中创建请求。
- 支持 Promise API，使用起来更加简洁。
- 支持转换请求数据和响应数据，自动处理 JSON 数据.。
- 支持取消请求，提供更好的请求控制。
- 客户端支持防御 XSRF（跨站请求伪造）。


#### 使用
- 导入 Axios 库，然后通过 axios() 方法发送请求，传入请求配置对象。
- 请求配置对象可以包含方法、URL、请求头、请求体等信息。
- 返回的 Promise 会携带响应数据，可以直接通过 .then() 或 async/await 获取和处理数据。
### 总结
- Ajax 是一种思想，使用 XMLHttpRequest 实现异步请求，实现页面局部刷新。
- Request 和 Response 是 Web API 接口，分别用于创建请求对象和表示请求的响应，提供了丰富的配置选项和数据获取方法。
- Fetch 是一个现代的 API，使用 Promise 和模块化设计，简化了网络请求的处理，是 XMLHttpRequest 的替代品。
- Axios 是一个基于 Promise 的网络请求库，封装了 XHR，提供了更加简洁和强大的请求功能，支持多种特性如拦截、转换、取消请求等。
