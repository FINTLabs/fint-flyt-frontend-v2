// config.ts
import {Position} from "reactflow";

const getId = (prefix = 'node') => `${prefix}_${Math.random() * 10000}`;

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
    "error": {
        hasToolbar: false,
        mainIcon: "error",
        customHandles: {
            left: [
                {
                    position: Position.Left,
                    labelText: "Error",
                    id: "4",
                    icon: "text_fields",
                    isArray: true,
                }
            ],
            right: []
        },
    },
    "input": {
        hasToolbar: false,
        mainIcon: "ChevronRightDoubleCircleFillIcon",
        customHandles: {
            left: [
            ],
            right: [{
                position: Position.Right,
                labelText: "Placeholder",
                id: "1",
                icon: "tab_unselected",
                isArray: false,
            }]
        },
    },
    "output": {
        hasToolbar: false,
        mainIcon: "ChevronRightDoubleCircleFillIcon",
        customHandles: {
            left: [{
                position: Position.Left,
                labelText: "Placeholder",
                id: "1",
                icon: "tab_unselected",
                isArray: false,
            }],
            right: [{
                position: Position.Right,
                labelText: "Placeholder",
                id: "1",
                icon: "tab_unselected",
                isArray: false,
            }]
        },
    },
    "open-object": {
        hasToolbar: false,
        mainIcon: "ChevronRightDoubleCircleFillIcon",
        customHandles: {
            left: [
                {
                    position: Position.Left,
                    labelText: "",
                    id: "1",
                    icon: "data_object",
                    isArray: false,
                }
            ],
            right: [{
                position: Position.Right,
                labelText: "FirstName",
                id: "1",
                icon: "data_object",
                isArray: false,
                className: "top-10",
            },
            {
                position: Position.Right,
                labelText: "LastName",
                id: "1",
                icon: "data_object",
                isArray: false,
                className: "top-20",
            },
            {
                position: Position.Right,
                labelText: "Title",
                id: "1",
                icon: "data_object",
                isArray: false,
                className: "top-30",
            }
                ]
        },
    },
    "open-object-10": {
        hasToolbar: false,
        mainIcon: "ChevronRightDoubleCircleFillIcon",
        customHandles: {
            left: [
                {
                    position: Position.Left,
                    labelText: "",
                    id: getId(),
                    icon: "data_object",
                    isArray: false,
                }
            ],
            right: [
                {
                    position: Position.Right,
                    labelText: "First Name",
                    id: getId(),
                    icon: "data_object",
                    isArray: false,
                    className: "top-[0px]"
                },
                {
                    position: Position.Right,
                    labelText: "LastName",
                    id: getId(),
                    icon: "data_object",
                    isArray: false,
                    className: "top-[30px]"
                },
                {
                    position: Position.Right,
                    labelText: "Title",
                    id: getId(),
                    icon: "data_object",
                    className: "top-[60px]"
                },
                {
                    position: Position.Right,
                    labelText: "Abc",
                    id: getId(),
                    icon: "data_object",
                    className: "top-[90px]",
                },
                {
                    position: Position.Right,
                    labelText: "Def",
                    id: getId(),
                    icon: "data_object",
                    className: "top-[120px]",
                },
                {
                    position: Position.Right,
                    labelText: "Ghi",
                    id: getId(),
                    icon: "data_object",
                    className: "top-[150px]",
                }
            ]
        },
    },
    "output-object-10": {
        hasToolbar: false,
        mainIcon: "ChevronRightDoubleCircleFillIcon",
        customHandles: {
            right: [
                {
                    position: Position.Right,
                    labelText: "",
                    id: getId(),
                    icon: "data_object",
                    isArray: false,
                }
            ],
            left: [
                {
                    position: Position.Left,
                    labelText: "First Name",
                    id: getId(),
                    icon: "data_object",
                    isArray: false,
                    className: "top-[0px]"
                },
                {
                    position: Position.Left,
                    labelText: "LastName",
                    id: getId(),
                    icon: "data_object",
                    isArray: false,
                    className: "top-[30px]"
                },
                {
                    position: Position.Left,
                    labelText: "Title",
                    id: getId(),
                    icon: "data_object",
                    className: "top-[60px]"
                },
                {
                    position: Position.Left,
                    labelText: "Abc",
                    id: getId(),
                    icon: "data_object",
                    className: "top-[90px]",
                },
                {
                    position: Position.Left,
                    labelText: "Def",
                    id: getId(),
                    icon: "data_object",
                    className: "top-[120px]",
                },
                {
                    position: Position.Left,
                    labelText: "Ghi",
                    id: getId(),
                    icon: "data_object",
                    className: "top-[150px]",
                }
            ]
        },
    },
    "blueprint": {
        hasToolbar: false,
        mainIcon: "ChevronRightDoubleCircleFillIcon",
        customHandles: {
            left: [{
                position: Position.Left,
                labelText: "Placeholder",
                id: "1",
                icon: "tab_unselected",
                isArray: false,
            }],
            right: [{
                position: Position.Right,
                labelText: "Placeholder",
                id: "1",
                icon: "tab_unselected",
                isArray: false,
            }]
        },
    },
    "subflow-foreach": {
        hasToolbar: false,
        mainIcon: "ChevronRightDoubleCircleFillIcon",
        customHandles: {
            left: [{
                position: Position.Left,
                labelText: "Samling",
                id: "4",
                icon: "text_fields",
                isArray: true,
            },{
                position: Position.Right,
                labelText: "Element",
                id: "1",
                icon: "text_fields",
                isArray: false,
                className: "left-10",
            }],
            right: []
        },
    },
    "subflow-map": {
        hasToolbar: false,
        mainIcon: "ChevronRightDoubleCircleFillIcon",
        customHandles: {
            left: [{
                position: Position.Left,
                labelText: "Samling",
                id: "4",
                icon: "text_fields",
                isArray: true,
            },{
                position: Position.Right,
                labelText: "Element",
                id: "1",
                icon: "text_fields",
                isArray: false,
                className: "left-10",
            }],
            right: [{
                position: Position.Left,
                labelText: "Nytt element",
                id: "40",
                icon: "data_object",
            },
                {
                    position: Position.Right,
                    labelText: "Ny samling",
                    className: "left-10",
                    id: "400",
                    icon: "data_object",
                    isArray: true,
                }]
        },
    },
    "subflow-filter": {
        hasToolbar: false,
        mainIcon: "ChevronRightDoubleCircleFillIcon",
        customHandles: {
            left: [{
                position: Position.Left,
                labelText: "Samling",
                id: "4",
                icon: "text_fields",
                isArray: true,
            },{
                position: Position.Right,
                labelText: "Element",
                id: "1",
                icon: "text_fields",
                isArray: false,
                className: "left-10",
            }],
            right: [{
                position: Position.Left,
                labelText: "Skal være med",
                id: "40",
                icon: "toggle_on",
                isArray: false,
            },
            {
                position: Position.Right,
                labelText: "Filtrert samling",
                id: "40",
                icon: "toggle_on",
                isArray: true,
                className: "left-10",
            }
            ]
        },
    },
    "subflow-reduce": {
        hasToolbar: false,
        mainIcon: "ChevronRightDoubleCircleFillIcon",
        customHandles: {
            left: [{
                position: Position.Left,
                labelText: "",
                id: "4",
                icon: "tag",
                isArray: true,
            },{
                position: Position.Right,
                labelText: "Element A",
                id: "100",
                icon: "tag",
                isArray: false,
                className: "left-10 -top-5",
            },
            {
                position: Position.Right,
                labelText: "Element B",
                id: "200",
                icon: "tag",
                isArray: false,
                className: "left-10 top-5",
            }],
            right: [
                {
                    position: Position.Right,
                    labelText: "Sammenslått verdi",
                    id: "4000",
                    icon: "text_fields",
                    className: "left-10",
                },
                {
                    position: Position.Left,
                    labelText: "Sammenslått verdi",
                    id: "4300",
                    icon: "text_fields",
                    isArray: false,

                }
                ]
        },
    },
    "subflow-find-first": {
        hasToolbar: false,
        mainIcon: "ChevronRightDoubleCircleFillIcon",
        customHandles: {
            left: [{
                position: Position.Left,
                labelText: "Samling",
                id: "4",
                icon: "text_fields",
                isArray: true,
            },{
                position: Position.Right,
                labelText: "Element",
                id: "1",
                icon: "text_fields",
                isArray: false,
                className: "left-10",
            }],
            right: [{
                position: Position.Left,
                labelText: "Betingelse",
                id: "40",
                icon: "toggle_on",
            },
                {
                    position: Position.Right,
                    labelText: "Funnet element",
                    id: "40",
                    icon: "text_fields",
                    className: "left-10",
                    isOptional: true,
                }]
        },
    },
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
                    icon: "x",
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
    "multiply": {
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
                    icon: "x",
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
    "divide": {
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
                    icon: "x",
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
    "larger": {
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
                    icon: "x",
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
    "smaller": {
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
                    icon: "decimal_increase",
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
    "equal": {
        hasToolbar: true,
        mainIcon: "calculate",
        customHandles: {
            left: [
                {
                    position: Position.Left,
                    labelText: "Tall A",
                    id: "4",
                    icon: "decimal_increase",
                },
                {
                    position: Position.Left,
                    labelText: "Tall B",
                    id: "5",
                    icon: "x",
                }
            ],
            right: [
                { position: Position.Right,
                    labelText: "Er like",
                    id: "4",
                    icon: "toggle_on",}
            ]
        },
    },
    "roundUp": {
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
                    icon: "x",
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
    "roundDown": {
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
};

export default nodeConfig;
