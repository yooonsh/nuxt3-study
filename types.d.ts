type Product = {
  id: Number;
  name: String;
  price: Number;
  description: String;
  category: CategoryResponse;
  productImages: [ProductImageResponse];
};

type CategoryResponse = {
  id: Number;
  name: String;
  createdAt: datetime;
  updatedAt: datetime;
};

type ProductImageResponse = {
  id: Number;
  imageUrl: String;
  isMain: Boolean;
};

export type ProductResponse = {
  getProducts: Product[];
};

type UserLogin = {
  userId: Number;
  jwtToken: String;
};

export type UserLoginResponse = {
  getUser: UserLogin[];
};
