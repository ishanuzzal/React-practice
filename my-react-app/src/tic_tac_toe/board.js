import "./tic_tac_toe.css"
import { createContext, useContext, useState, useRef, useEffect } from "react"

function Element({val,setArr}){
    
   
    return(
        <div className="childDiv" onClick={setArr}>
            <h1>{val}</h1>
        </div>
    )
}

export default function Board(){
    
    const [arr,setArr] = useState(Array(9).fill(null))
    const [count,setCount] = useState(0)
    const winner = useRef(null)
    function handleClick(i){
        if(winner.current!==null) return
        const newArr = arr.slice();
        if(newArr[i]!==null) return
        newArr[i]='O'
        if(count%2!==0) newArr[i]='X'
        setCount(count+1)
        setArr(newArr)
       // console.log("winner")
       winner.current = checkWinner(newArr)
       if(winner){
           console.log(winner.current)   
       }
       
    }

    return(
        <div id="parentDiv">
           
                <Element val={arr[0]} setArr={()=>handleClick(0)}/>
                <Element val={arr[1]} setArr={()=>handleClick(1)}/>
                <Element val={arr[2]} setArr={()=>handleClick(2)}/>
                <Element val={arr[3]} setArr={()=>handleClick(3)}/>
                <Element val={arr[4]} setArr={()=>handleClick(4)}/>
                <Element val={arr[5]} setArr={()=>handleClick(5)}/>
                <Element val={arr[6]} setArr={()=>handleClick(6)}/>
                <Element val={arr[7]} setArr={()=>handleClick(7)}/>
                <Element val={arr[8]} setArr={()=>handleClick(8)}/>
                <h1 className="ans">{winner.current}</h1>
        </div>
    )

    function checkWinner(arr){
        let lines = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ]
        for(let i=0; i<8; i++){
            let [a,b,c] = lines[i];
            
            if(arr[a] && arr[a]===arr[b] && arr[b]===arr[c]){
                console.log(a,b,c)
                return `${arr[a]} is the winner`
            }
        }

        return null;
    }
}