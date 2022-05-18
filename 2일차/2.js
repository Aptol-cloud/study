const aptol = {
    characterName: "aptol",
    characterGender: "Male",
    characterAtk: 10,
	characterDef: 100,
	characterQuote: "배고파",
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
function makeCharacter(characterName, characterGender, characterAtk, characterDef, characterQuote){
    return characterName + "\n" + characterGender + "\n" + characterAtk + "\n" + characterDef + "\n" + characterQuote;
}
console.log(makeCharacter(aptol.characterName,aptol.characterGender,aptol.characterAtk,aptol.characterDef,aptol.characterQuote));
console.log(makeCharacter(napol.characterName,napol.characterGender,napol.characterAtk,napol.characterDef,napol.characterQuote));
console.log(makeCharacter(fizz.characterName,fizz.characterGender,fizz.characterAtk,fizz.characterDef,fizz.characterQuote));