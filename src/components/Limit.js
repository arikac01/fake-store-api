import { useState } from "react";
import React from "react";

const Limit = ({setOptionSelected})=>{
    const handleOptionSelection = (event)=>{
        const limit = parseInt(event.target.value);
        setOptionSelected(limit);
    }
    return (
        <>
        <div className="limitContainer">
            <select className="limitDropDown" defaultValue="5" onChange={handleOptionSelection}>
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="15">15</option>
                <option value="20">20</option>
            </select>
        </div>
        </>
    )
}
export default Limit;