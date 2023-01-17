function solution(array) {

    // 오름차순 : 그냥 sort 쓰면 문자열로 인식해 사전순으로 정렬하기 때문에 아래 식이 필요 (JS에선 10, 101보다 11이 더 크다)
    array.sort((a,b) => {return a-b})

    let x = parseInt(array.length / 2)
    var answer = array[x];
    return answer;
}

// 1) 배열 오름차순으로 바꾸기 
// 2) 배열 길이 2로 나눠서 정수로 만듦 -> 중앙값 위치 찾기
// 3) 인덱싱으로 배열의 x번째 요소 보여주기 => 중앙값 찾기 성공!

