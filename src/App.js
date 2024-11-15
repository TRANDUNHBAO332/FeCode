import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { routes } from './routes';
import DefaultComponent from './components/DefaultComponent/DefaultComponent';
import { isJsonstring } from './untils';
import { useDispatch } from 'react-redux';
import { updateUser } from './redux/slides/userSlide';
import {jwtDecode} from "jwt-decode";
import * as UserService from "./services/UserService";
import { getDetailsUser } from "./services/UserService";

function App() {
  const dispatch = useDispatch();

  // Hàm để lấy và decode token
  const handleDecoded = () => {
    let storageData = localStorage.getItem("access_token");
    let decoded = null;

    if (storageData && isJsonstring(storageData)) {
      try {
        storageData = JSON.parse(storageData); // Parse JSON
        decoded = jwtDecode(storageData);
        console.log("Parsed Storage Data:", storageData); // Kiểm tra giá trị sau khi parse
        console.log("Decoded Token:", decoded); // In giá trị decoded
      } catch (error) {
        console.error("Lỗi khi decode token:", error);
      }
    }
    return { storageData, decoded };
  };

  useEffect(() => {
    const { storageData, decoded } = handleDecoded();
    if (decoded?.id) {
      handleGetDetailsUser(decoded.id, storageData);
    }
  }, []);

  // Hàm để lấy thông tin chi tiết người dùng
  const handleGetDetailsUser = async (id, token) => {
    try {
      const res = await getDetailsUser(id, token);
      dispatch(updateUser({ ...res?.data, access_token: token }));
    } catch (error) {
      console.error("Lỗi khi lấy thông tin người dùng:", error);
    }
  };

  // Interceptor để tự động làm mới token khi hết hạn
  UserService.axiosJWT.interceptors.request.use(async (config) => {
    const currentTime = new Date();
    const { decoded } = handleDecoded();
    if (decoded?.exp < currentTime.getTime() / 1000) {
      const data = await UserService.refreshToken();
      config.headers['token'] = `Bearer ${data?.access_token}`;
    }
    return config;
  }, (error) => {
    return Promise.reject(error);
  });

  return (
    <div>
      <Router>
        <Routes>
          {routes.map((route) => {
            const Page = route.page;
            const Layout = route.isShowHeader ? DefaultComponent : Fragment;
            return (
              <Route key={route.path} path={route.path} element={
                <Layout>
                  <Page />
                </Layout>
              } />
            );
          })}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
