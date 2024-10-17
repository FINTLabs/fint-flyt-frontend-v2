export interface DataType {
    getCategory(): string;
    getDisplayText(): string;
}

export interface VariableDeclaration<T extends DataType> {
    order: number;
    key: string;
    displayText: DisplayText;
    dataType: T;
}

export interface DisplayText {
    name: string;
    description?: string;
}

enum CategoryType {
    PARAMETERIZED = 'PARAMETERIZED',
    STREAM = 'STREAM',
    MAP = 'MAP',
    LIST = 'LIST',
    REFERENCE = 'REFERENCE',
    SYNCHRONOUS_REQUEST = 'SYNCHRONOUS_REQUEST',
}

enum PrimitiveType {
    TEXT = 'Text',
    INTEGER = 'Integer',
    DECIMAL = 'Decimal number',
    BOOLEAN = 'Boolean',
}

export interface ParameterizedType extends DataType {
    category: CategoryType.PARAMETERIZED;
    typeParameterId: string;
}

export interface ConcreteDataType extends DataType {}

export interface ConcreteStreamType extends ConcreteDataType {}

export interface StreamType<E extends ConcreteStreamType> extends DataType {
    category: CategoryType.STREAM;
    elementType: E;
}

export interface ConcreteMapType extends ConcreteDataType {}

export interface MapType<K extends ConcreteMapType, V extends ConcreteMapType> extends DataType {
    category: CategoryType.MAP;
    keyType: K; // double check type
    valueType: V; // double check type
    constraints: CollectionConstraints;
}

export interface CollectionConstraints {}

export interface ConcreteListType extends ConcreteDataType {}

export interface ListType<E extends ConcreteListType> extends DataType {
    category: CategoryType.LIST;
    elementType: E; // double check type
    constraints: CollectionConstraints;
}

// SynchronousRequestType
export interface SynchronousRequestType<
    T extends ConcreteSynchronousRequestType,
    R extends ConcreteSynchronousRequestType,
> extends DataType {
    category: CategoryType.SYNCHRONOUS_REQUEST;
    dataType: T;
    responseType: R;
    timeout?: Date;
}

export interface ConcreteSynchronousRequestType extends ConcreteDataType {}

// ReferenceType
export interface ReferenceType<T extends ConcreteReferenceType> extends DataType {
    category: CategoryType.REFERENCE;
    referenceContextId: string; // ???
    dataType: T;
}

export interface ConcreteReferenceType extends ConcreteDataType {}
