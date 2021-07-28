
# 技术栈

移动端
```
使用chameleon + tailwindcss + loadsh + natjs 开发
```

管理端
```
使用vue + element-ui 开发
```

## 环境准备

依赖环境
```
git
node >= 8.10.0、npm >= 5.6.0
```

工具
```
vscode 或 webstorm、小程序开发者工具、Android Studio、Axure RP...
```

vscode插件
```
cml、ESlint、Tailwind CSS IntelliSense、Vetur、loadsh...
```

## 安装chameleon
```sh
npm i -g chameleon-tool
安装成功后，执行 cml -v 查看当前版本， cml -h 查看帮助文档。
```

## 项目介绍
cml项目目录
```sh
├── dist                                // 打包产出目录
  ├── wx                                // 微信小程序代码
  ├── web                               // web端代码
  ├── weex                              // weex端代码
├── mock                                // 模拟数据目录
├── optimize                            // 加速构建配置文件夹
├── platforms                           // 多平台文件夹
    ├── android                         // android项目目录
    ├── ios                             // ios项目目录
├── node_modules                        // npm包依赖
├── package.json
└── src                                 // 项目源代码
    ├── app                             // app启动入口
    ├── assets                          // 资源文件夹
    ├── components                      // 组件文件夹
    ├── interface                       // 多态接口文件夹
    ├── pages                           // 页面文件夹
    ├── subpackages                     // 分包页面文件夹
    ├── store                           // 全局状态管理
    ├── utils                           // 工具文件夹
    └── router.config.json              // 路由配置
├── .eslintrc.js                        // eslint规则配置文件
├── chameleon.config.js                 // 项目的配置文件
├── dev-optimize.js                     // 加速构建脚本文件
├── gulpfile.js                         // 脚本文件
├── postcss.config.js                   // postcss配置文件
├── tailwind.config.js                  // tailwind配置文件
```

cml项目命令行
```sh
package.json --> scripts

npm run dev 或者 cml dev                 // 启动开发环境，同时启动 web、wx、weex 三端
npm run web:dev 或者 cml web dev         // 启动开发环境，启动 web 一端
npm run wx:dev 或者 cml wx dev           // 启动开发环境，启动 wx 一端
npm run weex:dev 或者 cml weex dev       // 启动开发环境，启动 weex 一端
npm run postcss                         // 将tailwind.config的配置生成对应的css代码
npm run gulp                            // 执行脚本 在对应目录下生成global.css
npm run eslint                          // 对项目进行格式校验
npm run eslintfix                       // 对项目进行格式修复 
```