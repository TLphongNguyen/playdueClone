import { useState, useEffect } from 'react';
import Story from './story';
import axios from 'axios';
import { SERVICE_URL } from '~/config';
import { formatDate } from '~/sevices/fomatDate';
function Stories() {
	const [dataStory, setDataStory] = useState([]);
	const fetchDataStory = async () => {
		try {
			const response = await axios.get(`${SERVICE_URL}/getstory`);
			setDataStory(response.data);
			// fetchDataStory();
		} catch (e) {
			console.log(e);
		}
	};
	useEffect(() => {
		fetchDataStory();
	}, [dataStory]);
	return (
		<div className="wrap-content flex">
			{dataStory.map((data, index) => (
				<Story
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
					customerId={data.customers.customerId}
				/>
			))}
		</div>
	);
}

export default Stories;
