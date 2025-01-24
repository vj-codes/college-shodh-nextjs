import { client } from "@/sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import Link from "next/link";

const POSTS_QUERY = `*[_type == "post" && defined(publishedAt)] | order(publishedAt desc) {
  _id,
  title,
  slug,
  publishedAt,
  mainImage {
    asset -> {
      _id,
      url
    },
    alt
  }
}`;
const builder = imageUrlBuilder(client);

function urlFor(source) {
  return builder.image(source);
}

export const revalidate = 30;

export default async function BlogListPage() {
  const posts = await client.fetch(POSTS_QUERY);

  return (
    <main className="container mx-auto  p-10">
    <h1 className="text-3xl font-extrabold mb-12">Blog Posts</h1>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {posts.length > 0 ? (
        posts.map((post) => (
          <PostCard key={post._id} post={post} />
        ))
      ) : (
        <p>No blog posts found.</p>
      )}
    </div>
  </main>
  
  );
}

// Post Card Component
const PostCard = ({ post }) => {
  const postImageUrl = post.mainImage?.asset
    ? urlFor(post.mainImage).width(800).height(450).url()
    : "/placeholder.jpg";

  return (
    <div className="border rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300">
      <Link href={`/blog/${post.slug.current}`}>
        <img
          src={postImageUrl}
          alt={post.mainImage?.alt || post.title}
          className="w-full h-56 object-cover"
        />
        <div className="p-6">
          <h2 className="text-3xl font-bold">{post.title}</h2>
          <p className="text-gray-500 mt-2">
            {new Date(post.publishedAt).toLocaleDateString()}
          </p>
        </div>
      </Link>
    </div>
  );
};



























// import { client } from "@/sanity/client";
// import imageUrlBuilder from "@sanity/image-url";
// import Link from "next/link";

// const POSTS_QUERY = `*[_type == "post" && defined(publishedAt)] | order(publishedAt desc) {
//   _id,
//   title,
//   slug,
//   publishedAt,
//   mainImage {
//     asset -> {
//       _id,
//       url
//     },
//     alt
//   }
// }`;

// const builder = imageUrlBuilder(client);

// function urlFor(source) {
//   return builder.image(source);
// }

// export const revalidate = 30;

// export default async function BlogListPage() {
//   const posts = await client.fetch(POSTS_QUERY);

//   if (!posts.length) {
//     return (
//       <main className="container mx-auto px-6 py-12">
//         <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
//           Blog Posts
//         </h1>
//         <p className="text-center text-lg text-gray-600">
//           No blog posts found.
//         </p>
//       </main>
//     );
//   }

//   const [featuredPost, ...regularPosts] = posts;

//   return (
//     <main className="container mx-auto px-6 py-12">
//       <h1 className="text-5xl font-extrabold mb-12 text-center text-gray-900">
//         Latest Insights & Stories
//       </h1>

//       {/* Featured Post Section */}
//       <section className="mb-12">
//         <FeaturedPost post={featuredPost} />
//       </section>

//       {/* Complex Grid for Regular Posts */}
//       <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
//         {regularPosts.map((post) => (
//           <PostCard key={post._id} post={post} />
//         ))}
//       </section>
//     </main>
//   );
// }

// // Featured Post Component
// const FeaturedPost = ({ post }) => {
//   const postImageUrl = post.mainImage?.asset
//     ? urlFor(post.mainImage).width(1200).height(600).url()
//     : "/placeholder.jpg";

//   return (
//     <Link href={`/blog/${post.slug.current}`}>
//       <div className="relative rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 group">
//         <img
//           src={postImageUrl}
//           alt={post.mainImage?.alt || post.title}
//           className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-300"
//         />
//         <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-75"></div>
//         <div className="absolute bottom-6 left-6 text-white">
//           <h2 className="text-4xl font-bold">{post.title}</h2>
//           <p className="text-sm mt-2">
//             {new Date(post.publishedAt).toLocaleDateString(undefined, {
//               year: "numeric",
//               month: "long",
//               day: "numeric",
//             })}
//           </p>
//         </div>
//       </div>
//     </Link>
//   );
// };

// // Regular Post Card Component
// const PostCard = ({ post }) => {
//   const postImageUrl = post.mainImage?.asset
//     ? urlFor(post.mainImage).width(800).height(450).url()
//     : "/placeholder.jpg";

//   return (
//     <Link href={`/blog/${post.slug.current}`}>
//       <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 group">
//         <div className="relative">
//           <img
//             src={postImageUrl}
//             alt={post.mainImage?.alt || post.title}
//             className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
//           />
//         </div>
//         <div className="p-5">
//           <h3 className="text-lg font-semibold text-gray-800 group-hover:text-indigo-600 transition-colors duration-300">
//             {post.title}
//           </h3>
//           <p className="text-sm text-gray-500 mt-2">
//             {new Date(post.publishedAt).toLocaleDateString(undefined, {
//               year: "numeric",
//               month: "long",
//               day: "numeric",
//             })}
//           </p>
//         </div>
//       </div>
//     </Link>
//   );
// };
