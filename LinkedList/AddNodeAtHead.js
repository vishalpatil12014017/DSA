
const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

// Complete the function below

function insertNodeAtHead(head, data) {
    let newnode= new LinkedListNode(data)
     newnode.next=head
    return newnode
    
}

