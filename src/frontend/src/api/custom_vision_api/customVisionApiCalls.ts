import axios from 'axios';
import config from '../apiconfig.json';

export function getPrediction(imageUrl: string) {
    axios.defaults.headers.post['Content-Type'] = 'application/json';
    axios.defaults.headers.post['Prediction-Key'] = config.CustomVisionAPI.PredictionKey;
    return axios.post(config.CustomVisionAPI.Url, JSON.stringify({"Url": imageUrl}));
}

