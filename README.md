# mini-redux

## Use

```js
node ./index.js
```

or

you can use plugin `code Runner` to run `./index.js`

But I recommend you to use plugin `Live Server` to run the `index.html` to see how store works;

Redux 的思想

1.Store
Redux 只有一个 Store，Store 不能直接进行修改，每次操作之后都是返回一个新的对象

2.Action
Action 就是 View 发出的通知，告诉 Store 数据要改变，Action 通过特定的 type 来知晓做何种操作

```js
const action = {
  type: "plus",
  data: {},
};
```

3.Reducer
Reducer 是一个纯函数，接受 action 和 state，然后返回一个新的 state。

总结一下，Redux 的流程如下：

```js
// View 发出 Action
store.dispatch(action);

// store 自动调用 Reducer，并且传入两个参数：当前 State 和收到的 Action。 Reducer 会返回新的 State
let nextState = xxxReducer(previousState, action);

// State 一旦有变化，Store 就会调用监听函数
store.subscribe(listener);

// listener 中可以修改组件的状态，重新渲染组件
function listerner() {
  let newState = store.getState();
  component.setState(newState);
}
```
