import { useState, useEffect } from 'react';
import Story from './story';
import axios from 'axios';
import { SERVICE_URL } from '~/config';
import { formatDate } from '~/sevices/fomatDate';
function Stories() {
	const [dataStory, setDataStory] = useState([]);
	const [dataCustomer, setDataCustomer] = useState([]);
	const fetchDataStory = async () => {
		const response = await axios.get(`${SERVICE_URL}/getstory`);
		setDataStory(response.data);
		// setDataCustomer(dataStory[0].customers);
	};
	console.log(dataStory, dataCustomer);
	useEffect(() => {
		fetchDataStory();
	}, []);
	console.log(dataStory.customers);
	return (
		<div className="wrap-content flex">
			{dataStory.map((data) => (
				<Story
					key={data.storyId}
					storyUrl={data.urlStory}
					avt={data.customers.avt}
					name={data.customers.fullName}
					view={data.views}
					caption={data.caption}
					hastag={data.hagtag}
					time={formatDate(data.time)}
				/>
			))}
		</div>
	);
}

export default Stories;
