import { userRegisterType } from "@/type/account";
import { createSlice } from "@reduxjs/toolkit";

const initialState : userRegisterType = {
    name: "",
    email: "",
    country: "",
    password: "",
    phone_number: "",
    address: "",
}


export const accountSlice = createSlice({
    name : "Account",
    initialState,
    reducers: {
        
    }
})

// export const { } = todoSlice.actions;
// export default appSlice.reducer;