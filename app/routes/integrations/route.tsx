import {Box, Button, Heading, HelpText, HStack, Loader} from "@navikt/ds-react";
import {useTranslation} from "react-i18next";
import {PlusIcon} from "@navikt/aksel-icons";
import IntegrationTable from "~/routes/integrations/integration-table";
import SourceApplicationApi from "~/api/source-application-api";
import {json} from "@remix-run/node";
import {useLoaderData} from "@remix-run/react";

export const loader = async () => {
    try {
        const data = SourceApplicationApi.getAllMetadata();
        console.log("data in route:",data)
        return json({ data });
    } catch (error) {
        throw new Error("Error fetching data");
    }
};

export default function Index() {
    const {t} = useTranslation('translations', {keyPrefix: 'pages.integrations'})
    const loaderData = useLoaderData<typeof loader>();
    const allMetadata = loaderData.data;
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