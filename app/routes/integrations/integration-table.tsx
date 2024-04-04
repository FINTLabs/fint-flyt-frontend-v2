import {Box, Heading} from "@navikt/ds-react";
import {useTranslation} from "react-i18next";
import {IIntegration} from "~/api/types/integration";
import React from "react";

interface IntegrationTableProps {
    data: IIntegration[];
}

const IntegrationTable: React.FunctionComponent<IntegrationTableProps> = (props) => {
    const {t} = useTranslation('translations', {keyPrefix: 'pages.integrations'})

    return (
        <Box
            padding="8"
            paddingBlock="16"
        >

                <Heading size={"medium"}>integration table here</Heading>
            </Box>
    );
}

export default IntegrationTable;