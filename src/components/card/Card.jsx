import React, { useEffect, useState } from 'react'
import '../card/Card.css'




function Card() {

    const [data, setData] = useState([]);
    useEffect(() => {
        const Getdata = async () => {
            await fetch(
                `https://jsonplaceholder.typicode.com/posts`
            )
                .then((res) => res.json())
                .then((data) => {

                    setData(data);
                    console.log(data);
                });
        }
        Getdata();
    }, []);


    return (
        <div className="Card">


            <div className="container">



                <div className="row">



                    {data.map((data) => {
                        return (


                            <div className="col-md-6 col-12 m-auto">


                                <div class=" white_cards bg-gray-400 antialiased text-gray-900">
                                    <div>

                                        <img src="https://source.unsplash.com/random/350x350" alt=" random imgee" class="w-full white_cards object-cover object-center rounded-lg shadow-md" />

                                        <div class="relative px-4 -mt-16  ">
                                            <div class="bg-white  p-6 rounded-lg shadow-lg">
                                                <div class="flex items-baseline">
                                                    <span class="bg-teal-200 text-teal-800 text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
                                                        New
                                                    </span>
                                                    <div class="ml-2 text-gray-600 uppercase text-xs font-semibold tracking-wider">
                                                        Domain  &bull; Hosting
                                                    </div>
                                                </div>

                                                <h4 class="mt-1 text-xl font-semibold uppercase leading-tight truncate">{data.title}</h4>

                                                <div class=" white_cards">
                                                    {data.body}
                                                    {/* <span class="text-gray-600 text-sm">   /wk</span> */}
                                                </div>
                                                <div class="mt-4">
                                                    <span class="text-teal-600 text-md font-semibold">4/5 ratings </span>
                                                    <span class="text-sm text-gray-600">(based on 234 ratings)</span>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>



                            </div>

                        )
                    })



                    }
                </div>

            </div>








        </div>
    )
}

export default Card
