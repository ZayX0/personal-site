import sql from "mssql";

export default function Blog() {
  const getBlogEntries = async () => {
    try {
      await sql.connect("Server=localhost");
    } catch (e) {}
  };
  return (
    <div>
      <button>Create New Post</button>
      <button>See Previous Posts</button>
    </div>
  );
}
