import React from 'react';
import 'styles/Progress.scss';

const Progress = ({num, done}) => {

  const renderBall = () => {
    const balls = [];
    for (let i=1; i <= num; i++) {
      let className = '_progress-ball';
      let children = null;
      if (i <= done) {
        className += ' done';
        children = <i className="fas fa-check"></i>;
      } else if (i === done + 1) {
        className += ' working';
      }
      balls.push(<div key={i} className={className}>{ children }</div>)
    }
    return balls;
  };

  const workingPercent = done < num ? done / (num - 1) : 1;

  const workingStyle = {
    width: `calc((100% - 16px) * ${workingPercent})`
  };

  // console.log(workingStyle);

  return (
    <div className="_progress">
      {
        renderBall()
      }
      <div className="_progress-working" style={ workingStyle }></div>
    </div>
  )
}

Progress.defaultProps = {
  num: 4,
  done: 1
};

export default Progress;