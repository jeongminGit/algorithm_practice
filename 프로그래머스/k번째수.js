function solution(array, commands) {
  var answer = [];
  for (i = 0; i < commands.length; i++) {
    // console.log("commands 확인",commands[i][0] - 1, commands[i][1], commands[i][2]-1);
    var arr = array.slice(commands[i][0] - 1, commands[i][1]);
    // console.log("배열확인", arr);
    var arr_sort = arr.sort((a, b)=> {return a-b});
    // console.log("정렬확인", arr_sort);
    answer.push(arr_sort[commands[i][2]-1]);
    // console.log("정답확인", answer);
  }
  return answer;
}
console.log(solution([1, 5, 2, 6, 3, 7, 4], [[2, 5, 3], [4, 4, 1], [1, 7, 3]]));