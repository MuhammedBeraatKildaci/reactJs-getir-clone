import {useState, useEffect} from 'react'
import Products from 'api/products.json'
import ProductItem from 'components/ProductItem'
function Favorites() {
	const [products, setProducts] = useState([])
	useEffect(() => {
		setProducts(Products)
	}, [])
	return (
		<div>
			<h3 className="font-semibold text-sm mb-3">Favoriler</h3>
			<div className="overflow-hidden rounded-lg grid grid-cols-8 gap-0.1">
				{products && products.map(product => <ProductItem product={product}/>)}
			</div>
		</div>
	)
}
export default Favorites