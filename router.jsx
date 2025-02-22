import React from "react";

const LoginPage = React.lazy(() =>
  import("./src/components/authenticated/Login/index"),
);
const RegisterPage = React.lazy(() =>
  import("./src/components/authenticated/Register/index"),
);
const Error404Page = React.lazy(() =>
  import("./src/components/authenticated/Error404/index"),
);
const ForgetPwdPage = React.lazy(() =>
  import("./src/components/authenticated/ForgetPwd/index"),
);
const ResetPwdPage = React.lazy(() =>
  import("./src/components/authenticated/ResetPwd/index"),
);
const LoadingPage = React.lazy(() => import("./src/components/loading/index"));
const userName = window.location.pathname;
const ShareLinkPage = React.lazy(() =>
  import("./src/components/UserLinkPage/index"),
);
const AccountPage = React.lazy(() => import("./src/components/Account/index"));
const MainPage = React.lazy(() => import("./src/components/MainPage/index"));
const DevelopersPage = React.lazy(() =>
  import("./src/components/authenticated/Developers/index"),
);
const RegisterPrivacyPage = React.lazy(() =>
  import("./src/components/authenticated/RegisterPrivacy/index"),
);
const LoginPrivacyPage = React.lazy(() =>
  import("./src/components/authenticated/LoginPrivacy/index"),
);
const RegisterTermsPage = React.lazy(() =>
  import("./src/components/authenticated/RegisterTerms/index"),
);
const LoginTermsPage = React.lazy(() =>
  import("./src/components/authenticated/LoginTerms/index"),
);
// const VerificationPage = React.lazy(() =>
//   import("./src/components/authenticated/EmailVerification/Verification/index"),
// );
const Congratulation = React.lazy(() =>
  import(
    "./src/components/authenticated/EmailVerification/Congratulation/index"
  ),
);

const routes = [
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/*",
    element: <Error404Page />,
  },
  {
    path: "/forgetpwd",
    element: <ForgetPwdPage />,
  },
  {
    path: "/resetpwd/:resetToken",
    element: <ResetPwdPage />,
  },
  {
    path: "/loading",
    element: <LoadingPage />,
  },
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/developers",
    element: <DevelopersPage />,
  },
  {
    path: "/registerprivacy",
    element: <RegisterPrivacyPage />,
  },
  {
    path: "/registerterms",
    element: <RegisterTermsPage />,
  },
  {
    path: "/loginprivacy",
    element: <LoginPrivacyPage />,
  },
  {
    path: "/loginterms",
    element: <LoginTermsPage />,
  },
  {
    path: "/account",
    element: <AccountPage />,
  },
  {
    path: "/developers",
    element: <DevelopersPage />,
  },
  // {
  //   path: "/verification",
  //   element: <VerificationPage />,
  // },
  {
    path: "/congratulation",
    element: <Congratulation />,
  },
  {
    path: `${userName.includes("resetpwd") ? null : userName}`,
    element: <ShareLinkPage />,
  },
];

export default routes;
