//problem #1 

var countEven = function(num) {

  const digSum = (num) => {
  const s = num.toString();
      let sum = 0;
      for(const char of s) { /*    for (variable of iterable) {
                                            statement}    */
          sum += +char;
      }
      return sum
    }
  let count = 0;
    for (let i=1; i<= num; i++) {
        if (digSum(i)%2 === 0) count++;
    }
    return count;
};
// num.toString() offers such treats like this in the sense we are able to morph datatype and create a solution that works seamlessly with tiny bits of memory
console.log(countEven(6/.1))
console.log(countEven(999))
console.log(countEven(5%9*4))