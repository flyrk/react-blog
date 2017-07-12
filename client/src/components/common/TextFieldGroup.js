import PropTypes from 'prop-types';
import classnames from 'classnames';

const TextFieldGroup = ({ field, value, label, type, error, handlerOnChange }) => {
  return (
    <div className={classnames('form-group', { 'has-error': error })}>
      <label className='control-label'>{label}:</label>
      <input
        value={value}
        onChange={handlerOnChange}
        type={type}
        name={field}
        className='form-control'
      />
      {error && <span className='help-block'>{error}</span>}
    </div>
  );
};

TextFieldGroup.propTypes = {
  field: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  error: PropTypes.string,
  handlerOnChange: PropTypes.func.isRequired
}

TextFieldGroup.defaultPropTypes = {
  type: 'text'
}
export default TextFieldGroup;
