import './Infobanner.scss';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestion } from '@fortawesome/free-solid-svg-icons';

const Infobanner = (props) => {
  //Variabeln für verschiedene Infobanner
  const { title, content } = props;
  //expand -> Hint wird angezeigt und wieder versteckt
  //const [expand, setExpand] = useState(false);
  //const toggleExpand = () => setExpand(prevExpand => !prevExpand);
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


  //Code funktioniert hier noch nicht richtig
  return (
    <div className='test'>
      {showBanner && (
        <div className="infobanner">
          <div className="btnimg">
            <FontAwesomeIcon icon={faQuestion} />
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






/*
const [checked, setChecked] = useState(false);

  const handleChange = (props) => {
    setChecked(props.currentTarget.checked);
  }

  return <CheckBox checked={checked} onChange={handleChange} ></CheckBox>
*/


export default Infobanner;
