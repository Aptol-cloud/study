/*
1. 어제 진행한 1번 문제에 대해 내가 작성한 코드를 바탕으로 공부 후 한줄한줄 주석으로 정리해서 보내기
*/
const Character = [ // Character 라는 오브젝트형 배열 제작
    {
        name: '나폴',
        gender: '남',
    },
    {
        name: '앱톨',
        gender: '남',
    },
    {
        name: '아리',
        gender: '여',
    }
    ];
    
    const mapObjectFunction = (characterArray) => { // returnarray를 반환하는 함수
    const returnArray = characterArray.map((item) => item.name + '님'); // returnarray, 님자를 붙혀주는 함수
    return returnArray; // 반환하는 부분
    };
    
    console.log(mapObjectFunction(Character)); // 오브젝트형 배열의 name에다가 전부 님자 붙히고 반환.