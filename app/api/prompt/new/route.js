import Prompt from "@models/prompt"
import { connectToDB } from "@utils/database"

export const POST = async (req)=> {
    const {userId, prompt, tag} = await req.json()
    
    try {
        // await connectToDB()
        // const newPrompt = new Prompt({
        //     creator: userId,
        //     prompt,
        //     tag
        // })
        
        // await newPrompt.save()
        
        await Prompt.create({
            creator: userId,
            prompt,
            tag
        })

        return new Response("Prompt created successfully", {status:201})
        // return new Response(JSON.stringify(newPrompt), {
        //     status:201
        // })
    } catch (error) {
        console.log(error)
        return new Response("Failed to create a new Prompt", {status:500})
    }
}