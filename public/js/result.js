class Result{
    constructor(containerElement){
        this.containerElement = containerElement;
        const submit = document.querySelector("#Submit");
        submit.addEventListener('click', function(){
            /** calculate */
            const gpa_text = document.querySelector('#fgpa');
            const first_arr = document.querySelectorAll('.first');
            const third_arr = document.querySelectorAll('.third');
            const first_val_arr = [first_arr.length];
            const third_val_arr = [third_arr.length];
            const flag = document.querySelector("#formula").value;

            for(let i in first_arr){
                    if(first_arr[i].nodeType === Node.ELEMENT_NODE){
                        first_val_arr.push(parseInt(first_arr[i].value));
                        third_val_arr.push(parseInt(third_arr[i].value));    
                    }
            }
            console.log(first_val_arr);
            console.log(third_val_arr);
            
            let gpa = calculate(first_val_arr, third_val_arr, flag);
            console.log(gpa);
            if(flag == "1"){
                gpa_text.textContent = gpa.toFixed(2) + '/4.00';
            }
            else if(flag == "2"){
                gpa_text.textContent = gpa.toFixed(2) + '/4.30';
            }
            const la = document.querySelector("#la");
            const lp = document.querySelector("#lp");
            const arr = [la.value, lp.value, gpa.toFixed(2)];
            if(!isNaN(gpa)){
                fetch('/', {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(arr)
                })
            }
            
            app.main.hide();
            app.result.show();
        });
    }

    show(){
        this.containerElement.classList.remove("inactive");
    }

    hide(){
        this.containerElement.classList.add("inactive");
    }
}
