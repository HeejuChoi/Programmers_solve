function solution(my_string, letter) {
    var answer = my_string.split(letter).join("");
    return answer;
}

// 다른 사람 풀이 
// replaceAll 메서드 -> str.replaceAll (바꾸고 싶은, 바꿀)
// letter에 있는 문자열을 빈문자열로 변경
function solution(my_string, letter) {
    return my_string.replaceAll(letter, "");
}