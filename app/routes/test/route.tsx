import {Table} from "@navikt/ds-react";
import {useLoaderData, useNavigate} from "@remix-run/react";
import {LoaderFunctionArgs} from "@remix-run/node";
import {useState} from "react";

export async function loader({
                                 params, request
                             }: LoaderFunctionArgs) {
    const url = new URL(request.url);
    const term = url.searchParams.get("term");
    return term;
}

export default function TestTablePanel() {
    const term = useLoaderData<typeof loader>();

    const navigate = useNavigate();
    const [expandedRow, setExpandedRow] = useState<string | null>(term);

    const handleRowClick = (fnr: string) => {
        navigate(`?term=${fnr}`);
        setExpandedRow(fnr);
    };

    return (
        <Table>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell />
                    <Table.HeaderCell scope="col">Navn</Table.HeaderCell>
                    <Table.HeaderCell scope="col">Fødselsnr.</Table.HeaderCell>
                    <Table.HeaderCell scope="col">Start</Table.HeaderCell>
                </Table.Row>
            </Table.Header>
            <Table.Body>
                {data.map(({ name, fnr, start }, i) => {
                    return (
                        <Table.ExpandableRow
                            // expandOnRowClick
                            onOpenChange={() => handleRowClick(fnr)}
                            key={i + fnr}
                            content={term}
                            open={fnr === expandedRow}
                        >
                            <Table.DataCell scope="row">{name}</Table.DataCell>
                            <Table.DataCell>{fnr}</Table.DataCell>
                            <Table.DataCell>{format(new Date(start))}</Table.DataCell>
                        </Table.ExpandableRow>
                    );
                })}
            </Table.Body>
        </Table>
    );
};

const format = (date: Date) => {
    const y = date.getFullYear();
    const m = (date.getMonth() + 1).toString().padStart(2, "0");
    const d = date.getDate().toString().padStart(2, "0");
    return `${d}.${m}.${y}`;
};

const data = [
    {
        name: "Jakobsen, Markus",
        fnr: "03129265463",
        start: "2021-04-28T19:12:14.358Z",
    },
    {
        name: "Halvorsen, Mari",
        fnr: "16063634134",
        start: "2022-01-29T09:51:19.833Z",
    },
    {
        name: "Christiansen, Mathias",
        fnr: "18124441438",
        start: "2021-06-04T20:57:29.159Z",
    },
    {
        name: "Fredriksen, Leah",
        fnr: "24089080180",
        start: "2021-08-31T15:47:36.293Z",
    },
    {
        name: "Evensen, Jonas",
        fnr: "18106248460",
        start: "2021-07-17T11:13:26.116Z",
    },
];