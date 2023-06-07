import PlaceContentCenter from './components/PlaceContentCenter';
import Card from './components/Card';
import BarChart from './components/BarChart';

export default function App() {
  return (
    <PlaceContentCenter>
      <Card>
        <Card.Title>Bar Chart</Card.Title>
        <Card.Body>
          <BarChart />
        </Card.Body>
      </Card>
    </PlaceContentCenter>
  );
}
