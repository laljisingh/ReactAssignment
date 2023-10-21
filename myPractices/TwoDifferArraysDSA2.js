function diffArray(arr1, arr2) {
    const newArr = [];
    arr1.map((ele)=>{
      if(!arr2.includes(ele)){
          newArr.push(ele);
      }
    });
  
    arr2.map((ele)=>{
      if(!arr1.includes(ele)){
          if(!newArr.includes(ele))
            newArr.push(ele);
      }
    });
    return newArr;
  }
  
  let res =  diffArray([1, 2, 3, 5], [1, 2, 3, ,8,9,2,0,4, 5]);
  console.log(res);