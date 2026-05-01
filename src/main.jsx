import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createElement } from "react";
import { Fragment } from "react";
const root = createRoot(document.getElementById("root"));
root.render(<App />);
// const newele = (
//   <h1>
//     <span>is there yours</span>
//   </h1>
// );
// console.log(newele);
// root.render(<h1>Hello from Jaymin</h1>);

// // root.render(newele);
// // const obj = createElement("h1", null, createElement("span", null, "is it ok"));
// // console.log(obj);
// //root.render(obj);
// function Appnew() {
//   return <h1 className="header">this is new project of mine</h1>;
// }

// // const h1 = document.createElement("h1");
// // h1.textContent = "This is imperative coding";
// // h1.className = "header";
// // document.getElementById("root").appendChild(h1);

// root.render(<Appnew />);
// root.render(
//   <TempName />,
//   //TempName(),
// );
// import Header from "./components/Header.jsx";
// import Main, { Footer } from "./components/MainContent.jsx";
// function TempName() {
//   return (
//     <Fragment>
//       <div className="mainsection">
//         <Header />
//         <Main />
//       </div>
//       <Footer />
//     </Fragment>
//   );
// }
