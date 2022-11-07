document.getElementById('btn-submit').addEventListener('click', function() {
    const emailfield = document.getElementById('user-email');
    const email = emailfield.value;
    //console.log(email);
    const passwordfield = document.getElementById('user-password');
    const password = passwordfield.value;
    // console.log(email, password);
    if (email === 'sontan@baap.com' && password === 'secret') {
        window.location.href = 'bank.html'
    } else {
        alert('You are not my son anymore')
    }
})