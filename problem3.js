  // The difference between the use of the this keyword in regular and arrow functions is the scope in which this is referring to
  // In a regular function , this is bound to the function and is determined by how the function is called
  // In an arrow function, this has no bounds and captures its value from the surrounding scope
 
 // Regular Function
 let human = {
    name: 'Jeff',
    age: 19,
    introduce: function() {
      console.log('Hi, my name is ' + this.name + ' and I am ' + this.age + ' years old!');
    }
};
  person1.introduce();
  // Arrow Function
    human  = {
    name: 'Joselyn',
    age: 23,
    introduce: function() {
      console.log('Hi, my name is ' + this.name + ' and I am ' + this.age + ' years old!');
    }
};