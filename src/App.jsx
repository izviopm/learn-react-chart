import PlaceContentCenter from './components/PlaceContentCenter';
import Card from './components/Card';
import BarChart from './components/BarChart';
import DoughnutChart from './components/DoughnutChart';

export default function App() {
  return (
    <PlaceContentCenter>
      <Card>
        <Card.Title>Bar Chart</Card.Title>
        <Card.Body>
          <BarChart />
        </Card.Body>
      </Card>
      <Card>
        <Card.Title>Doughnut Chart</Card.Title>
        <Card.Body>
          <DoughnutChart />
        </Card.Body>
      </Card>
    </PlaceContentCenter>
  );
}
