import React from "react";
import {
  Container,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
} from "@mui/material";
import { ClientContext } from "../contexts/ClientProvider";

function BoxPage() {
  const { getmakaroons, makaroons } = React.useContext(ClientContext);

  React.useEffect(() => {
    getmakaroons();
  }, []);

  return (
    <div className="all-products">
      <Container>
        <h2>Все продукты</h2>
        <div className="products">
          {makaroons.map((item) => (
            <Card key={item.id} className="products-card">
              <CardMedia component="img" height={200} image={item.photo} />
              <CardContent>
                <Typography
                  className="product-card-title"
                  gutterBottom
                  variant="h5"
                  component="div"
                >
                  {item.name}
                </Typography>
                <ul>
                  <li>
                    <span>Название:</span>
                    <span>{item.taste}</span>
                  </li>
                  <li>
                    <span>Цена:</span>
                    <span>{item.price}</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default BoxPage;
