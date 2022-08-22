import React, { useState } from 'react'
import { useSelector } from "react-redux"
import { increment, decrement, quantityUpdate } from '../redux/spendMoney/spendMoneySlice'
import { useDispatch } from "react-redux"


function Body() {
  const items = useSelector((state) => state.spendMoney.totalMoney)
  const data = useSelector((state) => state.spendMoney.items)
  const [newQuantity, setNewQuantity] = useState(0);
  const dispatch = useDispatch()
  console.log(data)
  return (
    <div>
      <ul>
        {data.map((item, i) =>
          <li key={i}>
            <img src={item.productImage + ".jpg"} /><br />
            {item.productName}<br />
            ${item.productPrice}<br />
            <button onClick={(items + item.productPrice) >= 100000000001 ? "" : (e) => dispatch(decrement({ id: item.id, productQuantity: Number(1) }))} className={item.productQuantity == 0 ? "sell" : "sell-active"}>Sell</button>
            <input onChange={(e) => dispatch(quantityUpdate({ id: item.id, productQuantity: Number(e.target.value) }))} value={item.productQuantity} />
            <button onClick={(items - item.productPrice) <= -1 ? "" : (e) => dispatch(increment({ id: item.id, productQuantity: Number(1) }))} className="buy">Buy</button>
          </li>
        )}
      </ul>
    </div>
  )
}

export default Body