import {useContext,useState,useEffect} from 'react'
import { ListContext } from "../utils/ListContext";

const ShowItems = () => {
  const {List, setList} = useContext(ListContext);
  
  return (
    <div className='show' >
    {
      (!List.length)?<div>nothing</div>
      :List.map(
        (i)=><div className='show_item'   key={i.id} >
          <div  className='show_item_comp'  >{i.name}</div>
          <div className='show_item_comp' >{i.age}</div>
          <div className='show_item_comp x' 
          onClick={()=>{i.exist=false;
          setList([...List.filter((i)=>i.exist)]);}}
          >X</div>
        </div>
      )
    }</div>
  )
}

export default ShowItems






