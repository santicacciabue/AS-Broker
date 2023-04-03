var notyf = new Notyf();

const btn = document.getElementById('button');

document.getElementById('contact')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Enviando...';

   const serviceID = 'default_service';
   const templateID = 'template_pco6tqp';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Enviar mail';
      notyf.success({

        message: "Mensaje enviado!",
        duration: 5000,
        ripple: true,
        position: {
            x:'right',
            y:'top'
        }

    })
    }, (err) => {
      btn.value = 'Enviando';
      alert(JSON.stringify(err));
    });
});