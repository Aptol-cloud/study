const fizz = {
    name: "fizz",
    type: "ap",
    mhp: 1800,
    hp: 1800,
    atk: 50,
    mat: 120,
    def: 45,
    mdf: 55,
    skill: {
        q:"성게 찌르기",
        w:"심해석 삼지창",
        e:"장난치기/재간둥이",
        r:"미끼 뿌리기"
    }
}


const talon = {
    name: "talon",
    type: "ad",
    mhp: 2300,
    hp: 2300,
    atk: 70,
    mat: 40,
    def: 55,
    mdf: 25,
    skill: {
        q: "",
        w: "",
        e: "",
        r: ""
    }
}

function fizzSkillDmg(){
    skillSel = prompt();
    switch (skillSel) {
        case "q": return Math.floor((100 + fizz.mat * 0.55)*100/(100 + talon.mdf) + fizz.atk * 100/(100 + talon.def));
        case "w": return Math.floor((35 + fizz.mat * 0.45 + fizz.atk)*100/(100 + talon.mdf));;
        case "e": return Math.floor((300 + fizz.mat * 0.9)*100/(100 + talon.mdf));;
        case "r": return Math.floor((500 + fizz.mat * 1)*100/(100 + talon.mdf));
    }
}

while(true){
    talon.hp -= fizzSkillDmg();
    console.log("HP: " + talon.hp + " / " + talon.mhp);
    if (talon.hp <= 0){
        talon.hp = 0;
        console.log("탈론 뒤짐. HP: " + talon.hp + " / " + talon.mhp);
        break;
    }
}

/*
2. '피즈' vs '탈론' 두 캐릭터의 전투 구현 / 플레이어는 피즈를 조작
2-1. 각 캐릭터는 오브젝트 형태로 구현하며 멤버는 캐릭터타입(ap, ad), 체력, 기본공격력, 주문력, 방어력, 마법저항력, 스킬(qwer) 로 구성되어 있다.
2-2. 각 스킬의 ad, ap 계수는 자유로 설정한다.
2-3. 스킬은 함수 형태로 오브젝트 내의 skill: {스킬1, 스킬2, 스킬3, 스킬4} 형태로 캐릭터 오브젝트 내의 오브젝트 형태로 구현한다.
	2-3-1. 스킬 사용시 상대방의 체력이 감소한다.
2-4. 스킬 및 기본공격력은 상대의 방어력, 마법저항력에 비례하여 데미지가 감소한다.
2-5. 캐릭터는 체력이 0 이되면 죽는다. (죽기전까지 무한루프)
2-6. 스킬 사용은 prompt로 스킬이름을 입력받고 입력 받은 스킬은 switch case문을 사용하여 발동하도록 구현한다.
*/