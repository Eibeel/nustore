import { Navigate, Route, Routes } from "react-router-dom"
import { ArticleInfo } from "../pages/ArticleInfo"
import { HomePage } from "../pages/HomePage"
import { OfferPage } from "../pages/OfferPage"
import { SelectedCategoryPage } from "../pages/SelectedCategoryPage"
import { ShoppingPage } from "../pages/ShoppingPage"

export const NustoreRoutes = () => {
    return (
        <Routes>

            <Route path="/home" element={<HomePage />} />
            <Route path="/categoria" element={<SelectedCategoryPage />} />
            <Route path="/ofertas" element={<OfferPage />} />
            <Route path="/articulo" element={<ArticleInfo />} />
            <Route path="/carrito" element={<ShoppingPage />} />


            <Route path="/*" element={<Navigate to="/home" />} />

        </Routes>
    )
}
