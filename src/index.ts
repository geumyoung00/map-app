import { faker } from '@faker-js/faker';
interface MarkableType {
	name: string;
	catchphrase?: string;
	position: { lat: number; lng: number };
	content: string;
}
export class User {
	name: string;
	position: { lat: number; lng: number };
	content: string;

	constructor() {
		this.name = `${faker.person.firstName()} ${faker.person.lastName()}`;
		this.position = {
			lat: faker.location.latitude(),
			lng: faker.location.longitude(),
		};
		this.content = `User Name : ${this.name}`;
	}
}

export class Company {
	name: string;
	catchphrase: string;
	position: { lat: number; lng: number };
	content: string;

	constructor() {
		this.name = faker.company.name();
		this.catchphrase = faker.company.catchPhrase();
		this.position = {
			lat: faker.location.latitude(),
			lng: faker.location.longitude(),
		};
		this.content = `Company Name : ${this.name}`;
	}
}

const user = new User();
const company = new Company();
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
				content: Markerble.content,
			});

			infowindow.open(this.googleMap, marker);
		});
	}
}

const googleMap = new CustomMap('map');
googleMap.addMarker(user);
googleMap.addMarker(company);
