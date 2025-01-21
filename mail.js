const firebaseConfig = {
    //   copy your firebase config informations
    apiKey: "AIzaSyBA1XwlTevHuD7U45PuPPjDA0iqNE_sqJc",
    authDomain: "med-sine-healthcare.firebaseapp.com",
    databaseURL: "https://med-sine-healthcare-default-rtdb.firebaseio.com",
    projectId: "med-sine-healthcare",
    storageBucket: "med-sine-healthcare.firebasestorage.app",
    messagingSenderId: "232731820170",
    appId: "1:232731820170:web:01b99adde4944d4390ad73",
    measurementId: "G-QPCM2S16MV"
  };
  
  // initialize firebase
  firebase.initializeApp(firebaseConfig);
  
  // reference your database
  var contactFormDB = firebase.database().ref("contactForm");
  
  document.getElementById("contactForm").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    var name = getElementVal("name");
    var email = getElementVal("email");
    var phone = getElementVal("phone");
    var subject = getElementVal("subject");
    var message = getElementVal("message");
  
    saveMessages(name, email,phone,subject, message);
  
    //   enable alert
    document.querySelector(".alert").style.display = "block";
  
    //   remove the alert
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 3000);
  
    //   reset the form
    document.getElementById("contactForm").reset();
  }
  
  const saveMessages = (name, email,phone,subject,message) => {
    var newContactForm = contactFormDB.push();
  
    newContactForm.set({
      name: name,
      email: email,
      phone:phone,
      subject:subject,
      message : message
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };