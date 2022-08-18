import React, { useEffect } from "react";
import "./Pricing.scss";
import PricingCard from "../PricingCard/PricingCard";
import Aos from "aos";
import "aos/dist/aos.css";

const Pricing = () => {
	const priceContent = [
		{
			title: "Gold Plan",
			content: "For those of you who like simple",
			price: "$9.99 ",
			time: "month",
			unlimited: "Unlimited Movies",
			ads: "No Ads",
			download: "25 Downloading Movies",
			tv: "10 TV Channel",
			support: "24/7 Support",
		},
		{
			title: "Diamond Plan",
			content: "The best plan for all needs",
			price: "$19.99 ",
			time: "month",
			unlimited: "Unlimited Movies",
			ads: "No Ads",
			download: "100 Downloading Movies",
			tv: "25 TV Channel",
			support: "24/7 Support",
		},
		{
			title: "Silver Plan",
			content: "For those of you who don't like simple",
			price: "$15.99 ",
			time: "month",
			unlimited: "Unlimited Movies",
			ads: "No Ads",
			download: "50 Downloading Movies",
			tv: "15 TV Channel",
			support: "24/7 Support",
		},
	];

	useEffect(() => {
		Aos.init({ duration: 3000 });
	}, []);

	let renderCards = "";
	renderCards = priceContent.map((item, index) => {
		return <PricingCard key={index} {...item} />;
	});

	return (
		<div className="pricing">
			<div className="pricing-header">
				<h1>choose the plan the suits for you</h1>
				<p>
					We present 3 packages that you can choose to start watching various of
					our content at low prices and according to your needs.{" "}
				</p>
			</div>
			<div data-aos="fade-down-right" className="pricing-content">
				{renderCards}
			</div>
		</div>
	);
};

export default Pricing;
