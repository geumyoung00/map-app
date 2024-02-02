import { faker } from '@faker-js/faker';
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
	}

	markerContent(): string {
		return `<p>Company name : ${this.name}</p>`;
	}
}
