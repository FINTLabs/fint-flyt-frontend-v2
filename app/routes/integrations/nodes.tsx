import { Node } from 'reactflow';

export default [
    {
        id: '1',
        type: 'innerflow',
        position: {
            x: 0,
            y: 200,
        },
        data: {
            outerOperation: {
                operationIdUniqueForCategory: 'inner_flow_for_each',
                displayText: 'Handling for hvert element i samling',
                iconId: 'directory_sync',
                typeParameters: [],
                operationVariables: {
                    inputVariables: [
                        {
                            order: 1,
                            key: 'input_1',
                            displayText: 'Inkommende Samling',
                            dataType: {
                                category: 'LIST',
                                elementType: { category: 'STRING' },
                            },
                        },
                    ],
                    outputVariables: null,
                },
            },
            innerFlowVariables: {
                inputVariables: [
                    {
                        order: 1,
                        key: 'inner_input_1',
                        displayText: 'Inner Input 1',
                        dataType: { category: 'INTEGER' },
                    },
                ],
                outputVariables: null,
            },
            locked: false,
        },
    },

    {
        id: '2',
        type: 'innerflow',
        position: {
            x: 240,
            y: 550,
        },
        data: {
            outerOperation: {
                operationIdUniqueForCategory: 'inner_flow_map',
                displayText: 'Handling med utdata for hvert element i samling',
                iconId: 'dataset',
                typeParameters: [],
                operationVariables: {
                    inputVariables: [
                        {
                            order: 1,
                            key: 'input_2',
                            displayText: 'Samling',
                            dataType: { category: 'STRING' },
                        },
                    ],
                    outputVariables: [
                        {
                            order: 1,
                            key: 'output_2',
                            displayText: 'Ny Samling',
                            dataType: {
                                category: 'LIST',
                                elementType: { category: 'STRING' },
                            },
                        },
                    ],
                },
            },
            innerFlowVariables: {
                inputVariables: [
                    {
                        order: 1,
                        key: 'inner_input_2',
                        displayText: 'Element A',
                        dataType: { category: 'STRING' },
                    },
                ],
                outputVariables: [
                    {
                        order: 1,
                        key: 'inner_output_2',
                        displayText: 'Element B',
                        dataType: { category: 'STRING' },
                    },
                ],
            },
            locked: false,
        },
    },
    {
        id: '3',
        type: 'innerflow',
        position: {
            x: 240,
            y: 850,
        },
        data: {
            outerOperation: {
                operationIdUniqueForCategory: 'inner_flow_filter',
                displayText: 'Filtrer samling',
                iconId: 'filter_alt',
                typeParameters: [],
                operationVariables: {
                    inputVariables: [
                        {
                            order: 1,
                            key: 'input_2',
                            displayText: 'Samling',
                            dataType: { category: 'STRING' },
                        },
                    ],
                    outputVariables: [
                        {
                            order: 1,
                            key: 'output_2',
                            displayText: 'Filtrert Samling',
                            dataType: {
                                category: 'LIST',
                                elementType: { category: 'STRING' },
                            },
                        },
                    ],
                },
            },
            innerFlowVariables: {
                inputVariables: [
                    {
                        order: 1,
                        key: 'inner_input_2',
                        displayText: 'Element A',
                        dataType: { category: 'STRING' },
                    },
                ],
                outputVariables: [
                    {
                        order: 1,
                        key: 'inner_output_2',
                        displayText: 'Element B',
                        dataType: { category: 'BOOLEAN' },
                    },
                ],
            },
            locked: false,
        },
    },
] as Node[];
