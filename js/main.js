function openmenu() {
    document.getElementById("my-sidemenu").style.display="block";
    document.getElementById("menu-btn").style.display="none";
    document.getElementById("close-btn").style.display="block";
  }
  function closemenu() {
    document.getElementById("my-sidemenu").style.display="none";
    document.getElementById("menu-btn").style.display="block";
    document.getElementById("close-btn").style.display="none";
  }
 function chatopen() {
  document.getElementById("chathere").style.display="block";
 }
 function topback() {
  document.body.scrollTop=0;
  document.documentElement.scrollTop=0;
 }
 function categories() {
   document.getElementById("categories").style.display="grid";
   document.getElementById("categoriesbr").style.borderBottom="2px solid black";
   document.getElementById("brand").style.display="none";
   document.getElementById("brandbr").style.border="none";
   document.getElementById("shopping").style.display="none";
   document.getElementById("shoppingbr").style.border="none";
 }
 function brand() {
   document.getElementById("categories").style.display="none";
   document.getElementById("categoriesbr").style.border="none";
   document.getElementById("brand").style.display="grid";
   document.getElementById("brandbr").style.borderBottom="2px solid black";
   document.getElementById("shopping").style.display="none";
   document.getElementById("shoppingbr").style.border="none";
 }
 function shopping() {
   document.getElementById("categories").style.display="none";
   document.getElementById("categoriesbr").style.border="none";
   document.getElementById("brand").style.display="none";
   document.getElementById("brandbr").style.border="none";
   document.getElementById("shopping").style.display="grid";
   document.getElementById("shoppingbr").style.borderBottom="2px solid black";
 }


//  header start
 class MyHeader extends HTMLElement {
  connectedCallback () {
    this.innerHTML = `
    <!-- header start -->
    <div class=" container-fluid mynav sticky-top">
      <div class="row">
        <div class="col-12 col-md-7 d-inline-flex py-1 bg-white">
          <i class="fas fa-bars" id="menu-btn" onclick="openmenu()"></i>
  
          <a href="../../../index.html"><img src="../../..//img/logo.jpg" alt="official logo" class="img-fluid logo"></a>
          <input type="text" class="form-control mysearch ml-3" placeholder="Search">
          <span><button class="btn searchbtn" type="submit"><i class="fas fa-search text-light"></i></button></span>
        </div>
  
        <div class="col-12 col-md-5 mynav2">
          <div class="row text-center text-capitalize">
            <div class="col-4 col-sm-4 py-2">
              <i class="fas fa-shopping-cart text-white pl-1 mybtnii"></i>
              <button type="button" class="btn btn-sm mybtn boxsd-none" data-toggle="modal" data-target="#cartid">
                <a href="#">Cart</a>
              </button>
            </div>
            <div class="col-4 col-sm-4 bordermd py-2">
              <button type="button" class="btn btn-sm mybtn boxsd-none" data-toggle="modal" data-target="#staticBackdrop">
                <a href="#">SignUp</a>
              </button>
            </div>
            <div class="col-4 col-sm-4 py-2">
              <button type="button" class="btn btn-sm mybtn boxsd-none" data-toggle="modal" data-target="#loginid">
                <a href="#">Login</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  
  
    <!-- chat start -->
    <!-- <a href="#"><i class="far fa-comment-dots chatnow" title="Chat here" onclick="chatopen()"></i></a> -->
    <a href="#"><i class="fas fa-arrow-circle-up chatnow text-info" title="Back To Top" onclick="topback()"></i></a>
    <div class="alert alert-info alert-dismissible fade show " role="alert" id="chathere">
      <small><b>! please login to chat</b></small>
      <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <!-- chat end -->
  
    <!-- cart item start -->
    <div class="modal fade" id="cartid" tabindex="-1" role="dialog">
      <div class="modal-dialog modal-md" role="document">
        <div class="modal-content bg-dark text-white">
          <div class="modal-header">
            <h5 class="modal-title">Cart items</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true" class="text-white">&times;</span>
            </button>
          </div>
          <div class="modal-body text-left">
            . <br> . <br> . <br>. <br>.
          </div>
          <div class="modal-footer text-left justify-content-center ">
            <p>Your cart is Empty!</p>
          </div>
        </div>
      </div>
    </div>
    <!-- cart item end -->
  
  
    <!-- signup form start -->
    <div class="modal fade" id="staticBackdrop" data-backdrop="static" tabindex="-1" role="dialog"
      aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div class="modal-dialog modal-md" role="document">
        <div class="modal-content bg-dark text-white">
          <div class="modal-header">
            <h5 class="modal-title" id="staticBackdropLabel">Create new account</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true" class="text-white">&times;</span>
            </button>
          </div>
          <div class="modal-body text-left">
            <form>
              <div class="typing-img"><img src="../../..//img/typing.gif" alt="typing"></div>
              <div class="form-group mb-2">
                <label for="fname"></label>
                <input type="text" class="form-control" id="uname" placeholder="Enter firstname" name="fname" required>
              </div>
              <div class="form-group mb-2">
                <label for="lname"></label>
                <input type="text" class="form-control" id="uname" placeholder="Enter lastname" name="lname" required>
              </div>
              <div class="form-group mb-2">
                <label for="exampleInputEmail1"></label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                  placeholder="Enter email address" required>
              </div>
              <div class="form-group mb-2">
                <label for="exampleInputPassword1"></label>
                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Enter password"
                  required>
              </div>
              <div class="form-group mb-2">
                <label for="exampleInputPassword1"></label>
                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Re-enter password"
                  required>
              </div>
              <hr>
              <button type="submit" class="btn btn-info btn-block">SignUp</button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <!-- signup form end -->
  
  
    <!-- login form start -->
    <div class="modal fade" id="loginid" data-backdrop="static" tabindex="-1" role="dialog"
      aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div class="modal-dialog modal-md" role="document">
        <div class="modal-content bg-dark text-white">
          <div class="modal-header">
            <h5 class="modal-title" id="staticBackdropLabel">Login</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true" class="text-white">&times;</span>
            </button>
          </div>
          <div class="modal-body text-left">
            <form>
              <div class="typing-img"><img src="../../..//img/typing.gif" alt="typing"></div>
              <div class="form-group mb-2">
                <label for="uname"></label>
                <input type="text" class="form-control" id="uname" placeholder="Enter username" name="uname" required>
              </div>
              <div class="form-group mb-2">
                <label for="logpassword"></label>
                <input type="password" class="form-control" id="logpassword" placeholder="Enter password" required>
              </div>
              <hr>
              <button type="submit" class="btn btn-info btn-block">Login</button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <!-- login form end -->
  
    <!-- header end -->
  
  
    <!-- menu start -->
    <div class="my-sidemenu" id="my-sidemenu">
      <div class="bg-white sticky-top">
        <img src="../../..//img/logo.jpg" alt="official logo" class="img-fluid pl-2 py-4" width="120" height="100">
        <small class="menuclose float-right pr-3 pb-2 pt-2" id="close-btn" onclick="closemenu()">&times;</small>
      </div>
      <h3 class="text-center text-info pt-3">Categories</h3>
      <ul class="text-capitalize pl-0">
        <li>Writer <i class="fas fa-angle-right float-right pl-4"></i>
          <i class="fas fa-angle-down float-right pl-4"></i>
          <ul>
            <li><a href="#HumayunAhmed">Humayun Ahmed</a></li>
            <li><a href="#MuhammedZafarIqbal">Muhammed Zafar Iqbal</a></li>
            <li><a href="#RabindranathTagore">Rabindranath Tagore</a></li>
            <li><a href="#SamareshMajumdar">Samaresh Majumdar</a></li>
            <li><a href="#AnisulHoque">Anisul Hoque</a></li>
          </ul>
        </li>
        <li>Publications <i class="fas fa-angle-right float-right pl-4"></i>
          <i class="fas fa-angle-down float-right pl-4"></i>
          <ul>
            <li><a href="#BanglaAcademy">Bangla Academy</a></li>
            <li><a href="#BigganAcademy">Biggan Academy</a></li>
            <li><a href="#ShebaProkashoni">Sheba Prokashoni</a></li>
            <li><a href="#BatigharProkashoni">Batighar Prokashoni</a></li>
            <li><a href="#OkkhorPotroProkashoni">Okkhor Potro Prokashoni</a></li>
          </ul>
        </li>
        <li>Subject <i class="fas fa-angle-right float-right pl-4"></i>
          <i class="fas fa-angle-down float-right pl-4"></i>
          <ul>
            <li><a href="#Story">Story</a></li>
            <li><a href="#Philosophy">Philosophy</a></li>
            <li><a href="#AgricultureAndFarmers">Agriculture And Farmers</a></li>
            <li><a href="#History">History</a></li>
            <li><a href="#Medical">Medical</a></li>
          </ul>
        </li>
        <li>Career <i class="fas fa-angle-right float-right pl-4"></i>
          <i class="fas fa-angle-down float-right pl-4"></i>
          <ul>
            <li><a href="#BCSPreparation">BCS Preparation</a></li>
            <li><a href="#ComputerProgramming">Computer Programming</a></li>
            <li><a href="#LanguageAndDictionary">Language And Dictionary</a></li>
            <li><a href="#BusinessAndInvestment">Business And Investment</a></li>
            <li><a href="#FreelancingAndOutsourcing">Freelancing And Outsourcing</a></li>
          </ul>
        </li>
  
  
        <li>news feed<i class="fas fa-newspaper pl-2"></i>
          <i class="fas fa-angle-right float-right pl-4"></i>
          <i class="fas fa-angle-down float-right pl-4"></i>
        </li>
  
        <li>orders<i class="fas fa-cart-plus pl-2"></i>
          <i class="fas fa-angle-right float-right pl-4"></i>
          <i class="fas fa-angle-down float-right pl-4"></i>
        </li>
  
        <li>vouchers<i class="fas fa-clipboard-list pl-2"></i>
          <i class="fas fa-angle-right float-right pl-4"></i>
          <i class="fas fa-angle-down float-right pl-4"></i>
        </li>
      </ul>
      <hr>
      <div class="pl-2 d-block ">
        <p><i class="fas fa-phone text-danger pl-3"></i> Hotline
          <span class="d-block pl-5">0879637574568</span></p>
        <hr>
        <small><a href="#">Privacy policy.</a> <a href="#">Purchasing policy.</a>
          <a href="#">Cooking policy.</a> <a href="#">Terms & condition.</a></small>
  
        <p><small>©2021.myshop.com</small></p>
      </div>
    </div>
    <!-- menu end -->
    `
  }
}

customElements.define ('my-header', MyHeader)
// header end


// footer start
 class MyFooter extends HTMLElement {
   connectedCallback () {
     this.innerHTML = `
     <!-- extra content start -->
     <hr>
     <section class="extra-content">
       <div class="container py-3">
         <div class="row">
           <div class="col-10 col-sm-6 col-lg-3 offset-1 offset-sm-0">
             <div class="row">
               <div class="col-3 col-sm-3">
                 <img src="../../..//img/original.png" alt="100%original product" width="50" height="50">
               </div>
               <div class="col-9 col-sm-9">
                 <p><strong>100% Original items</strong> are available our company.</p>
               </div>
             </div>
           </div>
           <div class="col-10 col-sm-6 col-lg-3 offset-1 offset-sm-0">
             <div class="row">
               <div class="col-3 col-sm-3">
                 <img src="../../..//img/return.png" alt="return our product" width="50" height="50">
               </div>
               <div class="col-9 col-sm-9">
                 <p><strong>Return within 14days</strong> of receving your order.</p>
               </div>
             </div>
           </div>
           <div class="col-10 col-sm-6 col-lg-3 offset-1 offset-sm-0">
             <div class="row">
               <div class="col-3 col-sm-3">
                 <img src="../../..//img/delivery.png" alt="delivery" width="50" height="50">
               </div>
               <div class="col-9 col-sm-9">
                 <p><strong>Get free delivery,</strong> if you order more than 10 items.</p>
               </div>
             </div>
           </div>
           <div class="col-10 col-sm-6 col-lg-3 offset-1 offset-sm-0">
             <div class="row">
               <div class="col-3 col-sm-3">
                 <img src="../../..//img/payment.png" alt="payment methood" width="50" height="50">
               </div>
               <div class="col-9 col-sm-9">
                 <p><strong>Pay online through multiple</strong> options (Card/Net banking)</p>
               </div>
             </div>
           </div>
         </div>
       </div>
     </section>
     <!-- extra content end -->
     
     
     <!-- footer start -->
     <hr>
     <section class="footer">
       <div class="container-fluid mt-3 bg-dark text-justify">
         <div class="row text-white py-2 ">
           <div class="col-6 col-sm-6 col-lg-3 d-flex justify-content-center pt-3">
             <div class="d-block">
               <h6 class="pb-2">Usefull Link</h6>
               <a href="#">Privacy Policy</a><br>
               <a href="#">Terms & Condition</a><br>
               <a href="#">Rutern Policy</a><br>
               <a href="#">Discount Coupons</a>
             </div>
           </div>
     
           <div class="col-6 col-sm-6 col-lg-3  d-flex justify-content-center pt-3">
             <div class="d-block">
               <h6 class="pb-2">Follow Us</h6>
               <a href="#"><i class="fab fa-youtube fa-2x pr-3"></i>Youtube</a><br>
               <a href="#"><i class="fab fa-twitter fa-2x pr-3"></i>Twitter</a><br>
               <a href="#"><i class="fab fa-instagram fa-2x"></i>Instagram</a><br>
               <a href="#"><i class="fab fa-facebook fa-2x pr-3"></i>Facebook</a>
             </div>
           </div>
     
           <div class="col-6 col-sm-6 col-lg-3 d-flex justify-content-center pt-3">
             <div class="d-block">
               <h6 class="pb-2">Company</h6>
               <a href="#">About Us</a><br>
               <a href="#">Contact Us</a><br>
               <a href="#">Career</a><br>
               <a href="#">Affliant</a>
             </div>
           </div>
           <div class="col-6 col-sm-6 col-lg-3 d-flex justify-content-center pt-3">
             <div class="d-block">
               <h6 class="pl-2 pb-2">Download App</h6>
               <a href="#"><img src="../../..//img/playstore.png" alt="app Download link" width="100" height="70"></a>
             </div>
           </div>
     
     
         </div>
     
         <div class="pb-1 pt-3 text-center">
           <p>Copyright©2021.myshop.com.All-Right.Reserved</p>
         </div>
     
       </div>
     </section>
     <!-- footer end -->
     `
   }
 }

 customElements.define ('my-footer', MyFooter)
//  footer end