"use client";
import { CustomTable } from "@/components/customTable/CustomTable";
import { useMemo, useState } from "react";
import { EditModal } from "@/features/EditModal/EditModal";
import { useDispatch, useSelector } from "react-redux";
import { updatePage} from "@/store/slices/pagesSlice";
import { getPagesSelector } from "@/store/selectors/pagesSelector";
import { PageType } from "@/store/types";
import { ActionMethod } from "@/components/customTable/types";
import { TableFiltering } from "@/components/tableFiltering/TableFilterging";
import { usePagesTableColumns } from "./usePagesTableColumn";

export const PagesTable = () => {
  const { columns } = usePagesTableColumns();
  const [rowData, setRowData] = useState<PageType>();
  const [isShowModal, setShowModal] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const pages = useSelector(getPagesSelector);

  const dispatch = useDispatch();
  const onEditRow = (data: PageType) => {
    setRowData(data);
    setShowModal(true);
  };
  const editDataOptions: ActionMethod[] = [
    {
      name: "title",
      type: "input",
      title: "title",
    },
  ];

  const onSave = (data: PageType) => {
    dispatch(updatePage(data));
  };

  const onFilterData = (value: string) => {
    setSearchValue(value);
  };

  const filteredData: PageType[] = useMemo(() => {
    if (!searchValue) return pages;
    return pages?.filter((page) => page.title.includes(searchValue));
  }, [pages, searchValue]);

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
        <EditModal<PageType>
          data={rowData!}
          editData={editDataOptions}
          onSave={onSave}
          onClose={() => setShowModal(false)}
        />
      )}
    </>
  );
};

