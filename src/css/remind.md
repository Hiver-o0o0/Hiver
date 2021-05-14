# 注意事项

::: warning
每个cml文件下style标签中加入 @import './global.css';
:::

由于weex端无法对css做tree shaking，如果将assets/css/global.css设置为全局样式，将会导致构建的bundlejs过大。所以只在dev模式下设置为全局样式，而build模式下，需要在每个cml文件中style标签中加入 @import './global.css';。