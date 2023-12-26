import React from 'react'

const TourSlider = () => {

  const arrayTourData = [
    { "maTour": 1, "nameTour": "Kỳ Quan San", "description": "Ky Quan San là một trong tứ đỉnh của Việt Nam, với độ cao là 3046m. Chạm đỉnh Ky Quan San là thử thách mà bất cứ nhà leo núi chuyên nghiệp nào cũng phải đạt được ít nhất một lần trong đời. ", "price": 5700000, "pic": "ky-quan-san.jpg" },
    { "maTour": 2, "nameTour": "Bù Gia Mập", "description": "Bù Gia Mập - Cung đường khám phá cánh rừng xanh giữa cao nguyên đất đỏ, cách Sài Gòn chỉ hơn 200km.", "price": 2300000, "pic": "bu-gia-map.jpg" },
    { "maTour": 3, "nameTour": "Rừng thông Đà Lạt", "description": "Hãy cùng khám phá thiên nhiên tươi đẹp của cao nguyên đá Đà Lạt với tour cắm trại 1 đêm ngắm bình minh trên đỉnh Langbiang. Chúng ta sẽ chinh phục đỉnh núi cao 2.169m", "price": 2700000, "pic": "camp-dalat.jpeg" },
    { "maTour": 4, "nameTour": "Chèo Sup ở sông Hậu", "description": "Môn thể thao chèo thuyền kayak trên dòng sông Hậu giữa lòng thành phố Cần Thơ tràn ngập sắc xanh của cây cối hai bên bờ. Hãy cùng hòa mình vào thiên nhiên, tận hưởng làn nước mát lành và ngắm cảnh đồng bằng sông nước miền Tây hiền hòa, thanh bình.", "price": 400000, "pic": "supkampgo-tour.jpg" }
  ];
  const renderProducts = () => {
    return arrayTourData.map((pro, index) => (
      <div className="item-slick2 p-l-15 p-r-15 p-t-15 p-b-15" key={index}>
        <div className="block2">
          <div className="block2-pic hov-img0">
            <img src={require(`../assets/images/${pro.pic}`)} alt="IMG-PRODUCT" />

          </div>
          <div className="block2-txt flex-w flex-t p-t-14">
            <div className="block2-txt-child1 flex-col-l ">
              <a href={`/tour-detail/${pro.maTour}`} className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6">
                {pro.nameTour}
              </a>
              <span className="stext-105 cl3">
                {pro.price.toLocaleString()}VNĐ
              </span>
            </div>

          </div>
        </div>
      </div>
    ));
  };
  return (
    <section className="sec-relate-product bg0 p-t-45 p-b-105">
      <div className="container">
        <div className="p-b-45">
          <h3 className="ltext-106 cl5 txt-center">
            Dịch vụ nổi bật
          </h3>
        </div>
        <div className="wrap-slick2">
          <div className="slick2">
            {renderProducts()}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TourSlider