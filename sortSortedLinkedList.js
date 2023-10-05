"use strict";

const {LinkedList, Node }= require("./linked-list");

/**
*Write a function that is passed two linked lists, a and b, both of
which are already sorted.
*It should return a new linked list, in sorted order.
 */
function sortSortedLinkedList(a, b){

  let values = [];

  while (a.length && b.length) {

    console.log('a.head.val ----->', a.head.val)
    console.log('b.head.val ----->', b.head.val)
    if (a.head.val.val > b.head.val.val) {
      values.push(b.shift());
    } else {
      values.push(a.shift());

    }
  }

  while (a.length){
    values.push(a.shift())
  }

  while (b.length){
    values.push(b.shift())
  }

let newLinkedList = new LinkedList(values);
console.log('values ------->', values);
console.log('newLinkedList ------>', newLinkedList);

return newLinkedList;


}



// module.exports = { LinkedList, Node, sortSortedLinkedList};
module.exports = sortSortedLinkedList;