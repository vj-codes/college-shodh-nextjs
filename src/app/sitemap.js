import { client as sanityClient } from '@/sanity/client';

export default async function sitemap() {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

    // Static routes
    const staticRoutes = [
        { url: `${baseUrl}/`, lastModified: new Date().toISOString() },
        { url: `${baseUrl}/about`, lastModified: new Date().toISOString() },
        { url: `${baseUrl}/colleges`, lastModified: new Date().toISOString() },
        { url: `${baseUrl}/blog`, lastModified: new Date().toISOString() },
    ];

    // Fetch blog slugs from Sanity
    const query = `*[_type == "post" && defined(publishedAt)] | order(publishedAt desc) {
    slug,
    publishedAt
  }`;
    const blogs = await sanityClient.fetch(query);
// console.log(blogs)
    // Map dynamic blog slugs
    const blogRoutes = blogs.map((blog) => ({
        url: `${baseUrl}/blog/${blog.slug.current}`,
        lastModified: blog._updatedAt || new Date().toISOString(),
    }));

    // Combine static and dynamic routes
    return [...staticRoutes, ...blogRoutes];
}
