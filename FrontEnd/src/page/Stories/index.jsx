import { useState } from 'react';
import StoryPage from '~/components/stories/storyPage';

function Stories() {
	return (
		<div className="">
			<ul className="list-story">
				<StoryPage />
			</ul>
		</div>
	);
}

export default Stories;
