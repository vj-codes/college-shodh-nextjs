import { PortableText } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/sanity/client";
import Link from "next/link";

const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]`;

const builder = imageUrlBuilder(client);
const urlFor = (source) => builder.image(source);

const options = { next: { revalidate: 30 } };

export default async function PostPage({ params }) {
  const post = await client.fetch(POST_QUERY, params, options);

  if (!post) {
    return <NotFound />;
  }

  return (
    <main className="container mx-auto min-h-screen max-w-3xl p-8 flex flex-col gap-6">
      <BackLink />
      <PostImage image={post.mainImage} title={post.title} />
      <PostTitle title={post.title} />
      <PostBody body={post.body} publishedAt={post.publishedAt} />
    </main>
  );
}

// Back Link Component
const BackLink = () => (
  <Link href="/" className="hover:underline text-blue-500">
    ← Back to posts
  </Link>
);

// Post Image Component
const PostImage = ({ image, title }) => {
  const postImageUrl = image
    ? urlFor(image.asset).width(550).height(310).url()
    : null;

  return (
    postImageUrl && (
      <img
        src={postImageUrl}
        alt={image.alt || title}
        className="aspect-video rounded-xl object-cover"
        width="550"
        height="310"
      />
    )
  );
};

// Post Title Component
const PostTitle = ({ title }) => (
  <h1 className="text-5xl font-extrabold mb-6">{title}</h1>
);

// Post Body Component
const PostBody = ({ body, publishedAt }) => (
  <div className="prose lg:prose-xl">
    <p className="text-gray-600">
      Published: {new Date(publishedAt).toLocaleDateString()}
    </p>
    {Array.isArray(body) && <PortableText value={body} />}
  </div>
);

// Not Found Component
const NotFound = () => (
  <main className="container mx-auto min-h-screen flex items-center justify-center">
    <p className="text-xl">Post not found</p>
  </main>
);
