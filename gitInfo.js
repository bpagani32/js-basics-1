/*
    For this section of the assessment you will be putting together a cheat sheet for common git commands.  
    You'll provide the command as well as what it does. 
*/

//////////////////PROBLEM 1////////////////////
/*
    Create a variable called 'gitDefinition'.
    It should be a string containing your best definition of what Git is.
*/ 
let gitDefinition = ('a screenshot of coders work from that session simalar to a video game save')

//CODE HERE

//////////////////PROBLEM 2////////////////////
/*
    Create a variable called 'gitHubDefinition'.  
    It should be a string containing your best definition of what GitHub is.
*/
// let gitHubDefinition = ('a database of all the saves from coders so they can pair program together to work on projects')

//CODE HERE

//////////////////PROBLEMS 3 - 8////////////////////
/*
    For the next several problems you will be creating objects containing information about different git 
    commands.  Each object should contain 'description' and 'code' properties.  The 'description' property 
    will be a string with a description of what that git command does.  The 'code' property should be a 
    string of the actual command (what you type into your terminal).
*/

//////////////////PROBLEM 3////////////////////
/*
    Create an object called 'init' with 'description' and 'code' properties 
    following the guidelines above to describe the init command.
*/

//CODE HERE
const init = {
    
    printIntroduction: function() {
      console.log(`Git Init: ${this.name}. To start open the terminal with the ^ up ${this.isHuman}`);
    }
  };
  
  const me = Object.create(init);
  
  me.name = 'is the terminal funciton to start your save on git'; 
  me.isHuman = 'and type: git init'; 
  me.printIntroduction();
 
  
//////////////////PROBLEM 4////////////////////
/*
    Create an object called 'clone' with 'description' and 'code' properties 
    following the guidelines above to describe the clone command.
*/

//CODE HERE
// Git Clone:
// Git Status:
// Git Push:





//////////////////PROBLEM 5////////////////////
/*
    Create an object called 'status' with 'description' and 'code' properties 
    following the guidelines above to describe the status command.
*/

//CODE HERE

// const status = {
    
//     printIntroduction: function() {
//       console.log(`Git Status: ${this.name}. To use funciton type : ${this.isHuman}`);
//     }
//   };
  
//   const me = Object.create(init);
  
//   me.name = 'Is a way to check on your saves through the terminal'; 
//   me.isHuman = 'git status in the terminal'; 
//   me.printIntroduction();
// //////////////////PROBLEM 6////////////////////
// /*
//     Create an object called 'add' with 'description' and 'code' properties 
//     following the guidelines above to describe the add command.
// */

// //CODE HERE
// printIntroduction: function(status) {
//     console.log(`Git Add w: ${this.name}. To check on your saves to see if they are being tracked with git ${this.isHuman}`);
//   }


// const me = Object.create(status);

// me.name = 'is the terminal funciton to start your save on git'; 
// me.isHuman = 'to use funciton type :git status in the terminal'; 
// me.printIntroduction();
//////////////////PROBLEM 7////////////////////
/*
    Create an object called 'commit' with 'description' and 'code' properties
    following the guidelines above to describe the commit command.
*/

//CODE HERE


//////////////////PROBLEM 8////////////////////
/*
    Create an object called 'push' with 'description' and 'code' properties 
    following the guidelines above to describe the push command.
*/

//CODE HERE
