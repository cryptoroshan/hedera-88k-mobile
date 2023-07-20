import axios from 'axios';

export const getRequest = async (url) => {
    try {
        const res = await axios.get(url);
        return res.data;
    } catch (error) {
        return { result: false, error: error.message };
    }
}

export const postRequest = async (url, data) => {
    try {
        const res = await axios.post(url, data);
        return res.data;
    } catch (error) {
        return { result: false, error: error.message };
    }
}