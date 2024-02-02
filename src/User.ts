import { faker } from '@faker-js/faker';
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
	}

	markerContent(): string {
		return `<p>User Name : ${this.name}</p>`;
	}
}
