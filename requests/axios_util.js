import axios from 'axios';

export const fetchCongressMember = (repName) => {
    return axios.get('/api/members/info', repName);
};

export const fetchAllCongressMembers = () => {
    return axios.get('/api/members/cainfo', {});
};