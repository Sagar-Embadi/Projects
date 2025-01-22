let form=document.getElementById("login")

form.addEventListener("submit",(s)=>{
    s.preventDefault()
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
        alert('successful!');
        location.href="./home.html"
    } else {
        alert('Invalid email or password!');
    }
})