import Card from './components/Card';
import BarChart from './components/BarChart';
import DoughnutChart from './components/DoughnutChart';
import LineChart from './components/LineChart';
import PlaceContentCenter from './components/PlaceContentCenter';
import PieChart from './components/PieChart';

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
      <Card>
        <Card.Title>Line Chart</Card.Title>
        <Card.Body>
          <LineChart />
        </Card.Body>
      </Card>
      <Card>
        <Card.Title>Pie Chart</Card.Title>
        <Card.Body>
          <PieChart />
        </Card.Body>
      </Card>
    </PlaceContentCenter>
  );
}
