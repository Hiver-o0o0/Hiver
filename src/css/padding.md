
# 内边距 / 外边距

::: warning
由于 padding 和 margin 用法类似，就不单独给 margin 写说明了。将下面表格中Class的开头 .p 换为 .m 即可
:::

::: tip
.pl .pt .pr .pb 分别对应 padding 的 left/top/right/bottom。分别控制上下左右的内间距。

.px 对应 padding 的 left 和 right。 控制左右的内间距

.py 对应 padding 的 top 和 bottom 控制上下的内间距
:::

| Class<img width=200/> | Properties<img width=200/> |
| :------ | :------ |
| .p-px | padding: 1cpx; |
| .p-{size} | padding: {size}cpx; |

## pl  pt  pr  pb

| Class<img width=200/> | Properties<img width=200/> |
| :------ | :------ |
| .pl-px .pt-px .pr-px .pb-px | padding-left/top/right/bottom: 1cpx; |
| .pl-{size} .pt-{size} .pr-{size} .pb-{size} | padding-left/top/right/bottom: {size}cpx; |

## px

| Class<img width=200/> | Properties<img width=200/> |
| :------ | :------ |
| .px-px | padding-left: 1cpx; padding-right: 1cpx; |
| .px-{size} | padding-left: {size}cpx; padding-right: {size}cpx; |

## py

| Class<img width=200/> | Properties<img width=200/> |
| :------ | :------ |
| .py-px | padding-top: 1cpx; padding-bottom: 1cpx; |
| .py-{size} | padding-top: {size}cpx; padding-bottom: {size}cpx; |

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
  <view class="p-100"></view>
  <view class="pl-100"></view>
  <view class="px-100"></view>
  <view class="py-100"></view>
  <view class="m-100"></view>
  <view class="ml-100"></view>
  <view class="mx-100"></view>
  <view class="my-100"></view>
```
