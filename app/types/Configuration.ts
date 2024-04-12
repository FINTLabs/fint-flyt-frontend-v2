export interface IConfiguration {
    id: number;
    integrationId?: number;
    integrationMetadataId?: number;
    version?: number | null;
    completed?: boolean;
    comment?: string;
    mapping: IObjectMapping;
}

export interface IConfigurationPatch {
    comment?: string;
    integrationMetadataId?: number;
    completed?: boolean;
    mapping: IObjectMapping;
}

export enum ValueType {
    STRING = 'STRING',
    URL = 'URL',
    BOOLEAN = 'BOOLEAN',
    DYNAMIC_STRING = 'DYNAMIC_STRING',
    FILE = 'FILE',
    VALUE_CONVERTING = 'VALUE_CONVERTING'
}

export interface IValueMapping {
    type: ValueType;
    mappingString: string | null;
}

export interface IObjectMapping {
    valueMappingPerKey: Record<string, IValueMapping>;
    valueCollectionMappingPerKey: Record<string, ICollectionMapping<IValueMapping>>;
    objectMappingPerKey: Record<string, IObjectMapping>;
    objectCollectionMappingPerKey: Record<string, ICollectionMapping<IObjectMapping>>;
}

export interface ICollectionMapping<T extends IValueMapping | IObjectMapping> {
    elementMappings: T[];
    fromCollectionMappings: IFromCollectionMapping<T>[];
}

export interface IFromCollectionMapping<T extends IValueMapping | IObjectMapping> {
    instanceCollectionReferencesOrdered: string[];
    elementMapping: T;
}
