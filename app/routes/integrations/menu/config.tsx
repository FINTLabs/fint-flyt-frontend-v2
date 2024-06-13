export interface MenuConfig {
    nodeType: string;
    inputType: string;
    label: string;
    icon: string;
    hasToolbar?: boolean;
}

export const menuConfigs: { [key: string]: MenuConfig[] } = {
    default: [{ nodeType: 'error', inputType: 'error', label: 'Error', icon: 'error' }],
    channelNodes: [
        { nodeType: 'channel', inputType: 'input', icon: 'ChevronRightDoubleCircleFillIcon', label: 'Input' },
        { nodeType: 'channel', inputType: 'output', icon: 'arrow_circle_right', label: 'Output' },
        { nodeType: 'channel', inputType: 'blueprint', icon: 'account_tree', label: 'Blueprint' },
        { nodeType: 'openObject', inputType: 'open-object', icon: 'data_object', label: 'Open Object 3' },
        { nodeType: 'openObject', inputType: 'open-object-10', icon: 'data_object', label: 'Open object 6' },
        { nodeType: 'openObject', inputType: 'output-object-10', icon: 'data_object', label: 'Output object' },
        { nodeType: 'select', inputType: 'select', icon: 'database', label: 'Datakildeverdi' },
    ],
    textConversionNodes: [
        { nodeType: 'customNode', inputType: 'uppercase', label: 'To Uppercase', icon: 'uppercase' },
        { nodeType: 'customNode', inputType: 'lowercase', label: 'To Lowercase', icon: 'lowercase' },
        { nodeType: 'customNode', inputType: 'upperFirst', label: 'Proper case', icon: 'match_case' },
        { nodeType: 'customNode', inputType: 'splitText', label: 'Split Text', icon: 'arrow_split' },
        { nodeType: 'customNode', inputType: 'combineText', label: 'Combine Text', icon: 'merge' },
    ],
    mathNodes: [
        { nodeType: 'customNode', inputType: 'add-whole', label: 'Addition Whole', icon: 'add_circle' },
        { nodeType: 'customNode', inputType: 'add-float', label: 'Addition Float', icon: 'add_circle' },
        { nodeType: 'customNode', inputType: 'subtract', label: 'Subtraction', icon: 'do_not_disturb_on', hasToolbar: true },
        { nodeType: 'customNode', inputType: 'multiply', label: 'Multiplication', icon: 'cancel', hasToolbar: true },
        { nodeType: 'customNode', inputType: 'divide', label: 'Divide', icon: 'percent', hasToolbar: true },
        { nodeType: 'customNode', inputType: 'larger', label: 'Larger Than', icon: 'chevron_right', hasToolbar: true },
        { nodeType: 'customNode', inputType: 'smaller', label: 'Smaller Than', icon: 'chevron_left' },
        { nodeType: 'customNode', inputType: 'equal', label: 'Equal', icon: 'equal' },
        { nodeType: 'customNode', inputType: 'roundUp', label: 'Round Up', icon: 'rotate_right' },
        { nodeType: 'customNode', inputType: 'roundDown', label: 'Round Down', icon: 'rotate_left' },
    ],
    subFlowNodes: [
        { nodeType: 'subflow', inputType: 'subflow-foreach', icon: 'fact_check', label: 'Foreach' },
        { nodeType: 'subflow', inputType: 'subflow-map', icon: 'checklist', label: 'Map' },
        { nodeType: 'subflow', inputType: 'subflow-filter', icon: 'filter_alt', label: 'Filter' },
        { nodeType: 'subflow', inputType: 'subflow-reduce', icon: 'arrow_and_edge', label: 'Reduce' },
        { nodeType: 'subflow', inputType: 'subflow-find-first', icon: 'frame_inspect', label: 'FindFirst' },
    ],
    staticValueNodes: [
        { nodeType: 'static', inputType: 'text', label: 'String', icon: 'text_fields' },
        { nodeType: 'static', inputType: 'number', label: 'Number', icon: 'numbers' },
        { nodeType: 'static', inputType: 'decimal', label: 'Decimal', icon: 'decimal_increase' },
        { nodeType: 'static', inputType: 'boolean', label: 'Boolean', icon: 'toggle_on' },
        { nodeType: 'static', inputType: 'time', label: 'Time', icon: 'schedule' },
        { nodeType: 'static', inputType: 'date', label: 'Date', icon: 'calendar_today' },
        { nodeType: 'static', inputType: 'datetime', label: 'Date+Time', icon: 'calendar_clock' },
    ],
};
