// 1. Select the Element
let button = document.getElementById("myButton");

// Form Example

let form = document.getElementById("taskForm");
            form.action= "https://google.com";

            form.addEventListener("submit", function(event){ 
            // event.preventDefault();
            console.log('Form Submitted');
            });