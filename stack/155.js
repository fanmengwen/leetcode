var MinStack = function () {
  this.x_stack = [];
  this.min_stack = [];
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  this.x_stack.push(val);
  this.mim_stack.push(Math.min(this.min_stack[this.min_stack.length - 1], val));
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  this.x_stack.pop();
  this.min_stack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  this.x_stack[this.x_stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
