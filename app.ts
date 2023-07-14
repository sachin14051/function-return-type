let cl = console.log;

class Person {
 public   fname : string;
    lname : string;
    adhar_no : number;
    role : Array <string>;
    constructor (fn:string,ln:string,num:number,role:string[]){
         this.fname = fn;
        this.lname = ln;
        this.adhar_no = num;
        this.role = ["c"]


    }

}

let admin = new  Person