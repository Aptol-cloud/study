/*
    2. es6 문법인 Default Parameter를 이용하는 간단한 캐릭터 생성 함수 제작
	2-1. 캐릭터 생성 함수는 파라미터로 (캐릭터명, 성별, 공격력, 방어력) 총 4가지를 받을 수 있으며 캐릭터명의 default값은 'unknown', 공격력과 방어력의 default값은 0으로 지정한다.
	2-2. 캐릭터 생성 함수는 입력받은 파라미터로 캐릭터 오브젝트를 생성해주며 해당 캐릭터 오브젝트를 반환해준다.
*/ 
function generateChar(name = unknown, gender, atk = 0, def = 0) {
    this.name = name;
    this.gender = gender;
    this.atk = atk;
    this.def = def;
    return this;
}
console.log(new generateChar("aptol", "male", 20, 30));