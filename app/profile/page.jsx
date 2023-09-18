"use client"
import Profile from "@components/Profile";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

const MyProfile = () => {
  const handleDelete = () => { };
  const handleEdit = () => { };
  const {data:session} = useSession()
  const [posts, setPosts] = useState([])
  useEffect(() => {
    const fetchPost = async() => {
      const response = await fetch(`/api/users/${session?.user.id}/posts`)
      const data = await response.json()
      setPosts(data)
    }

    if (session?.user) fetchPost()
  }, [])


  return (
    <Profile
      name="My"
      desc="Welcome to your personalized home page"
      data={posts}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
    />
  );
};

export default MyProfile