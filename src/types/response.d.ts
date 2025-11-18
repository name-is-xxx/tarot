declare namespace API {
  type tokenChangeResponse = {
    customer_token: string;
    supplier_token: string;
  };

  type list = {
    id: number;
    title: string;
    content: string;
    createdTime: number;
    lastUpdate: number;
    // isFinish: boolean;
  };
}
