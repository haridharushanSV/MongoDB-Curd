import { model, Schema } from "mongoose";

const schema = new Schema({
    title: { type: String, required: true , undefined: false },
    author: { type: String, required: true },
    // publicationYear: { type: Number, required: true },
    // genre: { type: String, required: true }
});

//model
const book = model("book", schema);


export default book;

