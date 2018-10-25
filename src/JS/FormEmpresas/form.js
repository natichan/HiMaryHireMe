document.getElementById('goQuestions').addEventListener('click', (e) => {
    document.getElementById('welcome').style.display = "none";
    let x = document.getElementsByClassName("questions");
        let i;
        for (i = 0; i < x.length; i++) {
            x[i].style.display = 'block';
        }
})
