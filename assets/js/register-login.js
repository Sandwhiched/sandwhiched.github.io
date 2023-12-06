const firebaseConfig = {
    apiKey: "AIzaSyB5aqFzFwx4dqPu8ctpFUBgVv_ZDxW5LYI",
    authDomain: "sparkcoretech.firebaseapp.com",
    projectId: "sparkcoretech",
    // Add other Firebase configuration properties if needed
};

// Firebase authentication functions
const auth = firebase.auth();

function registerUser() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Registration successful
            const user = userCredential.user;
            // Perform any necessary actions after successful registration
        })
        .catch((error) => {
            // Handle registration errors
            const errorCode = error.code;
            const errorMessage = error.message;
            // Display error message to the user
        });
}

function loginUser() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Login successful
            const user = userCredential.user;
            // Perform any necessary actions after successful login
        })
        .catch((error) => {
            // Handle login errors
            const errorCode = error.code;
            const errorMessage = error.message;
            // Display error message to the user
        });
}

function logoutUser() {
    auth.signOut()
        .then(() => {
            // Logout successful
            // Perform any necessary actions after successful logout
        })
        .catch((error) => {
            // Handle logout errors
            const errorCode = error.code;
            const errorMessage = error.message;
            // Display error message to the user
        });
}