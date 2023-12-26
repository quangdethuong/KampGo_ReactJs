import React from 'react'
import TourItem from './TourItem/TourItem';
import 'isotope-layout/dist/isotope.pkgd.min.js'


const TourList = () => {
    const arrayTourData = [
        { "maTour": 1, "nameTour": "Kỳ Quan San", "description": "Ky Quan San là một trong tứ đỉnh của Việt Nam, với độ cao là 3046m. Chạm đỉnh Ky Quan San là thử thách mà bất cứ nhà leo núi chuyên nghiệp nào cũng phải đạt được ít nhất một lần trong đời. ", "price": 5700000, "pic": "ky-quan-san.jpg" },
        { "maTour": 2, "nameTour": "Bù Gia Mập", "description": "Bù Gia Mập - Cung đường khám phá cánh rừng xanh giữa cao nguyên đất đỏ, cách Sài Gòn chỉ hơn 200km.", "price": 2300000, "pic": "bu-gia-map.jpg" },
        { "maTour": 3, "nameTour": "Rừng thông Đà Lạt", "description": "Hãy cùng khám phá thiên nhiên tươi đẹp của cao nguyên đá Đà Lạt với tour cắm trại 1 đêm ngắm bình minh trên đỉnh Langbiang. Chúng ta sẽ chinh phục đỉnh núi cao 2.169m", "price": 2700000, "pic": "camp-dalat.jpeg" },
        { "maTour": 4, "nameTour": "Chèo Sup ở sông Hậu", "description": "Môn thể thao chèo thuyền kayak trên dòng sông Hậu giữa lòng thành phố Cần Thơ tràn ngập sắc xanh của cây cối hai bên bờ. Hãy cùng hòa mình vào thiên nhiên, tận hưởng làn nước mát lành và ngắm cảnh đồng bằng sông nước miền Tây hiền hòa, thanh bình.", "price": 400000, "pic": "supkampgo-tour.jpg" }
    ];


    const renderTour = () => {
        return arrayTourData.map((tour, index) => (
            <div className="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item men" key={index}>

                <div className="block2" >
                    <TourItem tourProps={tour} />

                </div>
            </div>
        ));
    };
    return (


        <>
            {renderTour()}
        </>

    );
}

export default TourList