import React from "react";
import Container from "./components/Container"
import IdCard from "./components/IdCard"

// import components

function App() {
  return (
    <div>
        {/* RENDER YOUR COMPONENTS HERE */}
      <Container>

  <IdCard
    fullName='John Doe'
    gender='male'
    birthday="1992-07-14"
    picture="https://randomuser.me/api/portraits/men/44.jpg"
  />

  <IdCard 
    fullName='Obrien Delores'
    gender='female'
    birthday="1988-05-11"
    picture="https://randomuser.me/api/portraits/women/44.jpg"
  />

      </Container>
      
    </div>
  );
}

export default App;