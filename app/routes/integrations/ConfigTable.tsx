import React, {useState} from "react";
import {Box, HStack, Pagination, Table} from "@navikt/ds-react";
import {IConfiguration} from "~/types/Configuration";
import {IPage} from "~/types/TableTypes";
import {useTranslation} from "react-i18next";



interface ConfigTableProps {
    configs: IPage<IConfiguration> | undefined;
    completed: boolean;
}

const ConfigTable: React.FunctionComponent<ConfigTableProps> = (props) => {
    const {t} = useTranslation('translations', {keyPrefix: 'pages.integrations'})

    const completed = props.completed;
    const [page, setPage] = useState(1);
    const rowsPerPage = 30;
    const {configs} = props;

    return (
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
                                    {/*{actionMenu(value)}*/}
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
        // : <BodyShort>{t('table.noElements')}</BodyShort>
    );
}


export default ConfigTable;