import {Box, HStack, Loader, Pagination, SortState, Table} from "@navikt/ds-react";
import {useTranslation} from "react-i18next";
import React, {useState} from "react";
import IntegrationPanel from "~/routes/integrations/integrations-panel";
import {getDestinationDisplayName, getSourceApplicationDisplayNameById, getStateDisplayName} from "~/util/table-util";

import {useLoaderData, useNavigate} from "@remix-run/react";


const IntegrationTable: React.FunctionComponent = () => {
    const {t} = useTranslation('translations', {keyPrefix: 'pages.integrations'})
    const loaderData = useLoaderData();
    const navigate = useNavigate();

    const sourceApplications = loaderData.sourceApplications;
    const integrations = loaderData.integrationPage;
    const selectedId = loaderData.selectedId;
    const [sort, setSort] = useState<SortState | undefined>({orderBy: 'state', direction: "ascending"});

    const handleRowClick = (selecteId: string) => {
        //todo: hide by storing in state
        navigate(`?id=${selecteId}`);
    };

    const handleSort = (sortKey) => {
        setSort(
            sort && sortKey === sort.orderBy && sort.direction === "descending"
                ? undefined
                : {
                    orderBy: sortKey,
                    direction:
                        sort && sortKey === sort.orderBy && sort.direction === "ascending"
                            ? "descending"
                            : "ascending",
                },
        );
    };

    const comparator = (a: { [x: string]: number; }, b: { [x: string]: number; }, orderBy: string) => {
        if (b[orderBy] < a[orderBy] || b[orderBy] === undefined) {
            return -1;
        }
        if (b[orderBy] > a[orderBy]) {
            return 1;
        }
        return 0;
    };

    const sortedData = integrations?.content?.slice().sort((a, b) => {
        if (sort) {
            return sort.direction === "ascending"
                ? comparator(b, a, sort.orderBy)
                : comparator(a, b, sort.orderBy);
        }
        return 1;
    });

    function setPage() {
        //todo
    }

    return integrations ? (
        <Box>
            <Box background={'surface-default'} style={{height: '70vh', overflowY: "scroll"}}>
                <Table
                    sort={sort}
                    onSortChange={(sortKey) => handleSort(sortKey ? sortKey : 'id')}
                    id={"integration-table"}
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
                        {sortedData?.map((value, i) => {
                            return (
                                <Table.ExpandableRow
                                    onOpenChange={() => handleRowClick(value.id)}
                                    open={value.id.toString() === selectedId}
                                    expandOnRowClick
                                    key={i}
                                    content={
                                        <IntegrationPanel
                                            id={'panel-' + i}
                                            //todo: ADD ERROR CHECKING?!
                                            // onError={(error) => {
                                            //     // props.onError(error)
                                            // }}
                                            integration={value}
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
                {integrations?.totalElements && integrations?.totalElements > Number(1) &&
                    <Pagination
                        page={1} //todo
                        onPageChange={setPage}
                        count={integrations?.totalPages ?? 1}
                        size="small"
                    />
                }
            </HStack>
        </Box>
    ) : <Loader size={"xlarge"}/>;
}

export default IntegrationTable;