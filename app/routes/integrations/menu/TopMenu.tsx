import React from 'react';
import { ExpansionCard, HStack, Box, Dropdown, Button, Link, Search } from '@navikt/ds-react';
import TopMenuList from './TopMenuList';
import { ChevronDownIcon } from '@navikt/aksel-icons';

const TopMenu: React.FunctionComponent = () => {
    const ChevronDown = <ChevronDownIcon title="chevron down" fontSize="1.5rem" />;

    const CustomDropDown = ({ title, configKey }: { title: string; configKey: string }) => {
        return (
            <Dropdown>
                <Button icon={ChevronDown} iconPosition="right" variant="tertiary" as={Dropdown.Toggle}>
                    {title}
                </Button>
                <Dropdown.Menu placement="bottom-start">
                    <Dropdown.Menu.List>
                        <TopMenuList configKey={configKey} />
                    </Dropdown.Menu.List>
                </Dropdown.Menu>
            </Dropdown>
        );
    };

    return (
        <div className="grid gap-6 pb-2 pt-2">
            <Box id={'flow-buttons'} background={'surface-default'} padding="4" borderRadius={'small'} borderWidth="2" borderColor={'border-subtle'}>
                <HStack gap="2">
                    <CustomDropDown title="Actions" configKey="channelNodes" />
                    <CustomDropDown title="Constants" configKey="staticValueNodes" />
                    <CustomDropDown title="Collections" configKey="subFlowNodes" />
                    <CustomDropDown title="Conversions" configKey="mathNodes" />
                    <CustomDropDown title="Text Converstions" configKey="textConversionNodes" />
                    {/* <Dropdown>
                        <Button icon={ChevronDown} iconPosition="right" variant="tertiary" as={Dropdown.Toggle}>Example</Button>
                        <Dropdown.Menu placement="bottom-start">
                                <Dropdown.Menu.GroupedList>
                                    <TopMenuList configKey={"channelNodes"}/>
                                </Dropdown.Menu.GroupedList>
                                
                                <ExpansionCard className="pt-2 border-0" size="small" aria-label="Small-variant">
                                    <ExpansionCard.Header style={{ border: '0px'}}>
                                        <ExpansionCard.Title as="h4" size="small">
                                            Without Border
                                        </ExpansionCard.Title>
                                    </ExpansionCard.Header>
                                    <ExpansionCard.Content style={{ border: '0px'}}>
                                        <Dropdown.Menu.GroupedList>
                                            <TopMenuList configKey={"mathNodes"}/>
                                        </Dropdown.Menu.GroupedList>
                                    </ExpansionCard.Content>
                                </ExpansionCard>
                                <Dropdown.Menu.Divider />

                                <Dropdown.Menu.List>
                                    <Dropdown.Menu.List.Item>
                                        <Search label="Søk alle NAV sine sider" variant="secondary" />
                                    </Dropdown.Menu.List.Item>
                                </Dropdown.Menu.List>
                        </Dropdown.Menu>
                    </Dropdown> */}
                </HStack>
            </Box>
        </div>
    );
};

export default TopMenu;
