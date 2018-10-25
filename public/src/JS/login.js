function inicialize() {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      welcome.classList.add('d-none');
      dashboard.classList.remove('d-none');
    } else {
      welcome.classList.remove('d-none');
      dashboard.classList.add('d-none');
    }
  });
}

function login() {
  const emailValue = email.value;
  const passwordValue = password.value;
  firebase.auth().signInWithEmailAndPassword(emailValue, passwordValue)
    .then(() => {
      loginPage.style.display = 'none';
      dashboard.style.display = 'block';
    })
    .catch((error) => {
      console.log('Error de firebase > ' + error.code);
      console.log('Error de firebase, mensaje > ' + error.message);
    });
}

function logout() {
  firebase.auth().signOut()
    .then(() => {
      loginPage.style.display = 'block';
      dashboard.style.display = 'none';
    })
    .catch();
};