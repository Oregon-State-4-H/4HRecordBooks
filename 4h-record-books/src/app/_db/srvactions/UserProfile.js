"use server"

import { User } from "@/app/_db/models/user";
import connectDB from "@/app/lib/mongodb";
import { revalidatePath } from "next/cache";
import { ObjectId } from "mongodb";
import { getSession } from "@auth0/nextjs-auth0";

export async function getUserProfile(uid) {
    try {
        const db = await connectDB();
        const user = await User.findOne({ _id: uid });
        return JSON.parse(JSON.stringify(user));
    } catch (error) {
        console.error("getUserProfile:", error);
        Error(error);
    }
}

export async function updateUserProfile(prevState, formData) {
    const session = await getSession();

    const userID = ObjectId.createFromHexString(session.user.sub.substring(6));

    const data = {
       $set: {
            birthdate: formData.get("birthdate"),
            first_name: formData.get("first_name"),
            middle_name_initial: formData.get("middle_name_initial"),
            last_name_initial: formData.get("last_name_initial"),
            county_name: formData.get("county_name"),
            join_date: formData.get("join_date")
        }
    };

    try {
        const db = await connectDB();
        const userDoc = await User.findOne(userID);

        if (!userDoc) {
            console.error("User not found");
            return null;
        }

        const newUserDoc = await User.updateOne({_id: userDoc._id}, data);
        
        if (!newUserDoc) {
            console.error("User not found");
            return null;
        }

        revalidatePath("/dashboard/account/profile");
        return JSON.parse(JSON.stringify(newUserDoc));
    } catch (error) {
        console.error("updateUserProfile:", error);
        Error(error);
    }
}