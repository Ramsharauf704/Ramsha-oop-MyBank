#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

interface ibankaccount{
    credit(amount: number): void;
    debit (amount: number) : void;

}
// class
class Bankaccount implements ibankaccount {
    accountbalance: number;
    constructor (accountbalance: number) { 
    this.accountbalance=accountbalance
     }

     //publicaly credit
     public credit(amount: number) {
        if (amount>0){
            this.accountbalance+=amount
            console.log("credit sucessfully get into new account and you blance is :"+this.accountbalance);
            
        }
        else{
            console.log("credit unsucessfull");
            
        }
     }

     // publicaly debit
     public debit(amount: number) {
       if (amount>0 && amount<this.accountbalance){
       this.accountbalance-=amount
       console.log("debit sucessfully share in new account balance:"+this.accountbalance);
       
       } else {
      console.log("debit unsucessfully");
      
       }
     }
}

// customer details
class customer {
    person : {
        firstname: string;
        lastname: string;
    }
    age: number;
    gender: string;
    mobile_number: number;
    bankaccount: Bankaccount;

    constructor(person: {firstname:string,lastname:string},age:number,gender:string,mobile_number:number,bankaccount:Bankaccount){
// this property utilization
this.person=person;
this.age=age;
this.gender=gender;
this.mobile_number=mobile_number;
this.bankaccount=bankaccount;
 }
// publicaly user access
public display(){
    console.log("Name: "+this.person.firstname+" "+this.person.lastname) ;
    console.log("Age:"+this.age)
    console.log("Gender:"+this.gender)
    console.log("Mobile_number:"+this.mobile_number)
    console.log("Amount in Bank:"+this.bankaccount.accountbalance)
    console.log()
}
 }

 const a1=new Bankaccount(800)
 const c1=new customer ({firstname:"Ramsha",lastname:"Rauf"},21,"Female",344565666776,a1);
 c1.display()
 c1.bankaccount.debit(400)
 console.log();


 const a2=new Bankaccount(500)
 const c2=new customer ({firstname: "Hunein",lastname:"Rauf"},6,"Male",344565666776,a2);
 c2.display()
 c2.bankaccount.debit(100)
 console.log();

 