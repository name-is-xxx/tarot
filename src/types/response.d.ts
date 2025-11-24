declare namespace API {
  type tokenChangeResponse = {
    customer_token: string;
    supplier_token: string;
  };

  type list = {
    id: number;
    frontImg: string;
    author: string;
    title: string;
    content: string;
    tags: string[];
    category: string[];
    createdTime: number;
    lastUpdate: number;
  };
}
