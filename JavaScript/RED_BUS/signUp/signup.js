let form=document.getElementById("register")

form.addEventListener("submit",(s)=>{
    s.preventDefault()
    const name=document.getElementById('name')
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirm-password');

    let nameValue = name.value.trim()
    let emailValue = email.value.trim()
    let passValue = password.value.trim()
    let cPassValue= confirmPassword.value.trim()

    let nameError = document.getElementById("nameError")
    let emailError = document.getElementById("emailError")
    let passError = document.getElementById("passError")
    let cPassError = document.getElementById("cPassError")

    emailError.textContent=""

    let isValid=true;
    if (nameValue === "") {
      nameError.textContent="name required"
      isValid=false
    } else if (nameValue.length <= 3) {
      nameError.textContent="pls enter  more than 3 char long"
      isValid=false
    }else{
      nameError.textContent=""
    }
    const emailPattern=/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/
    
    if(emailValue === ""){
      emailError.textContent="email required"
      isValid=false
    }else if(!emailPattern.test(emailValue)){
      emailError.textContent="email not valid"
      isValid=false
    }
    
    const passwordPattern=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@]).{8,}$/
    if(passValue === ""){
      passError.textContent="password required"
      isValid=false
    }else if(!passwordPattern.test(passValue)){
      passError.textContent="Password must be at least 8 characters and include at least one uppercase letter, one lowercase letter, one number, and one special character (!@#$%^&*)."
      isValid=false
    }else{
      passError.textContent=""
    }
  
    if(passValue !== cPassValue){
      cPassError.textContent="passwords doesnot matched"
      isValid=false
    }else{
      cPassError.textContent=""
    }
    const allUsers=JSON.parse(localStorage.getItem("users")) || [];
    if (allUsers.find(user => user.email === emailValue)) {
      emailError.textContent="User with this email already exits"
      isValid=false
    }else{
      emailError.textContent=""
    }
    
    if(isValid){
      console.log("success");
      
      Swal.fire({
        title: "Good job!",
        text: "You clicked the button!",
        icon: "success"
      });
      name.value=""
      email.value =""
      password.value =""
      confirmPassword.value =""
      
      allUsers.push({name:nameValue,email:emailValue,password:passValue,confirmPassword:cPassValue})
      localStorage.setItem("users",JSON.stringify(allUsers))
      
      location.href="../logIn/login.html"
    }
  })