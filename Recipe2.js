document.getElementById('sign-InForm').addEventListener('submit', function(e){
  e.preventDefault();
  const username=document.getElementById('username').value.trim();
  const dob=document.getElementById('dob').value;
  const phone=document.getElementById('phone').value.trim();
  const role=document.getElementById('role').value;
  const password=document.getElementById('password').value.trim();
  const confirmPassword=document.getElementById('confirmPassword').value;
  
  if(!/^[A-Za-z]+$/.test(username)){
    alert('Username must only contain letters no space');
    return;
  }
  const birthDate= new Date(dob);
  const age= new Date().getFullYear() - birthDate.getFullYear();
  if(age<18){
    alert('You must be at least 18 year old.');
      return;
  }
  if(!/^07\d{8}$/.test(phone)){
    alert('Enter a valid Kenyan phone number starting with digits 07...');
    return;
  }
  const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
  if(!strongPasswordRegex.test(password)) {
    alert('Password must be atleast 8 characters long and include uppercase, lowercase,numbers and special characters.');
    return;
  }
  if(password!== confirmPassword){
    alert('Passwords do not match.');
    return;
  }
  alert(`You have successfully registered as a ${role}!`);
});

