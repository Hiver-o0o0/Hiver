# 宽度

## 最小宽度
## 最大宽度

**由于 min-width、max-width 和 width 用法类似，就不单独给 min-width、max-width 写说明了。将下面表格中Class的开头 .w 换为 .min-w 或者 .max-w 即可**

| Class<img width=200/> | Properties<img width=200/> |
| :------ | :------ |
| .w-screen | width: 750cpx; |
| .w-px | width: 1cpx; |
| .w-{size} | width: {size}cpx; |

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
  <view class="w-screen"></view>
  <view class="w-1/2"></view>
  <view class="min-w-screen"></view>
  <view class="min-w-1/2"></view>
  <view class="max-w-screen"></view>
  <view class="max-w-1/2"></view>
```
