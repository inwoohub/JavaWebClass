const check_input = () => {
    // id가 "login_form"인 폼 선택 (폼 태그에 id가 있어야 함)
    const loginForm = document.getElementById('login_form');
    const emailInput = document.getElementById('typeEmailX');
    const passwordInput = document.getElementById('typePasswordX');
    
    alert('아이디, 패스워드를 체크합니다');
    
    const emailValue = emailInput.value.trim();
    const passwordValue = passwordInput.value.trim();

    if (emailValue === '') {
        alert('이메일을 입력하세요.');
        return false;
    }
    if (passwordValue === '') {
        alert('비밀번호를 입력하세요.');
        return false;
    }
    
    console.log('이메일:', emailValue);
    console.log('비밀번호:', passwordValue);
    
    loginForm.submit();
};

document.getElementById("login_btn").addEventListener('click', check_input);
