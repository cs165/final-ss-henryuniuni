//
// TODO(you): Add the JavaScript necessary to complete your final project.
//
const app = new App();

function calculate(arr, arr_2, flag){
    let fgpa = 0.00;
    let count = 0;
    let sum = 0.00;
    if(flag == "1"){
        for(let i in arr){
            if(i == 0){
                count -= arr[i];
            }
            else if(100 >= arr_2[i] && arr_2[i] >= 80){
                sum += arr[i] * 4;
            }
            else if(79 >= arr_2[i] && arr_2[i] >= 70){
                sum += arr[i] * 3;
            }
            else if(69 >= arr_2[i] && arr_2[i] >= 60){
                sum += arr[i] * 2;
            }
            else if(59 >= arr_2[i] && arr_2[i] >= 50){
                sum += arr[i] * 1;
            }
            count += arr[i];
        }
    }
    else if(flag == "2"){
        for(let i in arr){
            if(i == 0){
                count -= arr[i];
            }
            else if(100 >= arr_2[i] && arr_2[i] >= 90){
                sum += arr[i] * 4.3;
            }
            else if(89 >= arr_2[i] && arr_2[i] >= 85){
                sum += arr[i] * 4;
            }
            else if(84 >= arr_2[i] && arr_2[i] >= 80){
                sum += arr[i] * 3.7;
            }
            else if(79 >= arr_2[i] && arr_2[i] >= 77){
                sum += arr[i] * 3.3;
            }
            else if(76 >= arr_2[i] && arr_2[i] >= 73){
                sum += arr[i] * 3;
            }
            else if(72 >= arr_2[i] && arr_2[i] >= 70){
                sum += arr[i] * 2.7;
            }
            else if(69 >= arr_2[i] && arr_2[i] >= 67){
                sum += arr[i] * 2.3;
            }
            else if(66 >= arr_2[i] && arr_2[i] >= 63){
                sum += arr[i] * 2;
            }
            else if(62 >= arr_2[i] && arr_2[i] >= 60){
                sum += arr[i] * 1.7;
            }
            count += arr[i];
        }
    }
    console.log(sum);
    console.log(count);
    fgpa = sum / count;
    return fgpa;
}