export {};
const a: number=10;
const b: number=10;
const sum = (a:number,b:number): number=>{
    return a+b;
}
console.log(sum(a,b));
interface TypeInfo {name:string,age:number};
// const info : {name:string,age:number} = {name:'Hanh',age:20};
const info : TypeInfo = {name:'Hanh',age:20};
const showInfo=(info:{name:string,age:number}):{name:string,age:number}=>{
return info;
}
showInfo(info);

const arrNumber:number[]=[1,2,3,4,5];
console.log(arrNumber);

const products:{name:string,price:number}[]=[{name:'Phone',price:3000}];
console.log(products);




