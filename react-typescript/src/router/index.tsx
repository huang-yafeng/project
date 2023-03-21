import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom"

let Login = lazy(() => import("../pages/Login"))
let Home = lazy(() => import("../pages/Home"))


function RouterIndex() {
    return (
        <div>
            <Router>
                <Suspense fallback={<div>...加载中</div>}>
                    <Routes>
                        <Route path="/" element={<Login />} />
                        <Route path="/home" element={<Home />} />
                    </Routes>
                </Suspense>
            </Router>
        </div>
    )
}

export default RouterIndex;