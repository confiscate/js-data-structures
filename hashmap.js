// Generic hash map
function HashMap(opt_json) {
  this.internal = {};
  this.numEntries = 0;
  if (opt_json) {
    for (var key in opt_json) {
      this.put(key, opt_json[key]);
    }
  }
}

HashMap.prototype.put = function(key, value) {
  if (!this.has(key)) this.numEntries++;
  this.internal[key] = value;
}

HashMap.prototype.get = function(key) {
  if (this.isEmpty()) return undefined;
  return this.internal[key];
}

HashMap.prototype.has = function(key) {
  return !(this.internal[key] === undefined);
}

HashMap.prototype.remove = function(key) {
  if (this.has(key)) {
    delete this.internal[key];
    this.numEntries--;
  }
}

HashMap.prototype.size = function() {
  return this.numEntries;
}

HashMap.prototype.isEmpty = function() {
  return this.size() == 0;
}

HashMap.prototype.toString = function() {
  if (this.isEmpty()) return 'HashMap is empty';
  var out = '';
  for (var key in this.internal) {
    out += key + '&nbsp;&nbsp;&nbsp;' + this.internal[key] + '<br/>';
  }
  return out;
}
