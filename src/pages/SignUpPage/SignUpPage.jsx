import React, { useState } from "react";
import { WrapperContainerLeft,WrapperContainerRight, WrappperTextLight } from "./style";
import InputForm from "../../components/InputForm/InputForm";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";
import imageLogo from "../../assets/image/logo.png"
import { Divider, Image } from "antd";
import { EyeFilled, EyeInvisibleFilled } from "@ant-design/icons";

const SignUpPage=()=>{
    const [isShowPassword, setIsShowPassword]=useState(false)
    return(
        <div style={{display:'flex', alignItems:'center', justifyContent:'center', background:'rgba(0, 0, 0, 0.53)', height:'100vh'}}>
            <div style={{width: '800px', height:'445px', borderRadius:'6px', backgroundColor:'#fff', display:'flex'}}>
            <WrapperContainerLeft>
                <h1>Xin chào</h1>
                <p>Đăng nhập và tạo tài khoản</p>
                <InputForm style={{marginBottom: '10px'}} placeholder="abc@gmail.com"/>
                <div style={{position:'relative'}}>
                    <span
                        style={{
                            zIndex:10,
                            position:'absolute',
                            top:'4px',
                            right:'8px'
                        }}
                        >{
                                isShowPassword ? (
                                    <EyeFilled/>
                                ) : (
                                    <EyeInvisibleFilled/>
                                )
                            }
                    </span>
                </div>
                <InputForm placeholder="password" style={{marginBottom: '10px'}}/>
                <div style={{position:'relative'}}>
                    <span
                        style={{
                            zIndex:10,
                            position:'absolute',
                            top:'4px',
                            right:'8px'
                        }}
                        >{
                                isShowPassword ? (
                                    <EyeFilled/>
                                ) : (
                                    <EyeInvisibleFilled/>
                                )
                            }
                    </span>
                </div>
                <InputForm placeholder="confirm password"/>
                <ButtonComponent
                    bordered={false}
                    size={40}
                    styleButton={{
                        background:'rgb(255,57,69)', 
                        height:'48px',
                        width:'100',
                        border:'none',
                        boderRadius:'4px',
                        margin:'26px 0 10px',
                    }}
                    textButton={'Đăng ký'} 
                    styleTextButton={{color:'#fff'}}
                    ></ButtonComponent>
                    <p>Đã có tài khoản? <WrappperTextLight>Đăng nhập</WrappperTextLight> </p>
            </WrapperContainerLeft>
            <WrapperContainerRight>
                <Image src={imageLogo} preview={false} alt="image-logo" height='203px' width='203px'/>
                <h4>Mua sắm tại cửa hàng</h4>
            </WrapperContainerRight>
        </div>
        </div>
    )
}
export default SignUpPage