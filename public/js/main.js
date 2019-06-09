class Main{
    constructor(containerElement){
        this.containerElement = containerElement;
        //this.spanElement = containerElement.querySelector("span");
        const button = containerElement.querySelector("#add");
        button.addEventListener('click', function(){
            app.main._createInput();
        });
        const submit = containerElement.querySelector("#Submit");
        submit.addEventListener('click', function(){
            /** calculate */
            app.main.hide();
            app.result.show();
        });

    }
    
    _createInput(){
        const input = new Input(this.containerElement);
    }

    show(){
        this.containerElement.classList.remove("inactive");
        this._createInput();
    }

    hide(){
        this.containerElement.classList.add("inactive");
    }
}