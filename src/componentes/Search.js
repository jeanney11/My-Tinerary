import React from "react";
import { actionType } from "../reducer";
import {useStateValue} from "../StateProvider";

function Search() {
  const [{cities},dispatch]= useStateValue
  const imputSearch=(event)=>{
    dispatch({
      type:actionType.FILTER,
      value:event.target.value
    })
  }

  return (
    
      <div className="wrapperS">
        <div className="container">
          <div className="search_wrap search_wrap_6"> 
            <div class="search_box">
              <input type="text" onChange={imputSearch} class="input" placeholder="search..." />
              <div className="btn">
                <p>Search</p>
              </div>
            </div>
          </div>
        </div>
      </div>

  );
}

export default Search;
