import './index.css'
import StarWhite from './img/starWhite.svg'

function Feedback () {
    return (
        <section className="section05">
            <div className="containerSection05">
                <div className="section05Top">
                    <h1>CLIENT FEEDBACK</h1>
                </div>
                <div className="section05Bottom">
                    <div className="bottom05">
                        <img src={StarWhite} alt="" />
                        <div className="contents05">
                            <h3>Miriam Hayes</h3>
                            <p>We have bought and sold a handful of properties in the past with various different realtors, but none came close to the service we got at Presson's. Not only is the team full of experts who know what they're talking about, but they are also always willing to go that extra mile to ensure customer happiness and satisfaction. We were never left hanging and waiting for an answer – everyone got back to us promptly and we never felt like we weren't in the loop of what was going on. The whole process was smooth and we never felt rushed or pushed to make a decision. Instead, we could take the time to decide on everything, and ended up signing the papers within weeks. </p>
                        </div>
                    </div>
                    <div className="bottom05">
                        <img src={StarWhite} alt="" />
                        <div className="contents05">
                            <h3>James and Susan Smith</h3>
                            <p>We had heard a lot of praise for Presson's team, since many of our social circle was already using their services to purchase their own homes. We had pretty high expectations, and were pleasantly surprised when they were not just met, but surpassed by a mile. The team was accommodating at all stages – from viewing the properties, to providing extra information on some of the interior materials, to explaining in detail all the clauses in the contracts. Even our children could join the house viewing process, something which we were eternally grateful. Now, we are happy homeowners in a nice neighborhood, and we couldn't be happier. </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Feedback