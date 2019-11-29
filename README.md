###  项目架构
#### vue(2.16)+view-design(4.0.2)+vuex(3.1.2)
###  项目结构
```
── dist // build生成文件 
├── node_modules // 包 
├── public //  公共目录
├── src // 源码目录 
│ ├── api // 请求接口 
│ ├── assets // 静态资源 
│ ├── components //  公共组件
│ ├── config //  全局配置
│ │ │ ├── index.ts // 
│ │── page  // 页面目录
│ │── router  // 路由
│ │ ├── index.js     // api导出
│ │ ├── request.js     // fetch请求方法
│ │── store  // 状态管理
│ │── style  // css
│ │── util  // 工具
│ │ ├── index.js     // 方法导出
│ ├── app.vue //  
│ ├── main.js //  入口文件
├── test      // 测试
├── .env     // 环境变量
└── package.json   //项目说明
└── readme.md  // 此文件
└── .esconfig.js  // js配置
└── vue.config.js //vue配置
└── yarn.lock  // lock

```
####  umi + dva 框架

### Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn dev
```

### Compiles and minifies for production
```
yarn build
```

### Run your unit tests
```
yarn test:unit
```

### Lints and fixes files
```
yarn lint
```

