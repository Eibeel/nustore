import { Navigate, Route, Routes } from "react-router-dom"
import { ArticleInfo, SelectedCategoryPage, HomePage, OfferPage, ShoppingPage } from "../nustore/pages"

export const AppRouter = () => {
    return (
        <Routes>

            <Route path="home" element={<HomePage />} />
            <Route path="categoria" element={<SelectedCategoryPage />} />
            <Route path="ofertas" element={<OfferPage />} />
            <Route path="articulo" element={<ArticleInfo />} />
            <Route path="carrito" element={<ShoppingPage />} />


            <Route path="/*" element={<Navigate to="/home" />} />

        </Routes>
    )
}
