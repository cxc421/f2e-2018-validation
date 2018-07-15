import React from 'react';
import { 
  Container, Row, Col
} from 'reactstrap';
import 'styles/App.scss';

import Progress from 'components/Progress';
import Step_1 from 'components/Step1';
import Step_2 from 'components/Step2';

class App extends React.PureComponent {
  render() {
    const { step } = this.state;
    let Content = f => null;
    switch (step) {
      case 1:
        Content = Step_1; 
      break;
      case 2:
        Content = Step_2;
      break;
    }    

    return (
      <Container>
        <Row>
          <Col>
            <div className="top-line"></div>
            <Progress done={step - 1} num={4} />
          </Col>
        </Row>
        <Content onSubmitDone={this.toNextPage} />
      </Container>
    );
  }

  state = {
    step: 1
  }

  toNextPage = () => {
    this.setState(prevState => {
      if (prevState.step < 5) {
        return {step: prevState.step + 1};
      }
      return {};
    })
  }
}


export default App;