const email = document.querySelector('email');
const password = document.querySelector('password');

const handleFormSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3000/auth/login', {
      email: email,
      password: password
    }, {
      headers: {
        'content-type': 'application/json',
        'Accept': 'application/json',
      }
    })
      .then(response => {
        console.log(response);

        if (response.data.user.role == 'admin') {
            localStorage.setItem('token', response.data.authorisation.token);
            window.location.href = 'index.html';
        }
      })
      .catch(error => {
        alert("Incorrect Crendetials!");
      });
  };