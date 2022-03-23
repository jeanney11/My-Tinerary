import React from "react";
import { actionType } from "../reducer";
import { useStateValue } from "../StateProvider";
import Switch from '@mui/material/Switch';



function Search() {
  
  const [filtro,setFiltro]= React.useState("Cities");
  const [checked, setChecked]= React.useState(true);

  const handleChange =(event)=>{
    setChecked(event.target.checked);
    event.target.checked ? setFiltro("Cities"): setFiltro("Continent")
  }


  const [{cities},dispatch]= useStateValue()
  const imputSearch=(event)=>{
   
    dispatch({
      type:actionType.FILTER,
      value:{value:event.target.value, filterBy:filtro}
    })
  }

  

  return (
    <>

    <div className="container mt-4">
      
    
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

      <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-12">
          <div className="titlepage text-center">
            <h2>{filtro}</h2>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="text-center">
            <Switch checked={checked} onChange={handleChange} inputProps={{'aria-label':'controlled'}}/>
            </div>
        </div>

    </div>

    </>
  );
}

export default Search;
