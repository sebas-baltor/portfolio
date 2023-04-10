import mongoose, { Schema, model} from "mongoose";

// 1. defining the interface
export interface Isuscriber {
    name: string,
    email: string,
    budget: number,
    message?: string
}
// 2. match the schema with the document interface
const suscriberSchema = new Schema<Isuscriber>({
    name: { type: String, required: true },
    email: { type: String, required: true,lowercase:true,unique:true },
    budget: { type: Number, required: true },
    message: {type:String,required:false}
});

// 3. all ready to create the model based on interface
// some issue is here but, its fixed returnnign the model store in db or creating for the first time
export default mongoose.models.Suscriber || model<Isuscriber>("Suscriber", suscriberSchema);
