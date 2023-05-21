import React, { useState } from "react"
import Button from "@/web/components/Button.jsx"
import Form from "@/web/components/Form.jsx"
import FormField from "@/web/components/FormField.jsx"
import Page from "@/web/components/Page"
import axios from "axios"
import * as yup from "yup"

const OptionBox = (props) => {
  const { name, option, checked, onChange } = props

  return (
    <div>
      <label>
        <input
          type="checkbox"
          name={name}
          checked={checked}
          onChange={onChange}
        />
        {option} ({name})
      </label>
    </div>
  )
}

const initialValues = {
  target: "",
  optionScan: false,
  maxRetries: "",
  scanDelay: "",
  maxRate: "",
}

const validationSchema = yup.object().shape({
  target: yup
    .string()
    .matches(
      /^(?:[0-9]{1,3}\.){3}[0-9]{1,3}$/,
      "Veuillez entrer une adresse IPv4 valide"
    )
    .required("Veuillez entrer une adresse IP"),
})

const Scanpage = () => {
  const [optionScan, setOptionScan] = useState(initialValues.optionScan)

  const handleOptionScanChange = (event) => {
    setOptionScan(event.target.checked)
  }

  const handleSubmit = async (values) => {
    try {
      await axios.post("http://localhost:4000/nmap", values)
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(err)
    }
  }

  return (
    <Page title="Scan">
      <Form
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <FormField name="target" />

        <OptionBox
          name="optionScan"
          option="Option Scan (sS)"
          checked={optionScan}
          onChange={handleOptionScanChange}
        />

        <OptionBox name="maxRetries" option="Max Retries" />
        <OptionBox name="scanDelay" option="Scan Delay" />
        <OptionBox name="maxRate" option="Max Rate" />

        <Button type="submit" className="mt-4">
          Scanner
        </Button>
      </Form>
    </Page>
  )
}

export default Scanpage
