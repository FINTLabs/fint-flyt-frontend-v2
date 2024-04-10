import {IIntegrationPage} from "~/api/types/integration";

const API_URL = process.env.API_URL || '';


import allIntegration from './mock-allIntegrations.json';
import getAllStatistics from './mock-statistikk.json';
import integrationPageData from "./mock-integration-page.json";

class IntegrationApi {

    static fetchAllIntegrations() {
        console.log("fetch mock data all integration");
        return allIntegration;
    }

    static fetchIntegrationPage() {
        console.log("fetch mock data integrationPageData");
        const data: IIntegrationPage = integrationPageData;
        return data;
    }

    static getAllStatistics() {
        console.log("fetch mock data  getAllStatistics");
        return getAllStatistics;
    }

    static async fetch() {
        try {
            const response = await fetch(`${API_URL}/api/components/`);
            if (response.ok) {
                return await response.json();
            } else {
                // Handle error response
                console.error("Error fetching components");
                return null;
            }
        } catch (error) {
            // Handle fetch error
            console.error("Error fetching components:", error);
            return null;
        }
    }


}

export default IntegrationApi;
