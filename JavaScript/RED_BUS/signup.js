let form=document.getElementById("register")

form.addEventListener("submit",(s)=>{
    s.preventDefault()
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    let users = JSON.parse(localStorage.getItem('users')) || [];
    // if (users.find(user => user.email === email)) {
    //   alert('email already exists!');
    //   return;
    // }
    users.push({ email, password });
    localStorage.setItem('users', JSON.stringify(users));
    alert('Sign up successful!');
    location.href="./login.html"
})