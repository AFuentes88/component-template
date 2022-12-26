import {
  Streamlit,
  StreamlitComponentBase,
  withStreamlitConnection,
} from 'streamlit-component-lib'

import * as React from 'react';
import { useState } from 'react';
import { Select, Checkbox, Form } from 'antd';
import { Callbacks } from 'rc-field-form/lib/interface';

interface State {
  options: string
  onChange: Callbacks
}

const { Option } = Select;

interface Props {
  options: string[];
  onChange: (selectedOptions: string[]) => void;
}

const DropdownWidget: React.FC<Props> = ({ options, onChange }) => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const handleChange = (selectedOptions: string[]) => {
    setSelectedOptions(selectedOptions);
    onChange(selectedOptions);
  };

  return (
    <Form.Item>
      <Select
        mode="multiple"
        style={{ width: '100%' }}
        placeholder="Please select"
        onChange={handleChange}
      >
        {options.map((option) => (
          <Option key={option} value={option}>
            {option}
          </Option>
        ))}
      </Select>
      <Checkbox
        indeterminate={selectedOptions.length > 0 && selectedOptions.length < options.length}
        onChange={(e) => {
          if (e.target.checked) {
            handleChange(options);
          } else {
            handleChange([]);
          }
        }}
        checked={selectedOptions.length === options.length}
      >
        Select all
      </Checkbox>
    </Form.Item>
  );
};

export default DropdownWidget;