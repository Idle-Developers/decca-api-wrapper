const { Api } = require('decca-api');

const api = new Api("super-secret-api-key");

api.reverse('decc00n').then(res => console.log(res))