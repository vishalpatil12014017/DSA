const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

var middleNode = function(head) {
    var current1=head;
    var current2=head;
    while(current2 &&current1&&current2.next){
        current1=current1.next;
        current2=current2.next.next
    }
    return current1.data
    
};

