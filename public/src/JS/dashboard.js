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

var ctx = document.getElementById("myChart").getContext('2d');
var myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["Organización", "Responsabilidad", "Innovación", "Liderazgo", "Trabajo en Equipo", "Análisis", "Autoaprendizaje"],
    datasets: [{
      label: '',
      data: [3, 4, 4, 2, 5, 3, 5],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255,99,132,1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }
});

var ctx2 = document.getElementById("myChart2").getContext('2d');
var myChart = new Chart(ctx2, {
  type: 'bar',
  data: {
    labels: ["HTML", "CSS", "JavaScript", "React", "Angular", "Bootstrap", "NodeJS", "Git"],
    datasets: [{
      label: '',
      data: [5, 4, 4, 3, 1, 3, 2, 4],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255,99,132,1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }
});