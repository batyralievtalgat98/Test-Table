"use client";
import { CustomTable } from "@/components/customTable/CustomTable";
import { useProductsTableColumns } from "./useProductsTableColumn";
import { useMemo, useState } from "react";
import { EditModal } from "@/features/EditModal/EditModal";
import { useDispatch, useSelector } from "react-redux";
import { updateProduct } from "@/store/slices/productsSlice";
import { getProductSelector } from "@/store/selectors/productsSelector";
import { ProductType } from "@/store/types";
import { ActionMethod } from "@/components/customTable/types";
import { TableFiltering } from "@/components/tableFiltering/TableFilterging";

export const ProductsTable = () => {
  const { columns } = useProductsTableColumns();
  const [rowData, setRowData] = useState<ProductType>();
  const [isShowModal, setShowModal] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const products = useSelector(getProductSelector);

  const dispatch = useDispatch();
  const onEditRow = (data: ProductType) => {
    setRowData(data);
    setShowModal(true);
  };
  const editDataOptions: ActionMethod[] = [
    {
      name: "name",
      type: "input",
      title: "name",
    },
  ];

  const onSave = (data: ProductType) => {
    dispatch(updateProduct(data));
  };

  const onFilterData = (value: string) => {
    setSearchValue(value);
  };

  const filteredData: ProductType[] = useMemo(() => {
    if (!searchValue) return products;
    return products?.filter((product) => product.name.includes(searchValue));
  }, [products, searchValue]);

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
        <EditModal<ProductType>
          data={rowData!}
          editData={editDataOptions}
          onSave={onSave}
          onClose={() => setShowModal(false)}
        />
      )}
    </>
  );
};

