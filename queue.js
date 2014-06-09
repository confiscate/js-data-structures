
// Generic queue
function Queue(opt_arr) {
  this.arr = opt_arr ? opt_arr.slice(0) : [];
}

Queue.prototype.insert = function(value) {
  this.arr.push(value);
}

Queue.prototype.pop = function() {
  var arr = this.arr;
  if (!arr || this.isEmpty()) return null;
  return arr.shift();
}

Queue.prototype.peek = function() {
  if (!this.arr || this.isEmpty()) return null;
  return this.arr[0];
}

Queue.prototype.size = function() {
  return this.arr.length;
}

Queue.prototype.isEmpty = function() {
  return this.size() == 0;
}

Queue.prototype.toString = function() {
  if (!this.arr || this.isEmpty()) return 'Queue is empty';
  return this.arr.join(', ');
}


