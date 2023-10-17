import React from 'react'
import { BsReverseLayoutTextSidebarReverse, BsPeopleFill, BsFillBellFill, BsPercent, BsArrowUp, BsFilterSquare, BsArrowDown, BsCreditCard2Back }
    from 'react-icons/bs'
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line }
    from 'recharts';
import { AiOutlineDollar } from "react-icons/ai"

function Home() {

    const data = [
        {
            name: 'Jan',
            uv: 4000,
        },
        {
            name: 'Feb',
            uv: 3000,
        },
        {
            name: 'March',
            uv: 2000,
        },
        {
            name: 'April',
            uv: 1890,
        },
        {
            name: 'May',
            uv: 1890,
        },
        {
            name: 'Jun',
            uv: 2390,
        },
        {
            name: 'July',
            uv: 2090,
        },
        {
            name: 'Aug',
            uv: 3890,
        },
        {
            name: 'Sub',
            uv: 1490,
        },
        {
            name: 'Oct',
            uv: 2490,
        },
        {
            name: 'Nov',
            uv: 3290,
        },
        {
            name: 'Dec',
            uv: 4000,
        },
    ];


    return (
        <main className='main-container'>

            <div className='main-cards'>
                <div className='card'>
                    <div>
                        <AiOutlineDollar className='card_icon' />
                    </div>
                    <div className='card-inner'>
                        <b>Earning <br />
                            $198k <br />
                            <span className='spann'><BsArrowUp className='arrow' />37.8<BsPercent className='percent' /></span> this month
                        </b>
                    </div>
                </div>
                <div className='card'>
                    <div>
                        <BsFilterSquare className='card_icon2' />
                    </div>
                    <div className='card-inner'>
                        <b>Orders <br />
                            $2.4k <br />
                            <span className='spann2'><BsArrowDown className='arrow' />2<BsPercent className='percent' /></span> this month
                        </b>
                    </div>
                </div>

                <div className='card'>
                    <div>
                        <BsCreditCard2Back className='card_icon3' />
                    </div>
                    <div className='card-inner'>
                        <b>Balance <br />
                            $2.4k <br />
                            <span className='spann2'><BsArrowDown className='arrow' />2<BsPercent className='percent' /></span> this month
                        </b>
                    </div>
                </div>
                <div className='card'>
                    <div>
                        <BsReverseLayoutTextSidebarReverse className='card_icon4' />
                    </div>
                    <div className='card-inner'>
                        <b>Totale Sales <br />
                            $89k <br />
                            <span className='spann'><BsArrowUp className='arrow' />11<BsPercent className='percent' /></span> this month
                        </b>
                    </div>
                </div>
            </div>

            <div className='charts'>
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        width={500}
                        height={300}
                        data={data}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        {/* <Bar dataKey="pv" fill="#8884d8" /> */}
                        <Bar dataKey="uv" fill="#82ca9d" />
                    </BarChart>
                </ResponsiveContainer>

                {/* <ResponsiveContainer width="100%" height="100%">
                <LineChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
                >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                </LineChart>
            </ResponsiveContainer> */}
            


            </div>
            <div>
                <div className='p-4 row'>

                    <div class="card products-table col-md-12">
                        <div class="card-body">
                            <div className='row'>
                                <h5 className="card-title col-md-5 g-0">Product Sell</h5>
                                <form className="d-flex col-md-5">
                                    <input className="card-title form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                    <button className=" card-title btn btn-outline-success" type="submit">Search</button>
                                </form>
                                <p className='col-md-2'>last 30 days</p>
                            </div>


                            <table class="table">
                                <thead>
                                    <tr>

                                        <th scope="col">Product Name</th>
                                        <th scope="col">Stock</th>
                                        <th scope="col">Price</th>
                                        <th scope="col">Total Sales</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>@mdo</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                        <td>@fat</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td colspan="2">Larry the Bird</td>
                                        <td>@twitter</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>
            </div>
        </main>
    )
}

export default Home