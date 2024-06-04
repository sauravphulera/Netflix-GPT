import React from 'react'
import { info, play } from '../assets/logo'

const VideoTitle = ({ title, overview }) => {
	return (
		<div className='pt-[20%] text-white absolute px-16 bg-gradient-to-r from-black w-screen aspect-video z-0'>
			<div className='text-3xl font-bold'>{title}</div>
			<div className='w-3/5'>{overview}</div>
			<div className='flex gap-5 mt-16'>
				<button className='bg-white rounded-md py-2 px-4 flex items-center justify-center font-medium text-black hover:bg-slate-300'>{play} <span className='ml-2'>Play</span></button>
				<button className='bg-gray-400 py-2 px-4 text-white flex items-center justify-center font-medium rounded-md hover:bg-gray-600'>{info} <span className='ml-2'>More Info</span></button>
			</div>
		</div>
	)
}

export default VideoTitle