function solution(n, k) {
    let sheep = n*12000
    let drink = k*2000
    let service = parseInt(n / 10)*2000
    
    var answer = (sheep + drink) - service;
    return answer;
}


// 다른 사람 풀이 (틸트문법)
function solution(n, k) {
    k-=~~(n/10);
    if (k < 0) k = 0;
    return n*12000+k*2000;
}

// 틸트 문법 => ~~ == -(n+1)
// ex) ~~9 == -10