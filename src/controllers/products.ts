import { NextFunction, Request, RequestHandler, Response } from "express";
import { Product } from "../models/products";

export const getProducts: RequestHandler = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.status(200).json({
    products: "all products here",
  });
};

export const addProduct: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id, title, price }: ProductProps = req.body;
    const newProduct = new Product({
      id,
      title,
      price,
    });
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ message: "server error" });
  }
};
