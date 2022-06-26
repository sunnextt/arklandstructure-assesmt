import AslconstructionApi from './api';

const todayDate = new Date().toISOString().slice(0, 10);

const getAllNews = async (api_key) => {
    const response = await AslconstructionApi.get(
        `/everything?q=tesla&from=${todayDate}&sortBy=publishedAt&apiKey=${api_key}`
    );
    return response.data;
};

const newsService = {
    getAllNews
};

export default newsService;
