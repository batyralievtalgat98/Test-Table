import { DataRow } from "@/components/customTable/types";

interface BaseType {
  id: number;
  active: boolean;
}

interface ProductOptionsType {
  size: 'XL' | 'S' | 'L' |'XXL' | 'M'; 
  amount: number;
}

export interface ProductType extends BaseType, DataRow {
  name: string; 
  options: ProductOptionsType; 
  createdAt: string;
}

export interface PricePlanType extends BaseType, DataRow {
  description: string;
  createdAt: string;
  removedAt: string;
}

export interface PageType extends BaseType, DataRow {
  title: string;
  updatedAt: string;
  publishedAt: string;
}
