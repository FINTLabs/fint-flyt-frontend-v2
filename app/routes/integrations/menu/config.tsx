export interface MenuConfig {
    nodeType: string;
    inputType: string;
    label: string;
    icon: string;
}

export const menuConfigs: { [key: string]: MenuConfig[] } = {
    default: [
        { nodeType: 'error', inputType: 'error', label: 'Error', icon:'error' },
    ],
    "mathNodes": [
        { nodeType: 'mathNode', inputType: 'add', label: 'Addition', icon:'add_circle' },
        { nodeType: 'mathNode', inputType: 'subtract', label: 'Subtraction', icon:'do_not_disturb_on' },
        { nodeType: 'mathNode', inputType: 'multiply', label: 'Multiplication', icon:'cancel' },
        { nodeType: 'mathNode', inputType: 'divide', label: 'Divide', icon:'percent' },

    ],
    "subFlowNodes": [
        { nodeType: "subflow", inputType: "subflow-if-else", icon: "fact_check", label: "Foreach" },
        { nodeType: "subflow", inputType: "subflow-map", icon: "checklist", label: "Map" },
        { nodeType: "subflow", inputType: "subflow-filter", icon: "filter_alt", label: "Filter" },
        { nodeType: "subflow", inputType: "subflow-reduce", icon: "arrow_and_edge", label: "Reduce" },
        { nodeType: "subflow", inputType: "subflow-find-first", icon: "frame_inspect", label: "FindFirst" }
    ],
   "staticValueNodes" : [
        { nodeType: 'static', inputType: 'text', label: 'String', icon:'text_fields' },
        { nodeType: 'static', inputType: 'number', label: 'Number', icon:'numbers' },
        { nodeType: 'static', inputType: 'decimal', label: 'Decimal', icon:'decimal_increase' },
        { nodeType: 'static', inputType: 'boolean', label: 'Boolean', icon:'toggle_on' },
        { nodeType: 'static', inputType: 'time', label: 'Time', icon:'schedule' },
        { nodeType: 'static', inputType: 'date', label: 'Date', icon:'calendar_today' },
        { nodeType: 'static', inputType: 'datetime', label: 'Date+Time', icon:'calendar_clock' },
    ],
    "channelNodes": [
        { nodeType: "channel", inputType: "channel", icon: "arrow_circle_right", label: "Input" },
        { nodeType: "channel", inputType: "channel", icon: "arrow_circle_left", label: "Output" },
        { nodeType: "openObject", inputType: "object", icon: "data_object", label: "openObject" },
    ]
}