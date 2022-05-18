const one = {
    characterName: "",
    characterGender: "",
    characterAtk: "",
	characterDef: "",
	characterQuote: ""
}
const two = {
    characterName: "",
    characterGender: "",
    characterAtk: "",
	characterDef: "",
	characterQuote: ""
}
const three = {
    characterName: "",
    characterGender: "",
    characterAtk: "",
	characterDef: "",
	characterQuote: ""
}
const four = {
    characterName: "",
    characterGender: "",
    characterAtk: "",
	characterDef: "",
	characterQuote: ""
}
const five = {
    characterName: "",
    characterGender: "",
    characterAtk: "",
	characterDef: "",
	characterQuote: ""
}
const character = [one, two, three, four, five];

for (let i = 0; i < character.length; i++) {
    character[i].characterName = prompt("name:");
    character[i].characterGender = prompt("gender:");
    character[i].characterAtk = prompt("atk:");
    character[i].characterDef = prompt("def:");
    character[i].characterQuote = prompt("quote:");
}

for (let i = 0; i < character.length; i++){
    console.log(character[i]);
}


