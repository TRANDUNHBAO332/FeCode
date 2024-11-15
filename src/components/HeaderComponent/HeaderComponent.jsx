import React, { useEffect, useState } from "react";
import { Badge, Col, Button, Popover } from "antd";
import {
  WrapperContentPopup,
  WrapperHeader,
  WrapperHeaderAccount,
  WrapperTextHeader,
  WrapperTextHeaderSmall,
} from "./style";
import {
  UserOutlined,
  CaretDownOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import ButtonInputSearch from "../ButtonInputSearch/ButtonInputSearch";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as UserService from "../../services/UserService";
import { resetUser } from "../../redux/slides/userSlide";
import Loading from "../../components/LoadingComponent/Loading";

const HeaderComponent = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [userName, setUserName] = useState("");

  const handleNavigateLogin = () => {
    navigate("/sign-in");
  };
  const handleLogout = async () => {
    setIsSubmitting(true);
    await UserService.logoutUser();
    dispatch(resetUser());
    setIsSubmitting(false);
  };

  useEffect(() => {
    setIsSubmitting(true);
    setUserName(user?.name);
    setIsSubmitting(false);
  }, [user?.name]);

  const content = (
    <div>
      <WrapperContentPopup onClick={handleLogout}>
        Đăng xuất
      </WrapperContentPopup>
      <WrapperContentPopup onClick={() => navigate("/profile-user")}>
        Thông tin người dùng
      </WrapperContentPopup>
    </div>
  );

  return (
    <div
      style={{
        width: "100%",
        background: "rgb(26,148,255)",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          padding: "12px 36px",
        }}
      >
        <WrapperTextHeader>CUAHANGNOITHAT</WrapperTextHeader>
        <ButtonInputSearch
          size="large"
          bordered={false}
          textButton="Tìm kiếm"
          placeholder="Input search text"
        />
        <Loading isLoading={isSubmitting}>
          <WrapperHeaderAccount>
            <UserOutlined style={{ fontSize: "30px" }} />
            {user?.access_token ? (
              <>
                <Popover content={content} trigger="click">
                  <div style={{ cursor: "pointer" }}>
                    {userName?.length ? userName : user?.email}
                  </div>
                </Popover>
              </>
            ) : (
              <div onClick={handleNavigateLogin} style={{ cursor: "pointer" }}>
                <WrapperTextHeaderSmall>
                  Đăng nhập/Đăng ký
                </WrapperTextHeaderSmall>

                <div style={{ display: "flex", alignItems: "center" }}>
                  <WrapperTextHeaderSmall>Tài khoản</WrapperTextHeaderSmall>
                  <CaretDownOutlined />
                </div>
              </div>
            )}
          </WrapperHeaderAccount>
        </Loading>
        <div>
          <Badge count={4} size="small">
            <ShoppingCartOutlined style={{ fontSize: "30px", color: "#fff" }} />
          </Badge>
          <WrapperTextHeaderSmall>Giỏ hàng</WrapperTextHeaderSmall>
        </div>
      </div>
    </div>
  );
};

export default HeaderComponent;
