/*
* LRU Cache（Least Recently Used的缩写，即最近最少使用，
它是一种Cache的替换算法,是一种常见的缓存淘汰算法。用于在有限的缓存空间中管理数据对象。
Cache的容量有限，因此当Cache的容量用完后，而又有新的内容需要添加进来时， 就需要挑选并舍弃原有 的部分内容，从而腾出空间来放新内容。
LRU Cache 的替换原则就是将最近最少使用的内容替换掉
*/
/**
 * @param {number} capacity
 * 使用 Map，Map 的 key 迭代顺序和生成顺序一致
 * 访问的时候，删除 key, 然后再次赋值以达到更新该 key 的目的
 * 添加的时候，如果超出容量，利用迭代器获取最早的 key，然后删除
 */
var LRUCache = function (capacity) {
  this.limit = capacity;
  this.map = new Map();
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  let tem;
  if (this.map.has(key)) {
    tem = this.map.get(key);
    // 由于被访问，所以设置为最新的
    this.map.delete(key);
    this.map.set(key, tem);
  }
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  if (this.map.has(key)) {
    this.map.delete(key);
  }
  this.map.set(key, value);

  if (this.map.size > this.limit) {
    this.map.delete(this.map.keys().next().value); // 超出限制了则删除第一个，也就是最久的数据
  }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
