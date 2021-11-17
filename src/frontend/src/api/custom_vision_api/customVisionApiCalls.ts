import axios from 'axios';
import settings from '../apiconfig.json';

export function getPrediction(imageUrl: string) {
    axios.defaults.headers.post['Content-Type'] = 'application/json';
    axios.defaults.headers.post['Prediction-Key'] = settings.CUSTOM_VISION_API_PREDICTION_KEY;
    return axios.post(settings.CUSTOM_VISION_API_URL, JSON.stringify({"Url": imageUrl}));
}

