class Input{
    constructor(containerElement){
        this.containerElement = containerElement;
        this.column = this._createColumn();
        this.containerElement.appendChild(this.column);
    }
    _createColumn(){
        const spancontainer = document.createElement("span");
        const container = document.createElement("div");
        container.classList.add("column");
        const firstInput = document.createElement('input');
        firstInput.classList.add('first');
        const secondInput = document.createElement('input');
        const thirdInput = document.createElement('input');
        thirdInput.classList.add('third');
        container.appendChild(firstInput);
        container.appendChild(secondInput);
        container.appendChild(thirdInput);
        spancontainer.appendChild(container);
        return spancontainer;
    }
}