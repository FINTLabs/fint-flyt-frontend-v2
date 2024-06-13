import mockConfigs from './mock-configuration-page.json';
import mockConfig from './mock-configuration.json';
import mockDraftConfig from './mock-configuration-drafts.json';
import { IConfiguration } from '~/types/Configuration';
import { IPage } from '~/types/TableTypes';

export interface IConfigurationPage extends IPage<IConfiguration> {}
class ConfigurationApi {
    static async getConfigurations(
        page: number,
        size: number,
        sortProperty: string,
        sortDirection: string,
        complete: boolean,
        integrationId: string,
        excludeElements?: boolean
    ) {
        console.log('fetch mock data configuration');
        console.log('page', page);
        console.log('size', size);
        console.log('sortProperty', sortProperty);
        console.log('sortDirection', sortDirection);
        console.log('complete', complete);
        console.log('integrationId', integrationId);
        console.log('excludeElements', excludeElements);

        // const data: IConfigurationPage = mockConfigs;
        if (!complete) {
            return mockDraftConfig;
        }
        return mockConfigs;
    }

    static async getConfigurationById(configurationId: string, excludeElements?: boolean) {
        // return axios.get(`/api/intern/konfigurasjoner/${configurationId}`, {
        //   params: { ekskluderMapping: excludeElements },
        // });
        return mockConfig;
    }
}
export default ConfigurationApi;
