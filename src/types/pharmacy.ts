export interface PharmacyCategory {
    name: string;
    subtitle: string;
    icon: string;
    color: string;
    bg: string;
    border: string;
}

export interface PharmacyData {
    slug: string;
    name: string;
    bnName: string; // Bangla Name
    tagline: string;
    address: string;
    phone: string;
    email?: string;
    logo: string;
    heroImage?: string;
    licenseNo?: string;
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
        education?: string;
        experience?: string;
    };
    landmark?: string;
    openTime?: string;
    closeTime?: string;
    offDay?: string;
    lastUpdate?: string;
    notices?: string[];
    categories?: PharmacyCategory[];
    returnPolicy?: string;
}
