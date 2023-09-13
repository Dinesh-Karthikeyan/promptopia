"use client"

import { useSession } from "next-auth/react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import Form from "@components/Form"


const CreatePost = () => {
    const {data:session} =  useSession()
    const router = useRouter() 
    const [post, setPost] = useState({
        prompt: "",
        tag: ""
    })
    const [submitting, setSubmitting] = useState(false)
    const createPrompt = async (e) => {
        e.preventDefault()
        setSubmitting(true)

        try {
            const response = await fetch('/api/prompt/new', {
                method:"POST",
                body: JSON.stringify({
                    userId: session?.user.id,
                    prompt: post.prompt,
                    tag: post.tag
                })
            })
            if (response.ok) {
                router.push("/")
            }
            setSubmitting(false)
        } catch (error) {
            console.log(error)
            setSubmitting(false)
        }
    }
    return (
        <Form
            type="Create"
            post={post}
            submitting={submitting}
            setPost={setPost}
            handleSubmit={createPrompt}
        />
    )
}

export default CreatePost