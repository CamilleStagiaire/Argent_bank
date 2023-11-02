import pencilIcon from '../../assets/pencil.svg';

function ToggleButton({action, label, onKeyDownAction}) {
    
    return (
      <button 
        className="icon-button"
        onClick={action}
        onKeyDown={(e) => onKeyDownAction(e, action)}
        aria-label={label}
      >
        <img src={pencilIcon} alt="" className="pencil-icon" />
      </button>
    );
  }

  export default ToggleButton;