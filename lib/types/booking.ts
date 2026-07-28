import { Tour } from "./tour";

export interface Booking {
    id: string;
    name: string;
    email: string;
    tourId: string;
    tour: Tour;
    createdAt: string;
    updatedAt: string;
}