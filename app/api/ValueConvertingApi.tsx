import integrationPageData from './mock-valueconverting-page.json';
import { IValueConvertingPage } from '~/types/ValueConverting';

const API_URL = process.env.API_URL || '';

class ValueConvertingApi {
    static fetchValueConvertingPage() {
        console.log('fetch mock data integrationPageData');
        const data: IValueConvertingPage = integrationPageData;
        return data;
    }

    static async fetch() {
        try {
            const response = await fetch(`${API_URL}/api/components/`);
            if (response.ok) {
                return await response.json();
            } else {
                // Handle error response
                console.error('Error fetching components');
                return null;
            }
        } catch (error) {
            // Handle fetch error
            console.error('Error fetching components:', error);
            return null;
        }
    }
}

export default ValueConvertingApi;
