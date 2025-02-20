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
] as Node[];
