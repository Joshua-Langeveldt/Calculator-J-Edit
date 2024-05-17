
// //JAVASCRIPT CODE//
// let dataEntry = document.querySelector ('[data-entry]')
// console.log(document.querySelector(['numberTwo']));
// function display(value) {

//     dataEntry.value = value;
// }


function insert(num) {
    document.getElementById('textview').value = document.getElementById('textview').value + num
   }
   
   function clean() {
       document.getElementById('textview').value = "";
   }
   
   function equal() {
       let equ = document.getElementById('textview').value;
       if(equ) {
           document.getElementById('textview').value = eval(equ)
       }
   }
   
   
   function del() {
       let equ = document.getElementById('textview').value;
       
       document.getElementById('textview').value = equ.substring(0, equ.length-1)
   }
   
   
   
   function result() {

    let equ = document.querySelector('[textInput]').value; 
    if (equ) {
        document.querySelector('[textInput]').value = eval(equ)
    }f
   }
   
   
   
   