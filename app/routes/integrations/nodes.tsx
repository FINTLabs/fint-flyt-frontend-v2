import { Node } from 'reactflow';

export default [
    {
        id: '1',
        type: 'operation',
        position: {
            x: 0,
            y: 200,
        },
        data: {
            operationIdUniqueForCategory: 'adder tall',
            displayText: 'Adder tall',
            iconId: 'ChevronRightDoubleCircleFillIcon',
            operationVariables: {
                inputVariables: [
                    {
                        order: 2,
                        key: 'second_tall',
                        displayText: 'Second tall',
                        dataType: {
                            category: 'INTEGER',
                        },
                    },
                    {
                        order: 1,
                        key: 'first_tall',
                        displayText: 'First Tall',
                        dataType: {
                            category: 'INTEGER',
                        },
                    },
                ],
                outputVariables: [
                    {
                        order: 1,
                        key: 'result',
                        displayText: 'Result',
                        dataType: {
                            category: 'INTEGER',
                        },
                    },
                ],
            },
        },
    },

    {
        id: '2',
        type: 'operation',
        position: {
            x: 400,
            y: 100,
        },
        data: {
            operationIdUniqueForCategory: 'adder tall',
            displayText: 'Multipliser Double tall',
            iconId: 'ChevronRightDoubleCircleFillIcon',
            operationVariables: {
                inputVariables: [
                    {
                        order: 2,
                        key: 'second_tall',
                        displayText: 'Second tall',
                        dataType: {
                            category: 'DECIMAL',
                        },
                    },
                    {
                        order: 1,
                        key: 'first_tall',
                        displayText: 'First Tall',
                        dataType: {
                            category: 'DECIMAL',
                        },
                    },
                ],
                outputVariables: [
                    {
                        order: 1,
                        key: 'result',
                        displayText: 'Result',
                        dataType: {
                            category: 'DECIMAL',
                        },
                    },
                ],
            },
        },
    },
    {
        id: '3',
        type: 'operation',
        position: {
            x: 400,
            y: 500,
        },
        data: {
            operationIdUniqueForCategory: 'fsfsdlfl',
            displayText: 'Og (Boolean)',
            iconId: 'ChevronRightDoubleCircleFillIcon',
            operationVariables: {
                inputVariables: [
                    {
                        order: 2,
                        key: 'second_tall',
                        displayText: 'Second condition',
                        dataType: {
                            category: 'BOOLEAN',
                        },
                    },
                    {
                        order: 1,
                        key: 'first_tall',
                        displayText: 'First condition',
                        dataType: {
                            category: 'BOOLEAN',
                        },
                    },
                ],
                outputVariables: [
                    {
                        order: 1,
                        key: 'result',
                        displayText: 'Result condition',
                        dataType: {
                            category: 'BOOLEAN',
                        },
                    },
                ],
            },
        },
    },
    {
        id: '4',
        type: 'operation',
        position: {
            x: 850,
            y: 280,
        },
        data: {
            operationIdUniqueForCategory: 'xxxx',
            displayText: 'Opprett Samling',
            iconId: 'ChevronRightDoubleCircleFillIcon',
            operationVariables: {
                inputVariables: [
                    {
                        order: 1,
                        key: 'xx',
                        displayText: 'Item 1',
                        dataType: {
                            category: 'STRING',
                        },
                    },
                    {
                        order: 2,
                        key: 'xx',
                        displayText: 'Item 2',
                        dataType: {
                            category: 'STRING',
                        },
                    },
                ],
                outputVariables: [
                    {
                        order: 1,
                        key: 'xxx',
                        displayText: 'Samlet',
                        dataType: {
                            category: 'LIST',
                            elementType: { category: 'STRING' },
                        },
                    },
                ],
            },
        },
    },
] as Node[];
