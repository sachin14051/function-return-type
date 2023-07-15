let cl = console.log;


function a (b:number,c:number): number{
    return b + c
}

cl(a(10,50))
cl(typeof a)


class Person {
  public  fname : String;
   private lname :string;
   private readonly adhar : number;
    place : string[];

    constructor(fn:string,ln:string,ad:number,p:string[]){
        this.fname = fn,
        this.lname = ln,
        this.adhar = ad,
        this.place = p
    }
    describe(){
        //this.adhar =789 
        this.fname = "sss"
    }    
}

let user = new Person ("sachin","shelke",123456,["nanded","pune"]);
let user1 = new Person ("sachin","doe",123456,["nanded","pune"]);
let user2 = new Person ("sachin","doe",78,["nanded","pune"]);
let user3 = new Person ("sachin","doe",7896,["nanded","pune"]);




cl(user.fname)
cl(user.fname="jhon")

cl(user)
// public is used to reasign and globally show 

//cl(user.lname) //Property 'lname' is private and only accessible within class 'Person'.
cl(user1)

