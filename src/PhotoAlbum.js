//Possible improvements, allow user to retry, and handling if no results are returned"
import fetch from 'node-fetch';
import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Which album ID do you want to get photos from? ", (albumId) => {
    const url = `https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`;
    fetch(url)
    .then(res => res.json())
    .then(data => {
        data.forEach(photo => {
            console.log(`ID: ${photo.id}`);
            console.log(`Title: ${photo.title}\n`);
        });
    })
    .catch(err => console.error(err));
    rl.close();
});