function solution(num_list) {
    var num1 = [];
    var num2 = [];
    for (let i = 0; i<num_list.length; i++) {
        if (num_list.slice(i,i+1) % 2 === 0) {
            num1.push(num_list.slice(i,i+1))
        } else {
            num2.push(num_list.slice(i,i+1))
        }
    }
    var answer = [num1.length, num2.length];
    return answer;
}

// 수정 버전
function solution(num_list) {
    var num1 = 0;
    var num2 = 0;
    for (let i = 0; i<num_list.length; i++) {
        if (num_list[i] % 2 === 0) {
            num1++
        } else {
            num2++
        }
    }
    var answer = [num1, num2];
    return answer;
}

// 다른 사람 풀이
// 1) num_list에서 원소를 하나씩 꺼낸다
// 2) 나눠서 나머지가 0이면 0인덱스에, 1이면 1인덱스에 숫자를 1씩 추가한다. 
// 3) return 한다. 
function solution(num_list) {
    var answer = [0,0];

    for(let a of num_list){
        answer[a%2] += 1
    }

    return answer;
}
