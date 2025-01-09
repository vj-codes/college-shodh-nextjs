// data/SeoData.js

// Base URL for SEO (can be changed based on environment)
export const BASE_URL = process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000'
    : 'https://collegeshodh-nextjs.vercel.app';  // Updated to your Vercel URL for production

// Helper function to handle null or undefined values with fallback
const getValue = (value, fallback = '') => value || fallback;

// Routes
export const ROUTES = {
    home: '/',
    about: '/about',
    contact: '/contact',
    services: '/services',
    error404: '*', // 404 page
};

// Generic Placeholder Image URL (if no actual image is found)
const GENERIC_PLACEHOLDER_IMAGE = 'https://college-shodh-nextjs.vercel.app/Collegeshodh%20logo_page-0001.png';

// Image URLs with base URL
export const IMAGE_URLS = {
    aboutImage: getValue(`${BASE_URL}/about-image.jpg`, GENERIC_PLACEHOLDER_IMAGE),
    contactImage: getValue(`${BASE_URL}/contact-image.jpg`, GENERIC_PLACEHOLDER_IMAGE),
    logo: getValue(`${BASE_URL}/Collegeshodh%20logo_page-0001.png`, GENERIC_PLACEHOLDER_IMAGE), // Updated logo URL
};

// SEO Data Object
export const seoData = {
    about: {
        title: getValue("About Us | College Shodh", "About Us | College Shodh"),
        description: getValue("3Learn more about College Shodh, our mission, team, and values.", "About College Shodh."),
        url: getValue(`${BASE_URL}${ROUTES.about}`, `${BASE_URL}${ROUTES.about}`),
        image: IMAGE_URLS.aboutImage,      // Dynamically generate image URL with fallback
        structuredData: {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": getValue("College Shodh", "College Shodh"),
            "url": getValue(`${BASE_URL}${ROUTES.about}`, `${BASE_URL}${ROUTES.about}`),
            "logo": IMAGE_URLS.logo,  // Dynamically generate logo URL with fallback
            "contactPoint": {
                "@type": "ContactPoint",
                "telephone": getValue("+1-800-123-4567", "+1-800-123-4567"),
                "contactType": getValue("Customer Support", "Customer Support"),
                "areaServed": getValue("IN", "IN"), // Default to India
                "availableLanguage": getValue("English", "English")
            }
        }
    },
    contact: {
        title: getValue("Contact Us | College Shodh", "Contact Us | College Shodh"),
        description: getValue("Get in touch with College Shodh for support or inquiries.", "Contact College Shodh."),
        url: getValue(`${BASE_URL}${ROUTES.contact}`, `${BASE_URL}${ROUTES.contact}`),
        image: IMAGE_URLS.contactImage,      // Dynamically generate image URL with fallback
        structuredData: {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": getValue("College Shodh", "College Shodh"),
            "url": getValue(`${BASE_URL}${ROUTES.contact}`, `${BASE_URL}${ROUTES.contact}`),
            "logo": IMAGE_URLS.logo,  // Dynamically generate logo URL with fallback
            "contactPoint": {
                "@type": "ContactPoint",
                "telephone": null,
                "contactType": getValue("Support", "Support"),
                "areaServed": getValue("IN", "IN"), // Default to India
                "availableLanguage": getValue("English", "English")
            }
        }
    }
    // Add more pages as needed (e.g., home, services)
};
