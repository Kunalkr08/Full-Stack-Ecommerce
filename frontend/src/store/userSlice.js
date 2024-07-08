import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    user : null
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserDetails : (state,action)=>{
            state.user = action.payload
            console.log("userDetails",action.payload); 
            //console.log("state.user-kya-ayya-wo-btao",state.user);
        }
    },
})
  
  // Action creators are generated for each case reducer function
  export const { setUserDetails } = userSlice.actions
  
  export default userSlice.reducer