# z_reader
> 前端用vue全家桶、sass、webpack进行构建，后端暂定用nodejs。

# 已经实现
>1.用vue-svg-icon组件库完成引入icon库。组件地址：https://github.com/cenkai88/vue-svg-icon 。使用的组件库为阿里巴巴的组件库，地址：http://www.iconfont.cn/collections/index?spm=a313x.7781069.1998910419.da2e3581b&type=1 。    
>2.修改滚动条样式。    
>3.详情页导航栏内容的自动填充。    
>4.构建所有路由。    
>5.完成样式布局。    
>6.详情页导航栏内容自动填充。    


# 正在实现
>1.底部组件在任何屏幕下，文字图表都垂直居中。    
>2.修复右侧边有1px间隔(不明原因间隔突然消失了)。    
>3.滚动条弹性滚动。    
>4.详情页导航栏内容的自动填充。目前的想法是根据路由信息来判断进入的是哪个分类页，然后进行ajax获取第二个导航内容。       
>5.顶部组件固定在浏览器头部，向下滚动隐藏，向上滚动显示.    
>6.小说界面，点击顶部与底部附近，实现多行滚动。

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
