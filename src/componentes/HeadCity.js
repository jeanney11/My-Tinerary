import React from "react";

import SelvaNegra from "../imagenes/SelvaNegra.jpg"


function HeadCity(){

    return(
    
<div className="container content-space-2 content-space-lg-3">
  
  <div class Name="w-md-75 w-lg-50 text-center mx-md-auto mb-5 mb-md-9">
      <img src={SelvaNegra} className="HeadImage"/>
    <span class="text-cap">Always improving</span>
    <h2>Solutions rooted in code and design</h2>
  </div>
  


  <ul class="step step-md step-centered">
    <li class="step-item">
      <div class="step-content-wrapper">
        <span class="step-icon step-icon-soft-primary">1</span>
        <div class="step-content">
          <h3>Industry-leading designs</h3>
          <p>Achieve virtually any design and layout from within the one template.</p>
        </div>
      </div>
    </li>

    <li class="step-item">
      <div class="step-content-wrapper">
        <span class="step-icon step-icon-soft-primary">2</span>
        <div class="step-content">
          <h3>Learn from the docs</h3>
          <p>Whether you're a startup or a global enterprise, learn how to integrate with Front.</p>
        </div>
      </div>
    </li>

    <li class="step-item">
      <div class="step-content-wrapper">
        <span class="step-icon step-icon-soft-primary">3</span>
        <div class="step-content">
          <h3>Accelerate your business</h3>
          <p>We help power millions of businesses to built and run smoothly.</p>
        </div>
      </div>
    </li>
  </ul>
  
</div>

    );
}

export default HeadCity;


