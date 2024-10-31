export interface MenuConfig {
    nodeType: string;
    inputType: string;
    label: string;
    icon: string;
    hasToolbar?: boolean;
}

export const menuConfigs: MenuConfig[] = [
    { nodeType: 'static', inputType: 'text', label: 'String', icon: 'text_fields' },
    { nodeType: 'static', inputType: 'integer', label: 'Number', icon: 'numbers' },
    { nodeType: 'static', inputType: 'decimal', label: 'Decimal', icon: 'decimal_increase' },
    { nodeType: 'static', inputType: 'boolean', label: 'Boolean', icon: 'toggle_on' },
    {
        nodeType: 'openObject',
        inputType: 'record',
        label: 'Open Object 3',
        icon: 'data_object',
    },
];
