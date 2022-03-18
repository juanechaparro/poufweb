

import { Footer } from "./footer/Footer";
import { HomeScreen } from "./home/HomeScreen";
import { InstagramScreen } from "./InstagramSection/InstagramScreen";
import { NewsLetter } from "./newsteller/NewsLetter";
import { Sections } from "./sections/Sections";




function App() {
  return (
      <div>
       <HomeScreen/>
      <Sections/>
      <InstagramScreen/>
      <NewsLetter/>
      <Footer/>
      </div>
  );
}

export default App;
