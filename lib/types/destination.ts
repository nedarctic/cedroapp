import { Guide } from "./guide";
import { Tour } from "./tour";

export type Destination = {
    id: string;
    name: string;
    totalTours?: number;
    tours?: Tour[];
    createdAt: string;
    updatedAt: string;
    guide?: Guide[];
    imageKey: string;
    destinationImage: string;
}