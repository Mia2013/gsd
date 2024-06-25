import * as yup from "yup";

export const validationMessages = {
  name: {
    empty: "Kérem írja be a nevét",
  },
  email: {
    empty: "Kérem írja be az e-mail címét",
    notEmail: "Nem megfelelő e-mail formátum",
  },
  phoneNumber: {
    empty: "Kérem írja be a telefonszámát",

    minLength: "A telefonszámnak legalább 6 karakter hosszúnak kell lennie",
  },
  message: {
    empty: "Kérem ne hagyja üresen az üzenet mezőt",
  },
  address: {
    empty: "Kérem írja be a címét",
  },
  gdpr: {
    empty: "Kérem fogadja el az adatvédelmi tájékoztatót"
  }
};

export const schema = yup.object().shape({
  name: yup.string().required(validationMessages.name.empty),
  email: yup.string().email(validationMessages.email.notEmail).required(validationMessages.email.empty),
  phoneNumber: yup
    .string()
    .min(6, validationMessages.phoneNumber.minLength)

    // .matches(/((?:\+?3|0)6)(?:-|\()?(\d{1,2})(?:-|\))?(\d{3})-?(\d{3,4})/, {
    //   message: "Nem megfelelő telefonszám formátum",
    //   excludeEmptyString: false,
    // })
    .required(validationMessages.phoneNumber.empty),
  address: yup.string().required(validationMessages.address.empty),
  message: yup.string().required(validationMessages.message.empty),
  gdpr: yup.boolean().oneOf([true],validationMessages.gdpr.empty).required(validationMessages.gdpr.empty),
});