class Main{
    constructor(containerElement){
        this.containerElement = containerElement;
        //this.spanElement = containerElement.querySelector("span");
        const button = document.querySelector("#add");
        button.addEventListener('click', function(){
            app.main._createInput();
        });

    }
    
    _createInput(){
        const input = new Input(this.containerElement);
    }

    show(){
        this.containerElement.classList.remove("inactive");
        document.querySelector('body').style.display = "block";
        document.querySelector('#Submit').classList.remove('inactive');
        document.querySelector('#add').classList.remove('inactive');
        this._createInput();
    }

    hide(){
        document.querySelector('body').style.display = "flex";
        document.querySelector('#Submit').classList.add('inactive');
        document.querySelector('#add').classList.add('inactive');
        this.containerElement.classList.add("inactive");
    }
}