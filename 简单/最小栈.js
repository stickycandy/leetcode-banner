
/**
 * 设计一个支持 push ，pop ，top 操作，并能在常数时间内检索到最小元素的栈。

实现 MinStack 类:

MinStack() 初始化堆栈对象。

void push(int val) 将元素val推入堆栈。

void pop() 删除堆栈顶部的元素。

int top() 获取堆栈顶部的元素。

int getMin() 获取堆栈中的最小元素。

输入格式:
第一行输入是操作的序列，即MinStack类之中的成员函数；

第二行输入是成员函数所对应的参数，若没有参数则输入为 []

输出格式:
输出为对应序列中每个操作的返回值
 */


class MinStack {
  constructor() {
    this.stack = [];
    this.min = null;
  }
  
  push (val) {
    if (this.stack.length === 0) {
      this.stack.push(val);
      this.min = val;
    } else {
      this.stack.push(val);
      this.min = Math.min(val, this.min);
    }
    return null
  }

  pop () {
    if (this.stack.length === 0) {
      return null;
    }
    this.stack.pop();
    if (this.stack.length === 0) {
      this.min = null;
    } else {
      this.min = Math.min(...this.stack);
    }
    return null
  }

  top () {
    if (this.stack.length === 0) {
      return null;
    }
    return this.stack[this.stack.length - 1];
  }

  getMin () {
    if (this.stack.length === 0) {
      return null;
    }
    return this.min;
  }
}

let minStack = new MinStack();

process.stdin.on('data', function(data) {
  const input = data.toString().trim().split('\n');
  const command = input[0].split(',');
  const val = input[1].split(',');
  const res = []
  command.forEach((item, index) => {
    if (val[index]) {
      res.push(minStack[item](Number(val[index])))
    } else {
      res.push(minStack[item]())
    }
  });

  console.log(res.map(item => item === null ? 'null' : item).toString());
})