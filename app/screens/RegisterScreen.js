import React from "react";
import Screen from "../components/Screen";
import { AppForm, AppFormField, SubmitButton } from "../components/forms";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});
function RegisterScreen(props) {
  return (
    <Screen>
      <AppForm
        initialValues={{ name: "", email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField
          autoCapitalize
          autoCorrect={false}
          iconName="account"
          name="name"
          placeholder="Name"
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          iconName="email"
          keyboardType="email-address"
          name="email"
          placeholder="Email"
          textContentType="emailAddress"
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          iconName="lock"
          name="password"
          placeholder="Password"
          secureTextEntry
          textContentType="password"
        />
        <SubmitButton title="Register" />
      </AppForm>
    </Screen>
  );
}

export default RegisterScreen;
