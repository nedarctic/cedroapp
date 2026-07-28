import { Tour } from "./tour";

export interface Itinerary {
    id: string;
    activities: string[];
    subtitle: string;
    day: string;
    itineraryImageKey: string;
    itineraryImageUrl: string;
    createdAt: string;
    updatedAt: string;
    tour?: Tour;
    tourId: string;
}