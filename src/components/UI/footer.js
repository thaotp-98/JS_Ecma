const Footer = () => {
 
      return /* html */ `
      <hr>
      <footer class="p-10 footer bg-base-200 text-base-content mt-3">
         <div>
            <span class="footer-title">Services</span> 
            <a class="link link-hover">Branding</a> 
            <a class="link link-hover">Design</a> 
            <a class="link link-hover">Marketing</a> 
            <a class="link link-hover">Advertisement</a>
         </div> 
         <div>
            <span class="footer-title">Company</span> 
            <a class="link link-hover">About us</a> 
            <a class="link link-hover">Contact</a> 
            <a class="link link-hover">Jobs</a> 
            <a class="link link-hover">Press kit</a>
         </div> 
         <div>
            <span class="footer-title">Legal</span> 
            <a class="link link-hover">Terms of use</a> 
            <a class="link link-hover">Privacy policy</a> 
            <a class="link link-hover">Cookie policy</a>
         </div> 
         <div>
            <span class="footer-title">Newsletter</span> 
            <div class="form-control w-80">
               <label class="label">
               <span class="label-text">Enter your email address</span>
               </label> 
               <div class="relative">
               <input type="text" placeholder="username@site.com" class="w-full pr-16 input input-bordered"> 
               <button class="absolute top-0 right-0 rounded-l-none btn btn-primary">Subscribe</button>
               </div>
            </div>
     
      </footer>
       `;
   
};
export default Footer();