function solution(dot) {
    let x = dot[0]
    let y = dot[1]
    
    if (x > 0 && y > 0) {
        return 1
    } else if (x < 0 && y > 0 ) {
        return 2
    } else if (x < 0 && y < 0 ) {
        return 3
    } else {
        return 4
    }
}

// 다른 사람 풀이 (구조분해할당)
function solution(dot) {
    const [num,num2] = dot;
    const check = num * num2 > 0;
    return num > 0 ? (check ? 1 : 4) : (check ? 3 : 2);
}