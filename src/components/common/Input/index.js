import React, {Component} from 'react';
import './styles.scss'

export default class Input extends Component {
    render() {
        const { type, value, name, onChangeHandler, placeholder, classNames, title, error } = this.props;
        return(
            <div className="input_text_box">
                <label className={"field a-field a-field_a1 page__field " + (classNames ? classNames : '')}>
                    <input type={type} value={value}
                           className="field__input"
                           onChange={(e) => onChangeHandler(e)}
                           placeholder={placeholder} name={name}
                           required />
                  <span className="field__label-wrap">
                    <span className="field__label">{title}</span>
                  </span>
                </label>
                <span className="error-msg">{error}</span>
            </div>
        )
    }
}