import React, {ReactElement} from "react";
import {useTranslation} from "react-i18next";
import {Box, Button, Dropdown, Table, VStack} from "@navikt/ds-react";
import {useLoaderData} from "@remix-run/react";
import {MenuElipsisVerticalCircleIcon} from "@navikt/aksel-icons";
import {IValueConverting} from "~/types/ValueConverting";

const ValueConvertingTable: React.FunctionComponent = () => {
    const {t} = useTranslation('translations', {keyPrefix: 'pages.valueConverting'});
    const loaderData = useLoaderData();
    let sortData =  loaderData.valueConvertingPage.content;
    let toggleValue = 'custom';

    function actionMenu(value: IValueConverting): ReactElement {
        return (
            <Dropdown>
                <Button as={Dropdown.Toggle} variant="tertiary-neutral"
                           icon={<MenuElipsisVerticalCircleIcon aria-hidden/>}/>
                <Dropdown.Menu>
                    <Dropdown.Menu.GroupedList>
                        <Dropdown.Menu.GroupedList.Item onClick={() => {
                            // handleNewOrEditConvertingClick(value.id).then(() => history.push('/valueconverting'))
                        }}>
                            {t('button.basedOn')}
                        </Dropdown.Menu.GroupedList.Item>
                    </Dropdown.Menu.GroupedList>
                </Dropdown.Menu>
            </Dropdown>
        );
    }

    return (
        <Box background={"surface-default"} padding="6" borderRadius={"large"} borderWidth="2"
             borderColor={"border-subtle"}>
            <VStack gap={"6"}>
                {/*{showToggle && <HStack style={{alignSelf: "center"}} gap={"3"} align={"center"} wrap={false}>*/}
                {/*    <ToggleGroup defaultValue="custom" onChange={(value) => {*/}
                {/*        setRows([])*/}
                {/*        setToggleValue(value)*/}
                {/*    }*/}
                {/*    } size={"medium"}>*/}
                {/*        <ToggleGroup.Item value="custom">{t('custom')}</ToggleGroup.Item>*/}
                {/*        <ToggleGroup.Item value="flyt">{t('application')}</ToggleGroup.Item>*/}
                {/*        <ToggleGroup.Item value="application">{t('destination')}</ToggleGroup.Item>*/}
                {/*    </ToggleGroup>*/}
                {/*    <HelpText title="Hva er dette?">*/}
                {/*        {t('help.toggle')}*/}
                {/*    </HelpText>*/}
                {/*</HStack>}*/}
                <Box background={'surface-default'} style={{height: '490px', overflowY: "scroll"}}>
                    <Table id={"value-convertings-table"} size={"small"}>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell
                                    scope="col">{toggleValue === 'custom' ? t('column.show') : ''}</Table.HeaderCell>
                                <Table.HeaderCell scope="col">{t('column.id')}</Table.HeaderCell>
                                <Table.HeaderCell scope="col">{t('column.displayName')}</Table.HeaderCell>
                                <Table.HeaderCell scope="col">{t('column.fromType')}</Table.HeaderCell>
                                <Table.HeaderCell scope="col">{t('column.toType')}</Table.HeaderCell>
                                {/*{toggleValue === 'custom' &&*/}
                                {/*    <Table.HeaderCell scope="col">{t('column.fromApplication')}</Table.HeaderCell>}*/}
                                {/*{toggleValue === 'custom' &&*/}
                                {/*    <Table.HeaderCell scope="col">{t('column.toApplication')}</Table.HeaderCell>}*/}
                                {toggleValue === 'custom' &&
                                    <Table.HeaderCell scope="col">{t('column.actions')}</Table.HeaderCell>}
                            </Table.Row>
                        </Table.Header>
                        <Table.Body>
                            {sortData?.map((value, i) => {
                                return (
                                    // <Table.ExpandableRow expandOnRowClick id={"table-row-" + i} key={i}
                                    //                      expansionDisabled={toggleValue !== 'custom'}
                                    //                      content={toggleValue === 'custom' ?
                                    //                          <ValueConvertingPanel id={i}
                                    //                                                existingValueConverting={value}/> : <></>}>
                                    <Table.Row>
                                        <Table.DataCell />
                                        <Table.DataCell scope="row">{value.id}</Table.DataCell>
                                        <Table.DataCell scope="row">{value.displayName}</Table.DataCell>
                                        <Table.DataCell scope="row">{value.fromTypeId}</Table.DataCell>
                                        <Table.DataCell scope="row">{value.toTypeId}</Table.DataCell>
                                        {/*{toggleValue === 'custom' && <Table.DataCell*/}
                                        {/*    scope="row">{getSourceApplicationDisplayNameById(value.fromApplicationId, sourceApplications)}</Table.DataCell>}*/}
                                        {/*{toggleValue === 'custom' && <Table.DataCell*/}
                                        {/*    scope="row">{getDestinationDisplayName(value.toApplicationId)}</Table.DataCell>}*/}
                                        {toggleValue === 'custom' &&
                                            <Table.DataCell scope="row">{actionMenu(value)}</Table.DataCell>}

                                    </Table.Row>
                                );
                            })}
                        </Table.Body>
                    </Table>
                </Box>
                {/*<HStack justify={"center"}>*/}
                {/*    {rows && rows.length > rowsPerPage &&*/}
                {/*        <Pagination*/}
                {/*            page={page}*/}
                {/*            onPageChange={setPage}*/}
                {/*            count={Math.ceil(rows.length / rowsPerPage)}*/}
                {/*            size="small"*/}
                {/*        />}*/}
                {/*</HStack>*/}
            </VStack>
        </Box>
    );
}
export default ValueConvertingTable;
