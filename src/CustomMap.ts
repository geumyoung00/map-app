interface MarkableType {
	name: string;
	catchphrase?: string;
	position: { lat: number; lng: number };
	content: string;
	markerContent(): string;
}

export class CustomMap {
	private googleMap: google.maps.Map;

	constructor(divId: string) {
		this.googleMap = new google.maps.Map(
			document.getElementById(divId) as HTMLElement,
			{ center: { lat: 0, lng: 0 }, zoom: 1 }
		);
	}

	addMarker(Markerble: MarkableType) {
		const marker = new google.maps.Marker({
			map: this.googleMap,
			position: { lat: Markerble.position.lat, lng: Markerble.position.lng },
		});

		marker.addListener('click', () => {
			const infowindow = new google.maps.InfoWindow({
				content: Markerble.markerContent(),
			});

			infowindow.open(this.googleMap, marker);
		});
	}
}
