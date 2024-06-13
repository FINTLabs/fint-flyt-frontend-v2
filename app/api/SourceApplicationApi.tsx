import allMetaData from './mock-allmetadata.json';
import { ISourceApplication } from '~/types/SourceApplication';

class SourceApplicationApi {
    static getAllMetadata() {
        console.log('fetch mock data  getAllMetadata');

        return allMetaData;
    }

    static fetchAllApplications = (): ISourceApplication[] => {
        //return axios.get("/api/intern/sourceApplicationData")
        return [
            { id: 1, displayName: 'ACOS Interact', available: true },
            { id: 2, displayName: 'eGrunnerverv', available: true },
            { id: 3, displayName: 'Digisak', available: true },
        ];
    };
}

export default SourceApplicationApi;
