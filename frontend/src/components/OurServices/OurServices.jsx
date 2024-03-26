import React from 'react'
import {
    Col,
    Container,
    Row,
    Image
} from 'react-bootstrap'
import './ourSerices.css'

const OurServices = () => {
    return (
        <Container className="main" fluid>
            <h1 className="main-title">OUR SERVICES</h1>
            <p className="description">
                {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ac nunc non arcu aliquet sollicitudin. Sed elementum placerat ex. Donec a lectus vel lectus faucibus mattis.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ac nunc non arcu aliquet sollicitudin. Sed elementum placerat ex. Donec a lectus vel lectus faucibus mattis */}
            </p>
            <Container className="services">
                <Row>
                    <Col md={3}>
                        <h5 className="sub-title">Workers</h5>
                        {/* <Image className="img" src="images/services/heavy.svg" fluid /> */}
                        <p className="sub-desc">No need to worry of labour. We provide skilled labour that can take care of your plants and garden</p>
                    </Col>
                    <Col md={3}>
                        <h5 className="sub-title">Same day delivery</h5>
                        {/* <Image className="img" src="images/services/gardening.svg" fluid /> */}
                        <p className="sub-desc">No need to worry of time, you can order plants online and get same-day delivery, fixed-time delivery</p>
                    </Col>
                    <Col md={3}>
                        <h5 className="sub-title">Supplier</h5>
                        {/* <Image className="img" src="images/services/supplier.svg" fluid /> */}
                        <p className="sub-desc">If you are supplier, we are here to sell your product. Just list your sell, and get proper pay for it.</p>
                    </Col>
                    <Col md={3}>
                        <h5 className="sub-title">Consumer</h5>
                        {/* <Image className="img" src="images/services/consumer.svg" fluid /> */}
                        <p className="sub-desc">No need to go offline store and pay high amount. Order all products and get deliver at your doorstep.</p>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default OurServices
