import React from "react"
import { Navigate, Route, Routes } from "react-router-dom"
import { FiltersPage } from "../pages/Filters/FiltersPage"

export interface IPage {
    title: string,
    component: React.ReactNode,
    path: string
}

export const PAGES: IPage[] = [
    {
        title: "Filters",
        component: <FiltersPage />,
        path: "/filters"
    }
]

export function ActivePage() {

    return (
        <Routes>
            {PAGES.map((page: IPage) => {
                return (
                    <Route path={page.path} element={page.component} />
                )
            }).reverse()}
            <Route
                path="/"
                element={<Navigate to="/filters" />}
            />
        </Routes>
    )
}