import React from "react";

export default function Form() {
  return (
    <div className="btn-container">
      <form className="form" action="submit">
        <input className="email" type="text" placeholder="Email" />
        <button className="free-access-btn" type="submit">
          Get early access
        </button>
      </form>
    </div>
  );
}
