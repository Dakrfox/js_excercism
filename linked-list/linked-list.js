//
// This is only a SKELETON file for the 'Linked List' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

class Node {
  constructor(val) {
    this.val = val
    this.prev = null
    this.next = null
  }
}

export class LinkedList {
  constructor(){
    this.head = null
    this.tail = null
  }

  push(val) {
    let n = new Node(val)
    if (this.head){
      let curr_tail = this.tail
      curr_tail.next = n
      n.prev = curr_tail
      this.tail = n
    } else {
      this.head = this.tail = n
    }
  }

  pop(){
    let node = this.tail
    if (this.tail == this.head){
      this.tail = this.head = null
      return node.val
    }

		this.tail = node.prev
		return node.val
	}

  shift() {
    if (this.head){
      var node = this.head
      this.head = node.next
      return node.val
    }

  }

  unshift(val) {
    var n = new Node(val)
    if (this.head){
      let h = this.head
      h.prev = n
      n.next = h
      this.head = n
    } else {
      this.head = this.tail = n
    }
  }

  delete(val) {
    let curr_node = this.head
    while (curr_node.val != val && curr_node.next){
      curr_node = curr_node.next
    }

    if (curr_node.val == val){
      if(this.count() == 1){
        this.head = this.tail = null
      } else if(curr_node == this.head){
        this.head = curr_node.next
        this.head.prev = null
      } else if(curr_node == this.tail){
        this.tail = curr_node.prev
        this.tail.next = null
      } else {
        curr_node.prev.next = curr_node.next
        curr_node.next.prev = curr_node.prev
      }
    }

  }

  count() {
    if (!this.head){
      return 0
    }
    var curr_node = this.head
    var curr_count = 1

    while(curr_node != this.tail){
      curr_count++
      curr_node = curr_node.next
    }
    return curr_count
  }
}