import { faker } from '@faker-js/faker';
import { uuid } from 'uuidv4';

faker.locale = 'fr';

export interface Host {
  id: string;
  name: string;
  rooms: number;
  locatedAt: Place;
}

export interface Place {
  id: string;
  name: string;
  kind: Kinda;
  country: string;
}

export interface Kinda {
  id: string;
  name: 'MER' | 'MONTAGNE' | 'VILLE' | 'CAMPAGNE' | 'PLAGE';
}

export class Destination implements Host {
  id: string;
  name: string;
  rooms: number;
  locatedAt: Place;

  constructor() {
    this.id = uuid();
    this.name = faker.commerce.productName();
    this.rooms = faker.datatype.number({ min: 0, max: 10 });
    this.locatedAt = {
      id: uuid(),
      name: faker.address.city(),
      kind: {
        id: uuid(),
        name: faker.helpers.arrayElement(['MER', 'MONTAGNE', 'VILLE', 'CAMPAGNE', 'PLAGE']),
      },
      country: faker.address.country(),
    };
  }

  public toObject(): Host {
    return {
      id: this.id,
      name: this.name,
      rooms: this.rooms,
      locatedAt: this.locatedAt,
    };
  }

  public toJSON(): string {
    return JSON.stringify(this.toObject());
  }
}

export class Destinations {
  private destinations: Destination[] = [];

  constructor(numberOfDestinations: number) {
    for (let i = 0; i < numberOfDestinations; i++) {
      this.destinations.push(new Destination());
    }
  }

  public toObject(): Host[] {
    return this.destinations.map((destination) => destination.toObject());
  }

  public toJSON(): string {
    return JSON.stringify(this.toObject());
  }
}