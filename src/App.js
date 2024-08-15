import React from 'react';
import { Layout, Card, Col, Row, Typography } from 'antd';
import 'antd/dist/reset.css';
import './App.css'; // Asegúrate de tener un archivo CSS para los estilos personalizados

const { Header: AntHeader } = Layout; // Renombra la importación de Header para evitar conflictos
const { Title, Paragraph } = Typography;

const MyHeader = () => (
  <AntHeader className="custom-header"> {/* Usa AntHeader en lugar de Header */}
    <div className="container">
      <img src="/proximamente.png" alt="Proximamente" className="img-fluid" />
    </div>
  </AntHeader>
);

const MovieCard = () => (
  <div className="col">
    <Row style={{ minHeight: '20vh', marginTop: '25px' }} justify="center">
      <Col>
        <div style={{ textAlign: 'center' }}>
          <Title level={1} style={{ fontFamily: 'ya veremos' }}>
            ¡No te pierdas las próximas películas que se transmitirán en nuestro cine!
          </Title>
        </div>
      </Col>
    </Row>

    <Card bordered={true} style={{ width: '100%' }}>
      <Row gutter={16} align="middle" >
        <Col span={8}>
          <img 
            src="/elpadrino.png" 
            alt="El Padrino" 
            className="movie-image" 
            style={{ width: '100%' }} 
          />
        </Col>
        <Col span={16}>
          <div className="card-content">
            <Title level={3} className="text-danger">
              El Padrino (1972)
            </Title>
            <Paragraph>
              Las familias mafiosas de Nueva York entran en conflicto cuando el capo de una de las más poderosas, Vito Corleone, se opone a que la Cosa Nostra entre en el negocio del tráfico de drogas. Como consecuencia, sufre un atentado que le deja al borde de la muerte. Para vengar el golpe y salvar a la familia, Michael Corleone, su hijo predilecto, quien siempre había estado al margen de los negocios de la familia, debe meterse de lleno en el sucio mundo del crimen.
            </Paragraph>
            <ul className="movie-details">
              <li><strong>Género:</strong> Crimen/Acción</li>
              <li><strong>Director:</strong> Francis Ford Coppola</li>
              <li><strong>Calificación:</strong> +16</li>
              <li><strong>Duración:</strong> 2h 55m</li>
            </ul>
          </div>
        </Col>
      </Row>
    </Card>
  </div>
);

// Define el componente principal App
const App = () => (
  <div>
    <MyHeader />
    <MovieCard />
  </div>
);

// Exporta el componente principal App como exportación por defecto
export default App;
