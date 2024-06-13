import { BodyLong, Box, List, Page, VStack } from '@navikt/ds-react';
import { RouteComponent } from '@remix-run/react/dist/routeModules';
import { useTranslation } from 'react-i18next';
import { getAboutByLanguage, getVersionDataByLanguage } from './VersionTexts';
// import React, {useContext, useEffect} from 'react';
// import {AuthorizationContext} from "../../context/AuthorizationContext";

const Version: RouteComponent = () => {
    const { i18n } = useTranslation();
    // const { authorized, getAuthorization} = useContext(AuthorizationContext)
    // const history = useHistory();

    // if(!authorized) {
    //     history.push('/forbidden')
    // }
    // useEffect(() => {
    //     getAuthorization()
    // }, []);

    return (
        <Page.Block>
            <Box
                id={'version-information'}
                background={'surface-default'}
                padding="6"
                borderRadius={'large'}
                borderWidth="2"
                borderColor={'border-subtle'}>
                <VStack gap={'6'}>
                    <BodyLong>{getAboutByLanguage(i18n.language)}</BodyLong>
                    <BodyLong>
                        <VStack gap={'6'}>
                            {getVersionDataByLanguage(i18n.language).map((value, i) => (
                                <List key={i} as="ul" title={value.heading}>
                                    {value.updates.map((update, i) => (
                                        <List.Item key={i}>{update}</List.Item>
                                    ))}
                                </List>
                            ))}
                        </VStack>
                    </BodyLong>
                </VStack>
            </Box>
        </Page.Block>
    );
};
export default Version;
