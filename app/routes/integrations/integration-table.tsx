import {Box, Heading, HStack, Loader, Pagination, Table} from "@navikt/ds-react";
import {useTranslation} from "react-i18next";
import {IIntegration} from "~/api/types/integration";
import React from "react";
import {sort} from "semver";
import IntegrationPanel from "~/routes/integrations/integrations-panel";
import {getDestinationDisplayName, getSourceApplicationDisplayNameById, getStateDisplayName} from "~/util/table-util";
import {ISourceApplication} from "~/api/types/source-application";
import {IPage} from "~/api/types/table-types";

interface IntegrationTableProps {
    data: IPage<IIntegration>[];
    applications: ISourceApplication[];
    allMetadata: any; //TODO: Add type
}

const IntegrationTable: React.FunctionComponent<IntegrationTableProps> = (props) => {
    const {t} = useTranslation('translations', {keyPrefix: 'pages.integrations'})
    const integrations = props.data;
    const sourceApplications = props.applications;
    const allMetadata = props.allMetadata;

    return integrations ? (
        <Box>
            <Box background={'surface-default'} style={{height: '70vh', overflowY: "scroll"}}>
                <Table
                    // sort={sort}
                    // onSortChange={(sortKey) => handleSort(sortKey ? sortKey : 'id')}
                    // id={props.id}
                >
                    <Table.Header>
                        <Table.Row>
                            <Table.ColumnHeader/>
                            <Table.ColumnHeader sortKey="id" sortable>{t('table.column.id')}</Table.ColumnHeader>
                            <Table.ColumnHeader>{t('table.column.sourceApplicationId')}</Table.ColumnHeader>
                            <Table.ColumnHeader sortKey="sourceApplicationIntegrationId" sortable
                            >{t('table.column.sourceApplicationIntegrationId')}</Table.ColumnHeader>
                            <Table.ColumnHeader
                            >{t('table.column.sourceApplicationIntegrationIdDisplayName')}</Table.ColumnHeader>
                            <Table.ColumnHeader>{t('table.column.destination')}</Table.ColumnHeader>
                            <Table.ColumnHeader sortKey="state" sortable>{t('table.column.state')}</Table.ColumnHeader>
                            <Table.ColumnHeader>{t('table.column.dispatched')}</Table.ColumnHeader>
                            <Table.ColumnHeader>{t('table.column.errors')}</Table.ColumnHeader>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {integrations?.content?.map((value, i) => {
                            return (
                                <Table.ExpandableRow expandOnRowClick key={i} content={
                                    <IntegrationPanel
                                        // id={'panel-' + i}
                                        // onError={(error) => {
                                        //     props.onError(error)
                                        // }}
                                        data={value}
                                        allMetadata={allMetadata}
                                    />}
                                >
                                    <Table.DataCell>{value.id}</Table.DataCell>
                                    <Table.DataCell
                                        scope="row">{getSourceApplicationDisplayNameById(Number(value.sourceApplicationId), sourceApplications)}</Table.DataCell>
                                    <Table.DataCell>{value.sourceApplicationIntegrationId}</Table.DataCell>
                                    <Table.DataCell>{value.displayName}</Table.DataCell>
                                    <Table.DataCell>{getDestinationDisplayName(value.destination ?? '')}</Table.DataCell>
                                    <Table.DataCell>
                                        {getStateDisplayName(value.state ?? '')}
                                    </Table.DataCell>
                                    <Table.DataCell>{value.dispatched}</Table.DataCell>
                                    <Table.DataCell>{value.errors}</Table.DataCell>
                                </Table.ExpandableRow>
                            );
                        })}
                    </Table.Body>
                </Table>
            </Box>
            <HStack justify={"center"} style={{marginTop: '16px'}}>
                {/*{integrations?.totalElements &&*/}
                {/*    <CustomSelect*/}
                {/*        options={selectOptions}*/}
                {/*        onChange={setRowCount}*/}
                {/*        label={t('numberPerPage')}*/}
                {/*        hideLabel={true}*/}
                {/*        default={rowCount}*/}
                {/*    />}*/}
                {/*{integrations?.totalElements && integrations?.totalElements > Number(rowCount) &&*/}
                {/*    <Pagination*/}
                {/*        page={page}*/}
                {/*        onPageChange={setPage}*/}
                {/*        count={integrations?.totalPages ?? 1}*/}
                {/*        size="small"*/}
                {/*    />*/}
                {/*}*/}
            </HStack>
        </Box>
    ) : <Loader size={"xlarge"}/>;
}

export default IntegrationTable;