import { Tour } from "./tour";

export interface Destination {
    id: string;
    name: string;
    tour?: Tour[]
    createdAt: string;
    updatedAt: string;
    totalTours?: string;
    destinationImageKey: string;
    destinationImageUrl: string;
}