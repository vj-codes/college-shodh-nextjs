import React from "react";

const page = () => {
  return (
    <div>
      <main className="container mx-auto max-w-4xl p-8">
        <h1 className="text-5xl font-extrabold mb-12">Blog Posts</h1>
      </main>
    </div>
  );
};

export default page;
// import { client } from "@/sanity/client";
// import Link from "next/link";

// const POSTS_QUERY = `*[_type == "post"] | order(publishedAt desc) {
//   _id,
//   title,
//   slug,
//   publishedAt,
//   mainImage
// };`

// const options = { next: { revalidate: 30 } };

// export default async function BlogListPage() {
//   const posts = await client.fetch(POSTS_QUERY, {}, options);
// //   console.log("posts in the blog listing page", posts);
//   return (
//     <main className="container mx-auto max-w-4xl p-8">
//       <h1 className="text-5xl font-extrabold mb-12">Blog Posts</h1>

//     </main>
//   );
// }

// // Post Card Component
// const PostCard = ({ post }) => {
//   const postImageUrl = post.mainImage
//     ? imageUrlBuilder(client).image(post.mainImage).width(800).height(450).url()
//     : "/placeholder.jpg";

//   return (
//     <div className="border rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
//       <Link href={`/post/${post.slug.current}`}>
//         <img
//           src={postImageUrl}
//           alt={post.mainImage?.alt || post.title}
//           className="w-full h-56 object-cover"
//         />
//         <div className="p-6">
//           <h2 className="text-3xl font-bold">{post.title}</h2>
//           <p className="text-gray-500 mt-2">
//             {new Date(post.publishedAt).toLocaleDateString()}
//           </p>
//         </div>
//       </Link>
//     </div>
//   );
// };
