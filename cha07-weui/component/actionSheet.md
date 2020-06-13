<a name="actionSheet"></a>

## actionSheet(menus, actions, [options])
actionsheet 弹出式菜单

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| menus | <code>array</code> | 上层的选项 |
| menus[].label | <code>string</code> | 选项的文字 |
| menus[].onClick | <code>function</code> | 选项点击时的回调 |
| actions | <code>array</code> | 下层的选项 |
| actions[].label | <code>string</code> | 选项的文字 |
| actions[].onClick | <code>function</code> | 选项点击时的回调 |
| [options] | <code>object</code> | 配置项 |
| [options.className] | <code>string</code> | 自定义类名 |
| [options.onClose] | <code>function</code> | actionSheet关闭后的回调 |

**Example**  
```js
weui.actionSheet([
```