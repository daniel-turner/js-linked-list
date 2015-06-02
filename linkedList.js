/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */
function linkedListGenerator(){

  var _head = null;

  var _createNode = function() {

    return {
      value: null,
      next: null
    };
  };

  var _getHead = function() {

    return _head;
  };

  var _getTail = function() {

    var node = _getHead();

    if(node === null) {

      return null;
    };

    while (node.next !== null) {

      node = node.next;
    };

    return node;

  };

  var _add = function(value) {

    var tail = _getTail();
    var newNode = _createNode();
    newNode.value = value;

    if(tail !== null) {

      _getTail().next = newNode;
      //_tail = newNode;

    } else {

      _head = newNode;
      //_tail = newNode;
    };

    return newNode;

  };

  var _get = function(number) {

    var node = _getHead();
    var count = 0;

    while (node !== null && count <= number) {

      if(count === number) {

        return node;
      };

      node = node.next;

      count += 1;

    };

    return false;

  };

  var _remove = function(number) {

    var node = _getHead();
    var previousNode = null;
    var count = 0;

    while(node !== null && count <= number) {

      if(count === number) {

        if( node === _getHead()) { // remove head

          _head = node.next;
        };

        if( node === _getTail()) { // remove tail

          if(previousNode !== null) {

            previousNode.next = null;
          };

          //_tail = previousNode;
        };

        if(previousNode !== null) {

          previousNode.next = node.next;
        };

        return node;
      };

      previousNode = node;
      node = node.next;
      count += 1;
    };

    return false;

  };

  var _insert = function(value,index) {

    var node = _getHead();
    var newNode = _createNode();
    newNode.value = value;
    var previousNode = null;
    var count = 0;

    if(node === null && index === 0) { // insert === add

      return _add(value);
    };

    while(node !== null && count <= index) {

      if(count === index) {

        if(node === _head) { //insert at head

          newNode.next = _head;
          _head = newNode;

          //logList();

          return newNode;
        };

        if(node === _getTail) { //insert at tail

          //console.log("inserting " +newNode + " at tail");

          return _add(newNode.value);
        };

        newNode.next = node;
        previousNode.next = newNode;

        //logList();

        return newNode;
      };

      previousNode = node;
      node = node.next;
      count += 1;

    };

    if(index === count) { // insert index at tail

      return _add(newNode.value);
    };

    return false;
  };

  var logList = function() {

    var node = _head;

    console.log(node);

    // while(node !== null) {

    //   console.log(node);

    //   node = node.next;
    // };
  };

  return {

    getHead: _getHead,
    getTail: _getTail,
    add: _add,
    get: _get,
    remove: _remove,
    insert: _insert
  };

};