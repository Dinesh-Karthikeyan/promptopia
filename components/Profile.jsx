import PromptCard from "./PromptCard";

const Profile = ({ name, desc, data, handleEdit, handleDelete }) => {
  return (
    <section className="w-full">
      <h1 className="head_text text-left">My Profile</h1>
      <p className="desc text-left">{desc}</p>
      <div className="prompt_layout">
        {data.map((post) => (
          <PromptCard
            post={post}
            handleTagClick={() => { }}
          />
        ))}
      </div>
    </section>
  );
};

export default Profile;
