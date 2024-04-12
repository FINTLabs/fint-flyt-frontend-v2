import * as React from "react";
import {ReactElement, useEffect, useState} from "react";
import {useTranslation} from "react-i18next";
// import {IntegrationContext} from "../../../context/IntegrationContext";
// import {Link as RouterLink, useHistory} from 'react-router-dom';
// import {SourceApplicationContext} from "../../../context/SourceApplicationContext";
// import {IIntegration, IIntegrationPatch} from "../../integration/types/Integration";
// import {IConfiguration} from "../../configuration/types/Configuration";
import {
    Alert,
    BodyLong,
    BodyShort,
    Box,
    Button,
    Dropdown,
    HGrid,
    HStack,
    Label,
    Modal,
    Pagination,
    Table,
    VStack
} from "@navikt/ds-react";
import {MenuElipsisVerticalCircleIcon, PencilWritingIcon} from '@navikt/aksel-icons';
// import IntegrationRepository from "../../../api/IntegrationRepository";
// import ConfigurationRepository from "../../../api/ConfigurationRepository";
// import {IAlertMessage, Page} from "../../../components/types/TableTypes";
import {IIntegration, IIntegrationPatch} from "~/types/Integration";
import {IPage} from "~/types/TableTypes";
import {IConfiguration} from "~/types/Configuration";
import ConfigurationApi from "~/api/ConfigurationApi";
import {useLoaderData} from "@remix-run/react";

type Props = {
    id: string
    integration: IIntegration,
    // onError: (error: IAlertMessage | undefined) => void;
}

const IntegrationPanel: React.FunctionComponent<Props> = (props: Props) => {
    const {t} = useTranslation('translations', {keyPrefix: 'pages.integrations'});
    const loaderData = useLoaderData();
    const allMetadata = loaderData.metadata;
    const completedConfigs = loaderData.completedConfigResponse;
    const draftConfigs = loaderData.configResponse;

    // const history = useHistory();
    // const {
    //     setConfiguration,
    //     setSelectedMetadata,
    //     setExistingIntegration
    // } = useContext(IntegrationContext);
    // const {
    //     allMetadata,
    //     setSourceApplication,
    //     getInstanceElementMetadata,
    // } = useContext(SourceApplicationContext)

    const [activeVersion, setActiveVersion] = useState<string>('');
    const [openDialog, setOpenDialog] = React.useState(false);
    const [configToActivate, setConfigToActivate] = React.useState<string>('')

    // const [completedConfigs, setCompletedConfigs] = useState<IPage<IConfiguration>>();
    // const [draftConfigs, setDraftConfigs] = useState<IPage<IConfiguration>>();
    const [page, setPage] = useState(1);
    const rowsPerPage = 30;
    const [sourceApplication, setSourceApplication] = useState<number>(1);

    // useEffect(() => {
    //     setCompletedConfigs({content: []})
    //     setDraftConfigs({content: []})
    //     getAllConfigurations();
    // }, [page, setPage])
    //
    // const getAllConfigurations = async () => {
    //     props.onError(undefined)
    //     try {
    //         const configResponse = await ConfigurationApi.getConfigurations(page - 1, rowsPerPage, "id", "DESC", false, props.integration.id ?? '', true)
    //         const completedConfigResponse = await ConfigurationApi.getConfigurations(page - 1, rowsPerPage, "version", "DESC", true, props.integration.id ?? '', true)
    //         //setDraftConfigs(configResponse.data)
    //         //setCompletedConfigs(completedConfigResponse.data)
    //         setDraftConfigs(configResponse.content);
    //         setCompletedConfigs(completedConfigResponse.content);
    //
    //     } catch (e) {
    //         props.onError(undefined)
    //         console.error('Error: ', e);
    //     }
    // }


    useEffect(() => {
        setSourceApplication(Number(props.integration.sourceApplicationId) ?? 1);
        getVersionForActiveConfig(props.integration?.activeConfigurationId ? props.integration.activeConfigurationId : undefined)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    function getVersionForActiveConfig(id: string | undefined): void {
        if (id === undefined) {
            setActiveVersion(t('noActiveConfig'))
            return;
        }
        const data: IConfiguration =  ConfigurationApi.getConfigurationById(id, true);
        if (data) {
                        setActiveVersion(t('version') + data.version)
                    }
        // ConfigurationRepository.getConfigurationById(id.toString(), true)
        //     .then((response) => {
        //         const data: IConfiguration = response.data;
        //         if (data) {
        //             setActiveVersion(t('version') + data.version)
        //         }
        //     })
        //     .catch((e) => {
        //         console.error('Error: ', e)
        //         setActiveVersion(t('noActiveConfig'))
        //     })
    }

    async function handleNewOrEditConfigClick(id: number | string, version?: unknown) {
        // setExistingIntegration(props.integration)
        // await ConfigurationRepository.getConfigurationById(id.toString(), false)
        //     .then(async (response) => {
        //         const data = response.data
        //         const usedVersionMetadata = allMetadata?.filter(md => md.id === data.integrationMetadataId)
        //         setSelectedMetadata(usedVersionMetadata ? usedVersionMetadata[0] : undefined)
        //         if (version) {
        //             data.id = undefined;
        //             data.comment = undefined
        //             data.completed = false;
        //         }
        //         setConfiguration(data);
        //     })
        //     .catch((e) => {
        //         console.error('Error: ', e)
        //         setConfiguration(undefined);
        //     })
    }

    const activateConfiguration = (configurationId: string) => {
        const patch: IIntegrationPatch = {
            activeConfigurationId: configurationId,
            state: 'ACTIVE'
        }
        // if (props.integration?.id) {
        //     IntegrationRepository.updateIntegration(props.integration?.id, patch).then(
        //         (response) => {
        //             console.log('updated integration: ', props.integration?.id, response)
        //         }
        //     ).catch(e => console.error(e))
        //     setActiveVersion(t('noActiveConfig'))
        //     console.log('set active config, integrationId', props.integration?.id, 'configurationId', configurationId)
        // }

    }

    function configTable(configs: IPage<IConfiguration>, completed: boolean): ReactElement {
        // tslint-ignore-next-line
        return configs.content.length > 0 ?
            <Box>
                <Table size={"small"}>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell scope="col">{t('table.column.id')}</Table.HeaderCell>
                            {completed && <Table.HeaderCell scope="col">{t('table.column.version')}</Table.HeaderCell>}
                            <Table.HeaderCell scope="col">{t('table.column.comment')}</Table.HeaderCell>
                            <Table.HeaderCell scope="col">{t('table.column.actions')}</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {configs?.content.map((value, i) => {
                            return (
                                <Table.Row key={i}>
                                    <Table.DataCell>{value.id}</Table.DataCell>
                                    {completed && <Table.DataCell>{value.version}</Table.DataCell>}
                                    <Table.DataCell>{value.comment}</Table.DataCell>
                                    <Table.DataCell>
                                        {actionMenu(value)}
                                    </Table.DataCell>
                                </Table.Row>
                            );
                        })}
                    </Table.Body>
                </Table>
                <HStack justify={"center"}>
                    {configs?.totalElements && configs?.totalElements > rowsPerPage &&
                        <Pagination
                            page={page}
                            onPageChange={setPage}
                            count={configs?.totalPages ?? 1}
                            size="small"
                        />
                    }
                </HStack>
            </Box>
            : <BodyShort>{t('table.noElements')}</BodyShort>
    }


    function actionMenu(config: IConfiguration): ReactElement {
        return (
            <div id={props.id + "-action-toggle"} className="min-h-32">
                {config.completed ?
                    <Dropdown>
                        <Button as={Dropdown.Toggle} variant="tertiary-neutral"
                                icon={<MenuElipsisVerticalCircleIcon aria-hidden/>}/>
                        <Dropdown.Menu>
                            <Dropdown.Menu.GroupedList>
                                <Dropdown.Menu.GroupedList.Item onClick={() => {
                                    handleNewOrEditConfigClick(config.id).then(() => history.push("/integration/configuration/edit"))
                                }}>
                                    {t('table.show')}
                                </Dropdown.Menu.GroupedList.Item>
                                <Dropdown.Menu.GroupedList.Item onClick={() => {
                                    handleNewOrEditConfigClick(config.id, config.version).then(() => history.push("/integration/configuration/edit"))
                                }}>
                                    {t('table.basedOn')}
                                </Dropdown.Menu.GroupedList.Item>
                            </Dropdown.Menu.GroupedList>
                            <Dropdown.Menu.Divider/>
                            <Dropdown.Menu.List>
                                <Dropdown.Menu.List.Item onClick={() => {
                                    handleActivateAction(config.id.toString())
                                }}>
                                    {t('table.activate')}
                                </Dropdown.Menu.List.Item>
                            </Dropdown.Menu.List>
                        </Dropdown.Menu>
                    </Dropdown>
                    :
                    <Button variant="tertiary-neutral" icon={<PencilWritingIcon aria-hidden/>} onClick={() => {
                        handleNewOrEditConfigClick(config.id).then(() => history.push("/integration/configuration/edit"))
                    }}>
                    </Button>
                }
            </div>
        );
    }

    const handleActivateAction = (configId: string) => {
        setOpenDialog(true)
        setConfigToActivate(configId)
    }

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
                        getVersionForActiveConfig(configToActivate)
                        activateConfiguration(configToActivate)
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
                        {configTable(completedConfigs ?? {content: []}, true)}
                    </Box>
                    <Box id={'draft-config-table'} padding="4" background={"surface-subtle"} borderRadius="xlarge"
                         style={{height: 'fit-content', maxHeight: '440px', overflow: "auto"}}>
                        <BodyShort>{t('table.drafts')}:</BodyShort>
                        {configTable(draftConfigs ?? {content: []}, false)}
                    </Box>
                </HGrid>
                <HStack gap={"6"}>
                    <Box>
                        <Button
                            id={props.id + "-new-configuration-button"}
                            disabled={!allMetadata}
                            // as={RouterLink}
                            // to='/integration/configuration/new-configuration'
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
                    {!allMetadata &&
                        <Alert size="small" variant="warning">{t('missingDataError')} </Alert>}
                </HStack>
            </VStack>
        </Box>
    );
}

export default IntegrationPanel;