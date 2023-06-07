import Card from './components/Card';
import FakerLineChart from './components/FakerLineChart';
import PlaceContentCenter from './components/PlaceContentCenter';

export default function App() {
  return (
    <PlaceContentCenter>
      <Card>
        <Card.Title>Faker Line Chart</Card.Title>
        <Card.Body>
          <FakerLineChart />
        </Card.Body>
      </Card>
    </PlaceContentCenter>
  );
}
