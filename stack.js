
// Generic stack
function Stack(opt_arr) {
  // first element is not used
  this.arr = opt_arr ? opt_arr.slice(0) : [];
}

Stack.prototype.insert = function(value) {
  this.arr.unshift(value);
}

Stack.prototype.pop = function() {
  var arr = this.arr;
  if (!arr || this.isEmpty()) return null;
  return this.arr.shift();
}

Stack.prototype.peek = function() {
  if (!this.arr || this.isEmpty()) return null;
  return this.arr[0];
}

Stack.prototype.size = function() {
  return this.arr.length;
}

Stack.prototype.isEmpty = function() {
  return this.size() == 0;
}

Stack.prototype.toString = function() {
  if (!this.arr || this.isEmpty()) return 'Stack is empty';
  return this.arr.join(', ');
}


