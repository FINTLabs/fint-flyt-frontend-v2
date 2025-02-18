import { useState } from 'react';
import { PlusIcon } from '@navikt/aksel-icons';
import { Dropdown, Button, DropdownProps } from '@navikt/ds-react';
import { MenuType } from 'node_modules/@navikt/ds-react/esm/dropdown/Menu';

export default function HandleOptions({ placement }: { placement: any }) {
    const [open, setOpen] = useState(false);

    return (
        <div className="relative inline-block">
            <Dropdown>
                <Button
                    as={Dropdown.Toggle}
                    variant="tertiary"
                    icon={<PlusIcon aria-hidden />}></Button>
                <Dropdown.Menu placement={placement}>
                    <Dropdown.Menu.List>
                        <Dropdown.Menu.List.Item onClick={() => {}}>String</Dropdown.Menu.List.Item>
                        <Dropdown.Menu.List.Item onClick={() => {}}>Number</Dropdown.Menu.List.Item>
                        <Dropdown.Menu.List.Item onClick={() => {}}>
                            Decimal
                        </Dropdown.Menu.List.Item>
                        <Dropdown.Menu.List.Item onClick={() => {}}>
                            Boolean
                        </Dropdown.Menu.List.Item>
                    </Dropdown.Menu.List>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    );
}
