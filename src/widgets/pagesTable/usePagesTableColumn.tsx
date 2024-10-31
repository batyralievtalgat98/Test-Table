import { PageType } from "@/store/types";
import { formatDate } from "@/utils/dateUtils";

export const usePagesTableColumns = () => {
  const columns = [
    {
      title: "Id",
      dataIndex: "id",
    },
    {
      title: "Title",
      dataIndex: "title",
    },
    {
      title: "Active",
      dataIndex: "active",
    },
    {
      title: "UpdatedAt",
      dataIndex: "updatedAt",
      render: (record: PageType) => {
        return formatDate(record.updatedAt);
      },
    },
    {
      title: "PublishedAt",
      dataIndex: "publishedAt",
      render: (record: PageType) => {
        return formatDate(record.publishedAt);
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

