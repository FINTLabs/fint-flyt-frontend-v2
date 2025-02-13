import { Node } from 'reactflow';

export default [
    {
        id: '1',
        type: 'channel',
        position: {
            x: 0,
            y: 0,
        },
        data: {
            nodeType: 'channel',
            inputType: 'input',
            icon: 'ChevronRightDoubleCircleFillIcon',
            label: 'Input',
        },
    },
    {
        id: '2',
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
] as Node[];
