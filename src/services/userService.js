import slooveApi from './api';

const getAllTasks = async (company_id) => {
    const response = await slooveApi.get(`/`);
    return response.data;
};

const userService = {
    getAllTasks
};

export default userService;
