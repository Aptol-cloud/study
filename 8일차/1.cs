using System;
public class Code : MonoBehaviour{
    int count = 0;
    void Start(){ }  
    void Update(){ // 루프
        if( count > 5 ){
            Console.WriteLine("5회 반복 완료.");            // console.log랑 비슷한거 같음
        }
        count = count + 1;
    }
}