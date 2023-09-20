import React from 'react';
import { RenderIf } from '../shared';

interface IProps extends React.HTMLProps<HTMLInputElement> {
  type?: React.HTMLInputTypeAttribute;
  errors?: any;
  touched?: any;
  className?: string;
}

const InputField = (props: IProps) => {
  const {
    type,
    id,
    disabled,
    name = 'name',
    onChange,
    onBlur,
    value,
    errors = {},
    touched = {},
    className,
    label,
    placeholder,
    ...restProps
  } = props;

  const hasError = (errors[name] && touched[name]) || false;

  return (
    <div className={`voting__app-input-field-con my-2 ${className || ''}`}>
      <div>
        <RenderIf condition={!!label}>
          <div className="label mb-1">
            <label htmlFor={id}>{label}</label>
          </div>
        </RenderIf>
        <input
          type={type}
          id={id}
          disabled={disabled}
          name={name}
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          placeholder={placeholder}
          {...restProps}
        />
      </div>
      <RenderIf condition={hasError}>
        <div>
          <p className="voting__app-text-input-error">{errors[name]}</p>
        </div>
      </RenderIf>
    </div>
  );
};

export default InputField;
