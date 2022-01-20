
const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

// Complete the function below

function insertNodeAtPosition(head, data, position) {
    var newNode= new LinkedListNode(data)
    var current=head;
    var count=0;
    if(position===0){
        newNode.next=head;
        return newNode
    }
    while(current.next){
        if(count==position-1){
            let temp=current.next;
            current.next=newNode;
            newNode.next=temp
        }
        count++;
        current=current.next
    }
    return head
    
    
}

