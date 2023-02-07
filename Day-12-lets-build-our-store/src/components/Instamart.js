import React, { useState } from "react";

const Section = ({ title, description, isVisible, setIsVisible }) => {
  return (
    <div className="border border-black p-2 m-2">
      <h3 className="font-bold text-xl">{title}</h3>
      {isVisible ? (
        <button
          onClick={() => setIsVisible(false)}
          className="cursor-pointer underline"
        >
          hide
        </button>
      ) : (
        <button
          onClick={() => setIsVisible(true)}
          className="cursor-pointer underline"
        >
          show
        </button>
      )}
      {isVisible && <p>{description}</p>}
    </div>
  );
};

const Instamart = () => {
  const [visibleSection, setVisibleSection] = useState("about");
  return (
    <div>
      <h1 className="text-3xl p-2 m-2 font-bold">Instamart</h1>
      <Section
        title={"About Instamart"}
        description={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
        isVisible={setVisibleSection === "about"}
        setIsVisible={() => setVisibleSection("about")}
      />

      <Section
        title={"Team Instamar"}
        description={
          "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here."
        }
        isVisible={setVisibleSection === "team"}
        setIsVisible={() => setVisibleSection("team")}
      />

      <Section
        title={"Career"}
        description={
          "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia."
        }
        isVisible={setVisibleSection === "career"}
        setIsVisible={() => setVisibleSection("career")}
      />
    </div>
  );
};

export default Instamart;



// import React, { useState } from "react";

// const Section = ({ title, description, isVisible, setIsVisible }) => {
//   return (
//     <div className="border border-black p-2 m-2">
//       <h3 className="font-bold text-xl">{title}</h3>
//       {isVisible ? (
//         <button
//           onClick={() => setIsVisible(false)}
//           className="cursor-pointer underline"
//         >
//           hide
//         </button>
//       ) : (
//         <button
//           onClick={() => setIsVisible(true)}
//           className="cursor-pointer underline"
//         >
//           show
//         </button>
//       )}
//       {isVisible && <p>{description}</p>}
//     </div>
//   );
// };

// const Instamart = () => {
//   const [sectionConfig, setSectionConfig] = useState({
//     showAbout: false,
//     showTeam: false,
//     showCareer: false,
//   });
//   return (
//     <div>
//       <h1 className="text-3xl p-2 m-2 font-bold">Instamart</h1>
//       <Section
//         title={"About Instamart"}
//         description={
//           "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
//         }
//         isVisible={sectionConfig.showAbout}
//         setIsVisible={() =>
//           setSectionConfig({
//             showAbout: true,
//             showTeam: false,
//             showCareer: false,
//           })
//         }
//       />

//       <Section
//         title={"Team Instamar"}
//         description={
//           "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here."
//         }
//         isVisible={sectionConfig.showTeam}
//         setIsVisible={() =>
//           setSectionConfig({
//             showAbout: false,
//             showTeam: true,
//             showCareer: false,
//           })
//         }
//       />

//       <Section
//         title={"Career"}
//         description={
//           "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia."
//         }
//         isVisible={sectionConfig.showCareer}
//         setIsVisible={() =>
//           setSectionConfig({
//             showAbout: false,
//             showTeam: false,
//             showCareer: true,
//           })
//         }
//       />
//     </div>
//   );
// };

// export default Instamart;
