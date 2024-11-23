import React, { useEffect, useRef } from "react";
import TypeProduct from "../../components/TypeProduct/TypeProduct";
import {
  ButtonComponentMore,
  WrapperTypeProduct,
  WrapperProducts,
} from "./style";
import SliderComponent from "../../components/SliderComponent/SliderComponent";
import slider1 from "../../assets/image/slider1.webp";
import slider2 from "../../assets/image/slider2.webp";
import slider3 from "../../assets/image/slider3.webp";
import CardComponent from "../../components/CardComponent/CardComponent";
import { useQuery } from "@tanstack/react-query";
import * as ProductService from "../../services/ProductService";
import { useSelector } from "react-redux";
const HomePage = () => {
  const searchProduct = useSelector((state) => state?.product?.search)
  const refSearch= useRef()
  const arr = ["Phòng khách", "Phòng bếp", "Phòng ngủ"];
  const fetchProductAll = async (search) => {
    const response = await ProductService.getAllProduct(search);
    return response; // Đảm bảo trả về dữ liệu từ API
  };

  const { isLoading, data: products } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProductAll,
    retry: 3,
    retryDelay: 1000,
  });

  useEffect (() =>{
if(refSearch.current){
console.log('chay chay')
fetchProductAll(searchProduct)
}
refSearch.current=true
  },[searchProduct])
  //console.log("data", products);

  return (
    <>
      <div style={{ width: "1250px", margin: "0 auto" }}>
        <WrapperTypeProduct>
          {arr.map((item) => {
            return <TypeProduct name={item} key={item} />;
          })}
        </WrapperTypeProduct>
      </div>
      <div
        className="body"
        style={{ width: "100%", backgroundColor: "efefef" }}
      >
        <div
          id="container"
          style={{ height: "1000px", width: "1250px", margin: "0 auto" }}
        >
          <SliderComponent arrImage={[slider1, slider2, slider3]} />
          <WrapperProducts>
            {products?.data?.map((product) => {
              return (
                <CardComponent
                  key={product._id}
                  countInstock={product.countInstock}
                  description={product.description}
                  image={product.image}
                  name={product.name}
                  price={product.price}
                  rating={product.rating}
                  type={product.type}
                  selled={product.selled}
                  discount={product.discount}
                />
              );
            })}
          </WrapperProducts>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              marginTop: "10px",
            }}
          >
            <ButtonComponentMore
              textButton="Xem thêm"
              type="outline"
              styleButton={{
                border: "1px solid rgb(11, 116, 229)",
                color: "rgb(11, 116, 229)",
                width: "240px",
                height: "38px",
                borderRadius: "4px",
              }}
              styleTextButton={{ fontWeight: 500 }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
