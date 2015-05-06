var Str = function (string){

    this.toString = function () {
        var s = string;
        return s + '';
    };

    this.valueOf = function () {
        return string;
    };

    this.charAt = function (index) {
        var result = '';
        for (var i=0; i != index; i++) {
            result=string[i-1];
        }
        return result;
    };`

    this.concat = function (array) {
    }
};

var a = new Str('wahelle');

a.charAt('3');