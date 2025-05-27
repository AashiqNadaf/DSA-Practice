class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0
    }
   
    getSize() {
        return this.size;
    }
   
    isEmpty() {
        return this.size === 0;
    }

    prepend(value) {
       const node = new Node(value);
       if(this.isEmpty()) {
           this.head = node;
       } else {
           node.next = this.head
           this.head = node;
       }
       this.size++;
    }

    append(value) {
        const node = new Node(value);
        if(this.isEmpty()) {
           this.head = node;
       } else {
           let prev = this.head;
           while(prev.next) {
               prev = prev.next;
           }
           prev.next = node;
       }
       this.size++;
    }
   
    insert(value, index) {
        if(index < 0 || index > this.size) {
            console.log('invalid index');
            return
        } else if (index === 0) {
            this.prepend(value)
        } else {
            const node = new Node(value);
            let i = 0;
            let cur = this.head;
            while(i < index - 1) {
                cur = cur.next;
                i++;
            }
            node.next = cur.next;
            cur.next = node;
        }
        this.size++;
    }
   
    remove(index) {
        if(index < 0 || index > this.size) {
            console.log('invalid index');
            return
        } else if (index === 0) {
            this.head = this.head.next;
        } else {
            let i = 0;
            let cur = this.head;
            while(i < index - 1) {
                cur = cur.next;
                i++;
            }
            const temp = cur.next;
            cur.next = temp.next;
        }
        this.size--;
    }
   
    print() {
        if (this.isEmpty()) {
            console.log("Linked list is empty");
        } else {
            let cur = this.head;
            let listValue = '';
            while(cur) {
                listValue += `${cur.value}, `
                cur = cur.next;
            }
            console.log(listValue)
        }
    }
}

const list = new LinkedList();
console.log(list.getSize())
console.log(list.isEmpty())
list.prepend(10);
list.prepend(20);
list.prepend(30);
list.append(70);
list.append(90);
list.insert(40, 3);
list.remove(3)
list.print()
