export interface IIntegration {
    id?: string;
    sourceApplicationId?: string;
    sourceApplicationIntegrationId?: string;
    destination?: string;
    state?: string;
    activeConfigurationId?: string;
    activeConfigurationVersion?: string;
    dispatched?: number;
    errors?: number;
    displayName?: string;
}

export interface IIntegrationFormData {
    sourceApplicationId?: string;
    sourceApplicationIntegrationId?: string;
    destination?: string;
}

export const IntegrationState = {
    ACTIVE: "ACTIVE",
    DEACTIVATED: "DEACTIVATED"
}

export interface IIntegrationPatch {
    destination?: string;
    state?: string;
    activeConfigurationId?: string;
}

export interface IIntegrationStatistics {
    sourceApplicationIntegrationId: string;
    dispatchedInstances: number;
    currentErrors: number;
}
