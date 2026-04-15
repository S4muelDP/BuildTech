/* ============================================
   Contacto - Validación de Formulario
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  initContactForm();
});

function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  const fields = {
    name: {
      input: document.getElementById('contact-name'),
      error: document.getElementById('error-name'),
      validate: (val) => val.trim().length >= 2 ? '' : 'El nombre debe tener al menos 2 caracteres.'
    },
    email: {
      input: document.getElementById('contact-email'),
      error: document.getElementById('error-email'),
      validate: (val) => {
        if (!val.trim()) return 'El email es obligatorio.';
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(val) ? '' : 'Ingresa un email válido.';
      }
    },
    subject: {
      input: document.getElementById('contact-subject'),
      error: document.getElementById('error-subject'),
      validate: (val) => val ? '' : 'Selecciona un asunto.'
    },
    message: {
      input: document.getElementById('contact-message'),
      error: document.getElementById('error-message'),
      validate: (val) => val.trim().length >= 10 ? '' : 'El mensaje debe tener al menos 10 caracteres.'
    }
  };

  // Validación en Tiempo Real
  Object.values(fields).forEach(field => {
    field.input.addEventListener('blur', () => {
      validateField(field);
    });

    field.input.addEventListener('input', () => {
      if (field.input.classList.contains('error')) {
        validateField(field);
      }
    });
  });

  // Manejador del envío del formulario
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    let isValid = true;

    Object.values(fields).forEach(field => {
      const errorMsg = validateField(field);
      if (errorMsg) isValid = false;
    });

    if (isValid) {
      // Mostrar estado exitoso
      const formContainer = form.parentElement;
      form.innerHTML = `
        <div class="contact__success">
          <div class="contact__success-icon">✓</div>
          <h2 class="contact__success-title">¡MENSAJE ENVIADO!</h2>
          <p class="contact__success-text">Gracias por contactarnos. Te responderemos pronto.</p>
          <button type="button" class="btn btn--primary" onclick="location.reload()">ENVIAR OTRO MENSAJE</button>
        </div>
      `;
      
      showToast('¡Mensaje enviado exitosamente!', 'success');
    }
  });
}

function validateField(field) {
  const value = field.input.value;
  const errorMsg = field.validate(value);

  if (errorMsg) {
    field.input.classList.add('error');
    field.error.textContent = errorMsg;
    return errorMsg;
  } else {
    field.input.classList.remove('error');
    field.error.textContent = '';
    return '';
  }
}
