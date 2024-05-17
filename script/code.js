
// //JAVASCRIPT CODE//
// let dataEntry = document.querySelector ('[data-entry]')
// console.log(document.querySelector(['numberTwo']));
// function display(value) {

//     dataEntry.value = value;
// }


function insert(num) {
    document.getElementById('textview').value = document.getElementById('textview').value + num
    
}


   
   
//This is the AC function
   function clean() {
       document.getElementById('textview').value = "";
   }

   
   //This is the equal to function
   function equal() {
       let equ = document.getElementById('textview').value;
       if(equ) {
           document.getElementById('textview').value = eval(equ)
       }
   }
   
   
   //This is the delete function
   function del() {
       let equ = document.getElementById('textview').value;
       
       document.getElementById('textview').value = equ.substring(0, equ.length-1)
   }
   
   
   
   
   
   