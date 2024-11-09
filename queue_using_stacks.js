class QueueUsingStacks {
    constructor() {
      this.stack1 = [];
      this.stack2 = [];
    }
  
    enqueue(value) {
      this.stack1.push(value);
    }
  
    dequeue() {
      if (this.empty()) {
        return null;
      }
  
      if (this.stack2.length === 0) {
        while (this.stack1.length > 0) {
          this.stack2.push(this.stack1.pop());
        }
      }
  
      return this.stack2.pop();
    }
  
    front() {
      if (this.empty()) {
        return null;
      }
  
      if (this.stack2.length === 0) {
        while (this.stack1.length > 0) {
          this.stack2.push(this.stack1.pop());
        }
      }
  
      return this.stack2[this.stack2.length - 1];
    }
  
    empty() {
      return this.stack1.length === 0 && this.stack2.length === 0;
    }
  }
  
  module.exports = {
    QueueUsingStacks,
  };