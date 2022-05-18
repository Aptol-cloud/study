using System;

public class OperatorExam{
    public int[] calculate() {
        int a = 7; 
        int b = 3;

        //c는 a와 b의 합 
        int c = 
a + b;

        //d는 a와 b의 차
        int d = 
a - b;

        //e는 a와 b의 곱
        int e = 
a * b;


        int[] ret=new int[] {c,d,e};
        return ret;
    }

    public static void Main(){
        if( new OperatorExam().calculate()[0] == 10){
            System.Console.WriteLine("c는 a와 b의 합에 성공하였습니다. 제출을 눌러보세요.");
        }
        else{
            System.Console.WriteLine("c는 a와 b의 합이어야 합니다. 다시 확인해주세요");
        }
    }
}