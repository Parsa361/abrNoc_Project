import axios from 'axios';

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: {
        Accept: 'application/json'
    }
});

export const fetchRegions = () => {
    return api.get('/regions');
};

export const fetchPlansByRegion = (region) => {
    return api.get(`/plans?region=${region}`);
};

export const fetchOperatingSystems = () => {
    return api.get('/operating_systems');
};

export const fetchUserInfo = () => {
    return api.get('/user-info');
};