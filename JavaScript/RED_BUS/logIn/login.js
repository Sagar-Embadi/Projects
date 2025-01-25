import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyBnmZOcT9K4TIB0G1axNCuZSngnup0d3vg",
    authDomain: "red-bus-4d7c8.firebaseapp.com",
    projectId: "red-bus-4d7c8",
    storageBucket: "red-bus-4d7c8.firebasestorage.app",
    messagingSenderId: "1098013578941",
    appId: "1:1098013578941:web:af5e34b65ae200c88b89d4"
    };

let form=document.getElementById("login")

form.addEventListener("submit",(s)=>{
    s.preventDefault()
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          Swal.fire({
            title: "LogIn Successful..!",
            text: "Book Your Seat Now",
            icon: "success"
          });
      location.href="../home/home.html"
        })
        .catch((error) => {
          Swal.fire({
            title: "LogIn Failed",
            text: "auth/invalid-login-credentials",
            icon: "error"
          });
        });
    });

    // signInWithEmailAndPassword(auth, email, password)
    // .then((userCredential) => {
      //   Swal.fire({
      //       title: "LogIn Successful..!",
      //       text: "Book Your Seat Now",
      //       icon: "success"
      //     });
      // location.href="../home/home.html"
    // })
    // .catch((error) => {
      // Swal.fire({
      //   title: "LogIn Failed",
      //   text: "Enter correct Credentials",
      //   icon: "error"
      // });
    //   alert(error.message);
    // });


    // const users = JSON.parse(localStorage.getItem('users')) || [];
    // const user = users.find(user => user.email === email && user.password === password);

    // if (user) {
    //     alert('successful!');
    //     location.href="../home/home.html"
    // } else {
    //     alert('Invalid email or password!');
    // }