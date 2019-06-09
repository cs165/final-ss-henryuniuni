class Login{
    constructor(containerElement){
        this.containerElement = containerElement;
        const formElement = containerElement.querySelector("form");
        formElement.addEventListener("submit", function(event){
            event.preventDefault();
            const la = document.querySelector("#la");
            const lp = document.querySelector("#lp");
            const arr = [la.value, lp.value];
            fetch('/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(arr)
            }).then(function(res){
                return res.json();
            }).then(function(js){
                if(js.response == "success"){
                    app.reg.hide();
                    const header = document.querySelector("header");
                    header.querySelector("section").classList.add("inactive");
                    const span = header.querySelector("span");
                    span.innerHTML=`Welcome! ${js.name}, your last GPA calculation is ${js.GPA}`;
                    span.classList.remove("inactive");
                    app.main.show();
                    app.login.hide();
                }
                else{
                    document.querySelector("#loginerr").classList.remove("inactive");
                }
            })
        });
    }

    show(){
        this.containerElement.classList.remove("inactive");
    }

    hide(){
        this.containerElement.classList.add("inactive");
    }
}