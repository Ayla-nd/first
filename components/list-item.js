import { Card } from "react-bootstrap";

export default () => (
    <Card className={'fj-card fj-card-list'}>
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
                    <Card.Text className="card-date">2023 оны 1-р сарын 31</Card.Text>
                </div>
            </Card.Header>
            <Card.Body>
                <Card.Title className="card-main-title">
                    JAMstack архитектурын тухай
                </Card.Title>
                <Card.Text>Статик сайт</Card.Text>
            </Card.Body>
        </div>
    </Card>
);