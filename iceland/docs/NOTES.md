# 笔记📒

## 异步编程

+ `Koa` 的 `app.use()`用于注册中间件，该方法接受一个回调函数，回调函数的参数为 `ctx` 和 `next函数`
  + `ctx`表示上下文
  + `next()` 表示执行下一个 ‘洋葱圈回调函数’
  + 回调函数的返回类型为 `Promise`
  + 为了保证执行顺序为‘洋葱模型’，回调函数加`async`，`next()`加`await`
+ 函数加了 `async` 关键字后，`return` 的内容会转换成 `Promise`
+ `await` 必须配合 `async`使用，`await` 会阻塞后面的异步执行，从而实现同步执行。