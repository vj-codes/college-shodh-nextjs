import { PortableText } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/sanity/client";
import Link from "next/link";

const builder = imageUrlBuilder(client);
const urlFor = (source) => builder.image(source);

export default async function PostPage({ params }) {
  // Query to fetch the post by slug
  const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]`;
  const post = await client.fetch(POST_QUERY, params);

  if (!post) {
    return <NotFound />;
  }

  return (
    <main className="bg-gray-50 text-gray-800 leading-relaxed font-serif">
      <article className="max-w-5xl mx-auto px-6 py-12">
        <BackLink />
        <PostImage image={post.mainImage} />
        <PostTitle title={post.title} />
        <PostMeta author={post.author} publishedAt={post.publishedAt} />
        <PostBody body={post.body} />
      </article>
    </main>
  );
}

// Back Link Component
const BackLink = () => (
  <Link
    href="/"
    className="text-gray-500 hover:text-gray-800 text-sm flex items-center mb-8 transition-colors duration-200"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5 mr-2"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M15 19l-7-7 7-7"
      />
    </svg>
    Back to posts
  </Link>
);

// Post Image Component
const PostImage = ({ image }) => {
  const postImageUrl = image
    ? urlFor(image.asset).width(1200).height(675).url()
    : null;
  return (
    postImageUrl && (
      <div className="mb-12">
        <img
          src={postImageUrl}
          alt={image.alt || "Post image"}
          className="w-full h-auto rounded-xl object-cover shadow-lg hover:shadow-2xl transition-shadow duration-300"
        />
      </div>
    )
  );
};

// Post Title Component
const PostTitle = ({ title }) => (
  <h1 className="text-5xl font-extrabold mb-6 leading-snug text-gray-900 tracking-tight">
    {title}
  </h1>
);

// Post Meta Component
const PostMeta = ({ author, publishedAt }) => (
  <div className="flex items-center text-sm text-gray-600 mb-8 space-x-4">
    <span className="font-semibold text-gray-800">
      Published on{" "}
      {new Date(publishedAt).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })}
    </span>
    <div className="w-2 h-2 rounded-full bg-gray-400"></div>
    <span>5 min read</span>
  </div>
);

// Post Body Component
const PostBody = ({ body }) => (
  <div className="prose lg:prose-xl prose-img:rounded-lg prose-img:shadow-lg prose-img:hover:shadow-xl transition-shadow duration-300 mx-auto">
    <PortableText value={body} components={richTextComponents} />
  </div>
);

// Rich Text Customization
const richTextComponents = {
  types: {
    image: ({ value }) => {
      const imageUrl = urlFor(value.asset).width(1200).url();
      return (
        <img
          src={imageUrl}
          alt={value.alt || "Image"}
          className="w-full h-auto rounded-xl shadow-lg my-8"
        />
      );
    },
  },
  block: {
    h1: ({ children }) => (
      <h1 className="text-4xl font-extrabold mt-8 mb-6 text-gray-900">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-3xl font-semibold mt-6 mb-4 text-gray-800">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-2xl font-medium mt-6 mb-3 text-gray-700">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-xl font-semibold mt-6 mb-3 text-gray-600">
        {children}
      </h4>
    ),
    normal: ({ children }) => (
      <p className="mt-4 mb-4 text-gray-700">{children}</p>
    ),
  },
};

// Not Found Component
const NotFound = () => (
  <main className="container mx-auto min-h-screen flex items-center justify-center">
    <p className="text-xl font-medium text-gray-700">Post not found</p>
  </main>
);
