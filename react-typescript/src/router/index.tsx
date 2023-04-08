import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom"
import Loading from "./loading";

let Login = lazy(() => import("../pages/Login"))
let Home = lazy(() => import("../pages/Home"))
let Register = lazy(() => import("../pages/register"))
let List = lazy(() => import("../pages/list"))
let NotFoundPage = lazy(() => import("../pages/NotFoundPage"))


function RouterIndex() {
    return (
        <div>
            <Router>
                <Suspense fallback={<Loading />}>
                    <Routes>
                        <Route path="/" element={<Login />} />
                        <Route path="/home" element={<Home />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/list" element={<List />} />
                        <Route path="/404" element={<NotFoundPage />} />
                        <Route path="*" element={<Navigate to={'/404'} />} />
                    </Routes>
                </Suspense>
            </Router>
        </div>
    )
}

export default RouterIndex;