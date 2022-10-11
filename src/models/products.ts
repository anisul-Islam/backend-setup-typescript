import { Schema, model, Document } from "mongoose";

export interface IProduct extends Document {
  id: String;
  title: String;
  price: Number;
}

const productsSchema: Schema = new Schema({
  id: String,
  title: String,
  price: Number,
});

export const Product = model<IProduct>("Products", productsSchema);
