import React,{useState} from 'react'
import { IoIosAddCircle } from "react-icons/io";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
const PostQuiz = () => {
  const [data,setData]=useState({})
  const [question,setQuestion]=useState()
  const handleChange = (e) => {
    const key=e.target.name
    const value=e.target.value
    setData({...data,[key]:value})
  }
  const handleSubmit = () => {

  }
  return (
    <div className='p-4'>
      <div className='fixed bottom-2 right-2 text-6xl'>
        <IoIosAddCircle className='text-[#2ec4b6]' />
      </div>
      <div className='w-full max-w-md'>

        <TextField
          sx={{my:2}}
          label="Quiz Name"
          id="standard-size-normal"
          defaultValue=""
          variant="standard"
          color='success'
          fullWidth
          name='quizName'
          value={data.quizName}
          onChange={(e)=>handleChange(e)}
        />
        <TextField
          sx={{my:2}}
          label="Quiz Type"
          id="standard-size-normal"
          defaultValue=""
          variant="standard"
          color='success'
          fullWidth
          name="quizType"
          value={data.quizType}
          onChange={(e)=>handleChange(e)}
        />
        <TextField
          sx={{my:2}}
          label="Total Marks"
          id="standard-size-normal"
          defaultValue=""
          variant="standard"
          color='success'
          fullWidth
          type='number'
          name="quizMarks"
          value={data.quizMarks}
          onChange={(e)=>handleChange(e)}
        />
      </div>
    </div>
  )
}

export default PostQuiz
