import { Api } from 'decca-api';

const api = new Api("super-secret-api-key");

api.reverse('decc00n').then(res => console.log(res))