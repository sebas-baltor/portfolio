import Suscriber from "@/models/Suscriber";
import dbConnect from "@/utils/dbConnect";
import { NextResponse, NextRequest } from "next/server";
import next from "next/types";
export async function POST(request: NextRequest) {
  try {
    await dbConnect();
    const { name, email, budget, message } = await request.json();
    let suscriberStored = await Suscriber.find({ email });
    if (suscriberStored !== null) {
      return NextResponse.json({
        message:
          "Hemos recibido tu mensaje y en unos dias nos pondremos en contacto con tigo, gracias",
        status: 201,
      });
    }
    let suscriber = new Suscriber({
      name,
      email,
      budget,
      message,
    });
    await suscriber.save();
    return NextResponse.json({
      saved: suscriber,
      message: "success update",
      status: 200,
    });
  } catch (err) {
    console.dir(err);
    return NextResponse.json({ message: "something went wrong", status: 500 });
  }
}
export async function GET(request: NextRequest) {
  fetch("https://pokeapi.co/api/v2/pokemon/ditto")
    .then((res) => res.json())
    .then((data) => NextResponse.json(data))
    .catch((err) => NextResponse.json(err));
}
