# @apply

使用 @apply 将任何现存的功能类内联到 app.css 中。

当在 HTML 里找到想要提取到一个新组件的通用的功能模式时，这非常有用。

``` css
// assets/**/app.css
@layer components {
  .btn {
    @apply font-bold py-2 px-4 rounded;
  }
  .btn-blue {
    @apply bg-blue-500 text-white;
  }
}
```

修改app.css后执行以下命令，以更新global.css
```
npm run postcss
```

``` css
// assets/**/global.css 中将会自动生成一下代码
.btn {
  border-radius: 5cpx;
  font-weight: 700;
  padding-top: 2cpx;
  padding-bottom: 2cpx;
  padding-left: 4cpx;
  padding-right: 4cpx;
}

.btn-blue {
  background-color: #3b82f6;
  color: #fff;
}
```
