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

export type UserLoginResponse = {
  userId: Number;
  jwtToken: String;
};
