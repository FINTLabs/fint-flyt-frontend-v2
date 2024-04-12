import {Button, Table, VStack} from "@navikt/ds-react";
import {isRouteErrorResponse, useLoaderData, useNavigate, useRouteError} from "@remix-run/react";
import {LoaderFunctionArgs} from "@remix-run/node";
import {useState} from "react";
import {useTranslation} from "react-i18next";

export async function loader({
                                 params, request
                             }: LoaderFunctionArgs) {
    const url = new URL(request.url);
    const term = url.searchParams.get("term");
    // return term;
    throw new Error("Error fetching data");
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
export function ErrorBoundary() {
    const { t } = useTranslation("translations", {
        keyPrefix: "pages.forbidden",
    });
    const error = useRouteError();

    if (isRouteErrorResponse(error)) {
        return (
            <div>
                <h1>
                    {error.status} {error.statusText}
                </h1>
                <p>{error.data}</p>
            </div>
        );
    } else if (error instanceof Error) {
        return (
            <VStack align={"center"} justify={"center"}>
                <h1>Error 401</h1>
                <p>{t('status')}</p>
                <Button >
                    {t('return')}
                </Button>
            </VStack>
        );
    } else {
        return <h1>Unknown Error</h1>;
    }
}