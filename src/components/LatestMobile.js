import React from 'react'
import Mobile1 from '../assests/mobile1.svg'
import Brandarrow from '../assests/Vector2.svg'
const LatestMobile = () => {
    let list = [
        {
            mimage: Mobile1,
            name: "Infinix Note 12 G96",
            spec: '6.7" | 8/128 GB | 5000 mAh',
            price: "36,999",

        },
        {
            mimage: Mobile1,
            name: "Infinix Note 12 G96",
            spec: '6.7" | 8/128 GB | 5000 mAh',
            price: "36,999",

        }, {
            mimage: Mobile1,
            name: "Infinix Note 12 G96",
            spec: '6.7" | 8/128 GB | 5000 mAh',
            price: "36,999",

        },
        {
            mimage: Mobile1,
            name: "Infinix Note 12 G96",
            spec: '6.7" | 8/128 GB | 5000 mAh',
            price: "36,999",

        },
        {
            mimage: Mobile1,
            name: "Infinix Note 12 G96",
            spec: '6.7" | 8/128 GB | 5000 mAh',
            price: "36,999",

        },
        {
            mimage: Mobile1,
            name: "Infinix Note 12 G96",
            spec: '6.7" | 8/128 GB | 5000 mAh',
            price: "36,999",

        },
        {
            mimage: Mobile1,
            name: "Infinix Note 12 G96",
            spec: '6.7" | 8/128 GB | 5000 mAh',
            price: "36,999",

        },
        {
            mimage: Mobile1,
            name: "Infinix Note 12 G96",
            spec: '6.7" | 8/128 GB | 5000 mAh',
            price: "36,999",

        }, {
            mimage: Mobile1,
            name: "Infinix Note 12 G96",
            spec: '6.7" | 8/128 GB | 5000 mAh',
            price: "36,999",

        }
        ,
        {
            mimage: Mobile1,
            name: "Infinix Note 12 G96",
            spec: '6.7" | 8/128 GB | 5000 mAh',
            price: "36,999",

        },
        {
            mimage: Mobile1,
            name: "Infinix Note 12 G96",
            spec: '6.7" | 8/128 GB | 5000 mAh',
            price: "36,999",

        },
        {
            mimage: Mobile1,
            name: "Infinix Note 12 G96",
            spec: '6.7" | 8/128 GB | 5000 mAh',
            price: "36,999",

        }
    ]


    return (
        <div className="my-2">
            <p className='right-border my-3 px-2 font26 font18' style={{ fontWeight: "bold" }}>Latest Mobile</p>
            <div className='row m-0'>
                {list.map((e) => <>
                    <div className='col-lg-3 col-md-4 col-6 col-6  p-2  '>
                        <div className='lItem  latest_mobile  mx-auto text-center' >

                            <img src={e.mimage} className="mx-auto" alt="mimage" width={200} height={200} />

                            <p className='LTitle font14'>{e.name}</p>
                            <div className='lCompare mx-auto'>
                                <p className='  text-white text-center align-item-center font20 font14' style={{ fontWeight: 600 }} >Compare +</p>
                            </div>


                            <div style={{ paddingTop: "6px" }}>
                                <p className='text-muted font18 font12 ' >{e.spec}</p>

                                <p className='font26 font16' style={{ fontWeight: "bold", color: "#262626" }}>Rs. {e.price}</p>
                            </div>
                        </div>
                    </div>
                </>)}

            </div>
            <div className='d-flex  align-items-center justify-content-center shadow' style={{ height: "70px", marginTop: "30px", backgroundColor: "#F8F8F9" }}>
                <p style={{ fontSize: "18px", fontWeight: 600 }}>Load More</p> <img src={Brandarrow} className="align-items-center ms-2 mt-1" alt="Brandarrow" style={{ height: "fit-content", width: "8px" }} />
            </div>

        </div>
    )
}

export default LatestMobile