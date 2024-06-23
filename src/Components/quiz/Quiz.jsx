import React, { useState, useEffect } from 'react';
import Review from '../review/Review';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './Quiz.css';

const Quiz = () => {
	const { id } = useParams();
	const [data, setData] = useState([]);
	const [pointer, setPointer] = useState(0);
	const [progress, setProgress] = useState(true);
	const [answer, setAnswer] = useState({});
	const [complete, setComplete] = useState(false);
	const [score, setScore] = useState(0);
	const [reset, setReset] = useState(false);

	const handleNext = () => {
		if (pointer < data.length - 1) {
			setPointer(pointer + 1);
		} else {
			setProgress(false);
		}
	};

	const handlePrev = () => {
		if (pointer !== 0) {
			setPointer(pointer - 1);
		}
		setProgress(true);
	};

	const handleSubmit = () => {
		let count = 0;
		for (let i = 0; i < data.length; i++) {
			if (data[i].correctAnswer === answer[i]) count++;
		}
		setScore(count);
		setComplete(true);
	};

	const handleOption = (index) => {
		const key = pointer;
		const value = data[pointer].options[index];
		setAnswer({ ...answer, [key]: value });
	};

	useEffect(()=>{

		if(pointer === data.length - 1)
			setProgress(false)
		else 
			setProgress(true)
	},[ pointer])
	

	useEffect(() => {

		setAnswer({});
		setPointer(0);
		setComplete(false);
		setReset(false);
		setProgress(true);
		setScore(0);

	}, [reset]);

	useEffect(() => {
		(async () => {
			try {
				const res = await axios.get(`/api/v1/quiz/${id}`);
				const result = await res.data;
				setData(result.data);
			} catch (error) {
				console.error('Error fetching data:', error);
			}
		})();
	}, [id]);

	if (data.length === 0) {
		return <div>Loading...</div>;
	}

	return complete ? (
		<Review data={data} score={score} answer={answer} setReset={setReset} />
	) : (
		<div className='main flex justify-center items-center flex-col min-h-screen gap-10 p-3'>
			<div className="ques-head text-center w-full max-w-xl shadow-2xl py-10 px-3 my-4 relative bg-white rounded">
				<h4 className='absolute right-[20%] top-[-20%] md:right-[35%] bg-[#2ec4b6] py-2 px-8 rounded-full text-[#fff]'>
					{`Question ${pointer + 1} out of ${data.length}`}
				</h4>
				<p className='text-3xl' name="quiz">{data[pointer].ques}</p>
			</div>
			<div className="options w-full max-w-xl grid grid-cols-2 gap-3">
				{data[pointer].options.map((item, index) => (
					<div
						key={index}
						onClick={() => handleOption(index)}
						className={answer[pointer] === item ? "border-2 border-[#2ec4b6] bg-[#cbf3f0] text-[#2ec4b6] hover:bg-[#2ec4b6] hover:text-[#cbf3f0] transition-all duration-300 rounded-md p-4 text-center" : "list hover:bg-[#2ec4b6] hover:text-white text-center transition-all duration-300 rounded-md p-4 bg-slate-100 border-2 border-slate-200 text-slate-500"}
					>
						<button>{item}</button>
					</div>
				))}
			</div>
			<div className='flex justify-between w-full max-w-xl'>
				<button className='px-10 py-2 rounded-full text-[#fff] bg-[#2ec4b6]' onClick={handlePrev}>Previous</button>
				{progress ? (
					<button className='px-12 py-2 rounded-full text-[#fff] bg-[#2ec4b6]' onClick={handleNext}>Next</button>
				) : (
					<button className='px-12 py-2 rounded-full text-[#fff] bg-[#2ec4b6]' onClick={handleSubmit}>Submit</button>
				)}
			</div>
		</div>
	);
};

export default Quiz;
