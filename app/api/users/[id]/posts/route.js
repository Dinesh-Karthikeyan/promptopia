import Prompt from "@models/prompt";
import { connectToDB } from "@utils/database"

export const GET = async (req, { params }) => {
    try {
        connectToDB();
        const response = await Prompt.find({creator:params.id}).populate('creator')
        return new Response(JSON.stringify(response), {status:200})
    } catch (error) {
        console.log(error)
        return new Response("Failed to get user's prompts", {status:500})
    }
}