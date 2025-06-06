// js/formValidation.js

export function setupFormValidation() {
  const form = document.getElementById('formSection');
  const emailInput = document.getElementById('contactEmail');
  const messageInput = document.getElementById('contactMessage');
  const emailError = document.getElementById('emailError');
  const messageError = document.getElementById('messageError');
  const charactersLeft = document.getElementById('charactersLeft');

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const invalidCharRegex = /[^a-zA-Z0-9@._-]/;

  messageInput.addEventListener('input', () => {
    const length = messageInput.value.length;
    charactersLeft.textContent = `Characters: ${length}/300`;

    if (length > 300) {
      charactersLeft.classList.add('error');
      messageInput.classList.add('error');
    } else {
      charactersLeft.classList.remove('error');
      messageInput.classList.remove('error');
    }
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    emailError.textContent = '';
    messageError.textContent = '';

    let valid = true;

    const emailValue = emailInput.value.trim();
    if (emailValue === '') {
      emailError.textContent = 'Email is required.';
      valid = false;
    } else if (invalidCharRegex.test(emailValue)) {
      emailError.textContent = 'Email contains invalid characters. Only letters, numbers, @, ., _ and - are allowed.';
      valid = false;
    } else if (!emailRegex.test(emailValue)) {
      emailError.textContent = 'Email format is invalid. Example: user@example.com';
      valid = false;
    }

    const messageValue = messageInput.value.trim();
    if (messageValue === '') {
      messageError.textContent = 'Message cannot be empty.';
      valid = false;
    } else if (messageValue.length > 300) {
      messageError.textContent = 'Message cannot exceed 300 characters.';
      valid = false;
    } else if (invalidCharRegex.test(messageValue)) {
      messageError.textContent = 'Message contains invalid characters.';
      valid = false;
    }

    if (valid) {
      alert('Form submitted successfully!');
      form.reset();
      charactersLeft.textContent = 'Characters: 0/300';
      charactersLeft.classList.remove('error');
      messageInput.classList.remove('error');
    }
  });
}
