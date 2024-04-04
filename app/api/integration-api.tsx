import allIntegration from './mock-allIntegrations.json';

class IntegrationApi {

    static fetchAllIntegrations() {
        console.log("fetch mock data all intergrations");
        return allIntegration;
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
