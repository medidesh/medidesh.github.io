export interface PharmacyData {
    slug: string;
    name: string;
    bnName: string; // Bangla Name
    tagline: string;
    address: string;
    phone: string;
    email?: string;
    logo: string;
    colors: {
        primary: string;
        secondary: string;
        accent: string;
    };
    social?: {
        facebook?: string;
        whatsapp?: string;
    };
    mapUrl?: string;
    owner?: {
        name: string;
        role: string;
        image: string;
        bio: string;
    };
    landmark?: string;
    openTime?: string;
    closeTime?: string;
    offDay?: string;
    lastUpdate?: string;
    notices?: string[];
    returnPolicy?: string;
}
