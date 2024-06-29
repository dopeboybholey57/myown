"use client";
import React from "react";
import featuresData from "./featuresData";
import SingleFeature from "./SingleFeature";
import SectionHeader from "../Common/SectionHeader";
import Packagecard from "../Packagecard"
import { Grid } from "@mui/material";


const Feature = () => {
  return (
    <>
      {/* <!-- ===== Features Start ===== --> */}
      <section id="features" className="py-20 lg:py-25 xl:py-10 ">
        {/* <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
         
          <SectionHeader
            headerInfo={{
              title: "PACKAGES",
              subtitle: "Curated Health Packages",
              description: `Explore our comprehensive health packages - routine check-ups to specialized screenings, we've got you covered for optimal wellness.`,
            }}
          />
          

          <div className="mt-12.5 grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:mt-15 lg:grid-cols-3 xl:mt-20 xl:gap-12.5">
            

            {featuresData.map((feature, key) => (
              <SingleFeature feature={feature} key={key} />
            ))}
            
          </div>
        </div> */}


<div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">

<SectionHeader
            headerInfo={{
              title: "PACKAGES",
              subtitle: "Curated Health Packages",
              description: `Explore our comprehensive health packages - routine check-ups to specialized screenings, we've got you covered for optimal wellness.`,
            }}
          />

<div className="mt-12.5 xl:mt-10 xl:mb-20">

<Grid container spacing={2}>

<Grid item xs={12} md={3}>
<Packagecard 
image="/images/icon/pack1.png"
thepack="The Package Name"
description="lorem ipsum sit dowmt lorem ipsum sit dowmt lorem ipsum sit dowmt lorem ipsum sit dowmt"
price="Book Now for ₹449"
/>
</Grid>

<Grid item xs={12} md={3}>
<Packagecard 
image="/images/icon/pack2.png"
thepack="The Package Name"
description="lorem ipsum sit dowmt lorem ipsum sit dowmt lorem ipsum sit dowmt lorem ipsum sit dowmt"
price="Book Now for ₹449"
/>
</Grid>

<Grid item xs={12} md={3}>
<Packagecard 
image="/images/icon/pack3.png"
thepack="The Package Name"
description="lorem ipsum sit dowmt lorem ipsum sit dowmt lorem ipsum sit dowmt lorem ipsum sit dowmt"
price="Book Now for ₹449"
/>
</Grid>

<Grid item xs={12} md={3}>
<Packagecard 
image="/images/icon/pack4.png"
thepack="The Package Name"
description="lorem ipsum sit dowmt lorem ipsum sit dowmt lorem ipsum sit dowmt lorem ipsum sit dowmt"
price="Book Now for ₹449"
/>
</Grid>




</Grid>
</div>


</div>


      </section>

      {/* <!-- ===== Features End ===== --> */}
    </>
  );
};

export default Feature;
