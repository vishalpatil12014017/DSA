class Stack {
    constructor(){
        this.stack = [];
    }
    push(value){
        this.stack.push(value)
    }
    pop(){
        if(!this.isEmpty())
        return this.stack.pop();
        else return "empty"
    }
    peek(){
        if(!this.isEmpty())
        return this.stack[this.stack.length-1]
        else return "empty"
    }
    isEmpty(){
        return this.stack.length===0;
    }
    getSize(){
        return this.stack.length
    }
}

//-------now implement queue using stack-----;

class Queue {
    constructor(){
        this.S1 = new Stack ();
        this.S2 = new Stack ();
    }
    push(value){
        while(!this.isEmpty()){
            this.S2.stack.push(this.S1.stack.pop())
        }
        this.S1.stack.push(value);
        while(this.S2.stack.length > 0){
            this.S1.stack.push(this.S2.stack.pop())
        }
    }
    pop(){
        return this.S1.stack.pop()
    }
    front(){
        
        return this.S1.stack[this.S1.stack.length-1]
    }
    isEmpty(){
        return this.S1.stack.length === 0
    }
}

let queue = new Queue ();
queue.push(10);
queue.push(15);
queue.push(20);
queue.pop()
console.log(queue.front())
console.log(queue.S1.stack)