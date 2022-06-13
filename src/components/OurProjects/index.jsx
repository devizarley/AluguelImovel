import './index.css'
import Img04Left from './img/img04Left.webp'
import Img04Right from './img/img04Right.webp'
import StarSvg from './img/star.svg'

function OurProjects () {
    return (
        <section className="section04">
            <div className="containerSection04">
                <header>
                    <h1>SEE OUR OTHER PROJECTS</h1>
                    <img src={StarSvg} alt="" />
                </header>
                <main>
                    <div className="section04Left">
                        <img src={Img04Left} alt="" />
                        <h3>BRIDGEWATER JOY RESIDENCE</h3>
                    </div>
                    <div className="section04Right">
                        <img src={Img04Right} alt="" />
                        <h3>PLEASANTVIEW GEM INN</h3>
                    </div>
                </main>
                <footer>
                    <p>Our years of experience makes us the ideal partner for your next project. We won't shy away from a challenge, but also know how to manage risks. </p>
                    <button>SEE MORE</button>
                </footer>
            </div>
        </section>
    )
}
export default OurProjects