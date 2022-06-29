import React from 'react';
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  import {faCoffee} from '@fortawesome/free-solid-svg-icons';


  const New = () => (
    <div className='' style={{marginTop:"300px"}}>
      {/* <FontAwesomeIcon icon="check-square" />
      Your <FontAwesomeIcon icon="coffee" /> is hot and ready!
      <div>
      <FontAwesomeIcon icon={['fab', 'apple']} />
      <FontAwesomeIcon icon={['fab', 'microsoft']} />
      <FontAwesomeIcon icon={['fab', 'google']} />

      <FontAwesomeIcon icon="check-square" />
      With Coffee Checked, these companies always know their coffee is hot and ready!
    </div> */}
      <FontAwesomeIcon icon={faCoffee} />

    </div>
  )
  export default New;