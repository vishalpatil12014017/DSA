
const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
}

// Complete the function below

function reverse(head) {
    let privious=null;
    let current=head;
    let next=null;
    while(current){
        next=current.next;
        current.next=privious;
        privious=current;
        current=next
    }
    return privious
    
}

