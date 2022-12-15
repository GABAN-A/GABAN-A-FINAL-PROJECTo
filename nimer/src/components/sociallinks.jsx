

const Sociallinks=()=>{
return(
    <>
<div className="">
<div className="no  justify-content-evenly p-4 d-lg-flex sm-flex-wrap lg-flex-nowrap mt-2">
	<li>
    <a href="tel:046412445">
      <i className="bi bi-telephone-forward-fill no"> <span type="phone">04-6412445</span> </i>
		</a>
	</li>
    <li>
	  <a className="facebook " href="https://www.facebook.com/NIMR.RESTAURANT.AND.SHAWARMA/" target="_blank">
      <i className="no bi bi-facebook  mt-2"> <span> Facebook</span></i>
			
		</a>
	</li>
		<li>
		<a className="INSTA" href="https://www.instagram.com/shawarma_nimer/" target="_blank">
        <i className=" no bi bi-instagram  mt-2"> <span> Instagram</span>
</i>
		</a>
		</li>
        <li>
	  <a className="google" href="https://www.waze.com/en/live-map/directions/%D7%A9%D7%95%D7%95%D7%90%D7%A8%D7%9E%D7%94-%D7%A0%D7%99%D7%9E%D7%A8-%D7%98%D7%95%D7%A8%D7%A2%D7%90%D7%9F-%D7%A4%D7%96-%D7%91%D7%A7%D7%A2%D7%AA-%D7%98%D7%95%D7%A8%D7%A2%D7%90%D7%9F-046412445?place=w.23200072.231804109.342805" target="_blank">
      <i className="no bi bi-map mt-2"> <span > Waze</span>
</i>
		</a>
	</li>	
  
</div>
</div>
 <div className='container-fluid mt-1 reviewstyle'>
    <div className="row ">
        <div className="col-9 col-lg-9">
   <div id="carouselExampleControls" className="carousel slide " data-bs-ride="carousel">
  <div className="carousel-inner ">
    <div className="carousel-item active    ">
      <img src={require('../images/review1.jpg')} className="rounded  d-lg-inline-block d-sm-block"style={{
          "width":"auto",
          "height":"100px",
            }} alt="..."></img>
             <img src={require('../images/review2.jpg')} className="rounded  d-lg-inline-block d-sm-block "style={{
           "width":"auto",
           "height":"100px",
            }} alt="..."></img>
    </div>
    <div className="carousel-item active  ">
      <img src={require('../images/review.5.jpg')} className="rounded d-lg-inline-block d-sm-block"style={{
"width":"auto",
            "height":"100px",
              backgroundColor: "white",
            }} alt="..."></img>
            <img src={require('../images/review4.jpg')} className="rounded d-lg-inline-block "style={{
            "width":"auto",
            "height":"100px",
              backgroundColor: "white",
            }} alt="..."></img>
          
    </div>

  </div>
  <button className="carousel-control-prev " type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
  </button>
</div>
</div>
<div className="col-2   text-center m-auto fw-bold  reviewstyle p-2 ">הלקחות שלנו</div>
</div>

 
 </div>
</>
)
}
export default Sociallinks;