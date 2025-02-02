// 주어진 숫자 예시
const given = [1, 3, 5, 7, 9];
//1. given의 요소들로 만들수 있는 순열 생성해주기
//2. 생성된 순열 기준으로 가장 큰 결과값 도출하기

function getMixture(arr: number[]): number[][] {
  const result: number[][] = [];

  function getPermute(temp: number[], remain: number[]) {
    if (remain.length == 0) {
      //재귀 다 돌면 끝내주기
      result.push(temp);
      return;
    }
    //배열의 길이만큼 반복문 돌려서 모든 순열만들기
    for (let i = 0; i < remain.length; i++) {
      getPermute(
        [...temp, remain[i]],
        [...remain.slice(0, i), ...remain.slice(i + 1)]
      );
    }
  }
  getPermute([], arr);
  return result;
}

function getMaxPair(arr: number[]): {
  comparison: number;
  first: number;
  second: number;
} {
  let comparison = 0;
  let first = 0;
  let second = 0;

  const permutation = getMixture(arr);
  for (const perm of permutation) {
    for (let i = 0; i < perm.length; i++) {
      const temp1 = perm.slice(0, i).join("");
      const temp2 = perm.slice(i).join("");

      const num1 = Number(temp1);
      const num2 = Number(temp2);
      const value = num1 * num2;

      // 새로운 페어의 곱이 더 높을때만 값 업데이트 쳐주기
      if (value > comparison) {
        comparison = value;
        first = Number(temp1);
        second = Number(temp2);
      }
    }
  }

  return { comparison, first, second };
}
console.time("#");
const result = getMaxPair(given);
console.log(`최대값: ${result.comparison}`);
console.log(`숫자 조합: ${result.first}, ${result.second}`);
console.timeEnd("#");
