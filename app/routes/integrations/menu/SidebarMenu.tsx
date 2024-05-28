
import {ExpansionCard} from "@navikt/ds-react";
import React from "react";
import ActionsNodeList from "~/routes/integrations/menu/ActionsNodeList";
import StaticValuesNodeList from "~/routes/integrations/menu/StaticValuesNodeList";
import SubFlowNodesList from "~/routes/integrations/menu/CollectionNodeList";

const SidebarMenu: React.FunctionComponent = () => {
    // const onDragStart = (event, nodeType) => {
    //     event.dataTransfer.setData('application/reactflow', nodeType);
    //     event.dataTransfer.effectAllowed = 'move';
    // };

    return (
        <div className="grid gap-6">
            <ExpansionCard size="small" aria-label="Small-variant">
                <ExpansionCard.Header>
                    <ExpansionCard.Title as="h4" size="small">
                        Actions
                    </ExpansionCard.Title>
                </ExpansionCard.Header>
                <ExpansionCard.Content>
                    <ActionsNodeList />
                </ExpansionCard.Content>
            </ExpansionCard>

            <ExpansionCard size="small" aria-label="Small-variant">
                <ExpansionCard.Header>
                    <ExpansionCard.Title as="h4" size="small">
                        Constants
                    </ExpansionCard.Title>
                </ExpansionCard.Header>
                <ExpansionCard.Content>
                    <StaticValuesNodeList />
                </ExpansionCard.Content>
            </ExpansionCard>

            <ExpansionCard size="small" aria-label="Small-variant">
                <ExpansionCard.Header>
                    <ExpansionCard.Title as="h4" size="small">
                        Collections
                    </ExpansionCard.Title>
                </ExpansionCard.Header>
                <ExpansionCard.Content>
                    <SubFlowNodesList/>
                </ExpansionCard.Content>
            </ExpansionCard>

        </div>
    );
};

export default SidebarMenu;