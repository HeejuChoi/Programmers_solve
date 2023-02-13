function solution(array, height) {
    array.push(height)
    array.sort(function(a, b) {
        return b - a
    });
    return array.indexOf(height);

}    
//     1. 기존 배열에 원소 추가  
//     2. 배열 내림차순
//     3. indexOf로 추가한 원소 인덱스 번호 찾아서 결과로 리턴하기


// 다른 사람 풀이 
// arr.filter : 조건에 맞는 것만 배열에 남긴다. 
function solution(array, height) {
    var answer = array.filter(item => item > height);
    return answer.length;
}