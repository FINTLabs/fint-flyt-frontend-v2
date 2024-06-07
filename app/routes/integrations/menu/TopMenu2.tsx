import React from "react";
import {ExpansionCard, HStack, Box, Dropdown, Button, Link} from "@navikt/ds-react";
import SidebarMenuList from "~/routes/integrations/menu/SidebarMenuList";
import TopMenuList from "./TopMenuList";
import { ChevronDownIcon } from "@navikt/aksel-icons";

const TopMenu2: React.FunctionComponent = () => {

    const ChevronDown = <ChevronDownIcon title="chevron down" fontSize="1.5rem" />

    return (
        <div className="grid gap-6 pb-2 pt-2">
            <Box
                id={"flow-buttons"}
                background={"surface-default"}
                padding="4"
                borderRadius={"small"}
                borderWidth="2"
                borderColor={"border-subtle"}
            >
                <HStack gap="2">
                    <Dropdown>
                        <Button icon={ChevronDown} iconPosition="right" variant="tertiary" as={Dropdown.Toggle}>Actions</Button>

                        <Dropdown.Menu placement="bottom-start">
                            <Dropdown.Menu.GroupedList>
                                <TopMenuList isVerticalStack configKey={"channelNodes"}/>
                            </Dropdown.Menu.GroupedList>
                        </Dropdown.Menu>
                    </Dropdown>

                    <Dropdown>
                        <Button icon={ChevronDown} iconPosition="right" variant="tertiary" as={Dropdown.Toggle}>DataKilde</Button>

                        <Dropdown.Menu placement="bottom-start">
                            <Dropdown.Menu.GroupedList>
                                <TopMenuList isVerticalStack configKey={"channelNodes"}/>
                            </Dropdown.Menu.GroupedList>
                            <Dropdown>
                                <Button icon={ChevronDown} iconPosition="right" variant="tertiary" as={Dropdown.Toggle}>Dropdown within dropdown</Button>
                                <Dropdown.Menu placement="bottom">
                                    <Dropdown.Menu.GroupedList>
                                        <TopMenuList isVerticalStack configKey={"channelNodes"}/>
                                    </Dropdown.Menu.GroupedList>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Dropdown.Menu>
                    </Dropdown>

                    <Dropdown>
                        <Button icon={ChevronDown} iconPosition="right" variant="tertiary" as={Dropdown.Toggle}>Statisk</Button>

                        <Dropdown.Menu placement="bottom-start">
                            <Dropdown.Menu.GroupedList>
                                <TopMenuList isVerticalStack configKey={"channelNodes"}/>
                            </Dropdown.Menu.GroupedList>

                            <ExpansionCard className="pt-2 border-0" size="small" aria-label="Small-variant">
                                <ExpansionCard.Header>
                                    <ExpansionCard.Title as="h4" size="small">
                                        Kodeverk Fylkesråd
                                    </ExpansionCard.Title>
                                </ExpansionCard.Header>
                                <ExpansionCard.Content>
                                    <SidebarMenuList isVerticalStack configKey={"channelNodes"}/>
                                </ExpansionCard.Content>
                            </ExpansionCard>
                            <ExpansionCard className="pt-2 border-0" size="small" aria-label="Small-variant">
                                <ExpansionCard.Header style={{ border: '0px'}}>
                                    <ExpansionCard.Title as="h4" size="small">
                                        Without Border
                                    </ExpansionCard.Title>
                                </ExpansionCard.Header>
                                <ExpansionCard.Content style={{ border: '0px'}}>
                                    <SidebarMenuList isVerticalStack configKey={"channelNodes"}/>
                                </ExpansionCard.Content>
                            </ExpansionCard>
                        </Dropdown.Menu>
                    </Dropdown>
                </HStack>
            </Box>
        </div>
    );
};

export default TopMenu2;