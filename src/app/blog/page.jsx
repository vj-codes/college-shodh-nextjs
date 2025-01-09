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