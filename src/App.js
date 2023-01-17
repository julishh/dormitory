import Search from "./components/Search";
import Error from "./components/Error";
import ResidentsList from './components/ResidentList';
import { useState } from "react";

function App() {
  const [residentlist,setResidentList]=useState([])
  
  const [errorMessage, setErrorMessage] = useState();
  
  return (
    <div className="App" >
     
      <Search
        residentlist={residentlist}
        setResidentList={setResidentList}
        errorMessage={errorMessage}
        setErrorMessage={setErrorMessage}
        
      />
      <Error errorMessage={errorMessage} />
      <ResidentsList resident={residentlist}/>
    </div>
  );
}

export default App;
