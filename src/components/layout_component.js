import React from "react";
import Toggle from "./theme_toggler_component";
import Helmet from "react-helmet";
import sun from "../../assets/images/sun.png";
import moon from "../../assets/images/moon.png";

class Layout extends React.Component {
  state = {
    theme: null,
  };
  componentDidMount() {
    this.setState({ theme: window.__theme });
    window.__onThemeChange = () => {
      this.setState({ theme: window.__theme });
    };
  }

  render() {
    return (
      <div
        style={{
          marginLeft: "auto",
          marginRight: "auto",
          maxWidth: 24,
          padding: `2.625rem ${0.75}`,
        }}
      >
        <header
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "2.625rem",
          }}
        >
          {this.state.theme !== null ? (
            <Toggle
              icons={{
                checked: (
                  <img
                    src={moon}
                    width="16"
                    height="16"
                    role="presentation"
                    style={{ pointerEvents: "none" }}
                  />
                ),
                unchecked: (
                  <img
                    src={sun}
                    width="16"
                    height="16"
                    role="presentation"
                    style={{ pointerEvents: "none" }}
                  />
                ),
              }}
              checked={this.state.theme === "dark"}
              onChange={(e) =>
                window.__setPreferredTheme(e.target.checked ? "dark" : "light")
              }
            />
          ) : (
            <div style={{ height: "24px" }} />
          )}
        </header>
      </div>
    );
  }
}

export default Layout;
