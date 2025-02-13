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
            operationIdUniqueForCategory: 'concat_strings_001',
            displayText: 'Operation Two',
            iconId: 'ChevronRightDoubleCircleFillIcon',
            typeParameters: [
                {
                    typeParameterId: 'T1',
                    displayText: 'First Type',
                },
                {
                    typeParameterId: 'T2',
                    displayText: 'Second Type',
                    constraints: {},
                },
            ],
            operationVariables: {
                inputVariables: [
                    {
                        order: 5,
                        key: '5th_string',
                        displayText: 'Order 5',
                        dataType: {
                            category: 'STRING',
                        },
                    },
                    {
                        order: 3,
                        key: '3rd_string',
                        displayText: 'Order 3',
                        dataType: {
                            category: 'STRING',
                        },
                    },
                    {
                        order: 4,
                        key: '4th_string',
                        displayText: 'Fourth String',
                        dataType: {
                            category: 'STRING',
                        },
                    },
                    {
                        order: 2,
                        key: 'first_string',
                        displayText: 'First String',
                        dataType: {
                            category: 'STRING',
                        },
                    },
                    {
                        order: 1,
                        key: 'second_string',
                        displayText: 'Second String',
                        dataType: {
                            category: 'STRING',
                        },
                    },
                ],
                outputVariables: [
                    {
                        order: 1,
                        key: 'result',
                        displayText: 'Result',
                        dataType: {
                            category: 'STRING',
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
            operationIdUniqueForCategory: 'xxxx',
            displayText: 'Til store bokstaver',
            iconId: 'ChevronRightDoubleCircleFillIcon',
            operationVariables: {
                inputVariables: [
                    {
                        order: 1,
                        key: 'xx',
                        displayText: 'Fullt navn (inngående)',
                        dataType: {
                            category: 'STRING',
                        },
                    },
                ],
                outputVariables: [
                    {
                        order: 1,
                        key: 'xxx',
                        displayText: 'Fullt navn (utgående',
                        dataType: {
                            category: 'STRING',
                        },
                    },
                ],
            },
        },
    },
] as Node[];
