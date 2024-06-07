// Paw Care
// 2272029 - Josephine Alvina Luwia
// 2272041 - Rafael Cavin Emmanuel Tuasuun

// Alert
const notif = document.getElementById('notif');
const close = document.getElementById('close');

close.addEventListener('click', function () {
   notif.style.display = 'none';
});

// Form
(() => {
   const forms = document.querySelectorAll('.needs-validation');

   Array.from(forms).forEach(form => {
      form.addEventListener(
         'submit',
         event => {
            event.preventDefault();

            // Form is not valid
            if (!form.checkValidity()) {
               event.stopPropagation();
            }

            form.classList.add('was-validated');

            // Form is valid
            if (form.checkValidity()) {
               sendEmail();
               notif.style.display = 'block';
               form.classList.remove('was-validated');
               form.reset();
               scrollTo(0, 0);
            }
         },
         false
      );
   });
})();

// email
function sendEmail() {
   Email.send({
      Host: 'smtp.elasticemail.com',
      Username: 'pawcare.clinic@gmail.com',
      Password: '3F993C3D46E8EA42D6D232A788CC383924DA',
      To: document.getElementById('email').value,
      From: 'pawcare.clinic@gmail.com',
      Subject: 'Meeting Appointment',
      Body:
         'Hi there! <br><br> You have successfully booked an appointment for <u>' +
         document.getElementById('patient').value +
         '</u> on <u>' +
         document.getElementById('date').value +
         '</u>.' +
         ' We have scheduled your appointment with <u>' +
         document.getElementById('sel').value +
         '</u>. We expect your presence <b>10 minutes</b> before the scheduled appointment. Thank you for making an appointment with us. Stay healthy! <br><br> Sincerely,<br>PawCare Clinic',
   });
}
