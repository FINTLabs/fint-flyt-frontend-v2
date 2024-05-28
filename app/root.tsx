import {
    Links,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
} from "@remix-run/react";
import 'tailwindcss/tailwind.css';
import "@navikt/ds-css/dist/index.css";
import '../app/util/locale/i18n';
import {Box, Page, VStack} from "@navikt/ds-react";
import {Appbar} from "~/components/Appbar";

export function Layout() {
    return (
        <html lang="en">
        <head>
            <meta charSet="utf-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <title>FINT Flyt v2</title>
            <Meta/>
            <Links/>
            <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet" /> 
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
        </head>
        <body>
        <Page
            footer={
                <Box style={{ backgroundColor: "#1F4F59" }} padding="8" as="footer">
                    <Page.Block gutters width="lg">
                        Footer
                    </Page.Block>
                </Box>
            }
            style={{backgroundColor: "#EBF4F5"}}
        >
            <Box style={{ backgroundColor: "#1F4F59" }}  as="header">
                <Page.Block >
                    <Appbar />
                </Page.Block>
            </Box>

            <Box
                paddingInline={"32"}
                paddingBlock="8"
                id={"-content"}
                style={{backgroundColor: "#EBF4F5", minWidth: 'fit-content'}}
                as="main"
            >
                <Page.Block  >
                    <VStack id={"content-stack"} gap={"6"}>
                        <Outlet />
                    </VStack>
                </Page.Block>
            </Box>
        </Page>
        <ScrollRestoration />
        <Scripts />
        </body>
        </html>
    );
}

export default function App() {
    return <Outlet />;
}
