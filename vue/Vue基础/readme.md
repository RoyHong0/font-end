Vue 需要一个挂载点

差值表达式  
    差值表达式使用

模板样式绑定


v-if  v-show 
v-show 和 v-if 区别
v-if  会取消掉整个DOM元素,  更加灵活  
v-show 控制css 样式来控制显示隐藏  只能进行真假的逻辑业务
        
v-for
    循环  与 react 中使用map差不多

<button @click="addCountClick(2, $event)">增加以为佳丽</button>
@click 要绑定多个方法的话,方法用逗号隔开,  方法名需要加括号 

@click 要绑定多个方法的话,方法用逗号隔开,  方法名需要加括号
事件向上冒泡
.stop 停止冒泡
.self 只有自身的DOM元素才能触发 事件绑定
prevent  
capture   捕获模式  重外面开始   默认是冒泡  
once  只做一次
passive  解决滚动性能报错


按键修饰符:  enter, tab, delete, esc, up down left right
鼠标修饰符: \left \right \middle

- 修饰符跟在指令后面
-lazy 修饰符
    有点像防抖
-umber 修饰符
    - 输入的内容无论是数字还是字母，最终都会变为字符串。如果想最终输入的变成数字，你就可以使用number修饰符了。
- trim 修饰符 
        取消前后端空格