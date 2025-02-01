import BgImage from "../assets/img/home-bg.jpg"
import { useEffect, useState } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../../firebase/config";



const Home = () => {

    const [products, setProducts] = useState([])

    const getProductData = async () => {
        try {
            const res = await getDocs(collection(db, 'products'));
            console.log(res, "res");


            const products = res.docs.map((doc) => {
                return ({
                    id: doc.id,
                    ...doc.data()
                })
            })

            setProducts(products);

        } catch (error) {
            console.log(error);

        }
    }

    useEffect(() => {
        getProductData();
    }, [])


    return (
        <>
            <header className="masthead" style={{ backgroundImage: `url(${BgImage})` }}>
                <div className="container position-relative px-4 px-lg-5">
                    <div className="row gx-4 gx-lg-5 justify-content-center">
                        <div className="col-md-10 col-lg-8 col-xl-7">
                            <div className="site-heading">
                                <h1>Clean Blog</h1>
                                <span className="subheading">A Blog Theme by Start Bootstrap</span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <div className="container px-4 px-lg-5">
                <div className="row gx-4 gx-lg-5 justify-content-center">
                    <div className="col-md-10 col-lg-8 col-xl-7">

                        {
                            products && products.map((item,index) => (
                                <>
                                    <div key={index} className="post-preview">
                                        <a href="#">
                                            <h2 className="post-title">{item.name}</h2>
                                            <h3 className="post-subtitle">{item.discription}</h3>
                                        </a>
                                        <p className="post-meta">
                                            Posted by
                                            <a href="#!">Start Bootstrap</a>
                                            on September 24, 2023
                                        </p>
                                    </div>
                                    <hr className="my-4" />
                                </>
                            ))
                        }
                        <div className="d-flex justify-content-end mb-4"><a className="btn btn-primary text-uppercase" href="#!">Older Posts →</a></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;