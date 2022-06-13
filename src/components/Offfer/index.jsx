import './style.css'
import dashWhite from './img/dashWhite.svg'
import starWhite from './img/starWhite.svg'


function Offfer () {
    return (
        <section className='section02'>
            <div className='containerSection02'>
                <div className="section02Left">
                    <h1>WHAT WE OFFFER</h1>
                    <img src={dashWhite} alt="" />
                </div>
                <div className="section02Right">
                    <div className="rightOptions">
                        <div className="optionsTop">
                            <img src={starWhite} alt="" />
                        </div>
                        <div className="optionsBottom">
                            <h2>EXPERIENCED TEAM</h2>
                            <p>Each of us is a master of our craft – we've worked a number of years in our field 
                            and each have passion and creative vision for every project we put our hands on.</p>
                        </div>
                    </div>
                    <div className="rightOptions">
                        <div className="optionsTop">
                            <img src={starWhite} alt="" />
                        </div>
                        <div className="optionsBottom">
                            <h2>QUALITY TO DIE FOR</h2>
                            <p>We pay a lot of attention to each and every detail, because we know that we are in charge of creating somebody's safe haven. 
                                We partner up with the best craftsmen to ensure our famed quality.</p>
                        </div>
                    </div>
                    <div className="rightOptions">
                        <div className="optionsTop">
                            <img src={starWhite} alt="" />
                        </div>
                        <div className="optionsBottom">
                            <h2>VISIONARIES OF THE FUTURE</h2>
                            <p>We're not scared to go beyond the horizon. 
                                As the visionaries of tomorrow, we won't say no to 
                                experimentation, unusual materials, or unlikely combinations. 
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Offfer 