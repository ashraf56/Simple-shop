import Blog from "../compo/Home/Blog/Blog";
import Header from "../compo/Home/Header/Header";
import Slider from "../compo/Home/Slider/Slider";
import ALLadmin from "./alladmin/page";

export default function Home() {
  return (
    <main className="flex flex-col  justify-between ">
      <Header/>
 <Blog></Blog>
<Slider></Slider>
<ALLadmin></ALLadmin>
    </main>
  )
}
