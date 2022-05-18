/*
    3. 2번 문제를 응용한 배열 문제
	3-1. 캐릭터명, 성별, 공격력, 방어력을 HTML의 input 태그를 이용하여 받는다. 총 4개의 input 태그와 만들기(생성) 버튼 클릭시 오브젝트를 생성해서 캐릭터 배열에 추가해준다. (html input value 관련해서 공부하면 가능함)
	3-2. 캐릭터 배열에 캐릭터 오브젝트가 추가될 때 마다 console.log를 이용하여 배열을 출력해준다. (새로운 캐릭터가 만들어질때마다 출력하는 거임)
	ex) 나폴 캐릭터 생성시 나폴캐릭터 출력. 이후 앱톨 캐릭터 생성시 나폴, 앱톨 2개 출력. 이후 x 캐릭터 생성시 나폴, 앱톨, x 출력. 이런식
*/

const character = [];
function createCharacter(){
	const characterStats = {
		name: document.getElementById('name').value,
		gender: document.getElementById('gender').value,
		atk: document.getElementById('atk').value,
		def: document.getElementById('def').value
	}
}
character = createCharacter();
console.log(character);

