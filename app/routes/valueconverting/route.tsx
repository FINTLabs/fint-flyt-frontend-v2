import { Box, Button, Heading, HelpText, HStack } from '@navikt/ds-react';
import { useTranslation } from 'react-i18next';
import { PlusIcon } from '@navikt/aksel-icons';
import ValueConvertingForm from '~/routes/valueconverting/ValueConvertingForm';
import ValueConvertingTable from '~/routes/valueconverting/ValueConvertingTable';
import { useState } from 'react';
import { json } from '@remix-run/node';
import SourceApplicationApi from '~/api/SourceApplicationApi';
import ValueconvertingApi from '~/api/ValueConvertingApi';
import { useLoaderData } from '@remix-run/react';

export async function loader() {
    try {
        const metadata = SourceApplicationApi.getAllMetadata();
        const valueConvertingPage = await ValueconvertingApi.fetchValueConvertingPage();
        const sourceApplications = await SourceApplicationApi.fetchAllApplications();

        let configResponse, completedConfigResponse;

        return json({ metadata, valueConvertingPage, sourceApplications });
    } catch (error) {
        throw new Error('Error fetching data');
    }
}

export default function Index() {
    // const loaderData = useLoaderData<typeof loader>();
    const { t } = useTranslation('translations', { keyPrefix: 'pages.valueConverting' });
    const loaderData = useLoaderData<typeof loader>();
    const allMetadata = loaderData.metadata;

    const [existingValueConverting, setExistingValueConverting] = useState(undefined);
    const [newValueConverting, setNewValueConverting] = useState<boolean>(false);
    return (
        <>
            <Box
                // background="surface-alt-4-moderate"
                padding="8"
                paddingBlock="16">
                <HStack
                    id={'instances-custom-header'}
                    align={'center'}
                    justify={'space-between'}
                    gap={'2'}
                    wrap={false}>
                    <HStack align={'center'} gap={'2'}>
                        <Heading size={'medium'}>{t('header')}</Heading>
                    </HStack>
                    {!existingValueConverting && !newValueConverting && (
                        <HStack gap={'2'} align="center">
                            <Button
                                id={'new-button'}
                                onClick={() => setNewValueConverting(true)}
                                size={'small'}
                                icon={<PlusIcon aria-hidden />}>
                                {t('button.newConverting')}
                            </Button>
                            <HelpText title="Knapp informasjon" placement="left">
                                {t('help.new')}
                            </HelpText>
                        </HStack>
                    )}
                </HStack>
                {existingValueConverting || newValueConverting ? (
                    <ValueConvertingForm
                    // existingValueConverting={existingValueConverting ?? undefined}
                    // setNewValueConverting={setNewValueConverting}
                    // setExistingValueConverting={setExistingValueConverting}
                    />
                ) : (
                    <ValueConvertingTable
                    // setNewValueConverting={setNewValueConverting}
                    // onValueConvertingSelected={(id: number) => {
                    //     return ValueConvertingRepository.getValueConverting(id)
                    //         .then(response => {
                    //             setExistingValueConverting(response.data);
                    //         })
                    //         .catch(e => {
                    //             console.log(e);
                    //         });
                    // }
                    // }
                    />
                )}
            </Box>
        </>
    );
}
