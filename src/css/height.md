# 高度
## 最小高度
## 最大高度
> 由于weex端的限制，高度无法使用百分比，也无法使用vh，并且各种设备高度不固定，导致height无法计算。那么在开发中元素想要占满全屏高度，请通过cml.getSystemInfo()获取viewportHeight，并通过style赋值给元素。

**由于 min-height、max-height 和 height 用法类似，就不单独给 min-height、max-height 写说明了。将下面表格中Class的开头 .h 换为 .min-h 或者 .max-h 即可**

**以下类名是基于750cpx计算的**

| Class<img width=200/> | Properties<img width=200/> |
| :------ | :------ |
| .h-screen | height: 750cpx; |
| .h-px | height: 1cpx; |
| .h-{size} | height: {size}cpx; |

``` js
  size:
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
  25, 50, 75, 100, 125, 150, 175, 200,
  225, 250, 275, 300, 325, 350, 375, 400,
  425, 450, 475, 500, 525, 550, 575, 600,
  625, 650, 675, 700, 725, 750
  // 按分数计算，应该设计成1/2，但是由于weex兼容问题，只能设计成1_2
  // 1_2 为 750/2 = 375  1_3 为 750/3 = 250
  1_2, 1_3, 2_3, 1_4, 2_4, 3_4, 1_5, 2_5, 3_5, 4_5, 
  1_6, 2_6, 3_6, 4_6, 5_6, 1_12, 2_12, 3_12, 4_12,
  5_12, 6_12, 7_12, 8_12, 9_12, 10_12, 11_12
```

```html
  <view class="h-screen"></view>
  <view class="h-1/2"></view>
  <view class="min-h-screen"></view>
  <view class="min-h-1/2"></view>
  <view class="max-h-screen"></view>
  <view class="max-h-1/2"></view>
```
