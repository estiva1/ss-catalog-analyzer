import { defaultOperators, toFullOption } from "react-querybuilder";
import { musicalInstruments } from "./musical-instruments";

export const validator = (r) => !!r.value;

export const fields = [
  {
    name: "asin",
    label: "ASIN",
    placeholder: "Enter ASIN",
    validator,
  },
  {
    name: "parentAsin",
    label: "Parent ASIN",
    placeholder: "Enter Parent ASIN",
    //defaultOperator: "beginsWith",
    validator,
  },
  { name: "favorite", label: "Favorite", inputType: "number", validator },
  {
    name: "productId",
    label: "Product ID",
    placeholder: "Enter Product ID",
    //valueEditorType: "checkbox",
    //operators: defaultOperators.filter((op) => op.name === "="),
    //defaultValue: false,
    validator
  },
  {
    name: "upc",
    label: "UPC",
    placeholder: "Enter UPC",
    // valueEditorType: "select",
    // values: musicalInstruments,
    // defaultValue: "Cowbell",
    // operators: defaultOperators.filter((op) => op.name === "="),
    validator
  },
//   {
//     name: "alsoPlays",
//     label: "Also plays",
//     valueEditorType: "multiselect",
//     values: musicalInstruments,
//     defaultValue: "More cowbell",
//     operators: defaultOperators.filter((op) => op.name === "in"),
//   },
//   {
//     name: "gender",
//     label: "Gender",
//     operators: defaultOperators.filter((op) => op.name === "="),
//     valueEditorType: "radio",
//     values: [
//       { name: "M", label: "Male" },
//       { name: "F", label: "Female" },
//       { name: "O", label: "Other" },
//     ],
//   },
//   { name: "height", label: "Height", validator },
//   { name: "job", label: "Job", validator },
//   { name: "description", label: "Description", valueEditorType: "textarea" },
//   { name: "birthdate", label: "Birth Date", inputType: "date" },
//   { name: "datetime", label: "Show Time", inputType: "datetime-local" },
//   { name: "alarm", label: "Daily Alarm", inputType: "time" },
//   {
//     name: "groupedField1",
//     label: "Grouped Field 1",
//     comparator: "groupNumber",
//     groupNumber: "group1",
//     valueSources: ["field", "value"],
//   },
//   {
//     name: "groupedField2",
//     label: "Grouped Field 2",
//     comparator: "groupNumber",
//     groupNumber: "group1",
//     valueSources: ["field", "value"],
//   },
//   {
//     name: "groupedField3",
//     label: "Grouped Field 3",
//     comparator: "groupNumber",
//     groupNumber: "group1",
//     valueSources: ["field", "value"],
//   },
//   {
//     name: "groupedField4",
//     label: "Grouped Field 4",
//     comparator: "groupNumber",
//     groupNumber: "group1",
//     valueSources: ["field", "value"],
//   },
].map(toFullOption);
