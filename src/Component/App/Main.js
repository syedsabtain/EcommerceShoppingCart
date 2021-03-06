import React from 'react'

import img1 from '../../images/slider/image1.jpg'
import img2 from '../../images/slider/image2.jpg'
import img3 from '../../images/slider/image3.jpg'
import img4 from '../../images/slider/image4.jpg'
import img6 from '../../images/slider/image6.jpg'
import img7 from '../../images/slider/image7.jpg'
import {useSpring, animated} from 'react-spring'
import MainCategory from '../../Store/mainStore'

import resturant from '../../images/slider/resturant.jpg'
import heart from '../../images/background/image4.png'
import './App.css'

import {Link} from 'react-router-dom'

const calc = (x, y) => [ -(y - window.innerHeight / 2) / 20,
    (x - window.innerWidth / 2) / 20,
    1.1
]
const calc1 = (x, y) => [ -(y - window.innerHeight / 2) / 20,
    (x - window.innerWidth / 2) / 20,
    1.1
]
const calc2 = (x, y) => [ -(y - window.innerHeight / 2) / 20,
    (x - window.innerWidth / 2) / 20,
    1.1
]
const calc3 = (x, y) => [ -(y - window.innerHeight / 2) / 20,
    (x - window.innerWidth / 2) / 20,
    1.1
]
const calc4 = (x, y) => [ -(y - window.innerHeight / 2) / 20,
    (x - window.innerWidth / 2) / 20,
    1.1
]
const calc5 = (x, y) => [ -(y - window.innerHeight / 2) / 20,
    (x - window.innerWidth / 2) / 20,
    1.1
]
const calcarray = [
    calc,
    calc1,
    calc2,
    calc3,
    calc4,
    calc5
]
const trans0 = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`
const trans1 = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`
const trans2 = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`
const trans3 = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`
const trans4 = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`
const trans5 = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`
const transarray = [
    trans0,
    trans1,
    trans2,
    trans3,
    trans4,
    trans5
]
const Main = () => {

    const [props,
        set] = useSpring(() => ({
        xys: [
            0, 0, 1
        ],
        config: {
            mass: 5,
            tension: 350,
            friction: 40
        }
    }))
    const [props1,
        set1] = useSpring(() => ({
        xys: [
            0, 0, 1
        ],
        config: {
            mass: 5,
            tension: 350,
            friction: 40
        }
    }))
    const [props2,
        set2] = useSpring(() => ({
        xys: [
            0, 0, 1
        ],
        config: {
            mass: 5,
            tension: 350,
            friction: 40
        }
    }))
    const [props3,
        set3] = useSpring(() => ({
        xys: [
            0, 0, 1
        ],
        config: {
            mass: 5,
            tension: 350,
            friction: 40
        }
    }))
    const [props4,
        set4] = useSpring(() => ({
        xys: [
            0, 0, 1
        ],
        config: {
            mass: 5,
            tension: 350,
            friction: 40
        }
    }))
    const [props5,
        set5] = useSpring(() => ({
        xys: [
            0, 0, 1
        ],
        config: {
            mass: 5,
            tension: 350,
            friction: 40
        }
    }))
    const propsarray = [
        props,
        props1,
        props2,
        props3,
        props4,
        props5
    ]
    const setarray = [
        set,
        set1,
        set2,
        set3,
        set4,
        set5
    ]
    const linkarry = [
        'Accessories',
        'Bowls',
        'Mugs',
        'Dinner',
        'Plates',
        'UniquePiecies'
    ]
    return (

        <div>
            <div
                id="carouselExampleIndicators"
                className="carousel slide"
                data-ride="carousel">
                <ol className="carousel-indicators">
                    <li
                        data-target="#carouselExampleIndicators"
                        data-slide-to="0"
                        className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="5"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={img1} className="d-block w-100" alt="..."/>

                    </div>
                    <div className="carousel-item">
                        <img src={img2} className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src={img3} className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src={img4} className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src={img6} className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src={img7} className="d-block w-100" alt="..."/>
                    </div>
                </div>
                <a
                    className="carousel-control-prev"
                    href="#carouselExampleIndicators"
                    role="button"
                    data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a
                    className="carousel-control-next"
                    href="#carouselExampleIndicators"
                    role="button"
                    data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
            <div className='albumm'>
                <div className="album py-5 bg-light albumm">
                    <div className="container">
                        <div className='text-center text-white mb-5'>
                            <h1 className='fortext'>Category</h1>
                        </div>
                        <div className="row">
                            {Object
                                .entries(MainCategory)
                                .map(([
                                    slug, {
                                        name,
                                        price,
                                        img
                                    }
                                ], key) => {
                                    return (
                                        <div className="col-md-4" key={key}>

                                            <div className="card mb-4 shadow-sm cardbody">
                                                <animated.div
                                                    className='card'
                                                    onMouseMove={({clientX: x, clientY: y}) => setarray[key]({xys: calcarray[key](x, y)})}
                                                    onMouseLeave={() => setarray[key]({
                                                    xys: [0, 0, 1]
                                                })}
                                                    style={{
                                                    transform: propsarray[key]
                                                        .xys
                                                        .interpolate(transarray[key])
                                                }}>
                                                    <img src={img} alt="" className='card-img-top'/>
                                                </animated.div>
                                                <div className="card-body cardbody text-center">
                                                    <Link to={linkarry[key]} className="card-text cardtext btn btn-info">{name}</Link>
                                                    <div className="d-flex justify-content-between align-items-center">
                                                        <div className="btn-group">
                                                            {/* <Link to={linkarry[key]} className="btn btn-sm btn-outline-secondary">View</Link> */}
                                                            {/* <button type="button" className="btn btn-sm btn-outline-secondary">key = value{key}</button> */}
                                                        </div>

                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    )
                                })}
                        </div>
                    </div>
                </div>

            </div>
            <div className='container'>

                <div className='row'>
                    <div className='col-md-8'>
                        <div className='pt-3 pb-3'>
                            <img src={resturant} className='d-block w-100' alt=""/>
                        </div>
                    </div>
                    <div className='col-md-4 text-center  d-flex align-items-center '>
                        <div className='ml-5 pl-5'>
                            <h2>Resturants</h2>
                            <p>Are you a chef, interested in my ceramics?</p>
                            <Link to='Contact' className='btn btn-outline-info'>Contact Me</Link>
                        </div>
                    </div>

                </div>
            </div>
            <section className="jumbotron  text-center heart">
                <div className="container fornav mt-5 mb-5">
                    <h1 className='mt-5'>Heart Of Pottery</h1>
                    <h3 className="lead ">We Have One of the best pottery artist in the World.
                    </h3>
                    <p className='lead'>
                        Every pottery is Handmade 100% and</p>
                    <p className='lead mb-5'>
                        we use one of the best Quality Material. its a Brand that Everyone recognise</p>
                    <p>
                      
                    </p>
                </div>
            </section>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-8'>
                        <img src={heart} className='d-block w-100' alt=""/>
                    </div>
                    <div className='col-md-4 d-flex align-items-center'>
                        <div>
                            <h2>Buy Gift For Your Loved Ones</h2>
                            <p>Perfect for birthdays, weddings, housewarming, or just as a small surprise...</p>
                            <Link className='btn btn-outline-danger' to='Mugs'>Go Shopping</Link>
                        </div>
                    </div>
                </div>

            </div>

            <div className='col-md-12 mt-3 p-5'>
                <h3>Handcrafted ceramics and stoneware pottery online</h3>
                <p>If you are looking for functional handmade ceramics and stoneware pottery
                    with a different organic look, then you are at the perfect place. I design and
                    craft each piece in my studio in Pakistan, and every single one of them has a
                    unique decorative beauty combined with functional simplicity.</p>
                <p>At Heart Of Pottery, I offer you handmade pottery that has a different touch
                    and feel, inspired by nature.</p>
                <p>You can see all my ceramic functional pottery in my web shop, starting from
                    the marvelous and eye-catching collections of handmade ceramic dinnerware sets,
                    along with some beautiful handmade ceramic mugs and handmade ceramic cups as
                    well as unique handmade ceramic plates with magnificent handmade ceramic bowls.
                    You will also find handcrafted accessories and unique handmade functional
                    ceramic pieces, which can complete your table setting.
                </p>
                <p>All my ceramics are 100% microwave safe and dishwasher friendly.</p>
                <p></p>
            </div>

        </div>
    )
}

export default Main