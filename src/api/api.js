import axios from "axios";

const instace = axios.create({
    baseURL: 'https://api.github.com/'
});

const api = {
    getAll: async () =>{
        let json = await instace.get('/users/devganda');
        return json.data;
    },

    getAllRepos: async () =>{
        let json = await instace.get('/users/devganda/subscriptions');
        return json.data;
    }
}
export default () => api;