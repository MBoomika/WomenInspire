const firebaseConfig = {
  apiKey: "AIzaSyBDMtCN3Q5mUpUSWt_MffuIANJm0hY3wyw",
  authDomain: "registrationform-9bf61.firebaseapp.com",
  databaseURL: "https://registrationform-9bf61-default-rtdb.firebaseio.com",
  projectId: "registrationform-9bf61",
  storageBucket: "registrationform-9bf61.appspot.com",
  messagingSenderId: "232339539095",
  appId: "1:232339539095:web:be2b4304605c5a545255d2"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();

// Handle form submission
document.getElementById('registrationForm').addEventListener('submit', submitForm);

function submitForm(e) {
    e.preventDefault();

    // Get values from the form
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const email = document.getElementById('email').value;
    const course = document.getElementById('course').value;
    const resume = document.getElementById('resume').files[0];

    // Save form data to Firebase
    saveFormData(name, age, gender, email, course, resume);

    // Clear the form
    document.getElementById('registrationForm').reset();
}

// Function to save form data to Firebase
function saveFormData(name, age, gender, email, course, resume) {
    const newRegistrationRef = database.ref('registrations').push();
    newRegistrationRef.set({
        name: name,
        age: age,
        gender: gender,
        email: email,
        course: course,
        resume: resume ? resume.name : "No file uploaded"
    }).then(() => {
        alert("Registration Successful!");
    }).catch((error) => {
        console.error("Error saving data:", error);
    });
}