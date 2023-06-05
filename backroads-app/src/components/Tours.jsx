import { tours } from "../data"
import Title from "./Title"
import Tour from "./Tour"

export default function Tours() {
    return (
        <section className="section-center" id="tours">
            <Title title='featured' subTitle='tours' />

            <div className="section-center featured-center">
                {
                    tours.map(function(tour) {
                        return (
                            <Tour {...tour} key={tour.id} />
                        )
                    })
                }
            </div>
        </section>
    )
}