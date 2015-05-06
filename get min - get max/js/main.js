/*
function f() {
    var arr = arguments;
    var sum=0;
    for (var s in arr) {
        sum = sum + arr[s];
    }
    console.log(arguments.length);
    return sum;
}
*/

function getMin() {
    var arr = arguments;
    var min=arr[0];
    for (var s in arr) {
        if (arr[s]<min){
            min = arr[s];
        }
    }
    return min;
}

function getMax() {
    var arr = arguments;
    var max=arr[0];
    for (var s in arr) {
        if (arr[s]>max){
            max = arr[s];
        }
    }
    return max;
}

function getLast() {
    var arr = arguments;
    var max=arr[0];
    for (var s in arr) {
        if (arr[s]!=undefined){
            max = arr[s];
        }
    }
    return max();
}

function step(x,n) {
    var res=1;
    for (var i=1; i<=n; i++){
        res = res*x;
    }
    return res;
}

step(3,4);