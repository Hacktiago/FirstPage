class Stack{
	constructor(){
		this.stack = [];
	}

	push(element){
		this.stack.push(element);
		return this.stack
	}

	pop(){
		return this.stack.pop();
	}

	peek(){
		return this.stack[this.stack.length - 1];
	}

	size(){
		return this.stack.length
	}

	print(){
		console.log(this.stack);
	}

};

const stack = new Stack()
	console.log(stack.size());
	console.log(stack.push('Jose feliciio'));
	console.log(stack.push('el puma'));
	console.log(stack.size());
	stack.print()
	console.log(stack.pop());
	console.log(stack.peek());