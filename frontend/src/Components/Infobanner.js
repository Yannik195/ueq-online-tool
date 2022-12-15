import './Infobanner.scss';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestion } from '@fortawesome/free-solid-svg-icons';

const Infobanner = (props) => {
  const { title, content } = props;
  const [showBanner, setShowBanner] = useState(true);

  useEffect(() => {
    console.log('showbanner', showBanner)
    const test = window.localStorage.getItem('Hide_Infobanner');
    if (test !== null) setShowBanner(JSON.parse(test));
  }, []);

  //Das muss nach dem klicken "Don't show hint anymore" auskommentiert werden
  useEffect(() => {
    window.localStorage.setItem('Hide_Infobanner', JSON.stringify(showBanner));
  }, [showBanner]);


  return (
    <div className='test'>
      {showBanner && (
        <div className="infobanner">
          <div className="btnimg">
            <FontAwesomeIcon className='img' icon={faQuestion} />
          </div>
          <div className='text'>
            <div className="title">
              {title}
            </div>
            <div className="content">{content}</div>
          </div>
          <div className='hint'>
            <input type="checkbox" onClick={() => setShowBanner(false)}></input>
            {' '} Don't show hint anymore
          </div>
        </div>
      )}
    </div>
  )
}

export default Infobanner;