import { useState } from "react";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Modal from "./Components/Modal/Modal";

function App() {
  const [showModal, setShowModal] = useState(false);
  const showModalSet = () => {
    console.log(showModal);
    setShowModal(!showModal);
    console.log(showModal);
  };
  return (
    <div className="container">
      {showModal && <Modal text={"خرید"} setShowModal={showModalSet}/>}
      <div className="row justify-content-between">
        <div className="col-lg-6 col-sm-12 ">
          <Header textName={"خرید ها"} />
          <Main setShowModal={showModalSet} text={"خرید"} />
        </div>
        <div className="col-lg-6 col-sm-12">
          <Header textName={"فروش ها"} />
          <Main text={"فروش"} setShowModal={showModalSet} />
        </div>
      </div>
    </div>
  );
}

export default App;
