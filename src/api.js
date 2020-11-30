import axios from 'axios';

const fetchData = async (number) => {
    try {
        const response = await axios.get(`https://randomuser.me/api?page=${number}`);
        console.log(response);
        return response;
    } catch (error) {
        console.log(error);
    }
}

export default fetchData;