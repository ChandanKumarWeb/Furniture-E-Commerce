import React from "react";

function BlogRecentPostsCrd(props) {
  return (
    <div>
      <div className="flex gap-2">
        <img className="recentPostImg" src={props.img} alt="" />
        <div>
          <p>{props.post}</p>
          <p className="BlogUplDetail">{props.date}</p>
        </div>
      </div>
    </div>
  );
}

export default BlogRecentPostsCrd;
