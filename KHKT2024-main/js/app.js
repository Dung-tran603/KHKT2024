// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDt0Dj64DO5n95gPY4GRu3oJG9iMaGzZT8",
  authDomain: "login-khkt.firebaseapp.com",
  databaseURL: "https://login-khkt-default-rtdb.firebaseio.com",
  projectId: "login-khkt",
  storageBucket: "login-khkt.appspot.com",
  messagingSenderId: "53121103803",
  appId: "1:53121103803:web:30e5c5fd84888dd2d6b69e",
  measurementId: "G-J9NTRJHYLH"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Reference to the Firebase database
var contactFormDB = firebase.database().ref("container");

// Event listener for form submission
document.getElementById("container").addEventListener("submit", submitForm);

// Function for form submission
function submitForm(e) {
  e.preventDefault();

  // Get values from input fields
  var email = document.getElementById("emailid").value;
  var name = document.getElementById("name").value;
  var password = document.getElementById("password").value;

  // Save data to Firebase
  saveMessages(email, name, password);

  // Alert the user
  alert("Form submitted successfully!");

  // Clear the form
  document.getElementById("container").reset();

  // Redirect to home page after successful submission
  window.location.href = "home.html"; // Change "home.html" to your homepage file
}

// Save data to Firebase
function saveMessages(email, name, password) {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
      email: email,
      name: name,
      password: password
  });
}

// Redirect to registration page when clicking "Đăng Ký"
document.getElementById("registerBtn").addEventListener("click", function() {
  window.location.href = "signup.html"; // Change "register.html" to your registration page file
});

// Redirect to homepage when clicking "Đăng Nhập"
document.getElementById("loginBtn").addEventListener("click", function() {
  window.location.href = "trangchu.html"; 
});