import { Link as RouterLink } from 'react-router-dom';
import { BodyLong, Box, ExpansionCard, Heading, Link, List, VStack } from '@navikt/ds-react';

import { useTranslation } from 'react-i18next';
import { getAboutFlytByLanguage, getFAQByLanguage } from '~/routes/support/support-util';
// import {
// 	getAboutFlytByLanguage,
// 	getFAQByLanguage,
// } from "../../features/support/util/SupportUtil";

const SupportContent = () => {
    const { t } = useTranslation('translations', { keyPrefix: 'pages.support' });
    const { i18n } = useTranslation();
    return (
        <>
            <Box
                id={'support-information'}
                background={'surface-default'}
                padding="6"
                borderRadius={'large'}
                borderWidth="2"
                borderColor={'border-subtle'}>
                <VStack gap={'6'}>
                    <Heading size={'small'}>{t('description')}</Heading>
                    <BodyLong>{getAboutFlytByLanguage(i18n.language)}</BodyLong>
                    <BodyLong>
                        {t('descriptionBody')}
                        <Link as={RouterLink} id={'support-guide-link'} to={'/support'}>
                            {t('link')}
                        </Link>
                    </BodyLong>
                </VStack>
            </Box>
            <Box id={'support-faq'}>
                <ExpansionCard aria-label="default">
                    <ExpansionCard.Header id={'support-faq-header'}>
                        <ExpansionCard.Title> {t('FAQ')}</ExpansionCard.Title>
                    </ExpansionCard.Header>
                    <ExpansionCard.Content>
                        <Heading size={'small'}>{t('description')}</Heading>
                        <List as="ul" id={'faq-list'}>
                            {getFAQByLanguage(i18n.language).map((item, index) => {
                                return (
                                    <List.Item key={index} title={item.header}>
                                        {item.content}
                                    </List.Item>
                                );
                            })}
                        </List>
                    </ExpansionCard.Content>
                </ExpansionCard>
            </Box>
        </>
    );
};

export default SupportContent;
