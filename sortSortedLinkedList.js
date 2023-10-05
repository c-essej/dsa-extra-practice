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
}

/**
*Write a function that is passed two linked lists, a and b, both of
which are already sorted.
*It should return a new linked list, in sorted order.
 */
function sortSortedLinkedList(a, b){

  let values = [];

  while (a.length && b.length) {

    if (a.head.val > b.head.val) {
      values.push(b.shift());

    } else {
      values.push(a.shift());

    }
  }

let newLinkedList = new LinkedList(values);

return newLinkedList;


}



module.exports = { LinkedList, Node, sortSortedLinkedList};