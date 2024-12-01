let responce=fetch('http://127.0.0.1:3000/data/info/pass.json')
responce.then(response => response.json()).then(data => {
     console.log("Fetched email:", data.email);
     // Get the sign-in button
     let signInButton = document.querySelector("#sign-in-btn");
     // Add event listener to the Sign In button
     signInButton.addEventListener("click", () => {
         let input = document.getElementById("email-id");
         let password=document.querySelector(".pass")
         let email = input.value;
         let pas=password.value

         if (email === data.email&& pas=== data.password) {
             window.location.href = "./admin.html"; 
         } else {
             alert("Invalid email address or password");
             window.location.href = "./adlog.html"; 
         }
     });
 })
 .catch(error => {
     // Handle errors (if the fetch fails)
     console.error('Error fetching JSON:', error);
     alert("There was an error fetching the data.");
 });