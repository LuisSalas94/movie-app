import React from "react";
import "./PricingCard.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleDot } from "@fortawesome/free-solid-svg-icons";

const PricingCard = ({
	title,
	content,
	price,
	time,
	unlimited,
	ads,
	download,
	tv,
	support,
}) => {
	return (
		<div className="pricing-card">
			<div className="title">{title}</div>
			<p className="content">{content}</p>
			<div className="price">
				{price}/ <span>{time}</span>
			</div>
			<div className="pricing-details">
				<div className="pricing-info">
					<FontAwesomeIcon icon={faCircleDot} className="pricing-icon" />
					<span>{unlimited}</span>
				</div>
				<div className="pricing-info">
					<FontAwesomeIcon icon={faCircleDot} className="pricing-icon" />
					<span>{support}</span>
				</div>
				<div className="pricing-info">
					<FontAwesomeIcon icon={faCircleDot} className="pricing-icon" />
					<span>{ads}</span>
				</div>
				<div className="pricing-info">
					<FontAwesomeIcon icon={faCircleDot} className="pricing-icon" />
					<span>{download}</span>
				</div>
				<div className="pricing-info">
					<FontAwesomeIcon icon={faCircleDot} className="pricing-icon" />
					<span>{tv}</span>
				</div>
			</div>
			<div className="price-btn">
				<button>Choose Plan</button>
			</div>
		</div>
	);
};

export default PricingCard;
