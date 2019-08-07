import React from "react";

export class SideBar extends React.Component {
  render() {
    const { coordinate, onUpdateSelectedIndex, selectedIndex } = this.props;
    return (
      <article className="content-wrapper">
        <h1>Zones</h1>
        <article>
          {coordinate.map((item, key) => (
            <button
              className={
                "cust-button " + (selectedIndex === key ? "active" : "")
              }
              key={key}
              onClick={() => {
                onUpdateSelectedIndex(key);
              }}
            >
              Zone {key}
            </button>
          ))}
        </article>
      </article>
    );
  }
}
