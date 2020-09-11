$(() => {
  $('form').submit((event) => {
    event.preventDefault();
    const email = $('#email').val();
    const password = $('#password').val();

    const user = {
      email,
      password,
    };

    login(user)
      .then((result) => {
        window.location = `/user.html?id=${result.id}`;
      })
      .catch((error) => {
        const $errorMessage = $('#errorMessage');
        $errorMessage.text(error.responseJSON.message);
        $errorMessage.show();
      });
  });
});

// function login(user) {
//   return $.post(`${AUTH_URL}/login`);
// }
