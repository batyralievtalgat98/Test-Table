import { PricePlanType } from "@/store/types";
import { formatDate } from "@/utils/dateUtils";

export const usePricePlansTableColumns = () => {
  const columns = [
    {
      title: "Id",
      dataIndex: "id",
    },
    {
      title: "Description",
      dataIndex: "description",
    },
    {
      title: "Active",
      dataIndex: "active",
    },
    {
      title: "CreatedAt",
      dataIndex: "createdAt",
      render: (record: PricePlanType) => {
        return formatDate(record.createdAt);
      },
    },
    {
      title: "RemovedAt",
      dataIndex: "removedAt",
      render: (record: PricePlanType) => {
        return formatDate(record.removedAt);
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

