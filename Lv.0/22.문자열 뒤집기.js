function solution(my_string) {
    let my_array = my_string.split("");
    var reverse = my_array.reverse();
    var answer = reverse.join("");
    return answer;
}

// 다른 사람 풀이 
function solution(my_string) {
    return my_string.split('').reverse().join('');
}