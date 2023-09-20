import React from 'react';
import { RenderIf } from '../shared';

interface IProps extends React.HTMLProps<HTMLSelectElement> {
  disabledValue?: string;
  altOptionLabel?: string;
  optionLabel?: string;
  optionValue?: string;
  options?: Array<any>;
  errors?: any;
  touched?: any;
}

const Select = (props: IProps) => {
  const {
    label,
    name = '',
    value,
    onBlur,
    onChange,
    disabledValue,
    className,
    errors = {},
    options,
    altOptionLabel = '',
    optionLabel,
    optionValue,
    style,
    id,
    touched,
    disabled,
  } = props;

  const hasError = (errors[name] && touched[name]) || false;

  return (
    <div className={`voting__app-input-field-con my-2 ${className || ''}`}>
      <RenderIf condition={!!label}>
        <div className="label mb-1">
          <label htmlFor={id}>{label}</label>
        </div>
      </RenderIf>
      <select
        className={`form-select ${value === '' ? 'disabled' : ''}`}
        value={value}
        name={name}
        onBlur={onBlur}
        onChange={onChange}
        style={style}
        disabled={disabled}
      >
        {!!disabledValue && (
          <option disabled value="">
            {disabledValue || 'Choose...'}
          </option>
        )}

        {options &&
          options.map((item: any, index: number) => {
            const setValue = optionValue ? item[optionValue] : item;
            let setLabel = optionLabel ? item[optionLabel] || item[altOptionLabel] : item;

            if (typeof setLabel === 'object') {
              setLabel = JSON.stringify(item);
            } else if (Array.isArray && Array.isArray(setLabel)) {
              setLabel = JSON.stringify(item);
            }

            return (
              <option value={setValue} key={JSON.stringify(item) + index}>
                {setLabel}
              </option>
            );
          })}
      </select>
      <RenderIf condition={hasError}>
        <div>
          <p className="voting__app-text-input-error">{errors[name]}</p>
        </div>
      </RenderIf>
    </div>
  );
};

export default Select;
