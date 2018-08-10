const contactForm = document.querySelector('.contacts');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const form = e.target;
    const firstName = form.querySelector('#fName');
    console.log({firstName});
    console.log(firstName.value !== "");

    const lastName = form.querySelector('#lName');
    console.log(lastName.value);

    const eMail = form.querySelector('#email');
    console.log(eMail.value);
    
    if(firstName.value === "") {
        alert("First Name should be filled out.");
    }   else if(lastName.value === "") {
        alert("Last Name should be filled out.");
    }   else if(eMail.value === "") {
        alert("Email should be filled out.");
    }   else {
        alert('Data has been submitted.');
    }
});



 // function
    // for loop to process all values of name/value pair (fName, lName, eMail)
    // if user inputs nothing "", send alert