const { GoogleSpreadsheet } = require("google-spreadsheet")
var fs = require("fs")
const fileOp = require("./txtOperator")
const credentials = require("./pass.json")

const SPREADSHEET_ID = "1qCwrCW8v6hDHPWuvwGsZrUgDrV41or7AQWsgWADCyoo"

async function getRowsFromGoogleSheet() {
  const doc = new GoogleSpreadsheet(SPREADSHEET_ID)
  await doc.useServiceAccountAuth(credentials)
  await doc.loadInfo()
  const sheet = doc.sheetsByIndex[1]
  return await sheet.getRows()
}

async function googleSheetToJSON() {
  const rows = await getRowsFromGoogleSheet()
  const output = { screens: [] }
  const currentScreen = {}

  rows.forEach((row) => {
    let currentScreen = output.screens.find((screen) => screen.name === row.Screen)

  if (!currentScreen) {
    currentScreen = {
      name: row.Screen,
      sections: []
    }
    output.screens.push(currentScreen)
  }

    const section = currentScreen.sections.find((section) => section.name === row.Section_name)

    if (!section) {
      const newSection = {
        name: row.Section_name,
        components: [
          {
            type: row.component_type,
            fields: [
              {
                name: row.Fieldname,
                fieldType: row.FieldType,
                mandatory: row.Mandatory === "Yes",
                placeholder: row.Placeholder,
                regexValidation: row.Validation,
                mapField: row.MappingField,
                regexMsg: row.ErrorMsg,
                masters: row.Masters,
                label: row.label,
                defaultValue: row.Default,
                action: row.Action
                  ? eval(`(${row.Action.replace(/(\w+:)|(\w+ :)/g, (matchedStr) => '"' + matchedStr.substring(0, matchedStr.length - 1) + '":')})`)
                  : "",
              },
            ],
          },
        ],
      }

      currentScreen.sections.push(newSection)
    } else {
      section.components[0].fields.push({
        name: row.Fieldname,
        fieldType: row.FieldType,
        mandatory: row.Mandatory === "Yes",
        placeholder: row.Placeholder,
        regexValidation: row.Validation,
        mapField: row.MappingField,
        masters: row.Masters,
        label: row.label,
        regexMsg: row.ErrorMsg,
        defaultValue: row.Default,
        action: row.Action
          ? eval(`(${row.Action.replace(/(\w+:)|(\w+ :)/g, (matchedStr) => '"' + matchedStr.substring(0, matchedStr.length - 1) + '":')})`)
          : "",
      })
    }
  })
  await fileOp.createFile(JSON.stringify(output), "data.json")

  return output
}

// module.exports = googleSheetToJSON

// googleSheetToJSON()

module.exports = googleSheetToJSON

// const customString = "Onload(\n ShowSection(Signin)|\n HideSection(Signup)| \n HideSection(Verification)|\nCallAPI(Type(GET)|Route(master/)|Success(SetVar(masters))|Error(SetErr(Response.err)))";
// const jsonObject = actionJson(customString);
// console.log(JSON.stringify(jsonObject, null, 2));
