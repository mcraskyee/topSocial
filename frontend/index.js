import './index.css'
import { getDatabase } from './src/js/database/database.js';
import { setNavImage } from './src/js/nav/nav.js';

const { cards, profile, highline, message, request } = await getDatabase();

console.log('cards data: ', cards);
console.log('profile data: ', profile);
console.log('highline data: ', highline);
console.log('message data: ', message);
console.log('request data: ', request);

setNavImage(profile);
