import React from "react";
import {ExpansionCard, HStack, Box, Dropdown, Button} from "@navikt/ds-react";
import SidebarMenuList from "~/routes/integrations/menu/SidebarMenuList";

const TopMenu1: React.FunctionComponent = () => {

    return (
        <div className="grid gap-6 pt-2">
            <Box
                id={"flow-buttons"}
                background={"surface-default"}
                padding="4"
                borderRadius={"small"}
                borderWidth="2"
                borderColor={"border-subtle"}
            >
                <HStack gap="2">
                    <ExpansionCard size="small" aria-label="Small-variant">
                        <ExpansionCard.Header>
                            <ExpansionCard.Title as="h4" size="small">
                                Actions
                            </ExpansionCard.Title>
                        </ExpansionCard.Header>
                        <ExpansionCard.Content>
                            <SidebarMenuList isVerticalStack configKey={"channelNodes"}/>
                        </ExpansionCard.Content>
                    </ExpansionCard>
                    
                    <ExpansionCard size="small" aria-label="Small-variant">
                        <ExpansionCard.Header>
                            <ExpansionCard.Title as="h4" size="small">
                                Constants
                            </ExpansionCard.Title>
                        </ExpansionCard.Header>
                        <ExpansionCard.Content>
                            <SidebarMenuList isVerticalStack configKey={"staticValueNodes"}/>
                        </ExpansionCard.Content>
                    </ExpansionCard>
                </HStack>
            </Box>
        </div>
    );
};

export default TopMenu1;