import { services } from "../data"
import Service from "./Service"
import Title from "./Title"

export default function Services() {
    return (
        <section className="section services" id="services">
            <Title title='our' subTitle='services' />

            <div className="section-center services-center">
                {
                    services.map(function(service) {
                        return (
                            <Service {...service} key={service.id} />
                        )
                    })
                }
            </div>
        </section>
    )
}