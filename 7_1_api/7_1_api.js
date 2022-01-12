const request = require('request');
const axios = require('axios');

const url = "https://dog.ceo/api/breeds/image/random";

request({ url: url, json: true }, (error, response) => {
    if (error) {
        console.log(error);
    }
    else {
        console.log('Using request: ', response.body.message);
    }
});

(async function getData() {
    try {
        const res = await axios.get(url);
        console.log('Using axios: ', res.data.message);
    } catch (error) {
        console.log(error);
    }
})();

