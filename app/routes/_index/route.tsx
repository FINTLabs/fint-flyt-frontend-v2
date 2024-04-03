// import React, { useContext, useEffect } from "react";
import {ICard} from "~/types/dashboard/card";
// import {IIntegration} from "~/types/integrations/integrations";
// import { IntegrationContext } from "../../context/IntegrationContext";
// import DashboardCard from "../organisms/DashboardCard";
// import { ICard } from "../../features/dashboard/Card";
// import { useTranslation } from "react-i18next";
// import {
//     IIntegration,
//     IIntegrationStatistics,locale
// } from "../../features/integrations/types/Integration";
// import PageTemplate from "../templates/PageTemplate";
// import { RouteComponent } from "../../routes/Route";
// import { Box, HStack } from "@navikt/ds-react";
// import { Contact } from "../atoms/Contact";
// import SupportContent from "../molecules/SupportContent";
// import { useGetAllIntegrations } from "../../hooks/integrations/useGetIntegrations";
import { useTranslation } from 'react-i18next';
import {Box, HStack} from "@navikt/ds-react";
import DashboardCard from "~/routes/_index/dashboard-card";
import allIntegrations from "./mock-allIntegrations.json"
import SupportContent from "~/routes/_index/support-content";
import {Contact} from "~/routes/_index/contact";

// const Dashboard: RouteComponent = () => {
const Dashboard = () => {
    const { t } = useTranslation("translations", {
        keyPrefix: "pages.dashboard",
    });

    // const { allAvailableIntegrations } = useGetAllIntegrations();
    // const allAvailableIntegrations = require('../../data-for-testing/allIntegrations.json');
    // const allIntegrations = allAvailableIntegrations?.data;

    // const allIntegrations = allAvailableIntegrations?.data;
    // const allActiveIntegrations =
    //     allIntegrations?.filter(
    //         (integrasjoner: IIntegration | undefined) =>
    //             integrasjoner?.state === "ACTIVE"
    //     ) || [];
    const allActiveIntegrations =
        allIntegrations.filter(integration => integration.state === "ACTIVE");

    const allActiveIntegrationsLength = allActiveIntegrations.length;
    // const { statistics, resetIntegrations, getAllIntegrations } =
    //     useContext(IntegrationContext);

    let currentErrors = 0;
    let totalDispatched = 0;

    // statistics?.map((stat: IIntegrationStatistics) => {
    //     currentErrors += stat.currentErrors;
    //     totalDispatched += stat.dispatchedInstances;
    // });

    // useEffect(() => {
    //     getAllIntegrations();
    //     resetIntegrations();
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, []);

    const cards: ICard[] = [
        {
            value:
                allIntegrations === undefined || allIntegrations.length === 0
                    ? t("empty")
                    : allIntegrations.length.toString(),
            content:
                allIntegrations !== undefined && allIntegrations.length === 1
                    ? t("oneIntegration")
                    : t("integrations"),
            links: [{ name: t("links.integrations"), href: "/integrations/new" }],
        },
        {
            value:
                allActiveIntegrationsLength === 0
                    ? t("empty")
                    : allActiveIntegrationsLength.toString(),
            content:
                allActiveIntegrationsLength === 1
                    ? t("oneActiveIntegration")
                    : t("activeIntegrations"),
            links: [{ name: t("links.integrations"), href: "/integrations/list" }],
        },
        {
            value: totalDispatched === 0 ? t("empty") : totalDispatched.toString(),
            content: totalDispatched === 1 ? t("oneInstance") : t("instances"),
            links: [
                { name: t("links.instances"), href: "/integrations/types/list" },
            ],
        },
        {
            value: currentErrors === 0 ? t("empty") : currentErrors.toString(),
            content: currentErrors === 1 ? t("oneError") : t("errors"),
            links: [
                { name: t("links.instances"), href: "/integrations/types/list" },
            ],
        },
    ];

    return (
        // <PageTemplate id={"dashboard"} keyPrefix={"pages.dashboard"} customHeading>
        <>
            <HStack gap={"6"} wrap={false}>
                {cards.map((card: ICard, index) => {
                    return (
                        <Box
                            key={index}
                            style={{
                                width: `calc(100% / ${cards.length})`,
                                minWidth: "150px",
                            }}
                            id={`dashboard-card-` + index}
                            // value={card.value}
                            // content={card.content}
                            // padding={"0"}
                            // links={card.links}
                        >
                            <DashboardCard
                                key={index}
                                id={`dashboard-card-` + index}
                                value={card.value}
                                content={card.content}
                                links={card.links}
                            />
                        </Box>
                    );
                })}
            </HStack>
            <SupportContent />
            <Contact />

        </>
    );
};
export default Dashboard;
