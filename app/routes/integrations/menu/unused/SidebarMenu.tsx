import {ExpansionCard} from "@navikt/ds-react";
import React from "react";
import SidebarMenuList from "./SidebarMenuList";

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
                    <SidebarMenuList configKey={"channelNodes"}/>
                </ExpansionCard.Content>
            </ExpansionCard>

            <ExpansionCard size="small" aria-label="Small-variant">
                <ExpansionCard.Header>
                    <ExpansionCard.Title as="h4" size="small">
                        Constants
                    </ExpansionCard.Title>
                </ExpansionCard.Header>
                <ExpansionCard.Content>
                    <SidebarMenuList configKey={"staticValueNodes"}/>
                </ExpansionCard.Content>
            </ExpansionCard>

            <ExpansionCard size="small" aria-label="Small-variant">
                <ExpansionCard.Header>
                    <ExpansionCard.Title as="h4" size="small">
                        Collections
                    </ExpansionCard.Title>
                </ExpansionCard.Header>
                <ExpansionCard.Content>
                    <SidebarMenuList configKey={"subFlowNodes"}/>
                </ExpansionCard.Content>
            </ExpansionCard>

            <ExpansionCard size="small" aria-label="Small-variant">
                <ExpansionCard.Header>
                    <ExpansionCard.Title as="h4" size="small">
                        Conversions
                    </ExpansionCard.Title>
                </ExpansionCard.Header>
                <ExpansionCard.Content>
                    <SidebarMenuList configKey={"mathNodes"}/>
                </ExpansionCard.Content>
            </ExpansionCard>

        </div>
    );
};

export default SidebarMenu;