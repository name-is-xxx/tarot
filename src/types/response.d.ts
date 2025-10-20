declare namespace API {
  type tokenChangeResponse = {
    customer_token: string;
    supplier_token: string;
  };

  type list = {
    id: number;
    name: string;
    content: string;
    isFinish: boolean;
  };
}
