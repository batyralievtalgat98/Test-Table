import { ProductType } from "@/store/types";
import { formatDate } from "@/utils/dateUtils";

export const useProductsTableColumns = () => {
  const columns = [
    {
      title: "Id",
      dataIndex: "id",
    },
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Size",
      dataIndex: "options.size",
    },
    {
      title: "Amount",
      dataIndex: "options.amount",
    },
    {
      title: "Active",
      dataIndex: "active",
    },
    {
      title: "CreatedAt",
      dataIndex: "createdAt",
      render: (record: ProductType) => {
        return formatDate(record.createdAt);
      },
    },
    {
      title: "",
      dataIndex: "actions",
      methods: [
        {
          name: "editRow",
          title: "edit",
        },
      ],
    },
  ];
  return { columns };
};

