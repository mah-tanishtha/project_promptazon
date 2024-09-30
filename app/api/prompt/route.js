// import Prompt from "@models/prompt";
// import { connectToDB } from "@utils/database";

// export const GET = async (request) => {
//     try {
//         await connectToDB();
        
//         const prompts = await Prompt.find({}).populate('creator').exec();
//         console.log("data",JSON.stringify(prompts, null, 2)); // Check the result

//         return new Response(JSON.stringify(prompts), { status: 200 });
//     } catch (error) {
//         console.error("Error fetching prompts:", error);
//         return new Response("Failed to fetch all prompts", { status: 500 });
//     }
// };

import Prompt from "@models/prompt";
import { connectToDB } from "@utils/database";

export const GET = async(request)=>{
    try{
        await connectToDB();

        const prompts = await Prompt.find({}).populate('creator');
        return  new Response(JSON.stringify(prompts))
    }catch(error){
        return new Response("Failed to Fetch all prompts",{ status:500})
    }

}

