import { useState } from "react";
import Content from "./components/Content";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Location from "./components/Location";
import Navbar from "./components/Navbar";
import MyModal from "./components/shared/MyModal";
import AuthContextProvider from "./context/AuthContextProvider";
import Join from "./components/Join";
import WritePost from "./components/WritePost";

function App() {
  const [modalShow, setModalShow] = useState(false);
  return (
    <AuthContextProvider>
      <div className="">
        <Header setModalShow={setModalShow} />
        <Hero />
        <Navbar />
        <div className="content">
          <Content />
          <Location />
          <MyModal show={modalShow} onHide={() => setModalShow(false)}>
            <Join />
          </MyModal>
        </div>
        <WritePost />
      </div>
    </AuthContextProvider>
  );
}

export default App;
