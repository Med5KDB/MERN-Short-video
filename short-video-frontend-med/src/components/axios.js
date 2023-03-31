//Importation of axios to integrate backend with the frontend
import axios from 'axios';

const instance = axios.create({
    baseURL:"htpp://localhost/9000"
});

export default instance;


