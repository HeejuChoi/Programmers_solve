function solution(money) {
    let part1 = parseInt(money/5500)
    let part2 = money-(part1*5500)
    let result = [part1, part2]
    return result;
}

// 다른 사람 풀이 
// money % 5500 하면 나머지가 잔돈!
function solution(money) {
    return [Math.floor(money / 5500), money % 5500];
}