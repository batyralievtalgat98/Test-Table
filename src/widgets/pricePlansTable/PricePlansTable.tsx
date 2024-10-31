"use client";
import { CustomTable } from "@/components/customTable/CustomTable";
import { usePricePlansTableColumns } from "./usePricePlansTableColumn";
import { useMemo, useState } from "react";
import { EditModal } from "@/features/EditModal/EditModal";
import { useDispatch, useSelector } from "react-redux";
import { updatePricePlan} from "@/store/slices/pricePlansSlice";
import { getPricePlansSelector } from "@/store/selectors/pricePlansSelector";
import { PricePlanType } from "@/store/types";
import { ActionMethod } from "@/components/customTable/types";
import { TableFiltering } from "@/components/tableFiltering/TableFilterging";

export const PricePlansTable = () => {
  const { columns } = usePricePlansTableColumns();
  const [rowData, setRowData] = useState<PricePlanType>();
  const [isShowModal, setShowModal] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const pricePlans = useSelector(getPricePlansSelector);

  const dispatch = useDispatch();
  const onEditRow = (data: PricePlanType) => {
    setRowData(data);
    setShowModal(true);
  };
  const editDataOptions: ActionMethod[] = [
    {
      name: "description",
      type: "input",
      title: "description",
    },
  ];

  const onSave = (data: PricePlanType) => {
    dispatch(updatePricePlan(data));
  };

  const onFilterData = (value: string) => {
    setSearchValue(value);
  };

  const filteredData: PricePlanType[] = useMemo(() => {
    if (!searchValue) return pricePlans;
    return pricePlans?.filter((pricePlan) => pricePlan.description.includes(searchValue));
  }, [pricePlans, searchValue]);

  return (
    <>
      <TableFiltering onFilterData={onFilterData} />
      <CustomTable
        data={filteredData}
        columns={columns}
        actionProps={{
          onEditRow,
        }}
      />
      {isShowModal && (
        <EditModal<PricePlanType>
          data={rowData!}
          editData={editDataOptions}
          onSave={onSave}
          onClose={() => setShowModal(false)}
        />
      )}
    </>
  );
};

