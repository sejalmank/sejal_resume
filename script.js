/*
1. variables
2. functions
3.loops
4. conditional statements
5. event handlers
6. DOM
7. pop ups
*/


//what is a keyword?fixed word in that language that you cannot use for anything else apart from the job it was selected to do.

//data types-int,float,string,bool,char
//let,var,const -scope,reassignment
//let age = 27;
let my_name = "sejal";

// ==================================================
// CHANGED: GOOGLE APPS SCRIPT URL
// ==================================================
// We are replacing localStorage with Google Sheets.
//
// The flow is:
//
// JavaScript
//      ↓
// fetch()
//      ↓
// Google Apps Script
//      ↓
// Google Sheet
//
// Paste your deployed Google Apps Script Web App URL here.

const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbycw7mE2M4_oarS5NuoYffjhwJo-UYtecOU050JH4nqVIP7okhYEv0j-gmuiTymOO39Ng/exec"

//functions-v.imp-building blocks of coding

//function defination
function clean_utensil() {
  //1. get used plate
  //2. apply soap
  //3.clean with water
  //4.dry and keep back on the rack
}

//function call
clean_utensil();

function greet_person(name){ //funtion definition
 alert("hi, welcome to my webpage "+name);
}

//example of a function call with an AEGUMENT
greet_person("sejal");

//3 POP UPS
//1.alert
//2.confire
//3.prompt

//conditional statement
let age = 27;

if(age>21){
 alert("you are free to go in.");
}
else if(age>18){
 alert("Entry granted only with a guardian!");
}
else{
 alert("Entery denied!");
}

for(let counter= 1; counter <= 10; counter++) {
  console.log("the current value of the counter variable is" +counter);
  console.log("sejal");
}

let control_of_education = document.getElementById("edu");

control_of_education.addEventListener('click', function(){
  control_of_education.innerHTML = "Education was clicked!";
});
                                      
/*tasks - javascript
1. making the toggle theme button work.
2. making admin login button work.
3. make the admin login section work. check the crds and give/restrict access to user messages.
4. make contact me section work - store the user response in your database
5. display user messages in the user-responses section
*/

//task 2 - making admin login button work

let control_of_admin_section = document.getElementById("admin-login");

function showAdminlogin(){
  control_of_admin_section.style.display = "block";
}
//Task 3 - Making the admin section work.
//1. Get the control of the form - because we have to put a SUBMIT event on it.
//2. Get the data which is written on the username and password fields.
//3. set the submit button as type "submit" so that your listener will be able to catch. it.

let control_of_admin_form = document.getElementById("admin-form");
let control_of_user_responses_section = document.getElementById("user-messages");

control_of_admin_form.addEventListener("submit", async function(event){
  event.preventDefault();
  let username = document.getElementById("input_username").value;
  let password = document.getElementById("input_password").value;



// ==================================================
// CHANGED: LOGIN IS NOW SENT TO GOOGLE APPS SCRIPT
// ==================================================
// Previously, the username and password were checked
// directly inside this JavaScript file.
//
// Now JavaScript sends the login information to the
// Google Apps Script backend using fetch().
//
// The backend then checks the credentials and sends
// a response back to us.


try {

  let response = await fetch(
    GOOGLE_SCRIPT_URL,
    {

      method: "POST",

      headers: {
        "Content-Type":
          "text/plain;charset=utf-8"
      },

      body: JSON.stringify({

        action: "login",

        username: username,

        password: password

      })

    }
  );


  let result = await response.json();


  if (result.success) {

    alert("Access granted!");

    control_of_admin_section.style.display =
      "none";


    control_of_user_responses_section.style.display =
      "block";


    get_messages();

  }

  else {

    alert("Access Denied!");

  }


}

catch(error) {

  console.error(error);

  alert(
    "Something went wrong while logging in."
  );

}


}

);

//Task - Make Toggle theme button work

let control_of_toggleBtn =
document.getElementById("toggle-theme");

control_of_toggleBtn.addEventListener(
"click",
function(){


document.body.classList.toggle("dark-theme");


}

);

//Task - Make the contact form work.

let control_of_contact_form =
document.getElementById("contact-form");

//==================================================
// CHANGED: CONTACT FORM NOW SAVES TO GOOGLE SHEETS
// ==================================================
// Previously:
//
// localStorage
//      ↓
// Browser-specific storage
//
// Now:
//
// JavaScript
//      ↓
// fetch()
//      ↓
// Google Apps Script
//      ↓
// Google Sheet
//
// This means messages submitted by different users
// and different computers can all go into the same
// Google Sheet.

control_of_contact_form.addEventListener(
"submit",
async function(event){


// ==================================================
// CHANGED: PREVENT PAGE RELOAD
// ==================================================

event.preventDefault();


let name =
  document.getElementById("name").value;


let email =
  document.getElementById("email").value;


let msg =
  document.getElementById("message").value;


try {


  // ==================================================
  // CHANGED: SEND DATA TO GOOGLE APPS SCRIPT
  // ==================================================

  let response = await fetch(

    GOOGLE_SCRIPT_URL,

    {

      method: "POST",

      headers: {

        "Content-Type":
          "text/plain;charset=utf-8"

      },

      body: JSON.stringify({

        // This tells the backend what operation
        // we want it to perform.

        action: "save_message",

        name: name,

        email: email,

        msg: msg

      })

    }

  );


  let result =
    await response.json();


  if (result.success) {


    alert(
      "Message Submitted"
    );


    // ==================================================
    // CHANGED: CLEAR THE FORM AFTER SUCCESS
    // ==================================================

    control_of_contact_form.reset();


  }

  else {

    alert(
      "Message could not be saved."
    );

  }


}

catch(error) {


  console.error(error);


  alert(
    "Something went wrong while submitting the message."
  );


}


}

);

//Function to get messages

async function get_messages(){

// ==================================================
// CHANGED: FETCH MESSAGES FROM GOOGLE SHEETS
// ==================================================
//
Previously:

//let dummy_database =
 // JSON.parse(localStorage.getItem('tempDB')) || [];


//Now:
//JavaScript sends a GET request to the Google
 //Apps Script Web App.

 //The Google Apps Script reads the Google Sheet
 //and returns the rows as JSON.

try {


let response =
  await fetch(
    GOOGLE_SCRIPT_URL
  );


let result =
  await response.json();


if (!result.success) {

  alert(
    "Could not fetch messages."
  );

  return;

}


let control_of_user_responses_div =
  document.getElementById(
    "user-responses"
  );


// ==================================================
// CHANGED: CLEAR OLD DISPLAYED MESSAGES
// ==================================================
// If the admin logs in more than once or calls
 //get_messages() again, this prevents duplicate
 //messages from being displayed.

control_of_user_responses_div.innerHTML =
  "";


// ==================================================
// CHANGED: READ THE MESSAGES RETURNED BY THE API
// ==================================================

result.messages.forEach(
  responses => {


    let control_of_new_div =
      document.createElement(
        'div'
      );


    // ==================================================
    // CHANGED: USE textContent FOR USER DATA
    // ==================================================
    // Instead of directly placing user input into
     //innerHTML, we create separate elements.
    //
     //This is safer when displaying data submitted
     //by users.

    let nameParagraph =
      document.createElement(
        "p"
      );

    nameParagraph.textContent =
      "Name: " + responses.name;


    let emailParagraph =
      document.createElement(
        "p"
      );

    emailParagraph.textContent =
      "Email: " + responses.email;


    let messageParagraph =
      document.createElement(
        "p"
      );

    messageParagraph.textContent =
      "Message: " + responses.msg;


    let dateParagraph =
      document.createElement(
        "p"
      );

    dateParagraph.textContent =
      "Date: " + responses.date;


    let separator =
      document.createElement(
        "hr"
      );


    control_of_new_div.appendChild(
      nameParagraph
    );


    control_of_new_div.appendChild(
      emailParagraph
    );


    control_of_new_div.appendChild(
      messageParagraph
    );


    control_of_new_div.appendChild(
      dateParagraph
    );


    control_of_new_div.appendChild(
      separator
    );


    control_of_user_responses_div.appendChild(
      control_of_new_div
    );


  }

);


}

catch(error) {


console.error(error);


alert(
  "Something went wrong while fetching messages."
);


}

}

