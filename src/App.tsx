import { Routes, Route } from 'react-router-dom'
import Layout from '@/components/layout/Layout'
import HomePage from '@/pages/HomePage'
import ProductsPage from '@/pages/ProductsPage'
import CategoryDetailPage from '@/pages/CategoryDetailPage'
import AboutPage from '@/pages/AboutPage'
import OpportunityPage from '@/pages/OpportunityPage'
import ContactPage from '@/pages/ContactPage'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="products" element={<ProductsPage />} />
        <Route path="products/:categorySlug" element={<CategoryDetailPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="opportunity" element={<OpportunityPage />} />
        <Route path="contact" element={<ContactPage />} />
      </Route>
    </Routes>
  )
}
