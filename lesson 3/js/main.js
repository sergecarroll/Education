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

/*
var myObj = {
    myString: "Привет, мир!",
    myFunc: function() {
        document.write(this.myString);
    }
};

myObj.myFunc();
*/

var NewString = {
    name: 'Василий',

    dlina: function() {
        var sum=0;
        for (var i=0; this.name[i] != undefined; i++){
            sum=i+1;
        }
        return sum;
    },

    split: function(separator) {
        var arr = [];

        for (var i=0; this.name[i] != separator; i++)
            s += this.name[i];
        }

        return s;

    },

};

NewString.split('и');