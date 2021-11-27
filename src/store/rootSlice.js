import { createSlice } from '@reduxjs/toolkit'

const rootSlice = createSlice({

  name: "root",

  initialState: {
    FormStage: 1,
    FormUserInfo: "",
    FormUserInvoice: ""
  },

  reducers: {
    formStage: (state, action) => { state.FormStage = action.payload },
    formInfo: (state, action) => { state.FormUserInfo = action.payload },
    formInvoice: (state, action) => { state.FormUserInvoice = action.payload }
  }

})

export const { formStage, formInfo, formInvoice } = rootSlice.actions
export const reducer = rootSlice.reducer;
