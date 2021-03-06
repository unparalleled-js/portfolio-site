import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import { Document, Page } from 'react-pdf';
import Style from 'styles.css';
import ResumeStyle from './resume.css';

const resumeButtonClasses = () =>
  `${ResumeStyle.resumeButton} ${Style.center} ${
    Style.nerdFont
  } btn-outline-primary`;

const ResumeButton = props => {
  const { handleClick, value } = props;
  return (
    <Button
      variant="outline-primary"
      className={resumeButtonClasses()}
      onClick={handleClick}
    >
      {value}
    </Button>
  );
};

const resumeClasses = () => `${ResumeStyle.resume} ${Style.center}`;

const ResumeDocument = () => (
  <Document file="resume.pdf">
    <Page pageNumber={1} />
  </Document>
);

class Resume extends React.Component {
  constructor(props) {
    super(props);
    const { resumeVisible } = props;
    this.handleViewResumeClick = this.handleViewResumeClick.bind(this);
    this.handleHideResumeClick = this.handleHideResumeClick.bind(this);
    this.state = { ...props, resumeVisible: !!resumeVisible };
  }

  handleViewResumeClick() {
    this.setState({ resumeVisible: true });
  }

  handleHideResumeClick() {
    this.setState({ resumeVisible: false });
  }

  render() {
    const { resumeVisible } = this.state;
    let resumeDocument;
    let buttonProps;
    if (resumeVisible) {
      resumeDocument = <ResumeDocument />;
      buttonProps = {
        handleClick: this.handleHideResumeClick,
        value: 'Hide Resume',
      };
    } else {
      resumeDocument = <hr />;
      buttonProps = {
        handleClick: this.handleViewResumeClick,
        value: 'View Resume',
      };
    }

    return (
      <div className={resumeClasses()}>
        {ResumeButton(buttonProps)}
        {resumeDocument}
      </div>
    );
  }
}

ResumeButton.propTypes = {
  value: PropTypes.string,
  handleClick: PropTypes.func,
};

Resume.propTypes = {
  resumeVisible: PropTypes.bool,
};

export default Resume;
