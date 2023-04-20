import type { NextApiRequest, NextApiResponse } from 'next'
import { Destination } from '../../utils/Destination';
import fs from 'fs';

const numberOfEntries = 10000;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
fs.writeFileSync('destinations.json', '[]');

const destinations = [];

for (let i = 0; i < numberOfEntries; i++) {
  const currentItem = i + 1;
  console.log(`Avancée ${currentItem}/${numberOfEntries}[${(currentItem / numberOfEntries) * 100}%]`)
  const destination = new Destination();

  destinations.push(destination.toObject());

  if (i % 1000 === 0) {
    console.log('- - - - - - - - - - - - - - - -');
    console.log(`Sauvegarde du batch`);
    console.log('- - - - - - - - - - - - - - - - ');
    // push it to destinations.json
    fs.writeFileSync('destinations.json', JSON.stringify(destinations));
  }

}

console.log("destinations: ", destinations);
}

