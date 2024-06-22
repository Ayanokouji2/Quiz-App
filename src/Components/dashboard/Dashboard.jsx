import React, { useState, useEffect } from 'react'
import { RiHome2Line, RiProgress5Line } from "react-icons/ri";
import { IoCheckmarkDone } from "react-icons/io5";
import { CiSearch } from "react-icons/ci"
import { GrScorecard } from "react-icons/gr";
import pic from '../../assets/quiz-3.png'
import { Link } from 'react-router-dom';
import axios from 'axios';

const Dashboard = () => {
    const [data, setData] = useState()

    useEffect(() => {
        (async () => {
            const res = await axios.get("/api/v1/quiz/all")
            const data = await res.data;
            setData(data.data);
        })()
    }, [])


    return (
        <div className='flex   '>
            <aside className='p-2 w-[6rem] bg-white   left-0 top-0 flex flex-col h-screen items-center  '>
                <div className="nav-head ">
                    <h2 className='text-3xl'>Quizz</h2>
                </div>
                <div className='nav-list text-[#2ec4b6] text-2xl flex flex-col gap-8 my-16 '>
                    <RiHome2Line className='rounded-full w-10 h-10 bg-[#cbf3f0] p-2 text-3xl' />
                    <IoCheckmarkDone className='rounded-full w-10 h-10 bg-[#cbf3f0] p-2 text-3xl' />
                    <RiProgress5Line className='rounded-full w-10 h-10 bg-[#cbf3f0] p-2 text-3xl' />
                </div>
            </aside>
            <main className='w-full'>
                <div className='bg-[#fafafa] w-full px-20 flex flex-col py-20 min-h-screen '>
                    <div className='flex justify-between'>
                        <input type="text" className=' py-2 px-8 max-w-xs w-full outline-none rounded-xl bg-transparent border-2 border-slate-200' placeholder='Eg: Sports' />
                        {/* <CiSearch className="absolute right-0 top-0"/> */}
                        <button className='px-4 py-2 bg-[#2ec4b6] rounded-lg text-white'><Link to='/postquiz'>Create Quiz + </Link></button>
                    </div>
                    <div className='rounded-xl bg-[#cbf3f0] h-80 my-8 overflow-hidden flex justify-evenly px-10 items-center '>
                        <img src={pic} alt="" className='h-full p-4 mix-blend-multiply' />
                        <div className='flex items-center flex-col gap-2 text-[#2ec4b6]'>
                            <IoCheckmarkDone className='rounded-full  bg-[#2ec4b6] text-[#cbf3f0]  p-2 text-[10rem]' />
                            <span className='text-3xl'>20/30</span>
                        </div>
                        <div className='flex items-center flex-col gap-2 text-[#2ec4b6]'>
                            <RiProgress5Line className='rounded-full  bg-[#2ec4b6] text-[#cbf3f0]  p-2 text-[10rem]' />
                            <span className='text-3xl'>10/30</span>
                        </div>
                    </div>
                    <div className=''>
                        <h3 className='text-xl '>All Quizes</h3>
                        {
                            data && data.map((item, index) => (
                                <div  key={index} className='quiz-card shadow rounded-md px-4 py-3 items-center flex justify-between my-2'>
                                    <div className='flex flex-col gap-1'>
                                        <h3 className='text-2xl'>{item.title}</h3>
                                        <h5 className='text-xs'>{item.genre||"Web"}</h5>
                                        <span className='flex items-center gap-1'><GrScorecard className='rounded-full w-10 h-10 bg-[#cbf3f0] p-2 text-[#2ec4b6]' /> 20/{item.marks}</span>
                                    </div>
                                    <div>
                                        <button className='bg-[#2ec4b6] text-white rounded p-2 '><Link to={`/quiz/${item._id}`}>Take Quiz</Link></button>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Dashboard
