## Functions

<dl>
<dt><a href="#picker">picker(items, options)</a></dt>
<dd><p>picker 多列选择器。</p>
</dd>
<dt><a href="#datePicker">datePicker(options)</a></dt>
<dd><p>datePicker 时间选择器，由picker拓展而来，提供年、月、日的选择。</p>
</dd>
</dl>

<a name="picker"></a>

## picker(items, options)
picker 多列选择器。

**Kind**: global function  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| items | <code>array</code> |  | picker的数据，即用于生成picker的数据，picker的层级可以自己定义，但建议最多三层。数据格式参考example。 |
| options | <code>Object</code> |  | 配置项 |
| [options.depth] | <code>number</code> |  | picker深度(也就是picker有多少列) 取值为1-3。如果为空，则取items第一项的深度。 |
| [options.id] | <code>string</code> | <code>&quot;default&quot;</code> | 作为picker的唯一标识，作用是以id缓存当时的选择。（当你想每次传入的defaultValue都是不一样时，可以使用不同的id区分） |
| [options.className] | <code>string</code> |  | 自定义类名 |
| [options.container] | <code>string</code> |  | 指定容器 |
| [options.defaultValue] | <code>array</code> |  | 默认选项的value数组 |
| [options.onChange] | <code>function</code> |  | 在picker选中的值发生变化的时候回调 |
| [options.onConfirm] | <code>function</code> |  | 在点击"确定"之后的回调。回调返回选中的结果(Array)，数组长度依赖于picker的层级。 |
| [options.onClose] | <code>function</code> |  | picker关闭后的回调 |

**Example**  
```js
// 单列picker
```
**Example**  
```js
// 多列picker
```
**Example**  
```js
// 级联picker
```
<a name="datePicker"></a>

## datePicker(options)
datePicker 时间选择器，由picker拓展而来，提供年、月、日的选择。

**Kind**: global function  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| options |  |  | 配置项 |
| [options.id] | <code>string</code> | <code>&quot;datePicker&quot;</code> | 作为picker的唯一标识 |
| [options.start] | <code>number</code> &#124; <code>string</code> &#124; <code>Date</code> | <code>2000</code> | 起始年份，如果是 `Number` 类型，表示起始年份；如果是 `String` 类型，格式为 'YYYY-MM-DD'；如果是 `Date` 类型，就传一个 Date |
| [options.end] | <code>number</code> &#124; <code>string</code> &#124; <code>Date</code> | <code>2030</code> | 结束年份，同上 |
| [options.cron] | <code>string</code> | <code>&quot;* * *&quot;</code> | cron 表达式，三位，分别是 dayOfMonth[1-31]，month[1-12] 和 dayOfWeek[0-6]（周日-周六） |
| [options.className] | <code>string</code> |  | 自定义类名 |
| [options.defaultValue] | <code>array</code> |  | 默认选项的value数组, 如 [1991, 6, 9] |
| [options.onChange] | <code>function</code> |  | 在picker选中的值发生变化的时候回调 |
| [options.onConfirm] | <code>function</code> |  | 在点击"确定"之后的回调。回调返回选中的结果(Array)，数组长度依赖于picker的层级。 |

**Example**  
```js
// 示例1：
```