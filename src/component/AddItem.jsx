import {useContext,useState,useEffect} from 'react'

import { ListContext } from "../utils/ListContext";

const AddItem = () => {
  const [chbtn, setchbtn] = useState(0);
  const {List, setList} = useContext(ListContext);
  const [Name, setName] = useState('');
  const [Age, setAge] = useState('');

  return (
    <div className='ADD'>
      <form>
      <input className='fin' type={"text"} value={Name} placeholder="name"  onChange={(e)=>{setName(e.target.value)}} />
      <input className='fin'  type={"number"} value={Age} placeholder="number" onChange={(e)=>{setAge(e.target.value)}} />
      </form>
    <div className='ADDbtn'
    onClick={()=>setchbtn((x)=>{
      if((Name!='')&&(Age!='')){
        setList([...List,{id:chbtn,name:Name,age:Age,exist:true}]);
        setName('');
        setAge('');
      }
        return x+1
    })}
    >ADD</div>
    </div>
  )
}

export default AddItem