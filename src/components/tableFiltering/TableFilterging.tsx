import { PrimaryInput } from "@/shared/PrimaryInput/PrimaryInput";
import { ChangeEvent, FC } from "react";
import styles from './InputFiltering.module.scss'
interface TableFilteringProps {
  onFilterData: (value: string) => void;
}
export const TableFiltering: FC<TableFilteringProps> = ({onFilterData}) => {

    const searchValue=(e:ChangeEvent<HTMLInputElement>)=>{
        onFilterData(e.target.value)
    }

  return (
    <div className={styles.inputContainer}>
      <PrimaryInput placeholder="search" onChange={searchValue} type="text" />
    </div>
  );
};

