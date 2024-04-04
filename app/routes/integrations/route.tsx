import {Box, Heading, HelpText, HStack} from "@navikt/ds-react";
import {useTranslation} from "react-i18next";
import {Outlet} from "@remix-run/react";

export default function Index() {
    const {t} = useTranslation('translations', {keyPrefix: 'pages.integrations'})

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
            </HStack>

            <Box
                id={"integration-table-container"}
                background={"surface-default"}
                padding="6"
                borderRadius={"large"}
                borderWidth="2"
                borderColor={"border-subtle"}
            >
                <Heading size={"medium"}>integration table</Heading>
                <Outlet />
            </Box>
        </Box>
    );
}