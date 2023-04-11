import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom"

const Login = lazy(() => import("../pages/Login"))
const Home = lazy(() => import("../pages/Home"))

const NotFoundPage = lazy(() => import("../pages/NotFoundPage"))


function RouterIndex() {
    return (
        <div>
            <Router>
                <Suspense fallback={<div>...加载中</div>}>
                    <Routes>
                        <Route path="/" element={<Login />} />
                        <Route path="/home" element={<Home />} />
                        <Route path="/404" element={<NotFoundPage />} />
                        <Route path="*" element={<Navigate to={'/404'} />} />
                    </Routes>
                </Suspense>
            </Router>
        </div>
    )
}

export default RouterIndex;