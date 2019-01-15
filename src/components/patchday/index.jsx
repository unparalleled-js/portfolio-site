import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import pdLogo from '../../resources/pdlogo.png';
import PDStyle from './patchday.css';
import Style from '../../styles.css';

const pdClasses = () => `${Style.center} ${PDStyle.patchDay}`;
const pdButtonClasses = () => `${PDStyle.pdButton}`;
const pdImageClasses = () => `${PDStyle.pdImage}`;

const PDButton = props => {
  const { handleHover, handleExitHover } = props;
  return (
    <Button
      className={pdButtonClasses()}
      onMouseEnter={handleHover}
      onMouseLeave={handleExitHover}
    >
      <img src={pdLogo} alt="PatchDay App Logo" className={pdImageClasses()} />
    </Button>
  );
};

const PDText = () => (
  <div className={PDStyle.pdText}>
    <p>
      PatchDay is scheduling software designed for hormone replacement therapy
      (HRT). Originally, we sought to mitigate problems with patch staggering
      but later evolved into making an all-encompassing H.R.T. companion.
    </p>
  </div>
);

class PatchDay extends React.Component {
  constructor(props) {
    super(props);
    const { textVisible } = props;
    this.handleHover = this.handleHover.bind(this);
    this.handleExitHover = this.handleExitHover.bind(this);
    this.state = { ...props, textVisible: !!textVisible };
  }

  handleHover() {
    this.setState({ textVisible: true });
  }

  handleExitHover() {
    this.setState({ textVisible: false });
  }

  render() {
    const { textVisible } = this.state;
    const buttonProps = {
      handleHover: this.handleHover,
      handleExitHover: this.handleExitHover,
    };
    const pdText = textVisible ? PDText() : <br />;
    return (
      <div className={pdClasses()}>
        {PDButton(buttonProps)}
        {pdText}
      </div>
    );
  }
}

PDButton.propTypes = {
  handleHover: PropTypes.func,
  handleExitHover: PropTypes.func,
};

PatchDay.propTypes = {
  textVisible: PropTypes.bool,
};

export default PatchDay;