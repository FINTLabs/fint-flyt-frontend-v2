import { useTranslation } from 'react-i18next';
import {Box, HStack} from "@navikt/ds-react";
import DashboardCard from "~/routes/_index/dashboard-card";
import SupportContent from "~/routes/_index/support-content";
import {Contact} from "~/routes/_index/contact";
import {ICard} from "~/routes/_index/types/card";
import IntegrationApi from "~/api/integration-api";
import {json} from "@remix-run/node";
import {useLoaderData} from "@remix-run/react";
import {IIntegrationStatistics} from "~/routes/integrations/types/integration";

export const loader = async () => {
    try {
        const allIntegrations = IntegrationApi.fetchAllIntegrations();
        const statistics = IntegrationApi.getAllStatistics();
        console.log("data in route:", allIntegrations, statistics)
        return json({ allIntegrations, statistics });
    } catch (error) {
        throw new Error("Error fetching data");
    }
};

export default function Dashboard() {
    const loaderData = useLoaderData<typeof loader>();
    const { allIntegrations, statistics } = loaderData;

    let currentErrors = 0;
    let totalDispatched = 0;

    const { t } = useTranslation("translations", {
        keyPrefix: "pages.dashboard",
    });

    const allActiveIntegrations =
        allIntegrations.filter(integration => integration.state === "ACTIVE");

    const allActiveIntegrationsLength = allActiveIntegrations.length;
    // const { statistics, resetIntegrations, getAllIntegrations } =
    //     useContext(IntegrationContext);

    statistics?.map((stat: IIntegrationStatistics) => {
        currentErrors += stat.currentErrors;
        totalDispatched += stat.dispatchedInstances;
    });

    const cards: ICard[] = [
        {
            value:
                allIntegrations.length === 0
                    ? t("empty")
                    : allIntegrations.length.toString(),
            content:
                allIntegrations.length === 1
                    ? t("oneIntegration")
                    : t("integrations"),
            links: [{ name: t("links.integration"), href: "/integrations/new" }],
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
            links: [{ name: t("links.integrations"), href: "/integrations" }],
        },
        {
            value: totalDispatched === 0 ? t("empty") : totalDispatched.toString(),
            content: totalDispatched === 1 ? t("oneInstance") : t("instances"),
            links: [
                { name: t("links.instances"), href: "/integrations" },
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
}