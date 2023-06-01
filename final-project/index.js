function switchStyle() {
  if (document.getElementById('styleSwitch').checked) {
    document.getElementById('gallery').classList.add("custom");
    document.getElementById('exampleModal').classList.add("custom");
  } else {
    document.getElementById('gallery').classList.remove("custom");
    document.getElementById('exampleModal').classList.remove("custom");
  }
}

const contactForm = document.querySelector("#contact-form");
const submitBtn = document.querySelector("#submitbtn");
const fnameInput = document.querySelector("#fname");
const lnameInput = document.querySelector("#lname");
const emailInput = document.querySelector("#email");
const messageInput = document.querySelector("#message");

const publicKey = "vJ4Z1GblzWs4qd1al";
const serviceID = "service_rlqqniy";
const templateID = "template_zj8t7av";

emailjs.init(publicKey);

contactForm.addEventListener("submit", e => {
   e.preventDefault();

   submitBtn.innerText = "Just a moment...";

   const inputFields = {
      to_name: "Brothers at Arms",
      email: emailInput.value,
      message: messageInput.value,
      from_firstname: fnameInput.value,
      from_lastname: lnameInput.value
   };

   emailjs.send(serviceID, templateID, inputFields)
    .then(() => {
      submitBtn.innerText = "Message Sent Successfully.";
      fnameInput.value = "";
      lnameInput.value = "";
      emailInput.value = "";
      messageInput.value = "";
    }, (error) => {
      console.log(error);
      submitBtn.innerText = "Something went wrong";
    });
});







// <script type="text/javascript">
//    (function(){
//       emailjs.init("vEH1UMHM39a54Za5X");
//    })();
// </script>
  
//   <script type="text/javascript">
//     var templateParams = {
//     to_name: 'James',
//     from_name: 'Brianna',
//     message: 'This is a test!!'
// };
 
// emailjs.send('service_mxwnvlt', 'template_njks42p', templateParams)
//     .then(function(response) {
//        console.log('SUCCESS!', response.status, response.text);
//     }, function(error) {
//        console.log('FAILED...', error);
//     });
//   </script>