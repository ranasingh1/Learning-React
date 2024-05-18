import React, { useState } from "react";


const Section = ({ title, description, isVisible, setIsVisible }) => {
      return (
    <div style={{ border: "solid", margin: "10px" }}>
      <h3>{title}</h3>
      {isVisible &&<p>{description}</p>}
      <button onClick={()=>setIsVisible(!isVisible)}>{isVisible?"Hide":"Show"}</button>
    </div>
  );
};

const Instamart = () => {
    const [visibleSection, setVisibleSection] = useState("About");
  return (
 <>   <Section
      title={"About"}
      description={
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
      }
      isVisible={visibleSection==="About"}
      setIsVisible={(val) => setVisibleSection(val ? "About" : "")}

    />
    <Section title={"Product"}
    description={
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
      }
      isVisible={visibleSection==="Product"}
      setIsVisible={(val) => setVisibleSection(val ? "Product" : "")}

    />
    <Section title={"Card"}
    description={
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
      }
      isVisible={visibleSection==="Card"}
      setIsVisible={(val) => setVisibleSection(val ? "Card" : "")}

    />
    </>
  );
};

export default Instamart;
