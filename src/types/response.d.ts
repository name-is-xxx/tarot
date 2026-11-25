declare namespace API {
  type tokenChangeResponse = {
    customer_token: string;
    supplier_token: string;
  };

  type pagination = {
    page: number;
    pageSize: number;
    total: number;
    totalPage: number;
  };

  type article = {
    id: string;
    coverPageID?: string | null;
    coverPageUrl?: string | null;
    author: string;
    title: string;
    content: string;
    tags?: string[];
    category?: string[];
    createdTime: number;
    lastUpdate: number;
  };

  type file = {
    id: string;
    downloadUrl: string;
    originalName: string;
    fileName: string;
    contentType: string;
    fileSize: number;
    createTime: string;
  };
}
