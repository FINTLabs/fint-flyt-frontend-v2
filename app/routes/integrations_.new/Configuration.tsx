import React from 'react';
// import {useHistory} from 'react-router-dom';
import {IIntegration} from "~/types/Integration";
import {IAlertMessage} from "~/types/TableTypes";
// import {SourceApplicationContext} from "../../context/SourceApplicationContext";
// import OutgoingDataComponent from "../../features/configuration/components/OutgoingDataComponent";
// import {Controller, FormProvider, useForm} from "react-hook-form";
// import {HTML5Backend} from "react-dnd-html5-backend";
// import {DndProvider} from "react-dnd";
// import IncomingDataComponent from "../../features/configuration/components/IncomingDataComponent";
// import {Checkbox, FormControlLabel, Snackbar} from "@mui/material";
// import {IntegrationContext} from "../../context/IntegrationContext";
import {useTranslation} from "react-i18next";
// import CheckboxValueComponent from "../../features/configuration/components/common/CheckboxValueComponent";
// import {IConfiguration, IConfigurationPatch, IObjectMapping} from "../../features/configuration/types/Configuration";
// import {IIntegrationPatch, IntegrationState} from "../../features/integration/types/Integration";
// import {ConfigurationContext} from "../../context/ConfigurationContext";
// import StringValueComponent from "../../features/configuration/components/mapping/value/string/StringValueComponent";
// import {IAlertContent} from "../../features/configuration/types/AlertContent";
// import {
//     activeAlert,
//     completedAlert,
//     defaultAlert,
//     errorAlert,
//     savedAlert
// } from "../../features/configuration/defaults/DefaultValues";
// import ConfigurationRepository from "../../api/ConfigurationRepository";
// import {pruneObjectMapping} from "../../util/mapping/helpers/pruning";
// import EditingProvider, {EditingContext} from "../../context/EditingContext";
// import {RouteComponent} from "../../routes/Route";
// import {isEmpty} from "lodash";
// import PageTemplate from "../templates/PageTemplate";
import {Button, Heading, HStack, VStack} from "@navikt/ds-react"
// import {AxiosResponse} from "axios";
// import IntegrationRepository from "../../api/IntegrationRepository";

type Props = {
    id: string
    integration: IIntegration,
    onError: (error: IAlertMessage | undefined) => void;
}

// const Configuration: RouteComponent = () => {
const Configuration: React.FunctionComponent<Props> = (props: Props) => {
    // const {
    //     getInstanceElementMetadata,
    //     setInstanceElementMetadata
    // } = useContext(SourceApplicationContext)
    // const {
    //     completed,
    //     setCompleted,
    //     resetConfigurationContext
    // } = useContext(ConfigurationContext)
    // const {setEditCollectionAbsoluteKey} = useContext(EditingContext)
    const {t} = useTranslation('translations', {keyPrefix: 'pages.configuration'});
    // const history = useHistory();
    // const {
    //     selectedMetadata,
    //     setSelectedMetadata,
    //     existingIntegration,
    //     configuration,
    //     setConfiguration,
    //     resetIntegrationContext
    // } = useContext(IntegrationContext)
    // const [active, setActive] = useState<boolean>(existingIntegration?.activeConfigurationId === configuration?.id)
    // const [showAlert, setShowAlert] = React.useState<boolean>(false)
    // const [alertContent, setAlertContent] = React.useState<IAlertContent>(defaultAlert)
    // const [collectionReferencesInEditContext, setCollectionReferencesInEditContext] = useState<string[]>([])

    // if (!existingIntegration) {
    //     history.push('/')
    // }
    // const methods = useForm<IConfiguration>({
    //     mode: 'onChange',
    //     defaultValues: {
    //         integrationId: Number(existingIntegration?.id),
    //         integrationMetadataId: Number(selectedMetadata?.id),
    //         completed: configuration ? configuration.completed : false,
    //         comment: configuration?.comment,
    //     }
    // });
    //
    // const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
    //     if (reason === 'clickaway') {
    //         return;
    //     }
    //     setShowAlert(false);
    //     setAlertContent(defaultAlert)
    // };
    //
    // useEffect(() => {
    //     if (configuration) {
    //         methods.setValue('mapping', configuration?.mapping, {shouldDirty: true, shouldTouch: true});
    //     }
    //     if (configuration?.completed) {
    //         setCompleted(true)
    //     }
    //     if (configuration?.integrationMetadataId
    //     ) {
    //         getInstanceElementMetadata(configuration.integrationMetadataId.toString())
    //     }
    //     return () => {
    //         resetIntegrationContext()
    //         resetConfigurationContext()
    //         setEditCollectionAbsoluteKey("")
    //         setSelectedMetadata(undefined)
    //         setInstanceElementMetadata(undefined)
    //     }
    // }, [])
    //
    //
    // const onSubmit = (data: any) => { // eslint-disable-line
    //     if (!isEmpty(methods.formState.errors)) {
    //         setAlertContent(errorAlert)
    //         setShowAlert(true);
    //     }
    //     data.mapping = pruneObjectMapping(data.mapping as IObjectMapping)
    //     if (configuration?.id) {
    //         ConfigurationRepository.updateConfiguration(configuration.id.toString(), data as IConfigurationPatch)
    //             .then(response => {
    //                 console.log('updated', response)
    //                 if (!response.data.completed) {
    //                     setAlertContent(savedAlert)
    //                     setShowAlert(true);
    //                 }
    //                 if (response.data.completed && !active) {
    //                     if (response.data.completed) {
    //                         setAlertContent(completedAlert)
    //                         setShowAlert(true);
    //                         setCompleted(true)
    //                     }
    //                 }
    //                 if (active && existingIntegration && existingIntegration.id) {
    //                     activateConfiguration(existingIntegration.id, response.data)
    //                 }
    //             }).catch(function (error) {
    //                 if (error.response?.status) {
    //                     setAlertContent({
    //                         severity: 'error',
    //                         message: t('saveError') + (error.response.data.message ? error.response.data.message : t('genericError')) + ', status: ' + error.response.status
    //                     })
    //                     setShowAlert(true);
    //                 }
    //             }
    //         )
    //     } else {
    //         ConfigurationRepository.createConfiguration(data as IConfiguration)
    //             .then(response => {
    //                 console.log('created', response)
    //                 setConfiguration(response.data)
    //                 if (!response.data.completed) {
    //                     setAlertContent(savedAlert)
    //                     setShowAlert(true);
    //                 }
    //                 if (response.data.completed && !active) {
    //                     setAlertContent(completedAlert)
    //                     setShowAlert(true);
    //                     setCompleted(true)
    //                 }
    //                 if (active && existingIntegration && existingIntegration.id) {
    //                     activateConfiguration(existingIntegration.id, response.data)
    //                 }
    //             }).catch(function (error) {
    //             if (error.response?.status) {
    //                 setAlertContent({
    //                     severity: 'error',
    //                     message: t('saveError') + (error.response.data.message ? error.response.data.message : t('genericError')) + ', status: ' + error.response.status
    //                 })
    //                 setShowAlert(true);
    //             }
    //         })
    //     }
    // };
    //
    // function activateConfiguration(integrationId: string, configuration: IConfiguration) {
    //     const patch: IIntegrationPatch = {
    //         activeConfigurationId: configuration.id.toString(),
    //         state: IntegrationState.ACTIVE,
    //         destination: existingIntegration?.destination
    //     }
    //     IntegrationRepository.updateIntegration(integrationId, patch)
    //         .then((response: AxiosResponse) => {
    //             setAlertContent(activeAlert)
    //             setShowAlert(true);
    //             setCompleted(true)
    //             console.log('set active configuration: ', response.data.activeConfigurationId)
    //         }).catch((e: Error) => {
    //         console.log('could not set active configuration', e)
    //     })
    // }

    return (
        // <PageTemplate id={'configuration'} keyPrefix={'pages.configuration'} wide customHeading>
        //     <DndProvider backend={HTML5Backend}>
        //         <EditingProvider>
        //             <FormProvider {...methods}>
                        <form id="react-hook-form"
                              // onSubmit={methods.handleSubmit(onSubmit)}
                        >
                            <VStack gap={"3"}>
                                <Heading
                                    size={"small"}>{t('header')}
                                    {/*{existingIntegration?.sourceApplicationIntegrationId} - {existingIntegration?.displayName}*/}
                                </Heading>
                                <HStack gap={"8"} wrap={false}>
                                    {/*<IncomingDataComponent*/}
                                    {/*    referencesForCollectionsToShow={collectionReferencesInEditContext}*/}
                                    {/*/>*/}
                                    {/*<OutgoingDataComponent*/}
                                    {/*    onCollectionReferencesInEditContextChange={*/}
                                    {/*        (collectionReferences: string[]) => {*/}
                                    {/*            setCollectionReferencesInEditContext(collectionReferences)*/}
                                    {/*        }}*/}
                                    {/*/>*/}
                                </HStack>
                                <VStack gap={"3"}>
                                    <HStack gap={"6"}>
                                        {/*<Controller*/}
                                        {/*    name={"comment".toString()}*/}
                                        {/*    rules={{*/}
                                        {/*        required: {*/}
                                        {/*            value: !!methods.watch("completed"),*/}
                                        {/*            message: t('reqFieldMsg')*/}
                                        {/*        }*/}
                                        {/*    }}*/}
                                        {/*    render={({field, fieldState}) =>*/}
                                        {/*        <StringValueComponent*/}
                                        {/*            {...field}*/}
                                        {/*            disabled={completed}*/}
                                        {/*            displayName={t('comment')}*/}
                                        {/*            multiline*/}
                                        {/*            fieldState={fieldState}*/}
                                        {/*        />*/}
                                        {/*    }*/}
                                        {/*/>*/}
                                        {/*<Controller*/}
                                        {/*    name={"completed"}*/}
                                        {/*    render={({field}) =>*/}
                                        {/*        <CheckboxValueComponent*/}
                                        {/*            {...field}*/}
                                        {/*            displayName={t('label.checkLabel')}*/}
                                        {/*        />*/}
                                        {/*    }*/}
                                        {/*/>*/}
                                        {/*{methods.watch("completed") && <FormControlLabel*/}
                                        {/*    control={*/}
                                        {/*        <Checkbox*/}
                                        {/*            id="form-active"*/}
                                        {/*            checked={active}*/}
                                        {/*            disabled={completed}*/}
                                        {/*            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {*/}
                                        {/*                setActive(event.target.checked)*/}
                                        {/*            }}*/}
                                        {/*            inputProps={{'aria-label': 'active-checkbox'}}/>}*/}
                                        {/*    label={t('label.activeLabel') as string}*/}
                                        {/*/>}*/}
                                    </HStack>
                                    <HStack align={"center"} gap={"6"}>
                                        <Button id="form-submit-btn"
                                                size={"small"}
                                                // disabled={configuration?.completed} type="submit"
                                                // onClick={onSubmit}
                                        >
                                            {/*{!methods.watch("completed") ? t("button.submit") : t("button.complete")}*/}
                                        </Button>
                                        <Button id="form-cancel-btn"
                                                size={"small"}
                                                onClick={() => {
                                                    // history.push('/')
                                                }}
                                        >{t("button.cancel")}
                                        </Button>
                                    </HStack>
                                </VStack>


                            </VStack>
                            {/*<Snackbar id="integration-form-snackbar-saved" autoHideDuration={4000} open={showAlert}*/}
                            {/*          anchorOrigin={{vertical: 'bottom', horizontal: 'center'}}*/}
                            {/*          onClose={handleClose}>*/}
                            {/*    <Alert variant={alertContent.severity} closeButton onClose={() => {*/}
                            {/*        setShowAlert(false);*/}
                            {/*        setAlertContent(defaultAlert)*/}
                            {/*    }}>*/}
                            {/*        {alertContent.message}*/}
                            {/*    </Alert>*/}
                            {/*</Snackbar>*/}
                        </form>
                    // </FormProvider>
                // </EditingProvider>

            // </DndProvider>
        // </PageTemplate>
    );
}

export default Configuration;