import PlaceContentCenter from './components/PlaceContentCenter';
import Card from './components/Card';
import BarChart from './components/BarChart';
import { useState } from 'react';

export default function App() {
  const [userdata, setUserData] = useState()
  return (
    <PlaceContentCenter>
      <Card>
        <Card.Title>Line Chart</Card.Title>
        <Card.Body>
          <BarChart chartData={} />
        </Card.Body>
        <Card.Footer>skksjskjsksj</Card.Footer>
      </Card>
    </PlaceContentCenter>
  );
}
