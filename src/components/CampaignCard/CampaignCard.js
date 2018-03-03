import React from "react";
import "./CampaignCard.css";

const CampaignCard = props => (
  	<div onClick={() => props.pickCampaign(props.id)} className="card">
			<div className="img-container">
	      		<img alt={props.name} src={props.image} />
	    	</div>
	</div>


);

export default CampaignCard;
