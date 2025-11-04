// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { all_routes } from "../../../../routes/all_routes";
// import { appleLogo, facebookLogo, googleLogo, logoPng, logoWhitePng } from "../../../../utils/imagepath";


// const Signin = () => {
//   const [isPasswordVisible, setPasswordVisible] = useState(false);

//   const togglePasswordVisibility = () => {
//     setPasswordVisible((prevState) => !prevState);
//   };

//   const route = all_routes;

//   return (
//     <>
//       {/* Main Wrapper */}
//       <div className="main-wrapper">
//         <div className="account-content">
//           <div className="login-wrapper bg-img">
//             <div className="login-content authent-content">
//               <form>
//                 <div className="login-userset">
//                   <div className="login-logo logo-normal">
//                     <img src={appleLogo} alt="img" />
//                   </div>
//                   <Link to={route.dashboard} className="login-logo logo-white">
//                     <img src={logoWhitePng} alt="Img" />
//                   </Link>
//                   <div className="login-userheading">
//                     <h3>Sign In</h3>
//                     <h4 className="fs-16">
//                       Access the panel using your email and passcode.
//                     </h4>
//                   </div>
//                   <div className="mb-3">
//                     <label className="form-label">
//                       Email <span className="text-danger"> *</span>
//                     </label>
//                     <div className="input-group">
//                       <input
//                         type="text"
//                         defaultValue=""
//                         className="form-control border-end-0" />

//                       <span className="input-group-text border-start-0">
//                         <i className="ti ti-mail" />
//                       </span>
//                     </div>
//                   </div>
//                   <div className="mb-3">
//                     <label className="form-label">
//                       Password <span className="text-danger"> *</span>
//                     </label>
//                     <div className="pass-group">
//                       <input
//                         type={isPasswordVisible ? "text" : "password"}
//                         className="pass-input form-control" />

//                       <span
//                         className={`ti toggle-password text-gray-9 ${
//                         isPasswordVisible ? "ti-eye" : "ti-eye-off"}`
//                         }
//                         onClick={togglePasswordVisibility}>
//                       </span>
//                     </div>
//                   </div>
//                   <div className="form-login authentication-check">
//                     <div className="row">
//                       <div className="col-12 d-flex align-items-center justify-content-between">
//                         <div className="custom-control custom-checkbox">
//                           <label className="checkboxs ps-4 mb-0 pb-0 line-height-1 fs-16 text-gray-6">
//                             <input type="checkbox" className="form-control" />
//                             <span className="checkmarks" />
//                             Remember me
//                           </label>
//                         </div>
//                         <div className="text-end">
//                           <Link
//                             className="text-orange fs-16 fw-medium"
//                             to={route.forgotPassword}>

//                             Forgot Password?
//                           </Link>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="form-login">
//                     <Link
//                       to={route.Horizontal}
//                       className="btn btn-primary w-100">

//                       Sign In
//                     </Link>
//                   </div>
//                   {/* <div className="signinform">
//                     <h4>
//                       New on our platform?
//                       <Link to={route.register} className="hover-a">
//                         {" "}
//                         Create an account
//                       </Link>
//                     </h4>
//                   </div> */}
//                   <div className="form-setlogin or-text">
//                     <h4>OR</h4>
//                   </div>
//                   <div className="mt-2">
//                     <div className="d-flex align-items-center justify-content-center flex-wrap">
//                       <div className="text-center me-2 flex-fill">
//                         <Link
//                           to="#"
//                           className="br-10 p-2 btn btn-info d-flex align-items-center justify-content-center">

//                           <img
//                             className="img-fluid m-1"
//                             src={facebookLogo}
//                             alt="Facebook" />

//                         </Link>
//                       </div>
//                       <div className="text-center me-2 flex-fill">
//                         <Link
//                           to="#"
//                           className="btn btn-white br-10 p-2  border d-flex align-items-center justify-content-center">

//                           <img
//                             className="img-fluid m-1"
//                             src={googleLogo}
//                             alt="google" />

//                         </Link>
//                       </div>
//                       <div className="text-center flex-fill">
//                         <Link
//                           to="#"
//                           className="bg-dark br-10 p-2 btn btn-dark d-flex align-items-center justify-content-center">

//                           <img
//                             className="img-fluid m-1"
//                             src={appleLogo}
//                             alt="Apple" />

//                         </Link>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="my-4 d-flex justify-content-center align-items-center copyright-text">
//                     <p>Copyright © 2025 RichhMIndx</p>
//                   </div>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* /Main Wrapper */}
//     </>);

// };

// export default Signin;


// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { all_routes } from "../../../../routes/all_routes";
// import { appleLogo, facebookLogo, googleLogo, logoPng, logoWhitePng } from "../../../../utils/imagepath";


// const Signin = () => {
//   const [isPasswordVisible, setPasswordVisible] = useState(false);

//   const togglePasswordVisibility = () => {
//     setPasswordVisible((prevState) => !prevState);
//   };

//   const route = all_routes;

//   return (
//     <>
//       {/* Main Wrapper */}
//       <div className="main-wrapper">
//         <div className="account-content">
//           <div className="login-wrapper bg-img">
//             <div className="login-content authent-content">
//               <form>
//                 <div className="login-userset">
//                   <div className="login-logo logo-normal">
//                     <img src={appleLogo} alt="img" />
//                   </div>
//                   <Link to={route.dashboard} className="login-logo logo-white">
//                     <img src={logoWhitePng} alt="Img" />
//                   </Link>
//                   <div className="login-userheading">
//                     <h3>Sign In</h3>
//                     <h4 className="fs-16">
//                       Access the panel using your email and passcode.
//                     </h4>
//                   </div>
//                   <div className="mb-3">
//                     <label className="form-label">
//                       Email <span className="text-danger"> *</span>
//                     </label>
//                     <div className="input-group">
//                       <input
//                         type="text"
//                         defaultValue=""
//                         className="form-control border-end-0" />

//                       <span className="input-group-text border-start-0">
//                         <i className="ti ti-mail" />
//                       </span>
//                     </div>
//                   </div>
//                   <div className="mb-3">
//                     <label className="form-label">
//                       Password <span className="text-danger"> *</span>
//                     </label>
//                     <div className="pass-group">
//                       <input
//                         type={isPasswordVisible ? "text" : "password"}
//                         className="pass-input form-control" />

//                       <span
//                         className={`ti toggle-password text-gray-9 ${
//                         isPasswordVisible ? "ti-eye" : "ti-eye-off"}`
//                         }
//                         onClick={togglePasswordVisibility}>
//                       </span>
//                     </div>
//                   </div>
//                   <div className="form-login authentication-check">
//                     <div className="row">
//                       <div className="col-12 d-flex align-items-center justify-content-between">
//                         <div className="custom-control custom-checkbox">
//                           <label className="checkboxs ps-4 mb-0 pb-0 line-height-1 fs-16 text-gray-6">
//                             <input type="checkbox" className="form-control" />
//                             <span className="checkmarks" />
//                             Remember me
//                           </label>
//                         </div>
//                         <div className="text-end">
//                           <Link
//                             className="text-orange fs-16 fw-medium"
//                             to={route.forgotPassword}>

//                             Forgot Password?
//                           </Link>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="form-login">
//                     <Link
//                       to={route.newdashboard}
//                       className="btn btn-primary w-100">

//                       Sign In
//                     </Link>
//                   </div>
//                   {/* <div className="signinform">
//                     <h4>
//                       New on our platform?
//                       <Link to={route.register} className="hover-a">
//                         {" "}
//                         Create an account
//                       </Link>
//                     </h4>
//                   </div> */}
//                   <div className="form-setlogin or-text">
//                     <h4>OR</h4>
//                   </div>
//                   <div className="mt-2">
//                     <div className="d-flex align-items-center justify-content-center flex-wrap">
//                       <div className="text-center me-2 flex-fill">
//                         <Link
//                           to="#"
//                           className="br-10 p-2 btn btn-info d-flex align-items-center justify-content-center">

//                           <img
//                             className="img-fluid m-1"
//                             src={facebookLogo}
//                             alt="Facebook" />

//                         </Link>
//                       </div>
//                       <div className="text-center me-2 flex-fill">
//                         <Link
//                           to="#"
//                           className="btn btn-white br-10 p-2  border d-flex align-items-center justify-content-center">

//                           <img
//                             className="img-fluid m-1"
//                             src={googleLogo}
//                             alt="google" />

//                         </Link>
//                       </div>
//                       <div className="text-center flex-fill">
//                         <Link
//                           to="#"
//                           className="bg-dark br-10 p-2 btn btn-dark d-flex align-items-center justify-content-center">

//                           <img
//                             className="img-fluid m-1"
//                             src={appleLogo}
//                             alt="Apple" />

//                         </Link>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="my-4 d-flex justify-content-center align-items-center copyright-text">
//                     <p>Copyright © 2025 RichhMIndx</p>
//                   </div>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* /Main Wrapper */}
//     </>);

// };

// export default Signin;


import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { all_routes } from "../../../../routes/all_routes";
import { appleLogo, facebookLogo, googleLogo, bgImg, themeImage01, themeImage02, themeImage03, themeImage04, themeImage05, themeImage06, themeImage07, themeImage8, lexelpng } from "../../../../utils/imagepath";
import { environment } from "../../../../environment"; // import your env config

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [rotation, setRotation] = useState(0);
  const [activeService, setActiveService] = useState(null);

  const navigate = useNavigate();
  const route = all_routes;

  const togglePasswordVisibility = () => {
    setPasswordVisible((prevState) => !prevState);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    try {
      const response = await fetch(`${environment.API_URL}/users/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.message || "Invalid credentials");

      if (data.token && data.user) {
        localStorage.setItem("authToken", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));
      }

      navigate(route.newdashboard);
    } catch (error) {
      setErrorMsg(error.message);
    } finally {
      setLoading(false);
    }
  };

  // 🟢 Replace icons with images (you can add actual imports or URLs)
  const services = [
    { id: "service1", image: themeImage01, title: "Cloud Solutions", desc: "Scalable cloud infrastructure", color: "#e74c3c" },
    { id: "service2", image: themeImage02, title: "Web & Mobile Apps", desc: "Responsive cross-platform apps", color: "#2ecc71" },
    { id: "service3", image: themeImage03, title: "IT Consulting", desc: "Strategic technology guidance", color: "#f1c40f" },
    { id: "service4", image: themeImage04, title: "Data Analytics", desc: "Actionable business insights", color: "#1abc9c" },
    { id: "service5", image: themeImage05, title: "AI & Automation", desc: "Streamline operations", color: "#e67e22" },
    { id: "service6", image: themeImage06, title: "IT Infrastructure", desc: "Reliable technology foundations", color: "#34495e" },
    // { id: "service7", image: themeImage07, title: "IT Consulting", desc: "Strategic technology guidance", color: "#f1c40f" },
    { id: "service8", image: themeImage8, title: "Web & Mobile Apps", desc: "Responsive cross-platform apps", color: "#2ecc71" },


  ];

  // Smooth continuous rotation
  useEffect(() => {
    let animationFrame;
    const rotationSpeed = 0.005;
    const animate = () => {
      setRotation((prev) => prev + rotationSpeed);
      animationFrame = requestAnimationFrame(animate);
    };
    animate();
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <>
      <div className="main-wrapper">
        <div className="account-content">
          <div className="login-wrapper bg-img">

            {/* ✅ Rotating Image Circle */}
            {/* <div className="flex py-24 bg-gradient-to-br from-gray-50 to-gray-100" > */}
              {/* <div className="max-w-7xl mx-auto px-5 flex lg:flex-row items-center justify-between gap-12">
                <div className="fixed flex-1 relative h-[500px] flex items-center justify-center lg:justify-end">
                  Center Logo
                  <div className="w-25 h-25 rounded-full bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center shadow-2xl border-8 border-white relative z-10">
                    <img
                      src={lexelpng}
                      alt="Logo"
                      className="logo-float"
                    />

                  </div>

                  Rotating Images
                  {services.map((service, idx) => {
                    const angleIncrement = (2 * Math.PI) / services.length;
                    const angle = idx * angleIncrement + rotation;
                    const radius = 170;
                    const x = Math.cos(angle) * radius;
                    const y = Math.sin(angle) * radius;

                    return (
                      <div
                        key={service.id}
                        className={`absolute w-24 h-24 rounded-2xl shadow-lg flex flex-col items-center justify-center cursor-pointer transition-all hover:scale-110 
                          // activeService === service.id ? "animate-pulse-custom scale-110" : ""
                        `}
                        style={{
                          height: "130px",
                          width: "130px",
                          left: "50%",
                          top: "50%",
                          borderRadius: "50px",
                          transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                          transition: "transform 0.1s linear",
                        }}
                        onMouseEnter={() => setActiveService(service.id)}
                      >
                        <img src={service.image} alt={service.title} className="w-8 h-8 mb-1" />
                        <span className="text-xs font-semibold text-center px-1">
                          {service.title.split(" ")[0]}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div> */}
              <div style={{ backgroundImage: `url(${bgImg})`,   backgroundSize: "cover", backgroundRepeat: "no-repeat",  backgroundPosition: "fixed", width: "68%", height: "100%",  }}>
                {/* <img src={bgImg} alt="Logo" style={{
                 
                  
                
                 
                }} /> */}
              </div>
            {/* </div> */}


            {/* ✅ Service Cards (Left Side) */}
            {/* <div className="flex items-center py-24 bg-gradient-to-br from-gray-50 to-gray-100" style={{ width: "25%" }}>
              <div className="grid grid-cols sm:grid-cols-2 gap-1 w-full">
                {services.map((service) => (
                  <div
                    key={service.id}
                    onMouseEnter={() => setActiveService(service.id)}
                    className={`bg-white p-4 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer border-l-4 ${
                      activeService === service.id ? "scale-105" : ""
                    }`}
                    style={{ borderColor: service.color }}
                  >
                    <div className="flex items-start gap-3">
                      <div
                        className="w-9 h-9 rounded-full flex items-center justify-center text-white"
                        style={{ backgroundColor: service.color }}
                      >
                        <img src={service.image} alt={service.title} className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-800 mb-1">{service.title}</h3>
                        <p className="text-sm text-gray-600">{service.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div> */}



            {/* ✅ Login Form Section */}
            <div className="login-content authent-content" style={{ width: "32%" }}>
              <form onSubmit={handleLogin}>
                <div className="login-userset">
                  <div className="login-logo logo-normal">
                    {/* <img src={logoWhitePng} alt="img" /> */}

                  </div>
                  <Link to={route.dashboard} className="login-logo logo-white">
                    {/* <img src={logoWhitePng} alt="Img" /> */}
                  </Link>

                  <div className="login-userheading">
                    <h3>Sign In</h3>
                    <h4 className="fs-16">Access the panel using your email and passcode.</h4>
                  </div>

                  {errorMsg && <div className="alert alert-danger text-center">{errorMsg}</div>}

                  <div className="mb-3">
                    <label className="form-label">
                      Email <span className="text-danger">*</span>
                    </label>
                    <div className="input-group">
                      <input
                        type="email"
                        className="form-control border-end-0"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                      <span className="input-group-text border-start-0">
                        <i className="ti ti-mail" />
                      </span>
                    </div>
                  </div>

                  <div className="mb-3">
                    <label className="form-label">
                      Password <span className="text-danger">*</span>
                    </label>
                    <div className="pass-group">
                      <input
                        type={isPasswordVisible ? "text" : "password"}
                        className="pass-input form-control"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                      <span
                        className={`ti toggle-password text-gray-9 ${isPasswordVisible ? "ti-eye" : "ti-eye-off"
                          }`}
                        onClick={togglePasswordVisibility}
                      />
                    </div>
                  </div>

                  <div className="form-login authentication-check">
                    <div className="d-flex align-items-center justify-content-between">
                      <label className="checkboxs ps-4 mb-0 pb-0 line-height-1 fs-16 text-gray-6">
                        <input type="checkbox" className="form-control" />
                        <span className="checkmarks" />
                        Remember me
                      </label>
                      {/* <div className="text-end">
                        <Link className="text-orange fs-16 fw-medium" to={route.forgotPassword}>
                          Forgot Password?
                        </Link>
                      </div> */}
                    </div>
                  </div>

                  <div className="form-login">
                    <button type="submit" className="btn btn-primary w-100" disabled={loading}>
                      {loading ? "Signing In..." : "Sign In"}
                    </button>
                  </div>

                  {/* <div className="form-setlogin or-text">
                    <h4>OR</h4>
                  </div>

                  <div className="mt-2">
                    <div className="d-flex align-items-center justify-content-center flex-wrap">
                      <div className="text-center me-2 flex-fill">
                        <Link to="#" className="br-10 p-2 btn btn-info d-flex align-items-center justify-content-center">
                          <img className="img-fluid m-1" src={facebookLogo} alt="Facebook" />
                        </Link>
                      </div>
                      <div className="text-center me-2 flex-fill">
                        <Link to="#" className="btn btn-white br-10 p-2 border d-flex align-items-center justify-content-center">
                          <img className="img-fluid m-1" src={googleLogo} alt="Google" />
                        </Link>
                      </div>
                      <div className="text-center flex-fill">
                        <Link to="#" className="bg-dark br-10 p-2 btn btn-dark d-flex align-items-center justify-content-center">
                          <img className="img-fluid m-1" src={appleLogo} alt="Apple" />
                        </Link>
                      </div>
                    </div>
                  </div> */}

                  <div className="my-4 d-flex justify-content-center align-items-center copyright-text">
                    <p>Copyright © 2025 RichhMindx</p>
                  </div>
                </div>
              </form>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Signin;
