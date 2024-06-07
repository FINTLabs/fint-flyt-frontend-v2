import React from "react";
import {ExpansionCard, HStack, Box, Dropdown, Button, Link} from "@navikt/ds-react";
import SidebarMenuList from "~/routes/integrations/menu/SidebarMenuList";
import TopMenuList
 from "./TopMenuList";
import { ChevronDownIcon } from "@navikt/aksel-icons";
const TopMenu3: React.FunctionComponent = () => {

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
                        <Link as={Dropdown.Toggle}>Actions
                            <ChevronDownIcon title="chevron down" fontSize="1.5rem" />
                        </Link>

                        <Dropdown.Menu placement="bottom-start">
                            <Dropdown.Menu.GroupedList>
                                <TopMenuList isVerticalStack configKey={"channelNodes"}/>
                            </Dropdown.Menu.GroupedList>
                            </Dropdown.Menu>
                    </Dropdown>
                </HStack>
            </Box>
        </div>
    );
};

export default TopMenu3;