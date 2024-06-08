import React from 'react'
import { info, play } from '../assets/logo'

const VideoTitle = ({ title, overview }) => {
	return (
		<div className='pt-[12%] sm:pt-[12%] md:pt-[20%] text-white absolute px-16 w-screen aspect-video z-40'>
			<div className='text-3xl font-bold'>{title}</div>
			<div className='w-3/5'>{overview}</div>
			<div className='flex gap-5 mt-16'>
				<button className='bg-white rounded-sm py-3 pl-4 pr-5 flex items-center justify-center font-medium text-black hover:bg-slate-300 text-2xl'>{play} <span className='ml-2'>Play </span></button>
				<button className='bg-gray-400 py-3 px-5 text-white flex items-center justify-center font-medium rounded-sm hover:bg-gray-600 text-2xl'>{info} <span className='ml-2'>More Info</span></button>
			</div>
		</div>
	)
}

export default VideoTitle