import axios from 'axios';

const fetchData = async () => {
    try {
        const response = await axios.get('https://randomuser.me/api');
        console.log(response);
        return response;
    } catch (error) {
        console.log(error);
    }
}

export default fetchData;