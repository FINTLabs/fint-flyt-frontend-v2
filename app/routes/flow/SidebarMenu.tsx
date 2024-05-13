
import { BodyLong, ExpansionCard, Label, Link } from "@navikt/ds-react";
import React from "react";
import ChannelNodeList from "~/routes/flow/ChannelNodeList";

export default () => {
    const onDragStart = (event, nodeType) => {
        event.dataTransfer.setData('application/reactflow', nodeType);
        event.dataTransfer.effectAllowed = 'move';
    };

    return (
        <div className="grid gap-6">
            <ExpansionCard aria-label="Heading-size large demo">
                <ExpansionCard.Header>
                    <ExpansionCard.Title as="h4" size="xsmall">
                        First Menu
                    </ExpansionCard.Title>
                </ExpansionCard.Header>
                <ExpansionCard.Content>
                    <ChannelNodeList />
                </ExpansionCard.Content>
            </ExpansionCard>
            <ExpansionCard aria-label="Heading-size medium demo">
                <ExpansionCard.Header>
                    <ExpansionCard.Title as="h4" size="small">
                        Second Menu
                    </ExpansionCard.Title>
                </ExpansionCard.Header>
                <ExpansionCard.Content>
                    <ChannelNodeList />
                </ExpansionCard.Content>
            </ExpansionCard>

        </div>
    );
};