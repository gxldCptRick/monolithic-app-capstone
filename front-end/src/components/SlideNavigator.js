import React, { Component } from "react";
import { Redirect } from "react-router-dom";

export default class SlideNavigator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navigatePrevious: false,
      navigateNext: false
    };
  }

  onPreviousClick = () => {
    let { onPreviousClick } = this.props;
    onPreviousClick();
    this.setState({ navigatePrevious: true });
  };

  onNextClick = () => {
    let { onNextClick } = this.props;
    onNextClick();
    this.setState({ navigateNext: true });
  };

  render() {
    let { children, prev, next } = this.props;
    let { navigateNext, navigatePrevious } = this.state;

    if (navigateNext) {
      return <Redirect to={next} />;
    }

    if (navigatePrevious) {
      return <Redirect to={prev} />;
    }

    return (
      <React.Fragment>
        {children}
        <div className="page-nav">
          <button
            className="page-nav__btn"
            title="previous"
            onClick={this.onPreviousClick}
          />
          <button
            className="page-nav__btn"
            title="next"
            onClick={this.onNextClick}
          />
        </div>
      </React.Fragment>
    );
  }
}
