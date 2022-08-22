import { createSlice } from "@reduxjs/toolkit";
import { data } from "../../data"

export const spendMoneySlice = createSlice({
    name: "spendMoney",
    initialState: {
        totalMoney: 100000000000,
        items: data,
    },
    reducers: {
        increment: (state, action) => {
            state.items.map((item) => {
                if (item.id === action.payload.id) {
                    item.productQuantity = item.productQuantity + 1;
                    let totalcostMoney = 100000000000
                    state.items.map((item) => {
                        let totalcostitem = item.productPrice * item.productQuantity
                        totalcostMoney = totalcostMoney - totalcostitem
                        state.totalMoney = totalcostMoney
                    })
                    // state.totalMoney = state.totalMoney - (item.productQuantity*item.productPrice)
                }
            });
        },
        decrement: (state, action) => {
            state.items.map((item) => {
                if (item.id === action.payload.id) {
                    item.productQuantity = item.productQuantity - 1;
                    let totalcostMoney = 100000000000
                    state.items.map((item) => {
                        let totalcostitem = item.productPrice * item.productQuantity
                        totalcostMoney = totalcostMoney - totalcostitem
                        state.totalMoney = totalcostMoney
                    })
                    // state.totalMoney = state.totalMoney - (item.productQuantity*item.productPrice)
                }
            });
        },
        quantityUpdate: (state, action) => {
            state.items.map((item) => {
                if (item.id === action.payload.id) {
                    item.productQuantity = action.payload.productQuantity;
                    let totalcostMoney = 100000000000
                    state.items.map((item) => {
                        let totalcostitem = item.productPrice * item.productQuantity
                        totalcostMoney = totalcostMoney - totalcostitem
                        state.totalMoney = totalcostMoney
                    })
                    // state.totalMoney = state.totalMoney - (item.productQuantity*item.productPrice)
                }
            });
        }
    }
})
export const { increment, decrement, quantityUpdate } = spendMoneySlice.actions
export default spendMoneySlice.reducer