import { PiFacebookLogoLight, PiWhatsappLogoLight, PiInstagramLogoLight, PiLinkedinLogoLight } from "react-icons/pi";
import { SafariDetails, Blog } from "@/lib/types";

export const destination_items = [
    { label: 'Kenya', href: '/destinations/kenya' },
    { label: 'Tanzania', href: '/destinations/tanzania' },
    { label: 'Zanzibar', href: '/destinations/zanzibar' },
    { label: 'Rwanda', href: '/destinations/rwanda' },
];

export const utility_items = [
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Terms of Service', href: '/terms-of-service' },
    { label: 'FAQs', href: '/faq' },
];

export const pages_items = [
    { label: 'Tours', href: '/tours' },
    { label: 'Destinations', href: '/destinations' },
    { label: 'About', href: '/about' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
];

export const social_items = [
    { label: 'Facebook', href: 'https://facebook.com/cedroadventuresEA', logo: PiFacebookLogoLight },
    { label: 'WhatsApp', href: 'https://wa.me/+254721174008', logo: PiWhatsappLogoLight },
    { label: 'Instagram', href: 'https://www.instagram.com/cedroadventures', logo: PiInstagramLogoLight },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/company/cedro-adventures', logo: PiLinkedinLogoLight },
];

export const email = { label: "info@cedroadventures.com", href: "mailto:info@cedroadventures.com" };
export const phone = { label: "(+254) 721 174 008", href: "callto:0721234567" };

// tour details
export const maasai_mara_safari: SafariDetails = {
    destination: "Kenya",
    dates: "Anytime",
    duration: "4 Days / 3 Nights",
    group_size: "Max 16 People",
    price: "From: USD $1,371.00",
    title: "4-Days Maasai Mara Kenyan Safari",
    intro: "Step into a world where wildlife roams freely and every sunrise brings a new adventure. Over four days, witness Africa’s iconic animals, vast landscapes, and vibrant culture, creating memories that will last a lifetime. The Maasai Mara is not just a destination; it’s an experience that becomes a part of you.",
    included: [
        "4 days / 3 nights Maasai Mara safari",
        "Transport from Nairobi to Maasai Mara and back",
        "Services of a professional safari guide/driver",
        "Game drives in Maasai Mara National Reserve",
        "3 nights’ accommodation at Sentrim Mara Camp",
        "Meals during the safari (as per camp program)",
        "Safari vehicle with pop-up roof for wildlife viewing"
    ],
    excluded: [
        "International and domestic flights",
        "Visa fees and travel insurance",
        "Personal expenses (souvenirs, drinks, tips)",
        "Optional activities not listed in the itinerary",
        "Anything not explicitly mentioned as included",
    ],
    activities: [
        "Guided wildlife game drives in Maasai Mara",
        "Big Five and big cats viewing (lion, leopard, cheetah)",
        "Birdwatching (over 500 bird species)",
        "Scenic drives through savannah grasslands and acacia woodlands",
        "Cultural and landscape exploration of the Maasai Mara ecosystem",
    ],
    link: "/tours/maasai_mara_safari",
    images: ["/popular-tours/maasai-mara.jpg"],
    slug: "maasai_mara_safari",
};

export const kenya_wildlife_safari: SafariDetails = {
    destination: "Kenya",
    dates: "Anytime",
    duration: "3 Days / 2 Nights",
    group_size: "Max 20 People",
    price: "From: USD $1,059.00",
    title: "3-day Kenyan wildlife Safari",
    intro: "Experience Kenya’s iconic wildlife on this immersive 3-day safari to Amboseli National Park. Set against the breathtaking backdrop of Mount Kilimanjaro, this short yet rewarding journey offers incredible elephant encounters, open savannah landscapes, and unforgettable game drives, perfect for travelers seeking a classic Kenyan safari in limited time.",
    included: [
        "3 days / 2 nights Amboseli safari",
        "Road transport from Nairobi to Amboseli and return",
        "Professional English-speaking safari guide/driver",
        "Game drives in Amboseli National Park",
        "2 nights’ accommodation at Tulia Amboseli Safari Camp",
        "Meals during the safari (as per camp program)",
        "Safari vehicle with pop-up roof for wildlife viewing",
    ],
    excluded: [
        "International and domestic flights",
        "Visa fees and travel insurance",
        "Personal expenses (drinks, laundry, souvenirs)",
        "Tips and gratuities",
        "Optional activities not mentioned in the itinerary",
    ],
    activities: [
        "Guided game drives in Amboseli National Park",
        "Elephant viewing in their natural habitat",
        "Scenic views of Mount Kilimanjaro",
        "Wildlife photography opportunities",
        "Birdwatching and nature observation",
    ],
    link: "/tours/kenya_wildlife_safari",
    images: ["/popular-tours/amboseli.jpg"],
    slug: "kenya_wildlife_safari",
}

export const kenya_luxury_safari: SafariDetails = {
    destination: "Kenya",
    dates: "Anytime",
    duration: "6 Days / 5 Nights",
    group_size: "Max 16 People",
    price: "From: USD $3,290.00",
    title: "Kenya Luxury Safari Experience",
    intro: "Indulge in an exceptional 6-day luxury safari through two of Kenya’s most celebrated wildlife destinations—Lake Nakuru National Park and the world-famous Maasai Mara. Designed for comfort, exclusivity, and unforgettable encounters, this private safari combines elegant lodges, expert guiding, and extraordinary wildlife viewing during the iconic migration season.",
    included: [
        "6 days / 5 nights private luxury safari",
        "Private transport in a 4x4 safari vehicle",
        "Meet and greet services in Nairobi",
        "Professional, experienced safari guide/driver",
        "Game drives in Lake Nakuru & Maasai Mara National Reserves",
        "2 nights at Sarova Lion Hill Game Lodge",
        "3 nights at Sarova Mara Game Camp",
        "All meals during the safari (as per lodge program)",
        "Park entry fees for all scheduled destinations",
    ],
    excluded: [
        "International and domestic flights",
        "Visa fees and travel insurance",
        "Personal expenses (premium drinks, laundry, souvenirs)",
        "Tips and gratuities",
        "Optional activities not listed in the itinerary",
        "Any items not expressly stated as included",
    ],
    activities: [
        "Guided game drives in Lake Nakuru National Park",
        "Rhino, flamingo, and Rothschild’s giraffe viewing",
        "Scenic exploration of Lake Nakuru landscapes",
        "Guided game drives in the Maasai Mara",
        "Big Five and Great Migration wildlife viewing",
        "Wildlife photography and birdwatching",
        "Optional Lake Naivasha boat excursion (time permitting)",
    ],
    link: "/tours/kenya_luxury_safari",
    images: ["/popular-tours/kenya-luxury.jpg"],
    slug: "kenya_luxury_safari",
}

export const travelStories: Blog[] = [
  {
    slug: "magical-safari-experience-amboseli-cedro-adventures",
    title: "Magical Safari Experience with Cedro Adventures at Amboseli",
    date: "March 30, 2024",
    image: "/travel-stories/amboseli.jpg",
    excerpt:
      "A magical safari experience is a quite relative experience as a lot of people like to argue. However, a safari through the vast Amboseli savannah shatters every expectation one had in mind.",
    story: {
      intro:
        "A magical safari experience is often described differently depending on who you ask. Yet, a journey through the vast Amboseli savannah effortlessly reshapes every expectation one might have. The openness of the land, the distant silhouette of Mount Kilimanjaro, and the calm rhythm of wildlife create an atmosphere that feels both grounding and awe-inspiring.",
      sections: [
        {
          subtitle: "The Vast Amboseli Landscape",
          content:
            "Amboseli National Park is defined by its sweeping plains and unobstructed views that stretch endlessly toward the horizon. As the savannah opens up, herds of elephants move gracefully across the land, often framed by the snow-capped peak of Mount Kilimanjaro. This landscape alone sets Amboseli apart as one of Africa’s most iconic safari destinations."
        },
        {
          subtitle: "Wildlife Encounters at Dawn",
          content:
            "Early morning game drives reveal Amboseli at its most intimate. Lions bask in the soft golden light, giraffes move silently between acacia trees, and birds fill the sky with motion and sound. These quiet hours offer the most authentic encounters, where nature unfolds without interruption."
        },
        {
          subtitle: "Experiencing Amboseli with Cedro Adventures",
          content:
            "With Cedro Adventures, the safari experience becomes deeply immersive. Thoughtfully planned drives, knowledgeable guides, and a respectful approach to wildlife allow travelers to truly connect with the environment. Every moment feels intentional, creating space for reflection and appreciation."
        }
      ],
      conclusion:
        "Amboseli is more than a safari destination — it is an emotional experience that lingers long after the journey ends. The silence of the plains, the presence of wildlife, and the grandeur of the landscape combine to create memories that feel timeless."
    }
  },
  {
    slug: "gorillas-in-the-mist-cedro-adventures-rwanda",
    title: "Gorillas in the Mist with Cedro Adventures",
    date: "July 12, 2024",
    image: "/travel-stories/rwanda.jpg",
    excerpt:
      "Everyone thinks they love wildlife nature until they visit Rwanda, then they fall in love with it all over again but this time, Rwanda-style.",
    story: {
      intro:
        "Many travelers believe they appreciate wildlife until they set foot in Rwanda. Here, nature reveals itself in a way that feels deeply personal. The mist-covered mountains and dense forests create a powerful setting for one of the world’s most profound wildlife encounters.",
      sections: [
        {
          subtitle: "Trekking Through the Volcanic Highlands",
          content:
            "The journey begins with a trek through Rwanda’s volcanic highlands, where thick vegetation and uneven terrain heighten anticipation. Each step deeper into the forest brings a growing sense of respect for the environment and the creatures that call it home."
        },
        {
          subtitle: "Meeting the Mountain Gorillas",
          content:
            "When the gorillas finally emerge, time seems to slow. Their expressive eyes, gentle movements, and close-knit family bonds create an emotional connection that is impossible to ignore. Observing them in their natural habitat is both humbling and unforgettable."
        },
        {
          subtitle: "Guided by Cedro Adventures",
          content:
            "Cedro Adventures ensures the experience is handled with care and respect. From expert guides to ethical trekking practices, every aspect of the journey prioritizes conservation and meaningful engagement."
        }
      ],
      conclusion:
        "Rwanda’s gorilla experience is not just about wildlife viewing — it is about connection, responsibility, and awe. The memories formed in these forests remain vivid long after the trek ends."
    }
  },
  {
    slug: "explore-the-beauty-of-zanzibar-with-cedro-adventures",
    title: "Explore the beauty of Zanzibar with Cedro Adventures",
    date: "August 08, 2025",
    image: "/travel-stories/zanzibar.jpg",
    excerpt:
      "Zanzibar has a way to steal anyone's heart, including anyone claiming to be introverted. The Zanzibar Archipelago experience with Cedro Adventures will take your breath away.",
    story: {
      intro:
        "Zanzibar welcomes travelers with a sense of calm that is felt almost immediately. The soft rhythm of the ocean, warm coastal air, and unhurried pace of life invite visitors to slow down and simply be present.",
      sections: [
        {
          subtitle: "Turquoise Waters and White Sands",
          content:
            "The beaches of Zanzibar are defined by crystal-clear turquoise waters and powder-soft white sands. Days unfold naturally with ocean swims, gentle walks along the shore, and moments of quiet reflection beneath swaying palm trees."
        },
        {
          subtitle: "Culture and History of the Archipelago",
          content:
            "Beyond the beaches, Zanzibar reveals a rich cultural tapestry. Stone Town’s winding alleys, historic architecture, and spice-scented markets tell stories of trade, tradition, and resilience that continue to shape the island today."
        },
        {
          subtitle: "Unwinding with Cedro Adventures",
          content:
            "Cedro Adventures curates a balanced experience that blends relaxation with exploration. Each activity is thoughtfully paced, allowing travelers to experience Zanzibar without feeling rushed."
        }
      ],
      conclusion:
        "Zanzibar does not demand attention — it invites presence. By the end of the journey, visitors leave not only refreshed but transformed by the island’s quiet beauty and timeless rhythm."
    }
  }
];