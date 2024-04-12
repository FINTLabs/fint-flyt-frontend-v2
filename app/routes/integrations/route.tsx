import {Box, Button, Heading, HelpText, HStack, Loader} from "@navikt/ds-react";
import {useTranslation} from "react-i18next";
import {PlusIcon} from "@navikt/aksel-icons";
import IntegrationTable from "~/routes/integrations/IntegrationTable";
import SourceApplicationApi from "~/api/SourceApplicationApi";
import {json, LoaderFunctionArgs} from "@remix-run/node";
import {useLoaderData} from "@remix-run/react";
import IntegrationApi from "~/api/IntegrationApi";
import ConfigurationApi from "~/api/ConfigurationApi";

// import ConfigurationApi from "~/api/configuration-api";

export async function loader({params, request}: LoaderFunctionArgs) {
    const url = new URL(request.url);
    const selectedId = url.searchParams.get("id");

    try {
        const metadata = SourceApplicationApi.getAllMetadata();
        const integrationPage = await IntegrationApi.fetchIntegrationPage();
        const sourceApplications = await SourceApplicationApi.fetchAllApplications();

        let configResponse, completedConfigResponse;
        if (selectedId) {
            console.log("loading selectedId", selectedId);
            configResponse = await ConfigurationApi.getConfigurations(0, 10, "id", "DESC", false, selectedId, true);
            completedConfigResponse = await ConfigurationApi.getConfigurations(0, 10, "version", "DESC", true, selectedId ?? '', true)
        }

        return json({ metadata, integrationPage, sourceApplications, selectedId, configResponse, completedConfigResponse });
    } catch (error) {
        throw new Error("Error fetching data");
    }
}

export default function Index() {
    const {t} = useTranslation('translations', {keyPrefix: 'pages.integrations'})
    const loaderData = useLoaderData<typeof loader>();
    const allMetadata = loaderData.metadata;

    // const integrationPage = loaderData.integrationPage;

    return (
        <Box
            padding="8"
            paddingBlock="16"
        >
            <HStack id={'instances-custom-header'} align={"center"} justify={"space-between"} gap={"2"} wrap={false}>
                <HStack align={"center"} gap={"2"}>
                    <Heading size={"medium"}>{t('header')}</Heading>
                    <HelpText title={"Hva er dette"} placement="bottom">
                        {t('help.header')}
                    </HelpText>
                </HStack>
                <Button
                    // as={RouterLink}
                    // to={"/integration/new"}
                    size={"small"}
                    icon={<PlusIcon aria-hidden/>}
                >{t('button.newIntegration')}
                </Button>
            </HStack>

            {/*{error && <Alert style={{maxWidth: '100%'}} variant="error">{error.message}</Alert>}*/}
            <Box id={"integration-table-container"} background={"surface-default"} padding="6" borderRadius={"large"}
                 borderWidth="2" borderColor={"border-subtle"}>

                {allMetadata ?
                    <IntegrationTable
                        // onError={(error) => {
                        //     setError(error)
                        // }}
                        // id={"integration-table"}

                        // integrationPage={integrationPage}
                        // allMetadata={allMetadata}
                    />
                    :
                    <>
                        <Loader size={"large"}/>
                    </>
                }
            </Box>
        </Box>
    );
}