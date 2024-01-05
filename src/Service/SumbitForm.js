import axios from "axios";

const url = 'https://659688b16bb4ec36ca02d78a.mockapi.io/pollform'


export const submitAnswersMockApi = (data) => {
    return axios({
        method:'post',
        url,
        data
    })
}