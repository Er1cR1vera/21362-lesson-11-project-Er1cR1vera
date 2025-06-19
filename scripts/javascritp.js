/* 
author: Eric Rivera
course: CIS133DA
section: 21362
*/

// last modified statement will set the inner HTML to the last modified property
// formSubmit will send an alert message "The form has been submitted" 
// formReset will inhide an element when button is pressed

document.getElementById("lastModified").innerHTML = document.lastModified;


function formSubmit(){
    alert("The form has been submitted")
};

function formReset(){
    document.getElementById("resetMessage").style.visibility = "visible";
};
