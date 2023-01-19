function solution(angle) {
    if (angle < 90) {
        return 1;
    } else if (angle == 90) {
        return 2;
    } else if (90 < angle < 180) {
        return 3;
    } else if (angle == 180) {
        return 4;
    }
}


// 다른 사람 풀이 (삼항연산자 활용)
function solution(angle) {
    return angle < 90 ? 1 : angle == 90 ? 2 : angle < 180 ? 3 : 4;
}