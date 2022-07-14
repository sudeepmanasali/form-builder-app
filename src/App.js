import logo from "./logo.svg";
import { useEffect, useState } from "react";
import "./App.css";
import { Formio, FormBuilder, Form, Components, Builders } from "formiojs";
import axios from "axios";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
function App() {
  let formio = new FormBuilder(document.getElementById("builder"));
  console.log(formio);
  formio.build().then((form) => {
    console.log(form);
    form.on("change", function (e) {
      console.log(form);
      // Formio.createForm(document.getElementById("formio"), form.schema);
    });
  });

  let fo = new Form(document.getElementById("formio"), {
    display: "form",
    settings: {
      pdf: {
        id: "1ec0f8ee-6685-5d98-a847-26f67b67d6f0",
        src: "https://files.form.io/pdf/5692b91fd1028f01000407e3/file/1ec0f8ee-6685-5d98-a847-26f67b67d6f0",
      },
    },
    components: [
      {
        label: "HTML",
        tag: "H2",
        className: "text-primary text-center font-bold",
        attrs: [
          {
            attr: "",
            value: "",
          },
        ],
        content: "Daffodil Health",
        refreshOnChange: false,
        key: "html",
        type: "htmlelement",
        input: false,
        tableView: false,
      },
      {
        label: "Username",
        labelPosition: "left-left",
        placeholder: "Enter username",
        tableView: true,
        validate: {
          required: true,
          customMessage: "Please enter the username",
          minLength: 1,
        },
        key: "username",
        type: "textfield",
        input: true,
      },
      {
        label: "Phone Number",
        labelPosition: "left-left",
        placeholder: "Enter phone number",
        mask: false,
        tableView: false,
        delimiter: false,
        requireDecimal: false,
        inputFormat: "plain",
        truncateMultipleSpaces: false,
        validate: {
          required: true,
          customMessage: "Please enter the phone number",
        },
        key: "phoneNumber",
        type: "number",
        input: true,
      },
      {
        label: "Gender",
        labelPosition: "left-left",
        widget: "choicesjs",
        placeholder: "Select Gender",
        tableView: true,
        data: {
          values: [
            {
              label: "Male",
              value: "male",
            },
            {
              label: "Female",
              value: "female",
            },
          ],
        },
        validate: {
          required: true,
          customMessage: "Please select gender",
        },
        key: "gender",
        type: "select",
        input: true,
      },
      {
        label: "Password",
        labelPosition: "left-left",
        placeholder: "Enter password",
        tableView: false,
        case: "mixed",
        validate: {
          required: true,
          customMessage: "Please enter password",
          minLength: 1,
        },
        key: "password",
        type: "password",
        input: true,
        protected: true,
      },
      {
        label: "Columns",
        columns: [
          {
            components: [
              {
                label: "Place",
                labelPosition: "left-left",
                placeholder: "Enter Place",
                tableView: true,
                key: "place",
                type: "textfield",
                input: true,
              },
            ],
            offset: 0,
            push: 0,
            pull: 0,
            size: "md",
            currentWidth: 4,
            width: 4,
          },
          {
            components: [
              {
                label: "Country",
                labelPosition: "left-left",
                placeholder: "Enter Country",
                tableView: true,
                validate: {
                  required: true,
                  customMessage: "Please enter country name",
                },
                key: "country",
                type: "textfield",
                input: true,
              },
            ],
            offset: 0,
            push: 0,
            pull: 0,
            size: "md",
            currentWidth: 4,
            width: 4,
          },
          {
            components: [
              {
                label: "State",
                labelPosition: "left-left",
                placeholder: "Enter State",
                tableView: true,
                validate: {
                  required: true,
                  customMessage: "Please enter the state name",
                },
                key: "state",
                type: "textfield",
                input: true,
              },
            ],
            size: "md",
            offset: 0,
            push: 0,
            pull: 0,
            width: 4,
            currentWidth: 4,
          },
        ],
        key: "columns",
        type: "columns",
        input: false,
        tableView: false,
      },
      {
        type: "button",
        label: "Submit",
        key: "submit",
        disableOnInvalid: true,
        input: true,
        tableView: false,
      },
      {
        label: "Login",
        showValidations: false,
        tableView: false,
        key: "login",
        customConditional: "console.log(data)",
        type: "button",
        input: true,
        saveOnEnter: false,
      },
    ],
  });
  fo.build().then((form) => {
    console.log(form);
  });

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/form"
            element={
              <div>
                {/* <div id="builder"></div>

                <div
                  id="formio"
                  style={{ width: "80%", margin: "20px auto" }}
                ></div>

                <button id="submitform">submitform</button> */}
              </div>
            }
          ></Route>

          <Route
            path="/home"
            element={
              <div>
                Hello
                <Link to="/form">About</Link>
              </div>
            }
          ></Route>
          <Route path="/" element={<div>Home</div>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
