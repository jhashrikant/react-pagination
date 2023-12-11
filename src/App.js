
import { useEffect, useState } from "react";
import './App.css'
export default function App() {


	const [response, setresponse] = useState();
	const [noOfpages, setnoOfpages] = useState(0); //6

	const productsperpage = 10;

	const [currentpage, setcurrentpage] = useState(1);//3

	let arr = [];

	for (let i = 1; i <= noOfpages; i++) {
		arr.push(i);
	}

	async function fetchproducts() {
		const response = await fetch(`https://dummyjson.com/products?limit=${productsperpage}&skip=${currentpage * productsperpage - productsperpage}`);
		const jsonres = await response.json();
		console.log(jsonres);
		setresponse(jsonres);
		setnoOfpages(jsonres.total / productsperpage); //30/5 = 6
		console.log(noOfpages)
	}

	useEffect(() => {
		fetchproducts();
	}, [currentpage]);

	function handlePageClick(selectedpage) {
		setcurrentpage(selectedpage); //1
	}

	function handlenext(page) {
		setcurrentpage(page)
		console.log(currentpage);	
	}

	function handleprev(page) {
		console.log(page)
		setcurrentpage(page);
	}

	//Pagination is a design pattern used to divide content into separate pages. It’s a fundamental component of digital product design, particularly important when dealing with large amounts of data or content, like e-commerce sites, blogs, data tables, or any other content-heavy platform.
	return (
		<>
			<div>
				{response && response?.products && (
					<div className="product__container">
						{response.products.map((product, index) => {
							return (
								<div key={index} className="single__product">
									<img src={product.images[0]} alt={product.title} />
									<div className="product_desc">
										<span>{product.title}</span>
										<span>${product.price}</span>
									</div>
								</div>
							);
						})}
					</div>
				)}
			</div>

			<div className="pagination">
				<button disabled={currentpage === 1} onClick={() => handleprev(currentpage - 1)} className="pagination__element"><span>⬅️</span></button>
				{arr.length > 0 &&
					arr.map((selectedpage) => {
						return (
							<span key={selectedpage}
								onClick={() => handlePageClick(selectedpage)}
								className={selectedpage === currentpage ? 'active' : 'pagination__element'}
							>
								{selectedpage}
							</span>
						);
					})}
				<button disabled={currentpage === 10} onClick={() => handlenext(currentpage + 1)} className="pagination__element" ><span>➡️</span></button>
			</div>
		</>
	);
}
