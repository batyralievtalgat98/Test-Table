"use client";
import { ActionMethod } from "@/components/customTable/types";
import { CustomModal } from "@/components/customModal/CustomModal";
import { useState } from "react";
import { PrimaryInput } from "@/shared/PrimaryInput/PrimaryInput";
import { PrimaryButton } from "@/shared/PrimaryButton/PrimaryButton";
import styles from './EditModal.module.scss'
interface EditModalProps<T> {
  onClose: () => void;
  data: T ;
  editData: ActionMethod[];
  onSave: (value: T) => void;
}

export const EditModal = <T,>({ data, editData, onSave, onClose }: EditModalProps<T>) => {
  const [formData, setFormData] = useState(data);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev!,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    console.log("data", data);
    e.preventDefault();
    if (formData) {
      onSave(formData);
      onClose();
    }
  };

  return (
    <CustomModal onClose={onClose}>
      <form  onSubmit={handleSubmit} className={styles.form}>
        {editData.map((item:ActionMethod) => {
          return (
            <PrimaryInput
              onChange={handleChange}
              value={(formData as Record<string, string>)[item.name] || ""}
              key={item.name}
              name={item.name}
              type="text"
            />
          );
        })}
        <PrimaryButton type="submit">Save</PrimaryButton>
      </form>
    </CustomModal>
  );
};

