const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};
// Complete the function below
var isPalindrome = function (head) {
   let slow=head;
   let fast=head;
   while(fast.next&&fast.next.next){
       slow=slow.next;
       fast=fast.next.next;
   }
   slow.next=reversal(slow.next);
   slow=slow.next;
   while(slow){
       if(head.data!==slow.data){
           return false
       }
       head=head.next;
       slow=slow.next;
   }
   return true
};
var reversal=function (head){
    var privious=null;
    var next=null;
    var current=head;
    while(current){
        next=current.next;
        current.next=privious;
        privious=current;
        current=next;
    }
    return privious
}