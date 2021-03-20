// import { React, useState, useRef, useEffect, useCallback } from "react";
// import { useSpring, animated } from "react-spring";
// import ReactDom from "react-dom";
// import "./Modal.scss";
// import { Container } from "react-bootstrap";

// function Test({ children, isOpen, setIsOpen, onClose }) {
//   const [email, setEmail] = useState("");
//   const [textarea, setTextarea] = useState("");
//   const [name, setName] = useState("");
//   const [clicked, setClicked] = useState(false);
//   const [fade, setFade] = useState(true);
//   const modalRef = useRef();

//   const animation = useSpring({
//     config: {
//       duration: 650,
//     },
//     opacity: isOpen ? 1 : 0,
//     transform: isOpen ? "translateY(0%)" : "translateY(-100%)",
//   });
//   const closeModal = (e) => {
//     if (modalRef.current === e.target) {
//       setIsOpen(false);
//     }
//   };
//   // NOTES: findout how to restore state to previous stage after animation is done; how to delete the prerefilled fields on the modal; how to click on window to close modal; how to close modal when mail is sent (maybe css animation of a paper being sent) alsoooooooooo put pop up when field is incorrect

//   function handleSubmit(e) {
//     e.preventDefault();

//     const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     const test = regex.test(String(email).toLowerCase());
//     //&& name.length & textarea.length
//     if (test && name.length && textarea.length) {
//       setClicked(true);
//       window.setTimeout(() => {
//         onClose();
//       }, 5000);
//     } else {
//       console.log("INCORRECT");
//     }
//   }
//   if (!isOpen) return null;

//   return ReactDom.createPortal(
//     <>
//       <Container>
//         <div id="noModal" ref={modalRef} onClick={closeModal}>
//           {/* <animated.div style={animation}> */}
//           <div id="modal">
//             <div className="close-container" onClick={onClose}>
//               <div className="leftright"></div>
//               <div className="rightleft"></div>
//               <label className="close-text">close</label>
//             </div>
//             {children}
//             <form>
//               <input
//                 type="text"
//                 name="name"
//                 placeholder="שם"
//                 className="area"
//                 onChange={(text) => setName(text.target.value)}
//               />
//               <br />
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="כתובת מייל "
//                 value={email}
//                 className="area"
//                 onChange={(text) => setEmail(text.target.value)}
//               />
//               <br />
//               <textarea
//                 placeholder="רשום הודעה כאן..."
//                 onChange={(text) => setTextarea(text.target.value)}
//                 name="message"
//                 className="area text"
//                 rows="6"
//                 form="email-us"
//               ></textarea>
//               <br />
//               <div className="main">
//                 <button className="button" onClick={handleSubmit}>
//                   שלח
//                 </button>
//                 <div
//                   className={`loader ${clicked ? "active" : ""}`}
//                   onAnimationEnd={() => {
//                     setFade(false);
//                     // if (clicked) setTimeout(onClose(), 6000);
//                   }}
//                 >
//                   <div
//                     className={`check ${fade && clicked ? "" : "active"}`}
//                     onAnimationEnd={() => {
//                       // if (clicked) setTimeout(onClose(), 3000);
//                     }}
//                   >
//                     <span className="check-one"></span>
//                     <span className="check-two"></span>
//                   </div>
//                 </div>
//               </div>
//             </form>
//           </div>
//           {/* </animated.div> */}
//         </div>
//       </Container>
//     </>,
//     document.getElementById("portal")
//   );
// }

// export default Test;