import React, {lazy, Suspense} from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom"

const Mine=lazy(()=>import('@/pages/Mine'));
const Home=lazy(()=>import("@/pages/Home"))
const Hooks=lazy(()=>import("@/pages/hooks"))
const NotFoundPage=lazy(()=>import("@/pages/NotFoundPage"))

function RouterIndex(){
    return (
        <div>
            <Router>
                <Suspense fallback={<div>...加载中</div>}>
                    <Routes>
                        <Route path={'/'} element={<Mine/>}/>
                        <Route path={'/home'} element={<Home/>}/>
                        <Route path={'/hooks'} element={<Hooks/>}/>
                        <Route path="/404" element={<NotFoundPage />} />
                        <Route path="*" element={<Navigate to={'/404'} />} />
                    </Routes>
                </Suspense>
            </Router>
        </div>
    )
}

export default RouterIndex;