import allMetaData from './mock-allmetadata.json';

class SourceApplicationApi {

    static getAllMetadata() {
        console.log("fetch mock data  getAllMetadata");

        return allMetaData;
    }

}

export default SourceApplicationApi;
