import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function ContactCards(props) {
  return (
    <div>
      <div className="flex gap-3 w-64">
        <div>
          <p>
            <FontAwesomeIcon
              icon={props.icons}
              style={{ color: "#000000" }}
            />
          </p>
        </div>
        <div>
          <h1 className="font-bold">{props.contactCardsHead}</h1>
          <p>{props.contactCardsPera}</p>
        </div>
      </div>
    </div>
  );
}

export default ContactCards;
