import React from "react";

export class MainSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      coordinates: []
    };
  }


  render() {
    const { coordinate, onUpdateSelectedIndex, selectedIndex } = this.props;
    return (
      <div className="main-section">
        <article>
          <article className="content-display-size">
            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              {coordinate.map((items, index) => (
                <React.Fragment key={index}>
                  {items.map((item, key) => (
                    <rect
                      key={key}
                      width="10%"
                      height="10%"
                      x={item[0] * 75}
                      y={item[1] * 75}
                      fill="#49b293"
                      stroke="blue"
                      strokeWidth="0.1"
                      className={selectedIndex === index ? "active" : ""}
                      onClick={() => {
                        onUpdateSelectedIndex(index);
                      }}
                    />
                  ))}
                </React.Fragment>
              ))}
            </svg>
          </article>
        </article>
      </div>
    );
  }
}
