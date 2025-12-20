import { PharmacyData } from "@/types/pharmacy";

export const pharmacies: PharmacyData[] = [
    {
        slug: "wellbeing",
        name: "Well-being Pharmacy",
        bnName: "ওয়েল-বিং ফার্মেসি",
        tagline: "আপনার বিশ্বস্ত সেবিকা",
        address: "১২২/এ, মিরপুর রোড, ঢাকা-১২১৬",
        phone: "01712-345678",
        logo: "/assets/pharmacy/wellbeing-logo.png", // Verify specific asset paths later
        colors: {
            primary: "pharma-green", // Utilizing tailwind classes or specific hex codes if we refactor tailwind config
            secondary: "pharma-blue",
            accent: "orange-500",
        },
        social: {
            whatsapp: "https://wa.me/8801712345678",
        },
        owner: {
            name: "ডা. মো: রফিকুল ইসলাম",
            role: "চিফ ফার্মাসিস্ট ও স্বত্বাধিকারী",
            image: "https://img.freepik.com/free-photo/portrait-smiling-male-doctor_171337-1532.jpg",
            bio: "২০ বছরের অভিজ্ঞতা সম্পন্ন একজন রেজিস্টার্ড ফার্মাসিস্ট। আমি বিশ্বাস করি সঠিক পরামর্শই দ্রুত সুস্থতার চাবিকাঠি।",
        },
        landmark: "সিটি ব্যাংকের বিপরীতে",
        openTime: "08:00 AM",
        closeTime: "11:00 PM",
        offDay: "Friday",
        lastUpdate: "আজ বিকাল ৫:০০",
        notices: ["আগামীকাল ঈদের ছুটিতে ফার্মেসি বন্ধ থাকবে।", "নতুন স্টক এসেছে: নাপা এক্সটেন্ড এবং সেকলো।"],
        returnPolicy: "কিনার ২৪ ঘন্টার মধ্যে ক্যাশ মেমো সহ এবং প্যাকেট অক্ষত থাকা সাপেক্ষে ফেরত বা পরিবর্তনযোগ্য। ফ্রিজ আইটেম ফেরত নেওয়া হয় না।",
    },
    {
        slug: "mababardouya",
        name: "Ma Babar Douya Pharmacy",
        bnName: "মা বাবার দোয়া ফার্মেসি",
        tagline: "সুস্থতায় আমাদের অঙ্গীকার",
        address: "বাসা-৫, রোড-২, বনশ্রী, ঢাকা",
        phone: "01999-888777",
        logo: "https://img.freepik.com/free-vector/hospital-logo-design-vector-medical-cross_53876-136743.jpg",
        colors: {
            primary: "teal-600",
            secondary: "cyan-600",
            accent: "yellow-500",
        },
        social: {
            whatsapp: "https://wa.me/8801999888777",
        },
        owner: {
            name: "হাজী মো: আব্দুল করিম",
            role: "স্বত্বাধিকারী",
            image: "https://img.freepik.com/free-photo/elderly-man-looking-camera_23-2148045667.jpg",
            bio: "আমাদের লক্ষ্য শুধুই ব্যবসা নয়, বরং মানুষের সেবা করা। ৩ দশক ধরে বনশ্রীবাসীর সেবায় নিয়োজিত।",
        },
        landmark: "বনশ্রী কেন্দ্রীয় মসজিদের পাশে",
        openTime: "09:00 AM",
        closeTime: "10:00 PM",
        offDay: "None",
        lastUpdate: "আজ দুপুর ১২:০০",
        notices: ["ভ্যাকসিন স্টকে আছে।", "ডায়াবেটিস মাপার মেশিন পাওয়া যাচ্ছে।"],
        returnPolicy: "ওষুধ কেনার ৩ দিনের মধ্যে ফেরত নেওয়া হয়। কাটা বা ছেঁড়া স্ট্রিপ ফেরত যোগ্য নয়।",
    },
    {
        slug: "asthapharma",
        name: "Astha Pharma",
        bnName: "আস্থা ফার্মা",
        tagline: "আস্থার আরেক নাম",
        address: "দোকান-১২, মেডিকেল রোড, রংপুর",
        phone: "01600-000000",
        logo: "https://img.freepik.com/free-vector/gradient-f-logo-template_23-2149373179.jpg",
        colors: {
            primary: "blue-600",
            secondary: "indigo-600",
            accent: "pink-500",
        },
    },
    {
        slug: "noorpharmacy",
        name: "Noor Pharmacy",
        bnName: "নূর ফার্মেসি",
        tagline: "সঠিক ঔষধ, সঠিক দামে",
        address: "চৌরাস্তা মোড়, গাজীপুর",
        phone: "01800-111222",
        logo: "https://img.freepik.com/free-vector/pharmacy-logo-template_23-2148107934.jpg",
        colors: {
            primary: "emerald-600",
            secondary: "lime-600",
            accent: "red-500",
        },
    },
];
