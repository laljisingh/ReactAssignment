function sumAll(arr) {
    let sum = 0;
    let n1 = Math.min(arr[0],arr[1]);
    let n2 = Math.max(arr[0],arr[1]);
  
    for(let i=n1 ; i<=n2 ; i++){
      sum = sum + i;
    }
    return sum;
  }
  
  console.log(sumAll([1, 4]));
  