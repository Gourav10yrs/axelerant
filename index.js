'use strict';

const e = React.createElement;

class SubmitButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { submit: false };
  }

  render() {
    if (this.state.submit) {
      return 'Thank you for submitting your request we will be in touch.';
    }

    return e(
      'p',
      { onClick: () => this.setState({ submit: true }) },
      'Submit'
    );
  }
}

const domContainer = document.querySelector('#submit_button');
ReactDOM.render(e(SubmitButton), domContainer);