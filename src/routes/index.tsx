import FrontPage from "../pages/FrontPage";
import MainPage from "../pages/MainPage";
import PreviousPage from "../pages/about/PreviousPage";
import EducationPage from "../pages/about/EducationPage";

export default [
    {
        path: '/',
        element: <FrontPage/>,
    },
    {
        path: '/home/',
        element: <MainPage/>,
    },
    {
        path: '/previous-experience/',
        element: <PreviousPage/>,
    },
    {
        path: '/education/',
        element: <EducationPage/>,
    },
]