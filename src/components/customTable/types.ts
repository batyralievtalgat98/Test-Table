import { ReactNode } from "react";

export interface ActionMethod {
    name: string;
    title?: string; 
    type?: string;
  }


  
  export interface TableColumn {
    title: string; 
    dataIndex: string; 
    methods?: ActionMethod[]; 
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    render?: (data: any)=>ReactNode
  }
  
  export interface DataRow {
    id: number; 
    [key: string]: unknown; 
  }

  export interface ActionProps<T> {
    onEditRow: (data: T) => void;
  }