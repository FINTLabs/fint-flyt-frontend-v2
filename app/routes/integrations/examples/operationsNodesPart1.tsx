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
            displayText: 'Kompleks operasjon',
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
                        displayText: 'Fullt navn (utgående)',
                        dataType: {
                            category: 'STRING',
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
            x: 500,
            y: 500,
        },
        data: {
            operationIdUniqueForCategory: 'xxxx',
            displayText: 'Dato + klokkeslett ➡️ Tidspunkt',
            iconId: 'ChevronRightDoubleCircleFillIcon',
            operationVariables: {
                inputVariables: [
                    {
                        order: 1,
                        key: 'xx',
                        displayText: 'Dato',
                        dataType: {
                            category: 'RECORD',
                            recordTypeDeclarationId: 'DATE',
                        },
                    },
                    {
                        order: 2,
                        key: 'xx',
                        displayText: 'Klokkeslett',
                        dataType: {
                            category: 'RECORD',
                            recordTypeDeclarationId: 'TIME',
                        },
                    },
                ],
                outputVariables: [
                    {
                        order: 1,
                        key: 'xxx',
                        displayText: 'Sammenslått',
                        dataType: {
                            category: 'RECORD',
                            recordTypeDeclarationId: 'DATETIME',
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
            displayText: 'Splitt tekst',
            iconId: 'ChevronRightDoubleCircleFillIcon',
            operationVariables: {
                inputVariables: [
                    {
                        order: 1,
                        key: 'xx',
                        displayText: 'Lang tekst',
                        dataType: {
                            category: 'STRING',
                        },
                    },
                ],
                outputVariables: [
                    {
                        order: 1,
                        key: 'xxx',
                        displayText: '1️⃣ Del 1',
                        dataType: {
                            category: 'STRING',
                        },
                    },

                    {
                        order: 2,
                        key: 'xx',
                        displayText: '2️⃣ Del 2',
                        dataType: {
                            category: 'STRING',
                        },
                    },
                ],
            },
        },
    },
] as Node[];
