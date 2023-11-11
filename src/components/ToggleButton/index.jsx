import pencilIcon from '../../assets/pencil.svg';

/**
 * Composant de ToggleButton
 * @param {Object} props
 * @param {Function} props.action
 * @param {string} props.label
 * @param {Function} props.onKeyDownAction
 * @returns {React.ReactElement}
 */
function ToggleButton({ action, label, onKeyDownAction }) {
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
