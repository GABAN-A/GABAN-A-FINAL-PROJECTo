

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
 <div className='container-fluid mt-1 reviewstyle '>
  <div className="row review m-auto">
    <div className="col-lg-6  col-sm-12 rounded p-1">
 <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
    <img class="d-block w-100 review" src={require('../images/review4.jpg')} alt="First slide"></img>
    </div>
    <div class="carousel-item">
    <img class="d-block w-100 review" src={require('../images/review2.jpg')} alt="First slide"></img>
    </div>
    <div class="carousel-item">
    <img class="d-block w-100 review" src={require('../images/review2.jpg')} alt="First slide"></img>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</div>
<div className="col-lg-6 col-sm-12 rounded p-1 	">
<section className='fw-bolder reviewstyle text-center text-dark mt-3'>
  <p className='mb-1 fw-bolder reviewstyle text-center text-dark'>מעל 40 שנה בתחום האוכל </p>
מסעדת ושווארמה נימר היא מסעדה מזרח תיכונית שמגישה מגוון רחב של אוכל מזרח תיכוני ומבחר סלטים של מעל 25 סוג סלט.
כמו כן, המסעדה מתמחה בשווארמה איכותית.</section>
</div>
</div>
 </div>
</>
)
}
export default Sociallinks;