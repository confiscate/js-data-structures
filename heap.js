
// Generic binary heap
function Heap(opt_arr) {
  this.arr = [0];
  if (opt_arr) {
    this.heapify(opt_arr);
  }
}

Heap.prototype.heapify = function(arr) {
  if (!arr) return;

  // TODO: change this to an O(N) implementation 
  for (var i = 0; i < arr.length; i++) {
    this.insert(arr[i]);
  }
}

Heap.prototype.insert = function(value) {
  var arr = this.arr;
  var idx = arr.length;
  arr.push(value);
  while (idx > 1 && value < arr[Math.floor(idx/2)]) {
    var parentIdx = Math.floor(idx/2);
    arr[idx] = arr[parentIdx];
    idx = parentIdx;
  }
  arr[idx] = value;
}

Heap.prototype.pop = function() {
  var arr = this.arr;
  if (!arr || this.isEmpty()) return null;
  if (this.size() == 1) return arr.pop();
  var top = arr[1];
  arr[1] = arr.pop();
  var idx = 1;
  while (true) {
    var left = 2 * idx;
    var right = 2 * idx + 1;
    if (right < arr.length && arr[idx] > arr[right] &&
        arr[right] < arr[left]) {
      var tmp = arr[idx];
      arr[idx] = arr[right];
      arr[right] = tmp;
      idx = right;
    } else if (left < arr.length && arr[idx] > arr[left]) {
      var tmp = arr[idx];
      arr[idx] = arr[left];
      arr[left] = tmp;
      idx = left;      
    } else {
      break;
    }
  }
  return top;
}

Heap.prototype.peek = function() {
  if (!this.arr || this.isEmpty()) return null;
  return this.arr[1];
}

Heap.prototype.size = function() {
  return Math.max(0, this.arr.length - 1);
}

Heap.prototype.isEmpty = function() {
  return this.size() == 0;
}

Heap.prototype.toStringList = function() {
  return this.arr.slice(1).join(', ');
}

Heap.prototype.toString = function() {
  if (!this.arr || this.isEmpty()) return 'Heap is empty';
  var out = '';
  var nextLevelEnd = 1;
  var cur = 1;
  do {
    out += this.arr[cur] + '&nbsp;&nbsp;&nbsp;';
    if (cur == nextLevelEnd) {
      out += '<br/>';
      nextLevelEnd = nextLevelEnd * 2 + 1;
    }
    ++cur;
  } while (cur < this.arr.length);
  return out;
}



