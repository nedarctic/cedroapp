export interface Tour {
    destination: string;
    duration: string;
    dates: string;
    group_size: string;
    price: string;
    title: string;
    intro: string;
    included: string[];
    excluded: string[];
    activities: string[];
    link: string;
    heroImage: string;
    images: string[];
    slug: string;
    itinerary: Itinerary;
}

export type Itinerary = {
    day: string;
    title: string;
    activities: string[];
    image: string;
}[]

export interface Blog {
    slug: string;
    title: string;
    date: string;
    image: string;
    excerpt: string;
    story: {
        intro: string;
        sections: {
            subtitle: string;
            content: string;
        }[];
        conclusion: string;
    };
}