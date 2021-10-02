import React, { useContext } from "react";
import { SettingsContext } from '../context/context'
import { FormGroup } from '@blueprintjs/core';
import useForm from '../hooks/form';


export default function FormSettingPage() {
  const settings = useContext(SettingsContext);
  const { handleChange, handleSubmit } = useForm(saveSetting);

// this function update the number of items state which declear at setting context; so the setting argument is NumberOfItems,show,and DefaultSort
  function saveSetting(setting) {
    settings.setNumberOfItems(setting.number);
  }

  return (
    <form onSubmit={handleSubmit} style={{ width: "400px", margin: "20px" }}>
      <h2> CHANGE SETTING ✍:</h2>
      <FormGroup
        label="SHOW COMPLETED WORK"
      >
        <select name="show" >
          <option onClick={settings.setShow(true)} value={true}>TRUE ✔ </option>
          <option onClick={settings.setShow(false)} value={false}>FALSE❌</option>
        </select>
      </FormGroup>

      <FormGroup
        label="NUMBER OF TASKS PER PAGE"
      >
        <input onChange={handleChange} name="numberOfItems" type="number" placeholder="numberOfItems" style={{ width: "300px", height: "35px" }} />
      </FormGroup>

      <br />
      <br />
      <button type="submit">Apply Setting </button>
    </form>
  )
}