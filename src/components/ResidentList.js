import React, { useEffect } from "react";
import "./ResidentList.css";
function ResidentsList(props) {
  
  return (
    // <ul className="mt-10 styled w-50 mx-auto" >
    // 	{props.resident.length?props.resident.map(p=><li key={p.name}>{p.name}</li>):<li>invalid</li>}
    // </ul>
    <div>
      <div className="section-title"> Resident List</div>
	  {props.resident.length
          ? <table>
		<tbody>
        <tr>
          <th>Name</th>

          <th>JoiningDate</th>
        </tr>
        {props.resident.map((r) => (
              
                <tr key={r.name}>
                  <td>{r.name}</td>
                  <td>{r.joiningDate}</td>
                </tr>
             
            ))}
          
		  </tbody>
      </table>: <h2>NO residents at the moment</h2>}
    </div>
  );
}

export default ResidentsList;
