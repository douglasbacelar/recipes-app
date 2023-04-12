import React from 'react';

function FinishBtn() {
  return (
    <button
      data-testid="finish-recipe-btn"
      type="button"
      style={ { position: 'fixed', bottom: '0px' } }
    >
      Finish Recipe

    </button>
  );
}

export default FinishBtn;
