"use strict";

/** Node: node for a singly linked list. */

class Node {
  val = null;
  next = null;

  constructor(val) {
    this.val = val;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  head = null;
  tail = null;
  length = 0;

  constructor(vals = []) {
    for (let val of vals) {
      this.push(val);
    }
  }

  printVals() {
    let current = this.head;

    while (current !== null) {
      console.log(current.val);
      current = current.next;
    }
  }

  /** push(val): add new value to end of list. */

  push(val) {
    let newNode = new Node(val);

    if (this.head === null) this.head = newNode;
    if (this.tail !== null) this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    const newNode = new Node(val);
    if (this.head === null){
      this.head = newNode;
      this.tail = newNode;
    } else {

      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
  }

  /** pop(): return & remove last item. */
  // TODO: Comments for each "if" case
  pop() {
    if (!this.head) throw new Error();

    let current = this.head;
    if (this.length === 1){
      this.tail = this.head = null;
      this.length = 0;
      return current.val;
    }
    while (current !== null) {
      const removed = this.tail;

      if (current.next === this.tail) {
        current.next = null
        this.tail = current;
        this.length--;
        return removed.val;
      }
      current = current.next;
    }
  }

  /** shift(): return & remove first item. */

  shift() {
    if (!this.head) throw new Error();

    if (this.length === 1){
      const removed = this.head.val;
      this.head = this.tail = null;
      this.length--;
      return removed;
    }
    const removed = this.head.val;
    this.head = this.head.next;
    this.length--;
    return removed;
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    let current = this.head;
    let currIdx = 0;

    while (current !== null) {
      if (currIdx === idx) {
        return current.val;
      } else {
        currIdx++;
        current = current.next;
      };
    }

    throw new Error();
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    let current = this.head;
    let currIdx = 0;

    while (current !== null) {
      if (currIdx === idx) {
        current.val = val;
        return current.val;
      } else {
        currIdx++;
        current = current.next;
      };
    }
    throw new Error();
  }

  /** insertAt(idx, val): add node w/val before idx. */

  // N N N N
  // 0 1 2 3


  insertAt(idx, val) {
    const newNode = new Node(val);

    if (this.length === 0) {
      this.head = this.tail = newNode;
      this.length++;
      return newNode.val;
    }

    if (idx === 0) return this.unshift(val);
    if (idx === this.length) return this.push(val);

    let current = this.head;
    let currIdx = 0;

    while (current !== null) {
      if (currIdx + 1 === idx) {
        newNode.next = current.next;
        current.next = newNode;
        this.length++;
        return current.next.val;
      } else {
        currIdx++;
        current = current.next;
      };
    }

    throw new Error();
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if (idx === 0) return this.shift();

    let current = this.head;
    let currIdx = 0;

    while (current !== null) {
      if (currIdx + 1 === idx) {
        const removed = current.next.val;
        current.next = current.next.next;
        this.length--;
        return removed;
      } else {
        currIdx++;
        current = current.next;
      };
    }

    throw new Error();
  }

  /** average(): return an average of all values in the list */

  average() {
    if (this.length === 0) return 0;

    let current = this.head;
    let sum = 0;

    while (current !== null) {
      sum += current.val;
      current = current.next;
    }

    return sum / this.length;
  }
}

module.exports = LinkedList;
