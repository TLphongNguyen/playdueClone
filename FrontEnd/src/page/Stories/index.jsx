import { useState, useEffect } from 'react';
import StoryPage from '~/components/stories/storyPage';
import axios from 'axios';
import { SERVICE_URL } from '~/config';
import { formatDate } from '~/sevices/fomatDate';
function Stories() {
	const [dataStory, setDataStory] = useState([]);
	const fetchDataStory = async () => {
		const response = await axios.get(`${SERVICE_URL}/getstory`);
		setDataStory(response.data);
	};
	useEffect(() => {
		fetchDataStory();
	}, [dataStory]);
	return (
		<div className="">
			<ul className="list-story grid grid-cols-5 row-gap gap-y-[35px] gap-x-[25px] mt-[45px] max-w-[1180px] mx-auto px-[50px]">
				{dataStory?.map((data, index) => (
					<StoryPage
						key={data.storyId}
						storyId={data.storyId}
						storyUrl={data.urlStory}
						avt={data.customers.avt}
						name={data.customers.fullName}
						view={data.views}
						index={index}
						caption={data.caption}
						hastag={data.hagtag}
						time={formatDate(data.time)}
						stories={dataStory}
						likes={data.likes}
						customerId={data.customers.customerId}
					/>
				))}
			</ul>
		</div>
	);
}

export default Stories;
