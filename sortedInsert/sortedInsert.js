/*
Given a sorted stack of integers (smallest integer at the top) and an element to insert, 
write a function – sortedInsert(stack, element) –
which inserts the element into the correct position of the stack.
sortedInsert should manipulate the original stack and return the original stack.
The stack will have the methods, isEmpty, peek, push, and pop. 
You can also use count to view how many elements are in the stack.
*/

var Stack = function (initialValue) {
	this.store = {};
	this.count = 0;
	
	if (initialValue !== undefined) {
		this.push(initialValue);
	}
};

Stack.prototype.isEmpty = function() {
  return !this.count; // !0 = true
};

Stack.prototype.peek = function() {
  return this.store[this.count]; // returns the value at this.count key
};

Stack.prototype.push = function(val) {
  this.store[this.count++] = val; // defining value at incremented this.count key
};

Stack.prototype.pop = function() {
	if (!this.isEmpty()) {
		var tmp = this.store[this.count];
		delete this.store[this.count--];
		return tmp;
	}
};


function sortedInsert(stack, element) {
	
}
