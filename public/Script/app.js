// IIFE --> Immediately invoked function expression
(function()
{
    function Start(){
        console.log("App started....");

        // Only the Contact me page has this form, so check that it exists first
        let contactForm = document.getElementById("contactForm");
        if (contactForm) {
            contactForm.addEventListener("submit", FormSubmitted);
        }
    }

    // The browser only fires "submit" after the HTML5 validation passes
    // (required, type="email" and the 10-digit phone pattern in contact.ejs).
    function FormSubmitted(e) {
        // Stop the page from reloading, since there is no server route for the form yet
        e.preventDefault();

        let name = document.getElementById("name").value;
        let message = document.getElementById("formMessage");

        // Show a thank-you message under the form
        message.className = "mt-3 text-success";
        message.innerHTML = "Thank you, " + name + "! Your message has been received.";
    }

    window.addEventListener("load", Start);
})();