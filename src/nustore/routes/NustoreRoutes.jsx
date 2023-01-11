import { Navigate, Route, Routes } from "react-router-dom"
import { ArticlePage } from "../pages/ArticlePage"
import { HomePage } from "../pages/HomePage"
import { SelectedCategoryPage } from "../pages/SelectedCategoryPage"
import { ShoppingPage } from "../pages/ShoppingPage"

export const NustoreRoutes = () => {
    return (
        <Routes>

            <Route path="/home" element={<HomePage />} />
            <Route path="/categoria" element={<SelectedCategoryPage />} />
            <Route path="/articulo" element={<ArticlePage />} />
            <Route path="/carrito" element={<ShoppingPage />} />


            <Route path="/*" element={<Navigate to="/home" />} />

        </Routes>
    )
}
