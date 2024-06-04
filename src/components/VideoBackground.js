import { useSelector } from 'react-redux'

import useTrailerVideo from '../hooks/useTrailerVideo';

const VideoBackground = ({ movieId }) => {

	useTrailerVideo(movieId);

	const trailer = useSelector((store) => store.movies?.trailerViedo);


	return (
		<div className='w-screen'>
			<iframe
				className='w-screen aspect-video'
				src={"https://www.youtube.com/embed/" + trailer?.key + '?&autoplay=1&mute=1&amp;controls=0'}
				title="YouTube video player"
				frameBorder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				referrerPolicy="strict-origin-when-cross-origin"
				allowFullScreen>

			</iframe>
		</div>
	)
}

export default VideoBackground