export type AnimalType = "dogs" | "cats" | "birds";

export type Provider = {
  id: string;
  name: string;
  area: string;
  distance: number;
  rating: number;
  reviews: number;
  fee: number;
  services: string[];
  animals: AnimalType[];
  hours: string;
  openNow: boolean;
  emergency: boolean;
  phone: string;
  image: string;
  alt: string;
};

export const animalTypes: { id: AnimalType; label: string }[] = [
  { id: "dogs", label: "Dogs" },
  { id: "cats", label: "Cats" },
  { id: "birds", label: "Birds & exotic pets" },
];

export const serviceFilters = ["Surgery", "Vaccinations", "Home visits"];

export const providers: Provider[] = [
  {
    id: "green-paws",
    name: "Green Paws Veterinary Clinic",
    area: "Indiranagar",
    distance: 1.2,
    rating: 4.8,
    reviews: 126,
    fee: 600,
    services: ["Vaccinations", "General care", "Surgery"],
    animals: ["dogs", "cats"],
    hours: "Open now · until 9 pm",
    openNow: true,
    emergency: false,
    phone: "+91 80 4567 1200",
    image: "/images/vet-care.jpg",
    alt: "Veterinarian comforting a cat during a check-up",
  },
  {
    id: "companion",
    name: "Companion Animal Hospital",
    area: "Domlur",
    distance: 2.8,
    rating: 4.7,
    reviews: 94,
    fee: 750,
    services: ["Emergency care", "Diagnostics", "ICU"],
    animals: ["dogs", "cats", "birds"],
    hours: "Open 24 hours",
    openNow: true,
    emergency: true,
    phone: "+91 80 4567 3400",
    image: "/images/lab.jpg",
    alt: "Operating theatre prepared for emergency animal surgery",
  },
  {
    id: "kindred",
    name: "Kindred Pet Care",
    area: "Koramangala",
    distance: 4.1,
    rating: 4.9,
    reviews: 82,
    fee: 500,
    services: ["General care", "Home visits", "Dental"],
    animals: ["dogs", "cats", "birds"],
    hours: "Open now · until 8 pm",
    openNow: true,
    emergency: false,
    phone: "+91 80 4567 8800",
    image: "/images/clinic.jpg",
    alt: "Golden retriever puppy running through a sunlit garden",
  },
];

export const careCategories = [
  { id: "vets", label: "Vet clinics" },
  { id: "hospitals", label: "Hospitals" },
  { id: "boarding", label: "Boarding" },
  { id: "diagnostics", label: "Diagnostics" },
  { id: "ambulances", label: "Ambulances" },
  { id: "ngos", label: "NGOs & rescue" },
] as const;

export type CareCategoryId = (typeof careCategories)[number]["id"];

export const searchNeedOptions = [
  "Veterinary clinics",
  "Hospitals",
  "Boarding",
  "Diagnostics",
  "Ambulances",
  "NGOs & rescue",
];
