// 내 풀이
function solution(num1, num2) {
    
    if ((num1 + num2)/2 === num1) {
        return 1    
    }
    else {
        return -1
    }

}

// 다른 사람 풀이 

function solution(num1, num2) {
    var answer = num1 === num2 ? 1 : -1;
    return answer;
}