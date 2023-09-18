"use client";

import { useState, useEffect } from "react";
import PromptCard from "@components/PromptCard";

const PromptCardList = ({ data, handleTagClick }) => {
  <div className="mt-15 prompt_layout">
    {data.map((prompt)=>{
      <PromptCard 
        key={prompt._id}
        prompt={prompt}
        handleTagClick={handleTagClick}
      />
    })}
  </div>;
};

const Feed = () => {
  const [ searchText, setSearchText ] = useState("");
  const [ posts, setPosts ] = useState([]);
  const handleSearchChange = (e) => {};
  useEffect(async () => {
    const fetchPost = async () => {
      const response = await fetch("/api/prompt");
      const data = await response.json();

      setPosts(data)
    };
    fetchPost()
  }, []);
  return (
    <section className="feed">
      <form className="w-full relative flex-center">
        <input
          type="text"
          className="search_input peer"
          placeholder="Search for prompts"
          value={searchText}
          onChange={handleSearchChange}
          required
        />
      </form>
      <div className="mt-15 prompt_layout">
      {posts.map((post) => (
        <PromptCard
          post={post}
          handleTagClick={()=>{}}
        />
      ))}
      </div>
      {/* <PromptCardList data={posts} handleTagClick={() => {}} /> */}
    </section>
  );
};

export default Feed;
