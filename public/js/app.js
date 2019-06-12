class App{
    constructor(){
        const welcomeElement = document.querySelector("#welcome");
        this.wel = welcomeElement;
        const registerElement = document.querySelector("#register");
        this.reg = new Register(registerElement);
        const regResultElement = document.querySelector("#reg_result");
        this.regResult = regResultElement;
        const loginElement = document.querySelector("#login");
        this.login = new Login(loginElement);
        const mainElement = document.querySelector("#main");
        this.main = new Main(mainElement);
        const resultElement = document.querySelector("#result");
        this.result = new Result(resultElement);

        regResultElement.querySelector("div").addEventListener("click", function(){
            app.reg.hide();
            app.login.hide();
            app.regResult.classList.add("inactive");
            app.main.show();
            app.result.hide();
        });

        const logbutton = document.querySelector("#login_text");
        const regbutton = document.querySelector("#register_text");
        logbutton.addEventListener('click', function(){
            app.wel.classList.add("inactive");
            app.reg.hide();
            app.login.show();
        });
        regbutton.addEventListener('click', function(){
            app.wel.classList.add("inactive");
            app.login.hide();
            app.reg.show();
        });
        //this.main.show();
        //this.result.show();
        this.wel.classList.remove("inactive");
        //console.log(queryString());
    }
}

