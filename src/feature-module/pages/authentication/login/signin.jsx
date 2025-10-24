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


import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { all_routes } from "../../../../routes/all_routes";
import { appleLogo, facebookLogo, googleLogo, logoWhitePng } from "../../../../utils/imagepath";
import { environment } from "../../../../environment"; // import your env config

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

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
    const response = await fetch(`${environment.API_URL}/admin/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    console.log("Login response:", data); // 👈 Add this

    if (!response.ok) {
      throw new Error(data.message || "Invalid credentials");
    }

    // ✅ Now safely check and store token if present
    if (data.token && data.user) {
      localStorage.setItem("authToken", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));
    } else {
      console.warn("⚠️ Backend didn't return token or user info");
    }

    navigate(route.newdashboard);
  } catch (error) {
    setErrorMsg(error.message);
  } finally {
    setLoading(false);
  }
};


  return (
    <>
      <div className="main-wrapper">
        <div className="account-content">
          <div className="login-wrapper bg-img">
            <div className="login-content authent-content">
              <form onSubmit={handleLogin}>
                <div className="login-userset">
                  <div className="login-logo logo-normal">
                    <img src={appleLogo} alt="img" />
                  </div>

                  <Link to={route.dashboard} className="login-logo logo-white">
                    <img src={logoWhitePng} alt="Img" />
                  </Link>

                  <div className="login-userheading">
                    <h3>Sign In</h3>
                    <h4 className="fs-16">
                      Access the panel using your email and passcode.
                    </h4>
                  </div>

                  {errorMsg && (
                    <div className="alert alert-danger text-center">{errorMsg}</div>
                  )}

                  <div className="mb-3">
                    <label className="form-label">
                      Email <span className="text-danger"> *</span>
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
                      Password <span className="text-danger"> *</span>
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
                        className={`ti toggle-password text-gray-9 ${
                          isPasswordVisible ? "ti-eye" : "ti-eye-off"
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
                      <div className="text-end">
                        <Link
                          className="text-orange fs-16 fw-medium"
                          to={route.forgotPassword}
                        >
                          Forgot Password?
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="form-login">
                    <button
                      type="submit"
                      className="btn btn-primary w-100"
                      disabled={loading}
                    >
                      {loading ? "Signing In..." : "Sign In"}
                    </button>
                  </div>

                  <div className="form-setlogin or-text">
                    <h4>OR</h4>
                  </div>

                  <div className="mt-2">
                    <div className="d-flex align-items-center justify-content-center flex-wrap">
                      <div className="text-center me-2 flex-fill">
                        <Link
                          to="#"
                          className="br-10 p-2 btn btn-info d-flex align-items-center justify-content-center"
                        >
                          <img className="img-fluid m-1" src={facebookLogo} alt="Facebook" />
                        </Link>
                      </div>
                      <div className="text-center me-2 flex-fill">
                        <Link
                          to="#"
                          className="btn btn-white br-10 p-2 border d-flex align-items-center justify-content-center"
                        >
                          <img className="img-fluid m-1" src={googleLogo} alt="Google" />
                        </Link>
                      </div>
                      <div className="text-center flex-fill">
                        <Link
                          to="#"
                          className="bg-dark br-10 p-2 btn btn-dark d-flex align-items-center justify-content-center"
                        >
                          <img className="img-fluid m-1" src={appleLogo} alt="Apple" />
                        </Link>
                      </div>
                    </div>
                  </div>

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
