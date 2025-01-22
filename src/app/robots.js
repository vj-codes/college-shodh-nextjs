const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
export default function robots() {
    return {
        rules: [
            // Allow Googlebot to crawl the entire site except private pages and /studio
            {
                userAgent: 'Googlebot',
                allow: '/',
                disallow: ['/private/', '/admin/', '/studio'], // Added /studio here
            },
            // Disallow Applebot and Bingbot from crawling the entire site
            {
                userAgent: ['Applebot', 'Bingbot'],
                disallow: ['/'],
            },
            // Block other bots from crawling /private, /admin, and /studio
            {
                userAgent: '*',
                disallow: ['/private/', '/admin/', '/studio'], // Added /studio here as well
            },
        ],
        sitemap: `${baseUrl}/sitemap.xml`, // Change to production URL
    }
}
