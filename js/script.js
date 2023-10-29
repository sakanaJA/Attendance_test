document.getElementById('login-button').addEventListener('click', function() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if(username && password) {
         window.location.href = 'attendance.html';
    } else {
        alert('メールアドレスとパスワードを入力してください。');
    }
});
