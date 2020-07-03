import Head from "next/head";

import DogImage from "../components/DogImage";
import RemoteDogCaption from "./RemoteDogCaption";

const Home = () => (
  <div className="container">
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <div>This dog is really cute, you should adopt this dog.</div>
    <div>
      <DogImage />
      <RemoteDogCaption name="Sally" />
    </div>
  </div>
);

export default Home;
