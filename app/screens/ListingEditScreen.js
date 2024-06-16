import React from "react";
import Screen from "../components/Screen";
import {
  AppForm,
  AppFormField,
  SubmitButton,
  AppFormPicker,
} from "../components/forms";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().label("Title").min(1),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  category: Yup.string().required().nullable().label("Category"),
  description: Yup.string().label("Description"),
});

function ListingEditScreen(props) {
  const categories = [
    { label: "Furniture", value: 1 },
    { label: "Clothing", value: 2 },
    { label: "Camera", value: 3 },
  ];
  return (
    <Screen>
      <AppForm
        initialValues={{
          title: "",
          price: "",
          category: null,
          description: "",
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField
          autoCapitalize
          autoCorrect
          name="title"
          placeholder="Title"
        />
        <AppFormField
          name="price"
          placeholder="Price"
          keyboardType="numeric"
          maxLength={8}
          InputModeOptions="numeric"
        />
        <AppFormPicker
          items={categories}
          name="category"
          placeholder="Category"
        />
        <AppFormField
          autoCorrect
          name="description"
          placeholder="Description"
          multiline
          maxLength={255}
          numberOfLines={3}
        />
        <SubmitButton title="Post" />
      </AppForm>
    </Screen>
  );
}

export default ListingEditScreen;
