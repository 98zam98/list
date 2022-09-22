import {useState,useEffect} from 'react';
import {AddItem,ShowItems} from "./component";
import { ListContext } from "./utils/ListContext";

function App() {
  const [List, setList] = useState([])
  return (
    <div className='app' >
      <ListContext.Provider
      value={{List, setList}}
      >
        <AddItem/>
        <ShowItems/>
      </ListContext.Provider>
    </div>
  );
}

export default App;