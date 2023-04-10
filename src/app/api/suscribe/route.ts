import Suscriber from "@/models/Suscriber";
import dbConnect from "@/utils/dbConnect";
import { NextApiResponse } from "next";
import { NextResponse, NextRequest } from "next/server";
export async function POST(request: NextRequest, res: NextApiResponse) {
    try {
        await dbConnect();
        const { name, email, budget, message } = await request.json();
        let suscriberStored = await Suscriber.find({ email })
        if (suscriberStored !== null) {
            return NextResponse.json({ message: "Hemos recibido tu mensaje y en unos dias nos pondremos en contacto con tigo, gracias", status: 201 });
        }
        let suscriber = new Suscriber({
            name,
            email,
            budget,
            message
        })
        await suscriber.save();
        return NextResponse.json({ saved: suscriber, message: "success update", status: 200 });
    }
    catch (err) {
        console.dir(err);
        return NextResponse.json({ message: "something went wrong", status: 500 })
    }
}