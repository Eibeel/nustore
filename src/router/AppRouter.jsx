import { Route, Routes } from "react-router-dom"
import { LoginPage, RegisterPage } from "../auth/pages"
import { ArticlePage, HomePage, SelectedCategoryPage, ShoppingPage } from "../nustore/pages"


export const AppRouter = () => {
    return (
        <Routes>

            <Route path="/*" element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/c/:id" element={<SelectedCategoryPage />} />
            <Route path="/c/:id/p/:product_title" element={<ArticlePage />} />
            <Route path="/carrito" element={<ShoppingPage />} />

            {/* validar */}
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />

        </Routes>
    )
}
