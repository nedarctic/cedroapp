import { Booking } from "./booking";
import { Destination } from "./destinations";
import { Itinerary } from "./itinerary";

export interface Tour {
    id: string;
    title: string;
    description: string;
    activities: string[]
    included: string[]
    excluded: string[]
    destination?: Destination;
    dates: string;
    duration: string;
    tourImageKey: string;
    tourImageUrl: string;
    groupSize: string;
    price: string;
    itineraries?: Itinerary[]
    bookings?: Booking[]
    createdAt: string;
    updatedAt: string;
    destinationId: string;
}
