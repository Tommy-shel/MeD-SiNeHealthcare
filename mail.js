const firebaseConfig = {
    //   copy your firebase config informations
    apiKey: "AIzaSyCtWRP5yh_HLAYABkr-kuqFLe2emF3uvIM",
    authDomain: "med-sine.firebaseapp.com",
    databaseURL: "https://med-sine-default-rtdb.firebaseio.com",
    projectId: "med-sine",
    storageBucket: "med-sine.firebasestorage.app",
    messagingSenderId: "1031472829436",
    appId: "1:1031472829436:web:a350d346ca3a4c2feb9879",
    measurementId: "G-1T78RQ4G9V"
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