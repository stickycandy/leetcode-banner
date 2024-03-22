
class MyQueue {
  constructor() {
    this.stack = []
  }

  push(x) {
    this.stack.push(x)
  }
  pop() {
    if (this.stack.length === 0) {
      throw new Error('pop from empty queue')
    }
    const pop = this.stack.pop()
    return pop
  }

  peek() {
    if (this.stack.length === 0) {
      throw new Error('pop from empty queue')
    }
    return this.stack[0]
  }

  empty() {
    return this.stack.length === 0
  }

}