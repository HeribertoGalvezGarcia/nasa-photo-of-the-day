import React, {useEffect, useState} from "react";
import "./App.css";
import axios from 'axios';
import Container from "./components/Container";

function App() {
  const [data, setData] = useState({"copyright":"Jose Joaquin Perez","date":"2020-01-23","explanation":"Some 13,000 light-years away toward the southern constellation Pavo, the globular star cluster NGC 6752 roams the halo of our Milky Way galaxy. Over 10 billion years old, NGC 6752 follows clusters Omega Centauri and 47 Tucanae as the third brightest globular in planet Earth's night sky. It holds over 100 thousand stars in a sphere about 100 light-years in diameter. Telescopic explorations of the NGC 6752 have found that a remarkable fraction of the stars near the cluster's core, are multiple star systems. They also reveal the presence of blue straggle stars, stars which appear to be too young and massive to exist in a cluster whose stars are all expected to be at least twice as old as the Sun. The blue stragglers are thought to be formed by star mergers and collisions in the dense stellar environment at the cluster's core. This sharp color composite also features the cluster's ancient red giant stars in yellowish hues. (Note: The bright, spiky blue star at 11 o'clock from the cluster center is a foreground star along the line-of-sight to NGC 6752)","hdurl":"https://apod.nasa.gov/apod/image/2001/NGC6752LRGBcrop.jpg","media_type":"image","service_version":"v1","title":"Globular Star Cluster NGC 6752","url":"https://apod.nasa.gov/apod/image/2001/NGC6752LRGBcrop1024.jpg"});

  useEffect(() => {
     axios
       .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2012-03-14")
       .then(res => setData(res.data))
       .catch(err => console.log(err));
     }, []);

  return (
    <div className="App">
      <Container data={data} />
    </div>
  );
}

export default App;
