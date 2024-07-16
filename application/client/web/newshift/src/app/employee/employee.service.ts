





import axios from 'axios';
import { Web } from '../../shared/shared.service'; // Adjust the import path

export class TicketService {
    private BaseURL: string;

    constructor() {
        this.BaseURL = Web();
    }

    // Add methods to handle API calls using axios
    PostAllemployeeValues(data: any): Promise<any> {
        return axios.post(`${this.BaseURL}/employee`, data);
    }

    GetAllemployeeValues(): Promise<any> {
        return axios.get(`${this.BaseURL}/employee`);
    }


    Updateemployee(data: any): Promise<any> {
        return axios.put(`${this.BaseURL}/employee/${data.id}`, data);
    }

    getSpecificemployee(id: number): Promise<any> {
        return axios.get(`${this.BaseURL}/employee/${id}`);
    }

    getSpecificemployeeHistory(id: number): Promise<any> {
        return axios.get(`${this.BaseURL}/employee/${id}/history?days=30`);
    }

    DeleteemployeeValues(dataId: any): Promise<any> {
        return axios.delete(`${this.BaseURL}/employee/${dataId}`);
    }

    GetEntityById(employeeId: any): Promise<any> {
        return axios.get(`${this.BaseURL}/employeeid/` + employeeId);
    }

    Searchemployee(data: any): Promise<any> {
        const temp: string[] = [];
        const objectKeyPair = Object.entries(data);
        objectKeyPair.forEach(([key, value]) => {
            if (value) {
                temp.push(`${key}=${value}`);
            }
        });
        const jwt_token = sessionStorage.getItem('JwtToken');
        return axios.get(`${this.BaseURL}/employee/get/search?jwt_token=${jwt_token}${temp.length > 0 ? `&${temp.join('&')}` : ''}`);
    }
}

