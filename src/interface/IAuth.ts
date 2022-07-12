export interface IAuth {
  user: {
    memberId: string;
    constituencyId: string;
    role: number;
    status: number;
    _id: string;
  };
  token: "";
  access: {
    granted: false;
    id: string;
    phone: string;
  };
}
