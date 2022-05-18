const aptol = {
    characterName: "aptol",
    characterGender: "Male",
    characterAtk: 10,
	characterDef: 100,
	characterQuote: "배고파"
}
const napol = {
    characterName: "napol",
    characterGender: "Male",
    characterAtk: 100,
	characterDef: 10,
	characterQuote: "퇴근마렵다",
}
const fizz = {
    characterName: "fizz",
    characterGender: "Male",
    characterAtk: 1000,
	characterDef: 0,
	characterQuote: "밥먹자",
}
const talon = {
    characterName: "talon",
    characterGender: "Male",
    characterAtk: 100,
	characterDef: 10,
	characterQuote: "카레살고카레죽는다",
}
const zed = {
    characterName: "zed",
    characterGender: "Male",
    characterAtk: 1000,
	characterDef: 0,
	characterQuote: "하하하",
}
const character = [aptol, napol, fizz, talon, zed];

for (let i = 0; i < character.length; i++){
    console.log(character[i]);
}


