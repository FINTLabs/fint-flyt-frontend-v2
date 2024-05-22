
import {ExpansionCard} from "@navikt/ds-react";
import React from "react";
import ChannelNodeList from "~/routes/integrations/menu/ChannelNodeList";
import StaticValuesNodeList from "~/routes/integrations/menu/StaticValuesNodeList";
import SubFlowNodesList from "~/routes/integrations/menu/SubFlowNodeList";

const SidebarMenu: React.FunctionComponent = () => {
    // const onDragStart = (event, nodeType) => {
    //     event.dataTransfer.setData('application/reactflow', nodeType);
    //     event.dataTransfer.effectAllowed = 'move';
    // };

    return (
        <div className="grid gap-6">
            <ExpansionCard aria-label="Heading-size large demo">
                <ExpansionCard.Header>
                    <ExpansionCard.Title as="h4" size="small">
                        Kanaler
                    </ExpansionCard.Title>
                </ExpansionCard.Header>
                <ExpansionCard.Content>
                    <ChannelNodeList />
                </ExpansionCard.Content>
            </ExpansionCard>
            <ExpansionCard aria-label="Heading-size medium demo">
                <ExpansionCard.Header>
                    <ExpansionCard.Title as="h4" size="small">
                        Statiske
                    </ExpansionCard.Title>
                </ExpansionCard.Header>
                <ExpansionCard.Content>
                    <StaticValuesNodeList />
                </ExpansionCard.Content>
            </ExpansionCard>

            <ExpansionCard aria-label="Heading-size medium demo">
                <ExpansionCard.Header>
                    <ExpansionCard.Title as="h4" size="small">
                        Subflow
                    </ExpansionCard.Title>
                </ExpansionCard.Header>
                <ExpansionCard.Content>
                    <SubFlowNodesList />
                </ExpansionCard.Content>
            </ExpansionCard>

        </div>
    );
};

export default SidebarMenu;