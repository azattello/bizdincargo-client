import axios from 'axios';


export const addBookmark = async ( userId , description, trackNumber) => {

    const apiUrl = `http://86.107.44.221:3001/api/bookmark/${userId}/bookmarks`;

    const data = {
        description,
        trackNumber
    };

    try {
        const response = await axios.post(apiUrl, data);
        console.log('Успешно прикреплен трек-номер:', response.data);
        return response.data;
    } catch (error) {
        console.error('Ошибка при прикреплении трек-номера:', error.response.data.message);
        throw new Error('Ошибка при прикреплении трек-номера');
    }
};
