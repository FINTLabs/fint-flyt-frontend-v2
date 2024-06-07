// config.ts
import {Position} from "reactflow";

interface CustomHandleConfig {
    position: Position;
    labelText: string;
    id: string;
    icon: string;
    className?: string;
    isArray?: boolean;
    isOptional?: boolean;
}

interface NodeTypeConfig {
    hasToolbar: boolean;
    customHandles: {
        left: CustomHandleConfig[];
        right: CustomHandleConfig[];
    };
    mainIcon: string;
}

interface NodeConfig {
    [key: string]: NodeTypeConfig;
}

const nodeConfig: NodeConfig = {
    "uppercase": {
        hasToolbar: false,
        mainIcon: "edit_note",
        customHandles: {
            left: [
                {
                    position: Position.Left,
                    labelText: "",
                    id: "4",
                    icon: "text_fields",
                }
            ],
            right: [
                { position: Position.Right,
                    labelText: "",
                    id: "4",
                    icon: "text_fields",}
            ]
        },
    },
    "lowercase": {
        hasToolbar: false,
        mainIcon: "edit_note",
        customHandles: {
            left: [
                {
                    position: Position.Left,
                    labelText: "",
                    id: "4",
                    icon: "text_fields",
                }
            ],
            right: [
                { position: Position.Right,
                    labelText: "",
                    id: "4",
                    icon: "text_fields",}
            ]
        },
    },
    "upperFirst": {
        hasToolbar: false,
        mainIcon: "edit_note",
        customHandles: {
            left: [
                {
                    position: Position.Left,
                    labelText: "",
                    id: "4",
                    icon: "text_fields",
                }
            ],
            right: [
                { position: Position.Right,
                    labelText: "",
                    id: "4",
                    icon: "text_fields",}
            ]
        },
    },
    "splitText": {
        hasToolbar: false,
        mainIcon: "edit_note",
        customHandles: {
            left: [
                {
                    position: Position.Left,
                    labelText: "",
                    id: "4",
                    icon: "text_fields",
                }
            ],
            right: [
                { position: Position.Right,
                    labelText: "",
                    id: "4",
                    icon: "text_fields",}
            ]
        },
    },
    "combineText": {
        hasToolbar: false,
        mainIcon: "edit_note",
        customHandles: {
            left: [
                {
                    position: Position.Left,
                    labelText: "",
                    id: "4",
                    icon: "text_fields",
                },
                { position: Position.Right,
                    labelText: "",
                    id: "4",
                    icon: "text_fields",}
            ],
            right: [
                { position: Position.Right,
                    labelText: "",
                    id: "4",
                    icon: "text_fields",},
            ]
        },
    },
    "add-whole": {
        hasToolbar: true,
        mainIcon: "calculate",
        customHandles: {
            left: [
                {
                    position: Position.Left,
                    labelText: "Added",
                    id: "4",
                    icon: "tag",
                },
                {
                    position: Position.Left,
                    labelText: "Added",
                    id: "5",
                    icon: "tag",
                }
            ],
            right: [
                { position: Position.Right,
                    labelText: "Sum",
                    id: "4",
                    icon: "tag",}
            ]
        },
    },
    "add-float": {
        hasToolbar: true,
        mainIcon: "calculate",
        customHandles: {
            left: [
                {
                    position: Position.Left,
                    labelText: "Added",
                    id: "4",
                    icon: "decimal_increase",
                },
                {
                    position: Position.Left,
                    labelText: "Added",
                    id: "5",
                    icon: "decimal_increase",
                }
            ],
            right: [
                { position: Position.Right,
                    labelText: "Sum",
                    id: "4",
                    icon: "decimal_increase",}
            ]
        },
    },
    "subtract": {
        hasToolbar: true,
        mainIcon: "calculate",
        customHandles: {
            left: [
                {
                    position: Position.Left,
                    labelText: "Minuend",
                    id: "4",
                    icon: "decimal_increase",
                },
                {
                    position: Position.Left,
                    labelText: "Subtrahend",
                    id: "5",
                    icon: "xxx",
                }
            ],
            right: [
                { position: Position.Right,
                    labelText: "Differanse",
                    id: "4",
                    icon: "decimal_increase",}
            ]
        },
    },
    // Add more node type configurations as needed
};

export default nodeConfig;
