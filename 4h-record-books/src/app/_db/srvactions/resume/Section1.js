"use server"

import { Section1 } from "@/app/_db/models/resumeSections";
import { User } from "@/app/_db/models/user";
import connectDB from "@/app/_db/mongodb";
import { ObjectId } from "mongodb";
import { getSession } from "@auth0/nextjs-auth0";

export async function getSection1(docId) {
    try {
        const db = await connectDB();
        const section = await Section1.findOne({ _id: docId });
        return JSON.parse(JSON.stringify(section));
    } catch (error) {
        console.error("getSection1:", error);
        Error(error);
    }
}

export async function getSection1Docs(){
    try {
        const session = await getSession();
        const userID = ObjectId.createFromHexString(session.user.sub.substring(6));
        const db = await connectDB();
        const userDoc = await User.findOne(userID);
        if (!userDoc) {
            console.error("User not found");
            return null;
        }


        const sections = await Section1.find({ uid: userID });
        return JSON.parse(JSON.stringify(sections));
    } catch (error) {
        console.error("getSection1Docs:", error);
        Error(error);
    }
}

export async function addSection1(prevState, formData){
    const session = await getSession();

    const userID = ObjectId.createFromHexString(session.user.sub.substring(6));

    try {
        const db = await connectDB();
        const section = new Section1({
            uid: userID,
            year: formData.get("year"),
            grade: formData.get("grade"),
            clubName: formData.get("clubName"),
            numInClub: formData.get("numInClub"),
            clubLeader: formData.get("clubLeader"),
            meetingsHeld: formData.get("meetingsHeld"),
            meetingsAttended: formData.get("meetingsAttended")
        });

        await section.save();

        return JSON.parse(JSON.stringify(section));
    } catch (error) {
        console.error("addSection1:", error);
        Error(error);
    }
}