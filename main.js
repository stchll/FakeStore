document.getElementById('subscribeBtn').addEventListener('click', () => {
  const email = document.getElementById('email').value;
  const message = document.getElementById('message');

  if (email.includes('@')) {
    message.style.display = 'block';
    message.textContent = 'Підписку оформлено ✅';
  } else {
    message.style.display = 'block';
    message.textContent = 'Будь ласка, введіть коректний email ❗';
  }
});
