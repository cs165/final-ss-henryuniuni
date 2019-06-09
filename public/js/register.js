class Register{
    constructor(containerElement){
        this.containerElement = containerElement;
        const formElement = containerElement.querySelector("form");
        formElement.addEventListener("submit", function(event){
            event.preventDefault();
            const ra = document.querySelector("#ra");
            const rp = document.querySelector("#rp");
            const rcp = document.querySelector("#rpc");
            const arr = [ra.value,rp.value,0];
            if(rp.value != rcp.value){
                //app.regResult.classList.remove("inactive");
                const tmp = document.querySelector("#regresult");
                tmp.innerHTML="Your password doesn't match your confirmed password. Please input again.";
            }
            else{
                fetch('/', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(arr)
                }).then(function(res){
                    return res.json();
                }).then(function(js){
                    if(js.response == "success"){
                        app.regResult.classList.remove("inactive");
                        app.reg.hide();
                        const header = document.querySelector("header");
                        header.querySelector("section").classList.add("inactive");
                        const span = header.querySelector("span");
                        span.innerHTML=`Welcome! ${ra.value}, your last GPA calculation is 0.00`;
                        span.classList.remove("inactive");
                    }
                    else
                        console.log(js.response);
                })
            }
            
        });
    }

    show(){
        this.containerElement.classList.remove("inactive");
    }

    hide(){
        this.containerElement.classList.add("inactive");
    }
}
