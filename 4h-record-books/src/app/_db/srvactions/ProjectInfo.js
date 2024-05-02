"use server"

import { Project } from "@/app/_db/models/project"
import connectDB from "@/app/lib/mongodb";
import { revalidatePath } from "next/cache";
import { ObjectId } from "mongodb";
import { getSession } from "@auth0/nextjs-auth0";

export async function getProjectInfo(uid, projectId) {
    try {
        const db = await connectDB();
        const user = await Project.findOne({ _id: project, uid: uid });
        return JSON.parse(JSON.stringify(user));
    } catch (error) {
        console.error("getProjectInfo:", error);
        Error(error);
    }
}

export async function updateProjectInfo(prevState, formData) {
    const session = await getSession();

    const userID = ObjectId.createFromHexString(session.user.sub.substring(6));

    const data = {
       $set: {
            name: formData.get("name"),
            description: formData.get("description"),
            short_description: formData.get("short_description"),
            year: formData.get("year"),
        }
    };

    try {
        const db = await connectDB();
        const userDoc = await User.findOne(userID);

        if (!userDoc) {
            console.error("User not found");
            return null;
        }

        // const projectDoc = await Project.updateOne({ _id: ObjectId. , uid: userDoc._id, }, data);
        
        // if (!projectDoc) {
        //     console.error("projectDoc not found");
        //     return null;
        // }

        revalidatePath("/das?hboard/account/profile");
        // return JSON.parse(JSON.stringify(newUserDoc));

        return { messagae: "updateUserProfile"};
    } catch (error) {
        console.error("updateUserProfile:", error);
        Error(error);
    }
}