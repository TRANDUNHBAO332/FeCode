import React from "react";
import {
  StyleNameProduct,
  WrapperReportText,
  WrapperPriceText,
  WrapperDiscountText,
  WrapperCardStyle,
  WrapperStyleTextSell,
} from "./style"; // Import cả hai styled components
import { StarFilled } from "@ant-design/icons";

const CardComponent = (props) => {
  const {
    countInstockdescription,
    image,
    name,
    price,
    rating,
    type,
    discount,
    selled,
  } = props;
  return (
    <WrapperCardStyle
      hoverable
      style={{ width: 200 }}
      cover={
        <img
          alt="example"
          src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
        />
      }
    >
      <StyleNameProduct>{name}</StyleNameProduct>
      <WrapperReportText>
        <span style={{ marginRight: "4px" }}>
          <span>{rating}</span>{" "}
          <StarFilled style={{ fontSize: "12px", color: "rgb(255,196,0)" }} />
        </span>
        <WrapperStyleTextSell>|Da bán{selled || 1000}+</WrapperStyleTextSell>
      </WrapperReportText>
      <WrapperPriceText>
        <span style={{ marginRight: "8px" }}>1.000.000</span>
        <WrapperDiscountText>{discount || 5}%</WrapperDiscountText>
      </WrapperPriceText>
    </WrapperCardStyle>
  );
};

export default CardComponent;
