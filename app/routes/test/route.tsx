import {Button, Table, VStack} from "@navikt/ds-react";
import {isRouteErrorResponse, useLoaderData, useNavigate, useRouteError} from "@remix-run/react";
import {LoaderFunctionArgs} from "@remix-run/node";
import {useState} from "react";
import {useTranslation} from "react-i18next";


export default function TestTablePanel() {

    return (
       <div>Hello world</div>
    );
};


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