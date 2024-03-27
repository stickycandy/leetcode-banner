
function maxStone(arr) {
  arr.sort((a, b) => b - a);

  function dns(cur, index, arr){
    if (index > arr.length - 1) {
      return cur;
    }
    return dns(Math.abs(cur - arr[index]), index + 1, arr);
  }
  
  return dns(arr[0], 1, arr);
}


process.stdin.on('data', function(data){
  let arr = data.toString().trim().split(',').map(Number);
  console.log(maxStone(arr));
})