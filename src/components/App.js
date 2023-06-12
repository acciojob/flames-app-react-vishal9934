import React, { useState} from "react";
import '../styles/App.css';


let App=()=>{
    let [data,setData]=useState("")
    let [fistame,setFirstName]=useState("");
    let [secondname,setSecondName]=useState("");
    function addData(){
        if(fistame==""|| secondname==""){
            setData("Please Enter valid input")
            return;
        }
        let arr1=fistame.split("");
        let arr11=[];
        let arr2=secondname.split("");
        for(let i=0;i<arr1.length;i++){
            let flag=false;
            for(let j=0;j<arr2.length;j++){
                if(arr1[i]==arr2[j]){
                    arr2.splice(j,1);
                    flag=true;
                    break;
                }
            }
            if(flag==false){
                arr11.push(arr1[i]);
            }
        }    
        
        let str=arr11.join("")+arr2.join("");
        let n=(str.length)%6;
        switch(n){
            case 1:return setData('Fiends');
            case 2:return setData('Love');
            case 3:return setData('Affection');
            case 4:return setData('Marriage');
            case 5:return setData('Enemy');
            case 0:return setData('Siblings');
        }

    }

    function clear(){
        setData("");
        setFirstName("");
        setSecondName("")
    }  
    return(<div id="main">
        <input type="text" name="name1" data-testid="input1" onChange={(e)=>setFirstName(e.target.value)} placeholder="Enter first name" value={fistame}/>
        <input type="text" name="name2" data-testid="input2" onChange={(e)=>setSecondName(e.target.value)} value={secondname} placeholder="Enter second name"/>
        <button data-testid="calculate_relationship" onClick={addData}>Calculate Relationship Future</button>
        <button data-testid="clear" onClick={clear}>Clear</button>
        <h3 data-testid="answer">{data}</h3>
    </div>)
}


export default App