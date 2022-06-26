import AslconstructionApi from './api';

const getAllNews = async (api_key) => {
    const response = await AslconstructionApi.get(
        `/everything?q=tesla&from=2022-05-26&sortBy=publishedAt&apiKey=${api_key}`
    );
    return response.data;
};

const newsService = {
    getAllNews
};

export default newsService;
