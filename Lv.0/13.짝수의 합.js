function solution(n) {
    let even = 0;
    for (let i=1; i<=n; i++) {
        if (i%2==0) {
            even += i
        }
    } 
    return even;
}

// 다른 사람 풀이 
// i+=2를 하면 반복 횟수를 줄일 수 있다.
function solution(n) {
    var answer = 0;

    for(let i=2 ; i<=n ; i+=2)
        answer += i;

    return answer;
}


// !!! 주의할 점 !!!
// 1) for문 쓸 때, ;으로 쓰기 
// 2) +=(더하기할당)은 Number+Number, Boolean+Number, Boolean+Boolean만 덧셈이고 
//    Number+String, String+Boolean, String+Boolean, String+String은 연결이다.