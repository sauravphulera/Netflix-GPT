import React from 'react'
import GPTSearchBar from './GPTSearchBar'
import GPTSuggetions from './GPTSuggetions'

const GPTSearchPage = () => {
	return (
		<div className="bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/dd4dfce3-1a39-4b1a-8e19-b7242da17e68/86742114-c001-4800-a127-c9c89ca7bbe4/IN-en-20240527-popsignuptwoweeks-perspective_alpha_website_large.jpg')] h-fit p-2 min-h-screen">
			<GPTSearchBar />
			<GPTSuggetions />
		</div>
	)
}

export default GPTSearchPage