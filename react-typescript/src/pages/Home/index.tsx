import React from "react";
import { Swiper, Image } from 'react-vant';
import ListPages from "./list";
import "./css/Swiper.less"
function Home() {
    const images = [
        'https://img.yzcdn.cn/vant/apple-1.jpg',
        'https://img.yzcdn.cn/vant/apple-2.jpg',
        'https://img.yzcdn.cn/vant/apple-3.jpg',
        'https://img.yzcdn.cn/vant/apple-4.jpg',
        'https://img.yzcdn.cn/vant/apple-5.jpg',
        'https://img.yzcdn.cn/vant/apple-6.jpg',
        'https://img.yzcdn.cn/vant/apple-7.jpg',
        'https://img.yzcdn.cn/vant/apple-8.jpg',
    ]
    return (
        <div className="demo-swiper">
            <Swiper autoplay={5000}>
                {images.map((image) => (
                    <Swiper.Item key={image}>
                        <Image lazyload src={image} />
                    </Swiper.Item>
                ))}
            </Swiper>
            <ListPages/>
        </div>
    )
}

export default Home;