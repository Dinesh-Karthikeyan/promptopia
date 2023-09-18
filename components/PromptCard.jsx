"use client"

import { useState } from "react";
import Image from "next/image";

const PromptCard = ({ post , handleTagClick}) => {
  const [copied, setCopied] = useState("")
  const handleCopy = () => {
    setCopied(post.prompt)
    navigator.clipboard.writeText(post.prompt)
    setTimeout(()=>setCopied(""), 3000)
  }
  return (
    <div className="prompt_card">
      <div className="flex justify-between gap-5 items-start ">
        <div className="flex flex-1 justify-start items-center gap-3 cursor-pointer ">
          <Image
            src={post.creator.image}
            alt="user profile"
            height={40}
            width={40}
            className="rounded-full object-contain"
          />

          <div className="flex flex-col">
            <h3>{post.creator.username}</h3>
            <p className="font-inter text-gray-600">{post.creator.email}</p>
          </div>
        </div>

        <div className="copy_btn" onClick={()=>{handleCopy()}}>
          <Image 
            src={copied == post.prompt?"assets/icons/tick.svg":"assets/icons/copy.svg"}
            width={12}
            height={12}
            alt="copy icon"
            className="rounded-full object-contain"
          />
        </div>        
      </div>
      <div className="mt-5 font-satoshi font-medium text-gray-700 ">
        {post.prompt}
      </div>
      <div className="mt-5 font-inter font-sm blue_gradient cursor-pointer" onClick={()=> handleTagClick && handleTagClick(post.tag)}>
        {post.tag}
      </div>
    </div>
  );
};

export default PromptCard;
