import { useSelector } from 'react-redux'

import useTrailerVideo from '../hooks/useTrailerVideo';

const VideoBackground = ({ movieId }) => {

	useTrailerVideo(movieId);

	const trailer = useSelector((store) => store.movies?.trailerViedo);


	return (
		<div className='w-screen relative'>
			<iframe
				className='w-screen aspect-video'
				src={"https://www.youtube.com/embed/" + trailer?.key + '?&autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&showinfo=0&autohide=1'}
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