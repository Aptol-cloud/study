/*
1. Arrow Function으로 함수를 제작하고 해당 함수는 오브젝트가 담긴 배열을 파라미터로 받는다
1-1. 오브젝트는 총 3개이며, 오브젝트 내에는 캐릭터의 이름, 성별 총 2가지의 멤버가 저장되어 있다.
1-2. 함수에서는 map함수를 이용해서 오브젝트 멤버의 이름 뒤에 '님'자를 추가한다
ex) 원래 오브젝트에 이름이 '앱톨'이라는 멤버가 있으면 '앱톨'님으로 변경하여 반환해주어야함.
1-3. 추가한 후 배열을 반환해준다. 함수 외부에서 반환된 값을 출력해준다.
*/
const characters = new Map([
    ["aptol", "male"],
    ["napol", "male"],
    ["fizz", "male"]
]);

let space = "";

charFunction = (char) => {
    char.forEach(function(gender, name){
        space += name + "님" + " " + gender + " ";
    })
    return space;
}
console.log(charFunction(characters));