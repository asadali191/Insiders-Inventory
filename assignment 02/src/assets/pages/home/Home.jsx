import React from 'react'
import './Home.css'
import Button from '../../components/button/Button'
import Card from '../../components/card/Card'
import image2 from '../../images/img2.png'
import image3 from '../../images/img3.png'
import Grid from '@mui/material/Grid'
import image from '../../images/img1.png'
import Scard from '../../components/scard/Scard'
import image4 from '../../images/img4.png'
import image5 from '../../images/img5.png'
import image6 from '../../images/img6.png'
import Commentcard from '../../components/commentcard/Commentcard'
import Masterlogin from '../masterlogin/Masterlogin'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Footer from '../../components/footer/Footer'
import SignIn from '../signin/SignIn'
import { useNavigate } from 'react-router-dom'
import Navbar from '../../components/navbar/Navbar'
import SimpleSlider from '../../components/simpleslider/SimpleSlider'


export default function Home() {
    const navigate=useNavigate()
    const handlesigup = ()=>{
        navigate('/masterlogin');
    }
    
    return (
        <>
            <section>
                <div>
                    <Navbar/>
                </div>
                <div className='home'>
                    <div className="home_content">Insiders Off-Market Inventory</div>
                    <div className="home_heading"><p>Your <span className='home_heading_span'>Next Opportunity</span> Awaits</p></div>
                    <div className="home_text">Unlock Exclusive Opportunities at Insider's Inventory,
                        specializing in Buy & Hold, Owner-Occupied Retail,
                        and Lucrative Flip Ventures. Discover your path
                        to profitable real estate investments period.</div>
                    <div className="home_btns">
                        <Button
                            onclick={()=>handlesigup()}
                            label="Submit an Off-Market Property"
                        />

                        <Button
                            label="View our Off-Market Inventory"
                            styles={{
                                background: 'transparent',
                                color: '#4DAD49',
                                border: '1px solid #4DAD49'
                            }} />
                    </div>
                </div>

            </section>
            <section >
                <SimpleSlider/>
                <div className='card_container'>
                    <div className='card_container_heading'>
                        Off-Market <span className='card_container_heading_span'>Properties</span>

                        <div>
                            <KeyboardBackspaceIcon />
                            <ArrowRightAltIcon />

                        </div>
                    </div>

                    <Grid container spacing={5}>
                        <Grid item sm={4} xs={12}>
                            <Card
                                img={image}
                                property={"vacant"}
                                value={"$45,120"}
                                percentage={"37%"}

                            />
                        </Grid>
                        <Grid item sm={4} xs={12}>
                            <Card
                                img={image2}
                                property={"Owner Occupied"}
                                value={"$45,120"}
                                percentage={"37%"}
                            />
                        </Grid>
                        <Grid item sm={4} xs={12}>
                            <Card
                                img={image3}
                                property={"Tenant-Occupied"}
                                value={"$45,120"}
                                percentage={"37%"}
                            />
                        </Grid>
                    </Grid>
                </div>
            </section>

            <section>
                <div className='scard'>
                    <div className="scard_heading">
                        Off-Market <span className='scard_heading_span'>Property Types</span>
                    </div>

                    <Grid container spacing={3}>
                        <Grid item sm={4} xs={12}>
                            <Scard
                                scimage={image4}
                                sctext={"Secure your future with our Buy & Hold properties, offering stability and long-term growth potential."}
                                scheading={"Buy & Hold Properties"}
                            />
                        </Grid>
                        <Grid item sm={4} xs={12}>
                            <Scard
                                scimage={image5}
                                sctext={"Secure your future with our Buy & Hold properties, offering stability and long-term growth potential."}
                                scheading={"Buy & Hold Properties"}
                            />
                        </Grid>
                        <Grid item sm={4} xs={12}>
                            <Scard
                                scimage={image6}
                                sctext={"Secure your future with our Buy & Hold properties, offering stability and long-term growth potential."}
                                scheading={"Buy & Hold Properties"}
                            />
                        </Grid>

                    </Grid>

                </div>
            </section>

            <section>
                <div className='commentcard'>
                    <div className="commentcard_heading">
                        What Our  <span className='commentcard_heading_span'>Clients Say</span>
                    </div>
                    <div className='commentcard_grid'>
                        <div>
                            <Commentcard />

                        </div>
                        <div>
                            <Commentcard />

                        </div>
                        <div>
                            <Commentcard />
                        </div>

                    </div>
                </div>
            </section>

            <section>
                <Footer />
            </section>



             

        </>
    )
}
