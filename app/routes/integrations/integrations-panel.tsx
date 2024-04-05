import {
    Alert,
    BodyLong,
    BodyShort,
    Box,
    Button,
    Heading,
    HelpText,
    HGrid,
    HStack,
    Label,
    Modal,
    VStack
} from "@navikt/ds-react";
import {useTranslation} from "react-i18next";
import {Outlet} from "@remix-run/react";
import {IIntegration} from "~/api/types/integration";
import React, {useState} from "react";

interface IntegrationPanelProps {
    data: IIntegration[]; //todo rename to integration
    allMetadata: any; //TODO: Add type
}

const IntegrationPanel: React.FunctionComponent<IntegrationPanelProps> = (props) => {
    const {t} = useTranslation('translations', {keyPrefix: 'pages.integrations'})
    const allMetadata = props.allMetadata;
    const [openDialog, setOpenDialog] = React.useState(false);
    const [activeVersion, setActiveVersion] = useState<string>('');


    return (
        <Box id={'integration-panel-container'}>
            <Modal
                open={openDialog}
                onClose={() => setOpenDialog(false)
                }
                header={{
                    heading: t('table.activate'),
                    size: "small",
                    closeButton: false,
                }}
                width="small"
            >
                <Modal.Body>
                    <BodyLong>
                        {t('dialog.body')}
                    </BodyLong>
                </Modal.Body>
                <Modal.Footer>
                    <Button type="button" variant="danger" onClick={() => {
                        // getVersionForActiveConfig(configToActivate)
                        // activateConfiguration(configToActivate)
                        setOpenDialog(false)
                    }}>
                        {t('dialog.yes')}
                    </Button>
                    <Button
                        type="button"
                        variant="secondary"
                        onClick={() => setOpenDialog(false)}
                    >
                        {t('dialog.cancel')}
                    </Button>
                </Modal.Footer>
            </Modal>
            <VStack gap="4">
                <Label>{t('activeConfigurationId')} {activeVersion}</Label>
                <HGrid gap="6" columns={2}>
                    <Box id={'completed-config-table'} padding="4" background={"surface-subtle"} borderRadius="xlarge"
                         style={{maxHeight: '440px', overflow: "auto"}}>
                        <BodyShort>{t('table.completed')}:</BodyShort>
                        {/*{configTable(completedConfigs ?? {content: []}, true)}*/}
                    </Box>
                    <Box id={'draft-config-table'} padding="4" background={"surface-subtle"} borderRadius="xlarge"
                         style={{height: 'fit-content', maxHeight: '440px', overflow: "auto"}}>
                        <BodyShort>{t('table.drafts')}:</BodyShort>
                        {/*{configTable(draftConfigs ?? {content: []}, false)}*/}
                    </Box>
                </HGrid>
                <HStack gap={"6"}>
                    <Box>
                        <Button
                            id={props.id + "-new-configuration-button"}
                            disabled={!allMetadata}
                            // as={RouterLink}
                            to='/integration/configuration/new-configuration'
                            // onClick={() => {
                            //     setExistingIntegration(props.integration)
                            //     const selectedForm = allMetadata ? allMetadata.filter(md => md.sourceApplicationIntegrationId === props.integration?.sourceApplicationIntegrationId) : []
                            //     setSelectedMetadata(selectedForm.length > 0 ? selectedForm[selectedForm.length - 1] : undefined)
                            //     getInstanceElementMetadata(selectedForm[selectedForm.length - 1].id)
                            // }}
                        >
                            {t('button.newConfiguration')}
                        </Button>
                    </Box>
                    {/*{!allMetadata &&*/}
                    {/*    <Alert size="small" variant="warning">{t('missingDataError')} </Alert>}*/}
                </HStack>
            </VStack>
        </Box>
    );
}

export default IntegrationPanel;