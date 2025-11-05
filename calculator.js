function calc(...args){
if(args.length<3||args.length%2===0){
    throw new Error('Invalid input type');
}
const numbers=[];
const operators=[];
for(let i=0;i<args.length;i++){
    if(i%2===0){
        if(typeof args[i]!=='number')
             throw new Error('Invalid input type');
        if(args[i]<=1000)numbers.push(args[i]);
        else if(numbers.length>0)
           {
            operators.pop();
            }
        
    }else{
        if(typeof args[i]!=='string') 
            throw new Error('Invalid input type');
        if (!['+','-','*','/'].includes(args[i])){
            throw new Error('Invalid operator');
        }
        if(i>0&&args[i-1]<=1000)operators.push(args[i]);
    }
}
if(numbers.length===0)return 0;
if(numbers.length===1)return numbers[0];
for(let i=0;i<operators.length;i++){
    if(operators[i]==='*'||operators[i]==='/'){
        const left=numbers[i];
        const right=numbers[i+1];
        if(operators[i]==='/'&&right===0) throw new Error('Division by zero');
        const result=operators[i]==='*'?left*right:left/right;
        numbers[i]=result;
        numbers.splice(i+1,1);
        operators.splice(i,1);
        i--;
    }
}
let result=numbers[0];
for(let i=0;i<operators.length;i++){
    const num=numbers[i+1];
    result=operators[i]==='+'?result+num:result-num;
}
return result;
}
module.exports=calc;
/*
function calc(a,op,b){
if(typeof a!=='number'||typeof b!=='number'){
    throw new Error ('Invalid input type');
}
switch(op){
    case '+':return a+b;
    case '-':return a-b;
    case '*':return a*b;
    case '/':
        if(b===0) throw new Error('Division by zero');
        return a/b;
    default:
        throw new Error('Invalid operator');    
}
}
module.exports = calc;*/