const num = [1,5,9,4,5,6,6];
num.map((ele)=>{
    if(ele%2==0){
        return ele * 5;
    }else{
        return ele * 4;
    }
});

console.log(num);

export function add(a, b){
    return a+b;
}