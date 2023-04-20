import { useState } from "react";

import {handleChange} from "../utils/handleInputChange";

// Search filter component
const Filter = ({title, prices}: any) => {
  const [selectValue, setSelectValue] = useState()
  return (
    <div style={{width: '30%', borderBottom: '1px solid rgba(255,255,255,.5)', paddingBottom: '5px', marginLeft: '10px' }}>
      <div className='label'>{title}</div>
      <select name='select' value={selectValue} onChange={(e) => handleChange(e, setSelectValue)} style={{width: '100%', background: 'transparent', border: 'none', color: 'white', padding: '0px', outline: 'none'}}>
        {
          prices.map((price: number, id: string) => <option key={id} value={price}>
            {price}
          </option>)
        }
      </select>
      {/* <input type="week" name="week" id="" /> */}
    </div>
  )
}

export default Filter