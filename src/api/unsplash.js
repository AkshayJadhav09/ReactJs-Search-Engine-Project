import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com' ,
    headers: {
        Authorization: 'Client-ID ebeb69ed7487161f4b3ffe2d7b79b4998588200e593fb577a91b5036535621ed'
    }
});