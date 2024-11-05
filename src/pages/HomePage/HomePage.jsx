    import React from "react";
    import TypeProduct from "../../components/TypeProduct/TypeProduct";
    import { ButtonComponentMore, WrapperTypeProduct, WrapperProducts} from "./style";
    import SliderComponent from "../../components/SliderComponent/SliderComponent";
    import slider1 from '../../assets/image/slider1.webp';
    import slider2 from '../../assets/image/slider2.webp';
    import slider3 from '../../assets/image/slider3.webp';
    import CardComponent from "../../components/CardComponent/CardComponent";

    const HomePage = () => {
        const arr = ['Phòng khách', 'Phòng bếp', 'Phòng ngủ'];

        return (
            <>
                <div style={{ width:'1250px', margin:'0 auto' }}>
                    <WrapperTypeProduct>
                        {arr.map((item) => {
                            return (
                                <TypeProduct name={item} key={item} />
                            );
                        })}
                    </WrapperTypeProduct>
                      </div>
                      <div className="body" style={{width:'100%', backgroundColor:'efefef'}}>
                      <div id="container" style={{height:'1000px', width:'1250px', margin:'0 auto'}}>
                    <SliderComponent arrImage={[slider1, slider2, slider3]} />
                    <WrapperProducts>
                        <CardComponent />
                        <CardComponent />
                        <CardComponent />
                        <CardComponent />
                        <CardComponent />
                        <CardComponent />
                    </WrapperProducts>
                    <div style={{width:'100%', display:'flex', justifyContent: "center", marginTop:'10px'}}>
                    <ButtonComponentMore textButton="Xem thêm" type="outline" styleButton={{
                        border:'1px solid rgb(11, 116, 229)', color: 'rgb(11, 116, 229)',
                        width: '240px', height: '38px', borderRadius: '4px',
                        }} 
                        styleTextButton={{fontWeight:500}}/>
                    </div>
                    </div>
                </div>
            </>
        );
    }

    export default HomePage;
