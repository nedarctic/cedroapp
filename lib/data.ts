import { PiFacebookLogoLight, PiWhatsappLogoLight, PiInstagramLogoLight, PiLinkedinLogoLight } from "react-icons/pi";
import { Tour, Blog } from "@/lib/types";

const kenyaGuide = [
  {
    subtitle: "Introduction",
    content: "Welcome to Kenya, a land of breathtaking landscapes, diverse wildlife, and rich cultural heritage. From the vibrant streets of Nairobi to the sweeping savannahs of the Maasai Mara and the pristine beaches along the Indian Ocean, Kenya offers unforgettable experiences waiting to be discovered. Here's a glimpse into what this remarkable country has to offer:"
  },
  {
    subtitle: "Nairobi - The Green City in the Sun",
    content: "Begin your journey in Nairobi, Kenya’s dynamic capital where urban life meets nature. Visit Nairobi National Park, the only national park within a capital city, and see lions, giraffes, and rhinos against a city skyline. Explore the David Sheldrick Wildlife Trust to learn about elephant conservation, and get up close with giraffes at the Giraffe Centre. Discover Kenyan history at the National Museum and enjoy local cuisine at vibrant restaurants and markets."
  },
  {
    subtitle: "Maasai Mara - Wildlife Paradise",
    content: "Head to the Maasai Mara National Reserve, one of Africa’s most famous safari destinations. Witness the incredible Great Migration, where millions of wildebeest and zebras cross the plains. Spot the Big Five—lion, elephant, buffalo, leopard, and rhino—on thrilling game drives. Experience Maasai culture by visiting a traditional village and enjoy breathtaking sunsets over the savannah."
  },
  {
    subtitle: "Diani Beach - Coastal Escape",
    content: "Relax along the white sands of Diani Beach, one of Africa’s most beautiful الساحلية destinations. Swim in crystal-clear waters, snorkel among coral reefs, or try water sports like kitesurfing. Enjoy fresh seafood, explore nearby forests, or take a dhow cruise along the coast for a tranquil sunset experience."
  },
  {
    subtitle: "Mount Kenya - Adventure in the Highlands",
    content: "Venture to Mount Kenya, Africa’s second-highest peak and a UNESCO World Heritage Site. Trek through diverse ecosystems ranging from lush forests to alpine meadows and glaciers. Whether you aim to summit Point Lenana or simply enjoy scenic hikes, the mountain offers a rewarding adventure for nature lovers and climbers alike."
  },
  {
    subtitle: "Lake Nakuru - Flamingo Haven",
    content: "Visit Lake Nakuru National Park, famous for its flocks of flamingos that create a pink fringe along the lake’s shores. The park is also a sanctuary for endangered rhinos and home to lions, leopards, and giraffes. Enjoy scenic viewpoints overlooking the lake and explore the surrounding woodlands and waterfalls."
  },
  {
    subtitle: "Lamu Island - Swahili Heritage",
    content: "Step back in time on Lamu Island, a UNESCO World Heritage Site known for its well-preserved Swahili culture and architecture. Wander through narrow alleyways, ride donkeys instead of cars, and admire intricately carved wooden doors. Relax on quiet beaches and experience traditional dhow sailing along the Indian Ocean."
  }
];

const zanzibarGuide = [
  {
    subtitle: "Introduction",
    content: "Welcome to Zanzibar, a tropical paradise off the coast of Tanzania known for its white sandy beaches, turquoise waters, and rich cultural heritage. This island offers a perfect mix of relaxation, history, and adventure."
  },
  {
    subtitle: "Stone Town - Cultural Heart",
    content: "Begin in Stone Town, a UNESCO World Heritage Site filled with narrow streets, historic buildings, and bustling markets. Visit the House of Wonders, the Old Fort, and learn about the island’s Swahili and Arab heritage."
  },
  {
    subtitle: "Nungwi & Kendwa - Beach Bliss",
    content: "Head north to Nungwi and Kendwa beaches for crystal-clear waters and stunning sunsets. These beaches are perfect for swimming, sunbathing, and enjoying vibrant nightlife."
  },
  {
    subtitle: "Prison Island - Giant Tortoises",
    content: "Take a short boat trip to Prison Island, home to giant Aldabra tortoises. Enjoy snorkeling in clear waters and relax on the island’s quiet beaches."
  },
  {
    subtitle: "Jozani Forest - Red Colobus Monkeys",
    content: "Visit Jozani Forest to see the rare red colobus monkeys unique to Zanzibar. Walk through lush forest trails and mangrove ecosystems."
  },
  {
    subtitle: "Spice Tours - Island Flavors",
    content: "Discover why Zanzibar is called the Spice Island. Tour local farms and learn about cloves, nutmeg, cinnamon, and other spices while tasting fresh tropical fruits."
  }
];

const rwandaGuide = [
  {
    subtitle: "Introduction",
    content: "Welcome to Rwanda, the Land of a Thousand Hills, known for its stunning landscapes, rich culture, and remarkable wildlife experiences. From misty mountains to vibrant cities and serene lakes, Rwanda offers a unique blend of adventure and tranquility."
  },
  {
    subtitle: "Kigali - Clean and Modern Capital",
    content: "Start your journey in Kigali, one of Africa’s cleanest and safest cities. Visit the Kigali Genocide Memorial for a powerful historical experience, explore local markets, and enjoy a growing food scene with both traditional and international cuisine."
  },
  {
    subtitle: "Volcanoes National Park - Gorilla Trekking",
    content: "Experience one of the world’s most unforgettable wildlife encounters by trekking to see mountain gorillas in Volcanoes National Park. Hike through lush forests and observe these gentle giants in their natural habitat."
  },
  {
    subtitle: "Lake Kivu - Relaxation by the Water",
    content: "Unwind along the shores of Lake Kivu, one of Africa’s Great Lakes. Enjoy kayaking, boat rides, or simply relax by the beach in towns like Gisenyi and Kibuye with stunning sunset views."
  },
  {
    subtitle: "Nyungwe Forest - Canopy Walk Adventure",
    content: "Explore Nyungwe Forest National Park, home to diverse primates and bird species. Walk along the famous canopy bridge suspended high above the forest and discover scenic hiking trails."
  },
  {
    subtitle: "Akagera National Park - Big Five Safari",
    content: "Visit Akagera National Park for a classic safari experience. Spot lions, elephants, rhinos, and more while enjoying game drives and boat safaris along Lake Ihema."
  }
];

const tanzaniaGuide = [
  {
    subtitle: "Introduction",
    content: "Welcome to Tanzania, a land of vast wilderness, iconic wildlife, and natural wonders. From the Serengeti plains to Mount Kilimanjaro and the beaches of Zanzibar, Tanzania offers diverse and unforgettable experiences."
  },
  {
    subtitle: "Serengeti National Park - The Great Migration",
    content: "Explore the Serengeti, one of the world’s most famous safari destinations. Witness the Great Migration, where millions of wildebeest and zebras move across the plains, and spot predators like lions and cheetahs."
  },
  {
    subtitle: "Mount Kilimanjaro - Africa’s Highest Peak",
    content: "Challenge yourself by climbing Mount Kilimanjaro, the tallest mountain in Africa. Trek through different climate zones to reach the summit and enjoy breathtaking views."
  },
  {
    subtitle: "Ngorongoro Crater - Natural Wonder",
    content: "Visit the Ngorongoro Crater, a UNESCO World Heritage Site and one of the best places to see the Big Five. The crater’s unique ecosystem supports a high density of wildlife."
  },
  {
    subtitle: "Zanzibar - Island Escape",
    content: "Combine your safari with a visit to Zanzibar’s beautiful beaches. Relax by the ocean, explore historic Stone Town, and enjoy the island’s culture and cuisine."
  },
  {
    subtitle: "Tarangire National Park - Elephant Haven",
    content: "Discover Tarangire National Park, famous for its large elephant herds and ancient baobab trees. Enjoy quieter game drives and diverse wildlife viewing."
  }
];

export const destination_items = [
  { label: 'Kenya', href: '/destinations/kenya', image: "/popular-destinations/kenya.jpg", guide: kenyaGuide },
  { label: 'Tanzania', href: '/destinations/tanzania', image: "/popular-destinations/tanzania.jpg", guide: tanzaniaGuide },
  { label: 'Zanzibar', href: '/destinations/zanzibar', image: "/popular-destinations/zanzibar.jpg", guide: zanzibarGuide },
  { label: 'Rwanda', href: '/destinations/rwanda', image: "/popular-destinations/rwanda.jpg", guide: rwandaGuide },
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

export const tours: Tour[] = [
  {
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
    itinerary: [
      {
        day: "Day 1",
        title: "Nairobi to Maasai Mara",
        activities: [
          "Pick-up from Nairobi hotel or airport",
          "Scenic drive through the Great Rift Valley",
          "Arrival at Maasai Mara and lunch at the camp",
          "Afternoon game drive in the Maasai Mara National Reserve",
          "Dinner and overnight stay at the camp"
        ],
        image: "/popular-tours/maasai-mara-galore/maasai-mara-galore-1.jpg",
      },
      {
        day: "Day 2",
        title: "Full-Day Game Drive in Maasai Mara",
        activities: [
          "Early morning breakfast at the camp",
          "Full-day game drive with picnic lunch",
          "Big Five and big cats wildlife viewing",
          "Exploration of savannah grasslands and river ecosystems",
          "Return to camp for dinner and overnight stay"
        ],
        image: "/popular-tours/maasai-mara-galore/maasai-mara-galore-2.jpg",
      },
      {
        day: "Day 3",
        title: "Maasai Mara Exploration",
        activities: [
          "Morning game drive at sunrise",
          "Optional Maasai village visit (extra cost)",
          "Lunch and leisure time at the camp",
          "Afternoon game drive",
          "Dinner and overnight stay at the camp"
        ],
        image: "/popular-tours/maasai-mara-galore/maasai-mara-galore-3.jpg",
      },
      {
        day: "Day 4",
        title: "Maasai Mara to Nairobi",
        activities: [
          "Breakfast at the camp",
          "Check-out and departure from Maasai Mara",
          "Drive back to Nairobi",
          "Drop-off at hotel or airport"
        ],
        image: "/popular-tours/maasai-mara-galore/maasai-mara-galore-4.jpg",
      }
    ],
    link: "/tours/maasai_mara_safari",
    heroImage: "/popular-tours/maasai-mara.jpg",
    slug: "maasai_mara_safari",
    images: [
      "/popular-tours/maasai-mara-galore/maasai-mara-galore-1.jpg",
      "/popular-tours/maasai-mara-galore/maasai-mara-galore-2.jpg",
      "/popular-tours/maasai-mara-galore/maasai-mara-galore-3.jpg",
      "/popular-tours/maasai-mara-galore/maasai-mara-galore-4.jpg",
      "/popular-tours/maasai-mara-galore/maasai-mara-galore-5.jpg",
      "/popular-tours/maasai-mara-galore/maasai-mara-galore-6.jpg",
      "/popular-tours/maasai-mara-galore/maasai-mara-galore-7.jpg",
      "/popular-tours/maasai-mara-galore/maasai-mara-galore-8.jpg",
    ],
  },

  {
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
    itinerary: [
      {
        day: "Day 1",
        title: "Nairobi to Amboseli National Park",
        activities: [
          "Morning pick-up from Nairobi",
          "Drive to Amboseli National Park",
          "Arrival and lunch at the safari camp",
          "Afternoon game drive with views of Mount Kilimanjaro",
          "Dinner and overnight stay at the camp"
        ],
        image: "/popular-tours/kenya-wildlife-galore/kenya-wildlife-galore-1.jpg",
      },
      {
        day: "Day 2",
        title: "Full-Day Amboseli Game Drives",
        activities: [
          "Early morning game drive",
          "Breakfast at the camp",
          "Mid-morning and afternoon game drives",
          "Elephant viewing and wildlife photography",
          "Dinner and overnight stay at the camp"
        ],
        image: "/popular-tours/kenya-wildlife-galore/kenya-wildlife-galore-2.jpg",
      },
      {
        day: "Day 3",
        title: "Amboseli to Nairobi",
        activities: [
          "Breakfast at the camp",
          "Final short game drive (time permitting)",
          "Departure from Amboseli",
          "Drive back to Nairobi",
          "Drop-off at hotel or airport"
        ],
        image: "/popular-tours/kenya-wildlife-galore/kenya-wildlife-galore-3.jpg",
      }
    ],
    link: "/tours/kenya_wildlife_safari",
    heroImage: "/popular-tours/amboseli.jpg",
    slug: "kenya_wildlife_safari",
    images: [
      "/popular-tours/kenya-wildlife-galore/kenya-wildlife-galore-1.jpg",
      "/popular-tours/kenya-wildlife-galore/kenya-wildlife-galore-2.jpg",
      "/popular-tours/kenya-wildlife-galore/kenya-wildlife-galore-3.jpg",
      "/popular-tours/kenya-wildlife-galore/kenya-wildlife-galore-4.jpg",
      "/popular-tours/kenya-wildlife-galore/kenya-wildlife-galore-5.jpg",
      "/popular-tours/kenya-wildlife-galore/kenya-wildlife-galore-6.jpg",
      "/popular-tours/kenya-wildlife-galore/kenya-wildlife-galore-7.jpg",
      "/popular-tours/kenya-wildlife-galore/kenya-wildlife-galore-8.jpg",
    ],
  },

  {
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
    itinerary: [
      {
        day: "Day 1",
        title: "Nairobi to Lake Nakuru National Park",
        activities: [
          "Meet and greet in Nairobi",
          "Drive to Lake Nakuru National Park",
          "Lunch at the lodge",
          "Afternoon game drive with rhino and flamingo viewing",
          "Dinner and overnight stay at Sarova Lion Hill Game Lodge"
        ],
        image: "/popular-tours/kenya-luxury-galore/kenya-luxury-galore-1.jpg",
      },
      {
        day: "Day 2",
        title: "Lake Nakuru to Maasai Mara",
        activities: [
          "Breakfast at the lodge",
          "Drive to the Maasai Mara National Reserve",
          "Arrival and lunch at the camp",
          "Afternoon game drive in Maasai Mara",
          "Dinner and overnight stay at Sarova Mara Game Camp"
        ],
        image: "/popular-tours/kenya-luxury-galore/kenya-luxury-galore-2.jpg",
      },
      {
        day: "Day 3",
        title: "Full-Day Maasai Mara Safari",
        activities: [
          "Early breakfast",
          "Full-day game drive with picnic lunch",
          "Big Five and Great Migration viewing (seasonal)",
          "Wildlife photography opportunities",
          "Return to camp for dinner and overnight stay"
        ],
        image: "/popular-tours/kenya-luxury-galore/kenya-luxury-galore-3.jpg",
      },
      {
        day: "Day 4",
        title: "Maasai Mara Exploration",
        activities: [
          "Morning game drive",
          "Leisure time at the lodge",
          "Optional hot air balloon safari (extra cost)",
          "Afternoon game drive",
          "Dinner and overnight stay at the camp"
        ],
        image: "/popular-tours/kenya-luxury-galore/kenya-luxury-galore-4.jpg",
      },
      {
        day: "Day 5",
        title: "Maasai Mara Leisure Day",
        activities: [
          "Breakfast at the camp",
          "Relaxation and scenic views",
          "Optional cultural visit or nature walk",
          "Evening game drive",
          "Farewell dinner and overnight stay"
        ],
        image: "/popular-tours/kenya-luxury-galore/kenya-luxury-galore-5.jpg",
      },
      {
        day: "Day 6",
        title: "Return to Nairobi",
        activities: [
          "Breakfast at the camp",
          "Check-out and drive back to Nairobi",
          "Drop-off at hotel or airport"
        ],
        image: "/popular-tours/kenya-luxury-galore/kenya-luxury-galore-6.jpg",
      }
    ],
    link: "/tours/kenya_luxury_safari",
    heroImage: "/popular-tours/kenya-luxury.jpg",
    slug: "kenya_luxury_safari",
    images: [
      "/popular-tours/kenya-luxury-galore/kenya-luxury-galore-1.jpg",
      "/popular-tours/kenya-luxury-galore/kenya-luxury-galore-2.jpg",
      "/popular-tours/kenya-luxury-galore/kenya-luxury-galore-3.jpg",
      "/popular-tours/kenya-luxury-galore/kenya-luxury-galore-4.jpg",
      "/popular-tours/kenya-luxury-galore/kenya-luxury-galore-5.jpg",
      "/popular-tours/kenya-luxury-galore/kenya-luxury-galore-6.jpg",
      "/popular-tours/kenya-luxury-galore/kenya-luxury-galore-7.jpg",
      "/popular-tours/kenya-luxury-galore/kenya-luxury-galore-8.jpg",
    ],
  },
  {
    destination: "Rwanda",
    dates: "Anytime",
    duration: "3 Days / 2 Nights",
    group_size: "Max 12 People",
    price: "From: USD $2,150.00",
    title: "3-Day Rwanda Gorilla Trekking Experience",
    intro: "Embark on a once-in-a-lifetime journey into the misty mountains of Rwanda. This short but powerful adventure brings you face-to-face with endangered mountain gorillas, combined with rich culture and breathtaking scenery in the Land of a Thousand Hills.",
    included: [
      "3 days / 2 nights Rwanda safari",
      "Gorilla trekking permit",
      "Transport from Kigali to Volcanoes National Park and back",
      "Professional English-speaking guide/driver",
      "2 nights’ accommodation near Volcanoes National Park",
      "All meals during the safari",
      "Guided forest trekking experience"
    ],
    excluded: [
      "International flights",
      "Visa fees and travel insurance",
      "Personal expenses (tips, drinks, souvenirs)",
      "Optional activities not listed",
      "Anything not explicitly mentioned"
    ],
    activities: [
      "Gorilla trekking in Volcanoes National Park",
      "Scenic drives through Rwanda’s hills",
      "Cultural visits to local communities",
      "Nature walks and photography",
      "City exploration in Kigali"
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Kigali to Volcanoes National Park",
        activities: [
          "Arrival and pick-up in Kigali",
          "City tour including Kigali Genocide Memorial",
          "Drive to Volcanoes National Park",
          "Check-in and dinner at lodge"
        ],
        image: "/popular-tours/rwanda-gorilla/rwanda-1.jpg",
      },
      {
        day: "Day 2",
        title: "Gorilla Trekking Experience",
        activities: [
          "Early breakfast and briefing",
          "Guided gorilla trekking in the forest",
          "Observe mountain gorillas in their habitat",
          "Return to lodge for relaxation and dinner"
        ],
        image: "/popular-tours/rwanda-gorilla/rwanda-2.jpg",
      },
      {
        day: "Day 3",
        title: "Return to Kigali",
        activities: [
          "Breakfast at the lodge",
          "Optional cultural village visit",
          "Drive back to Kigali",
          "Drop-off at airport or hotel"
        ],
        image: "/popular-tours/rwanda-gorilla/rwanda-3.jpg",
      }
    ],
    link: "/tours/rwanda_gorilla_trekking",
    heroImage: "/popular-tours/rwanda-gorilla/rwanda-3.jpg",
    slug: "rwanda_gorilla_trekking",
    images: [
      "/popular-tours/rwanda-gorilla/rwanda-1.jpg",
      "/popular-tours/rwanda-gorilla/rwanda-2.jpg",
      "/popular-tours/rwanda-gorilla/rwanda-3.jpg",
      "/popular-tours/rwanda-gorilla/rwanda-4.jpg",
    ],
  },
  {
    destination: "Tanzania",
    dates: "Anytime",
    duration: "5 Days / 4 Nights",
    group_size: "Max 16 People",
    price: "From: USD $2,480.00",
    title: "5-Day Serengeti & Ngorongoro Safari",
    intro: "Discover Tanzania’s legendary wildlife destinations on this immersive safari through the Serengeti and Ngorongoro Crater. Experience vast plains, incredible wildlife encounters, and some of Africa’s most iconic landscapes.",
    included: [
      "5 days / 4 nights Tanzania safari",
      "Transport in a 4x4 safari vehicle",
      "Professional safari guide/driver",
      "Game drives in Serengeti and Ngorongoro",
      "Accommodation in safari lodges/camps",
      "All meals during the safari",
      "Park entry fees"
    ],
    excluded: [
      "International flights",
      "Visa fees and travel insurance",
      "Personal expenses",
      "Tips and gratuities",
      "Optional activities not listed"
    ],
    activities: [
      "Game drives in Serengeti National Park",
      "Wildlife viewing in Ngorongoro Crater",
      "Big Five safari experience",
      "Scenic photography",
      "Birdwatching"
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Arusha to Serengeti",
        activities: [
          "Pick-up from Arusha",
          "Drive to Serengeti",
          "Afternoon game drive",
          "Dinner and overnight stay"
        ],
        image: "/popular-tours/tanzania-safari/tanzania-1.jpg",
      },
      {
        day: "Day 2",
        title: "Full-Day Serengeti Safari",
        activities: [
          "Early morning game drive",
          "Full-day wildlife exploration",
          "Picnic lunch in the park",
          "Dinner and overnight stay"
        ],
        image: "/popular-tours/tanzania-safari/tanzania-2.jpg",
      },
      {
        day: "Day 3",
        title: "Serengeti Exploration",
        activities: [
          "Morning game drive",
          "Leisure time at camp",
          "Afternoon safari drive",
          "Dinner and overnight stay"
        ],
        image: "/popular-tours/tanzania-safari/tanzania-3.jpg",
      },
      {
        day: "Day 4",
        title: "Ngorongoro Crater",
        activities: [
          "Drive to Ngorongoro",
          "Crater game drive",
          "Wildlife viewing",
          "Dinner and overnight stay"
        ],
        image: "/popular-tours/tanzania-safari/tanzania-4.jpg",
      },
      {
        day: "Day 5",
        title: "Return to Arusha",
        activities: [
          "Breakfast at lodge",
          "Drive back to Arusha",
          "Drop-off at hotel or airport"
        ],
        image: "/popular-tours/tanzania-safari/tanzania-5.jpg",
      }
    ],
    link: "/tours/tanzania_safari",
    heroImage: "/popular-tours/tanzania-safari/tanzania-5.jpg",
    slug: "tanzania_safari",
    images: [
      "/popular-tours/tanzania-safari/tanzania-1.jpg",
      "/popular-tours/tanzania-safari/tanzania-2.jpg",
      "/popular-tours/tanzania-safari/tanzania-3.jpg",
      "/popular-tours/tanzania-safari/tanzania-4.jpg",
      "/popular-tours/tanzania-safari/tanzania-5.jpg",
    ],
  },
  {
    destination: "Zanzibar",
    dates: "Anytime",
    duration: "4 Days / 3 Nights",
    group_size: "Max 14 People",
    price: "From: USD $980.00",
    title: "4-Day Zanzibar Beach & Culture Escape",
    intro: "Escape to the tropical paradise of Zanzibar, where turquoise waters, white sandy beaches, and rich Swahili culture create the perfect island getaway. Relax, explore, and indulge in this unforgettable coastal experience.",
    included: [
      "4 days / 3 nights Zanzibar stay",
      "Airport transfers",
      "Accommodation in beach resort",
      "Daily breakfast",
      "Stone Town guided tour",
      "Spice farm tour",
    ],
    excluded: [
      "Flights to/from Zanzibar",
      "Visa fees and travel insurance",
      "Personal expenses",
      "Optional excursions",
      "Meals not mentioned"
    ],
    activities: [
      "Relaxing on white sandy beaches",
      "Stone Town cultural tour",
      "Spice farm experience",
      "Snorkeling and ocean activities",
      "Sunset dhow cruise (optional)"
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Arrival in Zanzibar",
        activities: [
          "Arrival at Zanzibar Airport",
          "Transfer to beach resort",
          "Check-in and relaxation",
          "Dinner and overnight stay"
        ],
        image: "/popular-tours/zanzibar/zanzibar-1.jpg",
      },
      {
        day: "Day 2",
        title: "Stone Town & Spice Tour",
        activities: [
          "Breakfast at the hotel",
          "Guided Stone Town tour",
          "Visit spice plantations",
          "Return to hotel for relaxation"
        ],
        image: "/popular-tours/zanzibar/zanzibar-2.jpg",
      },
      {
        day: "Day 3",
        title: "Beach & Ocean Activities",
        activities: [
          "Free day at the beach",
          "Optional snorkeling or dhow cruise",
          "Relaxation and leisure",
          "Dinner and overnight stay"
        ],
        image: "/popular-tours/zanzibar/zanzibar-3.jpg",
      },
      {
        day: "Day 4",
        title: "Departure",
        activities: [
          "Breakfast at the hotel",
          "Check-out",
          "Transfer to airport"
        ],
        image: "/popular-tours/zanzibar/zanzibar-4.jpg",
      }
    ],
    link: "/tours/zanzibar_escape",
    heroImage: "/popular-tours/zanzibar/zanzibar-4.jpg",
    slug: "zanzibar_escape",
    images: [
      "/popular-tours/zanzibar/zanzibar-1.jpg",
      "/popular-tours/zanzibar/zanzibar-2.jpg",
      "/popular-tours/zanzibar/zanzibar-3.jpg",
      "/popular-tours/zanzibar/zanzibar-4.jpg",
    ],
  },
]

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

export const teamMembers = [
  {
    image: "/team/lornah.jpg",
    name: "Lornah Tangus",
    designation: "Founder, Travel & Tour Specialist",
    description:
      "With over 15 years of experience in the travel industry, Lornah leads Cedro Adventures with a passion for creating meaningful, well-curated travel experiences that connect people to places and cultures."
  },
  {
    image: "/team/kelvin.jpg",
    name: "Kelvin Kimutai",
    designation: "Finance & Operations Manager",
    description:
      "Kelvin oversees finance and operations, ensuring that every tour runs smoothly, sustainably, and efficiently while maintaining the highest standards of service and accountability."
  },
  {
    image: "/team/ruto.jpg",
    name: "Emmanuel Kipruto",
    designation: "Digital Marketing",
    description:
      "Emmanuel drives Cedro Adventures' digital presence, crafting engaging content and marketing strategies that connect travelers with inspiring destinations and unforgettable experiences."
  },
  {
    image: "/team/jennifer.jpg",
    name: "Jennifer Bor",
    designation: "Tour Coordinator",
    description:
      "Jennifer coordinates tour logistics, ensuring every itinerary runs smoothly while delivering seamless and well-organized travel experiences."
  },
  {
    image: "/team/justus.jpg",
    name: "Justus Kimtai",
    designation: "Software Developer",
    description:
      "Justus designs and builds the digital systems behind Cedro Adventures, ensuring seamless user experiences, reliable platforms, and scalable technology that supports the company’s growth."
  }
];

export const faqs = [
  {
    question: "How do I book a safari with Cedro Adventures?",
    answer:
      "You can book directly through our website by selecting your preferred tour and submitting a booking request. Our team will then contact you to finalize the details and confirm availability."
  },
  {
    question: "Are your safaris suitable for first-time travelers?",
    answer:
      "Absolutely. Our itineraries are designed to be enjoyable for both first-time visitors and experienced travelers, with professional guides ensuring comfort, safety, and enriching experiences throughout the journey."
  },
  {
    question: "What is included in the safari price?",
    answer:
      "Each safari includes accommodation, transport, professional guide services, scheduled game drives, and meals as specified in the tour details. Anything not included is clearly listed under the ‘Excluded’ section."
  },
  {
    question: "Can tours be customized?",
    answer:
      "Yes. We specialize in tailor-made experiences and can customize itineraries based on your preferences, travel dates, group size, and interests."
  },
  {
    question: "When is the best time to go on safari?",
    answer:
      "Safaris run year-round, but the best time depends on what you want to experience. Our team will advise you based on wildlife movements, weather conditions, and your travel goals."
  }
];

export const testimonials = [
  {
    image_right: true,
    image: "/client-testimonials/client1.jpg",
    name: "Melinda P.",
    testimonial:
      "Cedro Adventures made my holiday! The trip to Maasai Mara and Amboseli were truly life changing for me. The itinerary was so well put together and the general service from the experts from Cedro Adventures was one of the best.",
    country: "USA",
  },
  {
    image_right: false,
    image: "/client-testimonials/client2.jpg",
    name: "Selina W.",
    testimonial:
      "Cedro Adventures are the best! What I loved most was their attention to detail in their service. The itinierary was great, I personally recommend Kenya Luxury Safari, which entails a safari to the Maasai Mara and Lake Nakuru, a total experience!",
    country: "France",
  },
  {
    image_right: true,
    image: "/client-testimonials/client3.jpg",
    name: "Jack H.",
    testimonial:
      "I highly recommend travelling with Cedro Adventures. They are highly professional and take their service seriously. Trust me, coming from a poor tour agency safari experience, Cedro Adventures were such a breather. I don't know why I hadn't already heard of them.",
    country: "Canada",
  },
];