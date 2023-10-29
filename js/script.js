document.addEventListener('DOMContentLoaded', function() {
    // 現在の日付と時刻を取得
    const now = new Date();

    // 年、月、日、曜日を取得
    const year = now.getFullYear();
    const month = now.getMonth() + 1;  // JavaScriptの月は0から始まるので+1する
    const date = now.getDate();
    const dayNames = ['日', '月', '火', '水', '木', '金', '土'];
    const dayOfWeek = dayNames[now.getDay()];

    // 時と分を取得
    const hour = String(now.getHours()).padStart(2, '0');
    const minute = String(now.getMinutes()).padStart(2, '0');

    // HTML要素を更新
    document.getElementById('currentDate').innerText = `${year}/${month}/${date}(${dayOfWeek})`;
    document.getElementById('currentTime').innerText = `${hour}:${minute}`;
});



document.getElementById('login-button').addEventListener('click', function() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if(username && password) {
         window.location.href = 'attendance.html';
    } else {
        alert('メールアドレスとパスワードを入力してください。');
    }
});
 


