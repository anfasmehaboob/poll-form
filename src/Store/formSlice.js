import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    questions:null,
    answers : [],
  summary: false,

}

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
  
      setQuestions:(state,action) => {
        state.questions = action.payload
      },
      setAnswers:(state,action) => {
        state.answers.push(action.payload)
      },
      setSummary:(state,action) => {
        state.summary= action.payload
      }
  },
})

export const { setAnswers ,setQuestions,setSummary} = formSlice.actions

export default formSlice.reducer