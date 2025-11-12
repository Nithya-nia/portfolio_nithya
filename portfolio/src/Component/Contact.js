import React from 'react'
import Contact_css from './Contact.css'

const Contact = () => {
  return (
    <div id="contact">
        <div class="contact_bg">
          <h3 class=" fw-bold text-center  about_me pt-5">Contact Me</h3>
           <p class="text-light text-center">Have an idea in mind? Let’s connect and make it happen! Contact me through the form or any of my available channels.</p>
                   
        <div class="container">
            <div class="row text-light">
                <div class="col con ">
                 <form>
                   <label for="name" >Name</label><br/>
                  <input class="bg-dark "type="text" id="name" name="name"></input><br/>
                  <label class="mt-2" for="email">Email Address</label><br/>
                   <input class="bg-dark " type="text" id="email" name="email"></input><br/>
                    <label class="mt-2" for="message ">Message</label><br/>
                   <textarea class="text-secondary bg-dark " placeholder="Write something here..." id="message" name="message" rows="3" cols="30"></textarea><br/>
                   <button class="send_msg mt-2" type="submit">Send Message</button>
                 </form>
              
              </div>
             
              </div>
              </div>
               <div class="footer d-flex gap-3 mt-5 justify-content-center">
                <a href="https://github.com/nithya-nia"><i class="fa-brands fa-github github "></i></a>
                <a href="https://www.linkedin.com/in/nithya-nia/"><i class="fa-brands fa-linkedin linkedin "></i></a>
                <a href="mailto:imnithyania@gmail.com"><i class="fa-solid fa-envelope envelope "></i></a>
            </div>
            <hr/>
            <p class='text-center rights text-light '>&copy; 2025 Nithya . All rights reserved</p>
              </div>
              </div>
            
           
  )
}

export default Contact