import React, {Component} from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './styles.scss'

class TextBox extends Component {
    render() {
        const { type, value, id, onChangeHandler, placeholder, classNames, title } = this.props;
        return(
            <div>
                <label className={"field a-field a-field_a1 page__field " + (classNames ? classNames : '')}>
                    <input type={type} value={value}
                           className="field__input"
                           onChange={(e) => onChangeHandler(e)}
                           placeholder={placeholder}
                           required />
                  <span className="field__label-wrap">
                    <span className="field__label">{title}</span>
                  </span>
                </label>
            </div>
        )
    }
}

export default withStyles(s)(TextBox);