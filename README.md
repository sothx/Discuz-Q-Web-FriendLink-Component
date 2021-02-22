# Discuz-Q-Web-FriendLink-Component

一个简易的友情链接组件，基于[Discuz Q PC端源码包](https://gitee.com/Discuz/Discuz-Q-Web)进行开发，理论上不会影响Discuz Q后续迭代更新。

**友情链接组件效果demo:**

![demo效果](/img/demo.png)

## 入门

**下载Discuz Q PC端源码包**

```shell
git clone git@gitee.com:Discuz/Discuz-Q-Web.git
```

**在开始之前，建议单独开辟一个分支以便后续维护*(并不是必须的)***

```shell
git checkout -b feature
```

**下载友情链接组件**

```shell
git clone git@github.com:sothx/Discuz-Q-Web-FriendLink-Component.git
```

组件文件夹包含以下文件:

- FriendlyLink.vue

- friendlyLinkConfig.js

- tools.js

**拷贝友情链接组件相关文件到Discuz Q PC源码包**

1.将**FriendlyLink.vue**拷贝到**Discuz Q PC源码包**下的路径:

```shell
/components/index/FriendlyLink.vue
```

2.将**friendlyLinkConfig.js**拷贝到**Discuz Q PC源码包**下的路径:

```shell
/utils/friendlyLinkConfig.js
```

3.将tools.js拷贝到**Discuz Q PC源码包**下的路径:

```
/utils/tools.js
```

**配置国际化**

找到**Discuz Q PC源码包**下的路径:

```
/plugins/lang/zh.js
```

在该文件的home对象增加下面内容:

```javascript
export default {
    ... //省略n个前面的配置项
    home:{
        ... // 省略n个前面的配置项
        friendlyLink: '友情链接' // 配置友情链接的国际化(仅配置此内容)
    }
    ...// 省略n个后续的配置项
}
```

**在Discuz Q PC源码包中配置友情链接组件**

找到**Discuz Q PC源码包**下的路径:

```shell
/pages/index.vue
```

在index.vue移动端推广二维码后追加友情链接组件

```html
<div class="background-color">
   <advertising />
</div>
<!-- 友情链接组件 -->
<div class="background-color">
  <friendly-link />
</div>
<!-- 友情链接组件 -->
```

## 编译打包Discuz Q PC端项目

找到**Discuz Q PC源码包**下的路径:

```
/config.js
```

将DEV_API_URL和SSR_API_URL修改为自己站点的url

**安装项目依赖**

在**Discuz Q PC源码包**文件夹下运行

```shell
npm install -g yarn
//安装完后配置yarn镜像源为阿里镜像
yarn global add yrm
yrm use cnpm
// 安装项目依赖
yarn install
// 如果网络较差推荐使用tyarn，具体用法可以自行百度了解
```

**打包项目文件**

```shell
yarn build:spa
```

执行完命令后，项目文件夹会有个**dist**目录

后续请根据Discuz!Q官方文档的构建说明进行部署

https://discuz.com/docs/%E6%9E%84%E5%BB%BA%E8%AF%B4%E6%98%8E.html

## 配置友情链接

配置友情链接可参考**friendlyLinkConfig.js**文件内的说明

```javascript
/** 
 * 友情链接规范
 * @param {string} name 友情链接名称
 * @param {string} image 友情链接图片(260px*80px)
 * @param {string} desc 友情链接描述
 * @param {string} href 友情链接跳转地址
*/
export default [
  {
    name: '慕课网',
    image: 'http://i2.tiimg.com/731749/4af973f84f3cdcc5.jpg',
    desc: '程序员的梦工厂',
    href: 'http://www.qq.com'
  },
  {
    name: '腾讯网',
    image: 'http://i2.tiimg.com/731749/4af973f84f3cdcc5.jpg',
    desc: '腾讯首页',
    href: 'http://www.qq.com'
  },
  {
    name: '小米网',
    image: 'http://i2.tiimg.com/731749/4af973f84f3cdcc5.jpg',
    desc: '为发烧而生',
    href: 'http://www.qq.com'
  },
  {
    name: '网易游戏',
    image: 'http://i2.tiimg.com/731749/4af973f84f3cdcc5.jpg',
    desc: '网易游戏官网',
    href: 'http://www.qq.com'
  }
];

```





