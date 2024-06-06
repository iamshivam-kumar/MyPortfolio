import React from 'react';
import { Line } from 'rc-progress';
import './Skill.css';

const Skill = () => {
  const getProgressBarColor = (percent) => {
    if (percent >= 0 && percent < 50) {
      return 'blue';
    } else if (percent >= 50 && percent < 70) {
      return 'green';
    } else {
      return 'red';
    }
  };

  return (
    <div>
      <div style={{ backgroundColor: '#faebd7', filter: 'brightness(80%)' }}>
        <hr /><h1 id="Skill-section" style={{ textAlign: 'center', color: 'rgb(201,76,76)' }}>𝕊𝕜𝕚𝕝𝕝𝕤</h1><hr />
      </div>
      {/* <div className="skill-container" style={{ backgroundColor: '#8FBC8F', filter: 'brightness(150%)' }}> */}
      <div className='skill-container'  style={{background: 'url("https://tse2.mm.bing.net/th?id=OIP.lIRgrN_WE67eIfApu3wGwwHaGL&pid=Api&P=0&h=180")' , backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', filter:'brightness(80%)'}}>
        {/* <div className='skill-list'> */}
          <div className="skill-list" >
            <div className="grid-container">
              <div className="skill-item">
                <Line percent={90} strokeWidth="5" trailWidth="5" strokeLinecap="square" strokeColor={getProgressBarColor(90)} />
                <h3><span>🅗🅣🅜🅛</span></h3>
              </div>
              <div className="skill-item">
                <Line percent={90} strokeWidth="5" trailWidth="5" strokeLinecap="square" strokeColor={getProgressBarColor(90)} />
                <h3><span>🅒🅢🅢</span></h3>
              </div>
              <div className="skill-item">
                <Line percent={80} strokeWidth="5" trailWidth="5" strokeLinecap="square" strokeColor={getProgressBarColor(80)} />
                <h3><span>🅙🅐🅥🅐</span></h3>
              </div>
              <div className="skill-item">
                <Line percent={90} strokeWidth="5" trailWidth="5" strokeLinecap="square" strokeColor={getProgressBarColor(90)} />
                <h3><span>🅑🅞🅞🅣🅢🅣🅡🅐🅟</span></h3>
              </div>
              <div className="skill-item">
                <Line percent={90} strokeWidth="5" trailWidth="5" strokeLinecap="square" strokeColor={getProgressBarColor(90)} />
                <h3><span>🅙🅐🅥🅐🅢🅒🅡🅘🅟🅣</span></h3>
              </div>
              <div className="skill-item">
                <Line percent={95} strokeWidth="5" trailWidth="5" strokeLinecap="square" strokeColor={getProgressBarColor(95)} />
                <h3><span>🅡🅔🅐🅒🅣.🅙🅢</span></h3>
              </div>
              <div className="skill-item">
                <Line percent={90} strokeWidth="5" trailWidth="5" strokeLinecap="square" strokeColor={getProgressBarColor(90)} />
                <h3><span>🅝🅞🅓🅔.🅙🅢</span></h3>
              </div>
              <div className="skill-item">
                <Line percent={90} strokeWidth="5" trailWidth="5" strokeLinecap="square" strokeColor={getProgressBarColor(90)} />
                <h3><span>🅜🅞🅝🅖🅞🅓🅑</span></h3>
              </div>
              <div className="skill-item">
                <Line percent={85} strokeWidth="5" trailWidth="5" strokeLinecap="square" strokeColor={getProgressBarColor(85)} />
                <h3><span>🅢🅠🅛</span></h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    // </div>
  );
};

export default Skill;