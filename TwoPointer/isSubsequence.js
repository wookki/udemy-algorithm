// 다중 포인터 - isSubsequence
// 두 문자열을 받아 첫 번째 문자열의 문자가 두 번째 문자열의 문자의 일부에 포함되는지 확인하는 isSubsequence라는 함수를 작성합니다. 즉, 이 함수는 첫 번째 문자열의 문자가 순서가 바뀌지 않고 두 번째 문자열의 어딘가에 나타나는지 확인해야 합니다.

function isSubsequence(first, second) {
  let arr = first.split("");
  for (let i = 0; i < second.length; i++) {
    if (arr[0] === second[i]) {
      arr.shift();
    }
  }
  return arr.length === 0;
}

console.log(isSubsequence("sing", "sting"));
