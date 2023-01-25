function solution(strlist) {
    var answer = [];
    for (let i=0; i<strlist.length; i++) {
        answer.push(strlist[i].length)
    }
    return answer;
}

// arr.push() => 배열의 마지막 위치에 요소를 추가 

// 다른 사람 풀이 (arr.map 메소드 활용)
// map => 어떤 배열에 있는 모든 요소들의 값을 변경해서 새로운 배열 만들 때 사용
function solution(strlist) {
    return strlist.map((el) => el.length)
}
// strlist 의 요소를 '요소의 길이'로 변경하여 배열 새로 만들기 