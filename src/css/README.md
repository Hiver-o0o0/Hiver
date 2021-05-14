# 前言

> 为了提升开发效率，基于tailwindcss定制了适用于为帮前端的一套css规则.通过一次编译生成常用类名，在日常的开发中就无须大量编写css属性。

* * *
只需要在标签class中编写定义好的类名
``` html
    <-- 示例 -->
    <view class="w-100 h-100 bg-gray-100">
        <text class="text-gray-900 font-bold">hello world</text>
    </view>
```
* * *
以下css代码就无须编写了，页面展示的效果是一样的

``` css
  .w-100{
    width: 100cpx;
  }
  .h-100{
    height: 100cpx;
  }
  .bg-gray-100{
    background-color: #f4f4f5;
  }
  .text-gray-900{
    color: #18181b;
  }
  .font-bold{
    font-weight: 700;
  }
```

