import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment,setAnswers,setSummary } from '../../Store/formSlice'

function Options({label,icon}) {
    const dispatch = useDispatch()
    const answers = useSelector((state) => state.form.answers)
    const questions = useSelector((state) => state.form.questions)
    

  return (
    <>
    <div className=' cursor-pointer mr-14 imojiContainer' onClick={() => {
      if(answers.length === questions.length-1){
        setTimeout(() => {
          
          dispatch(setSummary(true))
          dispatch(setAnswers(label))

        }, 500);

      }else{
        setTimeout(() => {
          
          dispatch(setAnswers(label))
          
        }, 500);

      }
      }}>
        <a href={`#slide`+(answers.length+1)}>
        <p className=' text-[20px]'>{label}</p>
    <img className=' w-[100px] h-[100px] ' src={icon} alt="" />
    </a>
    </div>
    </>
  )
}

export default Options