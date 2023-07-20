import "./todolist.css"
import {useState,useRef} from "react"

export default function TodoList(){
    const [inp,setinp] = useState("")
    const cnt = useRef(0)
    const [list,setList] =useState([
        {
            id:cnt.current,
            item:"this is first item"
        }
    ]) 

    const addItem = ()=>{
        cnt.current = cnt.current+1
        setList([...list,{id:cnt.current, item:inp}])
    }

    const deleteItem = (e)=>{
        console.log(e)
        setList(list.filter((li)=>li.id!==e))
    }

    const checked = (element)=>{
       
        element.parentNode.childNodes[0].setAttribute("class","done")
    }
    
    return(
        <div className="container">
            <input type="text" value={inp} onChange={(e)=>setinp(e.target.value)}/>
            <button className="btn btn-primary" onClick={addItem}>Add</button>
            {list.map(l=>{
                 return(
                 <div key={l.id} className="list_item">
                    <p>{l.item}</p>
                    <button className="bnt bnt-danger" onClick={()=>deleteItem(l.id)}>Delete</button>
                    <button className="bnt bnt-danger" onClick={(e)=>checked(e.target)}>Checked</button>
                 </div>
                )
            })}
           
        </div>
    )
}