// // import {MOCK_EVENTS} from "../__tests__/mock/events";
// import {IEvent} from "../features/instances/types/Event";
// import {IIntegration} from "../features/integrations/types/Integration";
// // import {MOCK_INTEGRATION} from "../__tests__/mock/integrations";
// import {ISourceApplication} from "../features/configuration/types/SourceApplication";
import { IEvent } from '~/routes/instance/types/event';
import { ISourceApplication } from '~/types/SourceApplication';

export function getSourceApplicationDisplayNameById(
    id: number,
    sourceApplications: ISourceApplication[] | undefined
): string {
    if (!sourceApplications) {
        return 'ukjent';
    }
    // return sourceApplications.find(sourceApplication => sourceApplication.id === id)?.displayName ?? 'ukjent'
    return 'ukjent';
}

export function getDestinationDisplayName(id: string): string {
    if (id === 'fylkesrad') return 'Arkivsystem';
    else return 'ukjent';
}

export function getStateDisplayName(id: string): string {
    if (id === 'ACTIVE') return 'Aktiv';
    if (id === 'DEACTIVATED') return 'Deaktivert';
    else return 'ukjent';
}

// export const isKeyOfIntegration = (key: string): key is keyof IIntegration => {
//     return Object.keys(MOCK_INTEGRATION).includes(key);
// };
//
// export const integrationComparator = (a: IIntegration, b: IIntegration, orderBy: string) => {
//     if (isKeyOfIntegration(orderBy)) {
//         const aValue = a[orderBy];
//         const bValue = b[orderBy];
//
//         if (bValue === undefined || aValue === undefined) {
//             return -1;
//         }
//
//         if (bValue < aValue) {
//             return -1;
//         }
//         if (bValue > aValue) {
//             return 1;
//         }
//         return 0;
//     } else {
//         return -1;
//     }
//
// };
//
// export const isKeyOfEvent = (key: string): key is keyof IEvent => {
//     return Object.keys(MOCK_EVENTS.content[0]).includes(key);
// };
//
// export const eventComparator = (a: IEvent, b: IEvent, orderBy: string) => {
//     if (isKeyOfEvent(orderBy)) {
//         const aValue = a[orderBy];
//         const bValue = b[orderBy];
//
//         if (bValue === undefined || aValue === undefined) {
//             return -1;
//         }
//
//         if (bValue < aValue) {
//             return -1;
//         }
//         if (bValue > aValue) {
//             return 1;
//         }
//         return 0;
//     } else {
//         return -1;
//     }
// };
