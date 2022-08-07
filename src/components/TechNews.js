import React from 'react'
import Brandarrow from '../assests/Vector2.svg'
import Mobile2 from '../assests/mobile2.svg'

const TechNews = () => {

    let list = [
        {
            image: Mobile2,
            title: "Vivo�s Latest Flagship X80 Is Now Available For Sale In Pakistan...",
            time: "5 min ago"
        },
        {
            image: Mobile2,
            title: "Vivo�s Latest Flagship X80 Is Now Available For Sale In Pakistan...",
            time: "5 min ago"
        }, {
            image: Mobile2,
            title: "Vivo�s Latest Flagship X80 Is Now Available For Sale In Pakistan...",
            time: "5 min ago"
        }
        ,
        {
            image: Mobile2,
            title: "Vivo�s Latest Flagship X80 Is Now Available For Sale In Pakistan...",
            time: "5 min ago"
        }, {
            image: Mobile2,
            title: "Vivo�s Latest Flagship X80 Is Now Available For Sale In Pakistan...",
            time: "5 min ago"
        }
        , {
            image: Mobile2,
            title: "Vivo�s Latest Flagship X80 Is Now Available For Sale In Pakistan...",
            time: "5 min ago"
        }
    ]
    return (
        <div className="my-3">
            <div className='d-flex justify-content-between my-3 px-2'>
                <div>
                    <p className='right-border ms-1 ps-2 font26 font18' style={{ fontWeight: "bold" }}>Tech News</p>

                </div>
                <div>
                    <button type='button' className='d-flex font18 font12  align-items-center justify-content-center rounded-pill border  px-3' style={{ height: "36px" }} >
                        <p style={{ fontWeight: 600 }}>See More</p> <img src={Brandarrow} className="align-items-center ms-2 " alt="Brandarrow" style={{ height: "fit-content", width: "8px" }} />
                    </button>
                </div>

            </div>
            <div className="row my-3 mx-0">

                {list.map((e) => <div className="col-md-6 ">
                    <div className="card mb-3 p-3 latest_mobile" >
                        <div className="row g-0">
                            <div className="col-4 ">
                                <img src={e.image} className="img-fluid mx-auto rounded-start" alt="..." />
                            </div>
                            <div className="col-8">
                                <div className="card-body">
                                    <h5 className="card-title font22 font14" style={{ fontWight: "bold" }}>{e.title}</h5>
                                    <p className="card-text"><small className="text-muted"><a href="/" className='text-danger text-decoration-underline  font20 font11b' >Read More</a></small></p>
                                    <p className="card-text text-muted font18t font8b" >{e.time}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>)}
            </div>
        </div>
    )
}

export default TechNews