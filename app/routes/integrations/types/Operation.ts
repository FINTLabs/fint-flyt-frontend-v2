export interface TypeParameterConstraints {
    type: string;
}

export interface TypeParameterDeclaration {
    typeParameterId: string;
    displayText: DisplayText;
    constraints?: TypeParameterConstraints;
}

export interface VariableDeclaration {
    order: number;
    key: string;
    displayText: DisplayText;
    dataType: {
        category: string;
    };
}

export interface OperationVariables {
    inputVariables: VariableDeclaration[];
    outputVariables: VariableDeclaration[];
}

export interface OperationDeclaration {
    operationIdUniqueForCategory: string;
    displayText: DisplayText;
    iconId: string;
    typeParameters: TypeParameterDeclaration[];
    operationVariables: OperationVariables;
}

export type DisplayText = string;
