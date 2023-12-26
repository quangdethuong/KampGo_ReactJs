import React from 'react'
function truncates(text, maxLength) {
    if (text.length > maxLength) {
        return text.substring(0, maxLength) + '...';
    }
    return text;
}
const TourItem = ({ tourProps }) => {

    const { description = '' } = tourProps;

    const desc = truncates(description, 100);
    return (
        <>
            <a href={`/tour-detail/${tourProps.maTour}`} className="block2-pic hov-img0">
                <img src={require(`../../../assets/images/${tourProps.pic}`)} alt="IMG-PRODUCT" />
            </a>
            <div className="block2-txt flex-w flex-t p-t-14">
                <div className="block2-txt-child1 flex-col-l ">
                    <a href={`/tour-detail/${tourProps.maTour}`} className="stext-105 cl4 hov-cl1 trans-04 js-name-b2 p-b-6">
                        {tourProps.nameTour}
                    </a>
                    <span className="stext-104 cl4">
                        {desc}
                    </span>
                    <span className="stext-105 cl3">
                        {tourProps.price.toLocaleString()}VNĐ

                    </span>
                </div>

            </div>
        </>
    )
}

export default TourItem