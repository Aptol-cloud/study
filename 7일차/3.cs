using System;

public class OperatorExam {
    public string stringPlus() {
        string a = "Hello";
        string b = "World";

        //아래줄의 빈칸을 채워보세요.
        string c = 
a + b;


        return c;
    }

    public static void Main(){
        Console.WriteLine("c의 값은 : " + new OperatorExam().stringPlus());
    }
}