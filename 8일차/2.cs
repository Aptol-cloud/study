using UnityEngine;
using System.Collections;

public class camera : MonoBehaviour{
    GameObject aptol;
    void Start(){
        aptol = GameObject.Find("aptol");
    }
    void Update(){
        transform.position = new Vector3(aptol.transform.position.x, aptol.transform.position.y, aptol.transform.position.z);
    }
}