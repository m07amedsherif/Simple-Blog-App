import { useEffect, useState } from "react";
import Post from "../Post/Post";
import { getPosts } from "../getPost";
import Loading from "../Loading/Loading";

export default function Feed() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPosts = async () => {
      const data = await getPosts();
      setPosts(data);
      setLoading(false);
    };

    loadPosts();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="min-h-screen bg-[#432DD7] from-gray-100 to-indigo-50 flex justify-center py-10 px-4">
      <div className="w-full max-w-2xl space-y-6">
        <h1 className="text-4xl font-extrabold text-center text-white mb-8 tracking-wide italic">
          Your Feed
        </h1>

        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
