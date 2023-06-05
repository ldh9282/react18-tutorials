import Title from "./Title"
import aboutImg from '../images/about.jpeg'

export default function About() {
    return (
        <section className="section" id="about">
            <Title title='about' subTitle='us' />

            <div className="section-center about-center">
                <div className="about-img">
                    <img src={aboutImg} className="about-photo" alt="awesome beach" />
                </div>
                <article className="about-info">
                    <h3>explore the difference</h3>

                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Totam nulla consequuntur similique cum nisi ut porro?
                    </p>

                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Totam nulla consequuntur similique cum nisi ut porro?
                    </p>

                    <a href="#" className="btn">
                        read more
                    </a>
                </article>
            </div>
        </section>
    )
}