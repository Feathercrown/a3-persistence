document.addEventListener('DOMContentLoaded', async function(){
    document.forms['login-form'].addEventListener('submit', (event) => {
        event.preventDefault();
        fetch(event.target.action, {
            method: event.target.method,
            body: new URLSearchParams(new FormData(event.target))
        }).then((response) => {
            return response.json();
        }).then((body) => {
            console.log(body);
            if(body.login == "success" || body.login == "newUser"){
                console.log("Successful login!");
                localStorage.setItem('a3-token', body.token);
                window.location.href = './index.html';
            }
        }).catch((error) => {
            console.error(error);
        });
        return false;
    });
}, false);