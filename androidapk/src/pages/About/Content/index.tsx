import { IonButton, IonCheckbox, IonContent, IonGrid, IonText, IonToast } from "@ionic/react";
import { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { IonIcon } from '@ionic/react';






function Content({ setSection, vars }) {
  const history = useHistory();
  const [toastOpen, setToastOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastColor, setToastColor] = useState("");



  return (
    <>

          
        
          <div>
            About Us ?
          </div>
        
          <div>
            At BuilderFloor.Com, We Are Dedicated To Helping You Find Your Dream Builder Floor In The Vibrant City Of Gurgaon. We Understand That Finding The Perfect Builder Floor Is An Important And Exciting Journey, And We Are Here To Make That Process Seamless And Enjoyable For You.
          </div>
        
          <div>
            Our Platform Exclusively Focuses On New Builder Floors In Gurgaon, Offering A Wide Range Of Options At All Price Points And Locations. Whether You&#x27;re A First-Time Buyer, A Growing Family, Or An Investor Looking For A Lucrative Opportunity, We Have The Right Builder Floor To Meet Your Unique Requirements.
          </div>
        
          <div>
            We Know And Very Well Understand That Finding And Selecting A Builder Floor For One Self Is Really A Tough Job. It Is Our Endeavour To Help You Find The Best Match For You Within Your Budget And Also According To Your Taste &amp; Requirement. We Have Brought The World Of Builder Floors At Your Door Steps With The Help Of Our Verified Channel Partners.
          </div>
        
          <div>
            Why Choose BuilderFloor.Com?
          </div>
        
          <div>
            • Extensive Selection: Our Comprehensive Database Showcases A Diverse Collection Of New Builder Floors In Gurgaon. From Affordable Options To Luxury Residences, We Have Something To Suit Every Taste And Budget
          </div>
        
          <div>
            • Trusted Channel Partners: We Collaborate With Reputed Channel Partners Who In Turn Contact Different Builders And Developers In Gurgaon With A Proven Track Record Of Delivering Quality Constructions And Enlist The Best Builder Floors On Our Platform Which Meet The Highest Standards Of Craftsmanship And Design.
          </div>
        
          <div>
            • Location Expertise: Gurgaon Is A Dynamic City With Numerous Neighborhoods And Localities, Each With Its Own Charm And Amenities. Our Channel Partners Are A Team Of Real Estate Professionals, Who Have In-Depth Knowledge Of The Gurgaon Market And Can Guide You Towards The Ideal Location That Aligns With Your Lifestyle And Preferences.
          </div>
        
          <div>
            • Personalized Assistance: Our Channel Partners Will Provide A Personalized Experience To Every Customer. They, As A Team, Are Dedicatedly Ready To Assist You Throughout Your Home-Buying Journey, Offering Expert Advice, Answering Your Queries, And Facilitating Smooth Transactions.
          </div>
        
          <div>
            • Transparent Information: We Understand The Importance Of Transparency In The Real Estate Industry. On BuilderFloor.Com, You Will Find Detailed Information, Including Floor Plans, Specifications, Amenities, And Pricing, Empowering You To Make Informed Decisions.
          </div>
        
          <div>
            At BuilderFloor.Com, Our Mission Is To Simplify Your Search For The Perfect Builder Floor And Help You Embark On A New Chapter Of Your Life. We Are Passionate About Real Estate And Committed To Exceeding Your Expectations.
          </div>
        
          <div>
            Start Exploring Our Listings Today And Let Us Be Your Trusted Partner In Finding Your Dream Builder Floor In Gurgaon.
          </div>
    </>
  );
}

export default Content;
