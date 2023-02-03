import { Card } from "react-bootstrap"

export default () => (
    
        <Card className={"fj-card"}>
            <div className="card-body-wrapper">
                <Card.Header className="d-flex flex-row">
                    <img
                    src={""}
                    className="rounded-circle mr-3"
                    height="50px"
                    width="50px"
                    alt="avatar"
                    />
                    <div>
                        <Card.Title className="font-weight-bold mb-1">
                            Анужин
                        </Card.Title>
                        <Card.Text className="card-date">2023 оны 1-р сарын 31 </Card.Text>
                    </div>
                </Card.Header>
                <div className="view overlay">
                    <Card.Img
                    src=""
                    alt="Card image cap"
                    />
                </div>
                <Card.Body>
                    <Card.Title className="card-main-title">
                        Микросэрвис орчин үед
                    </Card.Title>
                    <Card.Text>Веб технологи</Card.Text>
                </Card.Body>
            </div>
    </Card>
);