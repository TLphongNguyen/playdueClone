import React, { useState, useEffect } from 'react';
import ReactMapGL, { Marker } from '@goongmaps/goong-map-react';

function Map() {
	const [viewport, setViewport] = useState({
		width: 800,
		height: 600,
		latitude: 21.013715429594125,
		longitude: 105.79829597455202,
		zoom: 14,
	});
	const [locationData, setLocationData] = useState(null);
	const apiKey = 'VfNwI6MpIQZ5eFo50FQNxIx4Lzv2T321NPvEn1ob'; // Thay token tại đây
	const lat = viewport.latitude;
	const lng = viewport.longitude;

	useEffect(() => {
		const fetchGeocode = async () => {
			try {
				const response = await fetch(`https://rsapi.goong.io/Geocode?latlng=${lat},${lng}&api_key=${apiKey}`);
				if (!response.ok) {
					throw new Error(`HTTP error! status: ${response.status}`);
				}
				const data = await response.json();
				setLocationData(data.results[0]?.formatted_address || 'Không có dữ liệu');
			} catch (error) {
				console.error('Error fetching geocode data:', error);
			}
		};

		fetchGeocode();
	}, []);

	return (
		<div>
			<ReactMapGL
				{...viewport}
				onViewportChange={(nextViewport) => setViewport(nextViewport)}
				goongApiAccessToken={apiKey}
				mapStyle="https://cdn.jsdelivr.net/npm/@goongmaps/goong-js/dist/goong-js.css"
			>
				<Marker latitude={lat} longitude={lng}>
					<div style={{ color: 'red', fontWeight: 'bold' }}>📍</div>
				</Marker>
			</ReactMapGL>
			<div style={{ marginTop: '10px', padding: '10px', backgroundColor: '#f5f5f5' }}>
				<h3>Địa chỉ:</h3>
				<p>{locationData || 'Đang tải...'}</p>
			</div>
		</div>
	);
}

export default Map;
