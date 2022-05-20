using UnityEngine;
using System.Collections;

public class MainPlayer : MonoBehaviour {

    // Use this for initialization
    void Start () {
    
    }
    
    // Update is called once per frame
    void Update () {
        float zRotation = transform.localEulerAngles.z; // 실수형 변수 zRotation 에다가 상대적 각도(?)를 넣는다.
        zRotation = zRotation + Input.GetAxis("Horizontal"); // 상대적 각도에다가 축(좌우 a, d)(프로젝트 설정에서 변경 가능.) 으로 컨트롤한다는 내용.
        transform.localEulerAngles = new Vector3(10, 0, -zRotation); // 적용. 마이너스로 한 이유는 반대로 움직여서..

        if(Input.touchCount > 0 || Input.GetMouseButton(0)) // 마우스 눌렸는지 확인.
        {
            if(Input.mousePosition.x < Screen.width / 2) // 화면 절반 기준.
            {
                transform.localEulerAngles = new Vector3(10, 0, transform.localEulerAngles.z-1); // 좌.
            }
            else
            {
                transform.localEulerAngles = new Vector3(10, 0, transform.localEulerAngles.z+1); // 우.
            }
        }
    }
}