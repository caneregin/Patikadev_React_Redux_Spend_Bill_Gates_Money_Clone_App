import React from 'react'
import { useSelector } from "react-redux"
import "../App.css"

function Navi() {
    const items = useSelector((state) => state.spendMoney.totalMoney)
    return (
        <div className='navi'>
            ${items}
        </div>
    )
}

export default Navi