var cl = console.log;
function a(b, c) {
    return b + c;
}
cl(a(10, 50));
cl(typeof a);
var Person = /** @class */ (function () {
    function Person(fn, ln, ad, p) {
        this.fname = fn,
            this.lname = ln,
            this.adhar = ad,
            this.place = p;
    }
    Person.prototype.describe = function () {
        //this.adhar =789 
        this.fname = "sss";
    };
    return Person;
}());
var user = new Person("sachin", "shelke", 123456, ["nanded", "pune"]);
var user1 = new Person("sachin", "doe", 123456, ["nanded", "pune"]);
var user2 = new Person("sachin", "doe", 78, ["nanded", "pune"]);
var user3 = new Person("sachin", "doe", 7896, ["nanded", "pune"]);
cl(user.fname);
cl(user.fname = "jhon");
cl(user);
// public is used to reasign and globally show 
//cl(user.lname) //Property 'lname' is private and only accessible within class 'Person'.
cl(user1);
