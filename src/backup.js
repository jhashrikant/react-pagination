// import { useEffect, useState } from "react";
// import './App.css';

// export default function App() {
// 	const [response, setresponse] = useState();

// 	const [currentpage, setcurrentpage] = useState(1)

// 	let arr = [];


// 	// const dataperpage = 5;  => we should add this line of code here for basically we need to make a  variable and 
// 	//then pass that postperpage to that slice(currentpage * 5 - 5, currentpage * 5) here instead of 5 we need to give dataperpage and in that we can make change if
// 	//we want 2 products per page or 10
// 	// const [noOfproductsinPage, setnoOfproductsinPage] = useState(5)

// 	// const [skip ,setskip] = useState(0)

// 	// const [array, setarray] = useState([])

// 	const [productsPerPage, setproductsPerPage] = useState(0)

// 	// // const value = response.products.length/5;  //30/5
// 	// // console.log(value)//6

// 	for (let i = 1; i <= productsPerPage; i++) {
// 		arr.push(i)
// 		// console.log(i);
// 	}

// 	// console.log(response)


// 	//what we can do is apne pass skip hai wo ky krega ki skip krega if 5 diye to start ka 5 skip krke aage ka dega 60 se 10 tak 5 limit 5 diye to



// 	useEffect(() => {
// 		async function fetchproducts() {
// 			const res = await fetch(`https://dummyjson.com/products`);
// 			// const res = await fetch(`https://dummyjson.com/products?$limit={}&skip=${skip}`);
			
// 			const resdata = await res.json();
// 			console.log(resdata);
// 			setresponse(resdata);
// 			// const total = resdata.products.length/5
// 			setproductsPerPage(resdata.products.length / 5);
// 		}
// 		fetchproducts();
// 	}, []);



// 	const onPageChange = (selectedPage) => {
// 		const data = `you are seeing ${selectedPage}'st page data now`;
// 		console.log(data);
// 		setcurrentpage(selectedPage)
// 		// setskip(i*5-5);  //if i = 3 then 3*5 = 15-5 =10

// 	}

// 	// for(let j=0; j <)

// 	//suppose i cicked on 2 page then i need to show the data from 5 to 10 products
// 	// switch (i) {
// 	// 	case 1:
// 	// 		setskip(0)

// 	// 		break;

// 	// 	case 2:
// 	// 		setskip(5)
// 	// 		break;

// 	// 	case 3:
// 	// 		setskip(10)

// 	// 		break;

// 	// 	case 4:
// 	// 		setskip(15)
// 	// 		break;


// 	// 	case 5:
// 	// 		setskip(20);
// 	// 		break;

// 	// 	case 6:
// 	// 		setskip(25)
// 	// 		break;

// 	// 	default:
// 	// 		setskip(0);
// 	// }

// 	//1 => 1*5-5 = 0 ,5  => if page is 1 then it will start from 0 to 5
// 	//2 => 2*5-5 = 5,10 => if page is 2 then it wll start from 5 to 10

// 	function prevpage(page) {
// 		setcurrentpage(page)
// 	}

// 	function handlenext(page) {
		
// 		setcurrentpage(page)
// 	}

// 	return (
// 		<>
// 			{response && response?.products?.length > 0 && (
// 				<div className="products__container">
// 					{response?.products?.slice(currentpage * 5 - 5, currentpage * 5).map((product) => {
// 						return (
// 							<div className="__product" key={product.id}>
// 								<img src={product.images[0]} alt={product.title} />
// 								<span>{product.title}</span>
// 							</div>
// 						)
// 					})}
// 				</div>
// 			)}
// 			{(response && response?.products?.length) && <div className="pagination">
// 				{/* <span>left</span> */}
// 				{/* {[...Array(response.products.length / 5)].map((_, i) => {

// 					return <>
// 						<span onClick={() => handleClick(i + 1)} className="pagination_link" key={i}>{i + 1}</span>

// 					</>
// 				})} */}

// 				{/* selected page is equal to current page then add background color  currentpage === selectedpage*/}

// 				<button disabled={currentpage === 1} onClick={() => prevpage(currentpage - 1)} className="prevBtn"><span>⬅️</span></button>

// 				{arr.map((selectedPage) => {

// 					return <div>
// 						<span onClick={() => onPageChange(selectedPage)} className={currentpage === selectedPage ? 'active' : 'pagination_link'} key={selectedPage}>{selectedPage}</span>
// 					</div>
// 				})
// 				}
// 				<button disabled={currentpage === productsPerPage} onClick={() => handlenext(currentpage + 1)} className="nextBtn"><span>➡️</span></button>
// 			</div>}
// 		</>
// 	);
// }