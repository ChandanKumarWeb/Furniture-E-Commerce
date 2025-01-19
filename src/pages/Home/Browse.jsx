import Dinning from "../../assets/images/Browse-img/Dinning.webp";
import Living from "../../assets/images/Browse-img/Living.webp";
import Bedroom from "../../assets/images/Browse-img/Bedroom.webp";
function Browse() {
  return (
    <div>
      <div className="heading">
        <h1 className="sectionHead">Browse The Range</h1>
        <p className="sectionPera">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 place-content-center content-center p-9">
        <div className="row-span-3 roomCard">
          <img className="w-68 h-80" src={Dinning} alt="" />
          <h3 className="productName">Dinning</h3>
        </div>
        <div className="row-span-3 roomCard">
          <img className="w-68 h-80" src={Living} alt=""/>
          <h3 className="productName">Living</h3>
        </div>
        <div className="row-span-3 roomCard">
          <img className="w-68 h-80" src={Bedroom} alt=""/>
          <h3 className="productName">Bedroom</h3>
        </div>
      </div>
    </div>
  );
}

export default Browse;
