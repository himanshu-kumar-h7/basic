// When to use apply()?
      // When arguments are in an array form.
     // When invoking a function with dynamic arguments.


     function greet(greeting, punctuation){
        console.log(greeting + ", " + this.name + punctuation)
     }

     const person = { name: "Himanshu"}

     greet.apply(person, ["Hello", "!"])