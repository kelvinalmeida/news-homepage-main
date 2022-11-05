function rangeOfNumbers(startNum, endNum) {
    if((startNum == endNum) || (startNum + 1 == endNum)){
        return [startNum, endNum];
    } 
    else {
    //   console.log('oi');
      let ArrayRangeOfNumbers = rangeOfNumbers(startNum + 1, endNum);
      ArrayRangeOfNumbers.unshift(startNum);
      return ArrayRangeOfNumbers;
    }
  };
  
  console.log(rangeOfNumbers(1,2))