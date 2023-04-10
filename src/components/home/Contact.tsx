import styles from "@/style";
import { TypingText } from "./TypingText";
import { Formik, Field, ErrorMessage, Form } from "formik";
import * as Yup from "yup";
import { Isuscriber } from "@/models/Suscriber";

export default function Contact() {
  const initialValues: Isuscriber = {
    name: "",
    email: "",
    budget: 0,
    message: "",
  };
  return (
    <section className={`bg-light h-[100vh] ${styles.flexCenter}`} id="contact">
      <div className={`${styles.paddings}`}>
        <div
          className={`${styles.innerWidth} ${styles.flexColCenter} gap-12 mx-auto`}
        >
          <TypingText title="Any proyect?" />
          <Formik
            initialValues={initialValues}
            validationSchema={Yup.object({
              name: Yup.string()
                .max(100, "It would be less than 100 characters")
                .required("We have to know, who you are"),
              email: Yup.string()
                .matches(
                  /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                  "Your email is important, make sure write it correctly"
                )
                .required("We need a way to contact you"),
              budget: Yup.number().required(
                "Is necessary to know the budget you have for"
              ),
              message: Yup.string(),
            })}
            onSubmit={(values, { resetForm }) => {
              fetch("http://localhost:3000/api/suscribe", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(values),
              })
                .then((res) => res.json())
                .then((data) => {
                  console.log(data);
                  resetForm();
                })
                .catch((err) => console.log(err));
              // console.log(values);
            }}
          >
            <Form
              className={`${styles.flexColCenter} gap-6 w-full md:w-[50vw]`}
            >
              <label className="w-full max-w-xl">
                <Field
                  type="text"
                  name="name"
                  placeholder="Name *"
                  className="px-2 py-3 w-full outline-0 focus:shadow-lg focus:placeholder:text-secondary placeholder:text-primary border-b-2 border-primary focus:border-secondary text-primary focus:text-secondary focus:bg-primary"
                />
                <span className="text-red-600 text-xs">
                  <ErrorMessage name="name" />
                </span>
              </label>

              <label className="w-full max-w-xl">
                <Field
                  type="email"
                  name="email"
                  placeholder="Email *"
                  className="px-2 py-3 w-full outline-0 focus:shadow-lg focus:placeholder:text-secondary placeholder:text-primary border-b-2 border-primary focus:border-secondary text-primary focus:text-secondary focus:bg-primary"
                />
                <span className="text-red-600 text-xs">
                  <ErrorMessage name="email" />
                </span>
              </label>

              <label className="w-full max-w-xl">
                <Field
                  as="select"
                  name="budget"
                  className="px-2 py-3 w-full outline-0 focus:shadow-lg focus:placeholder:text-secondary placeholder:text-primary border-b-2 border-primary focus:border-secondary text-primary focus:text-secondary focus:bg-primary"
                  multiple={false}
                >
                  <option disabled defaultChecked={true}>
                    Budget *
                  </option>
                  <option value="3000">Less than 3k</option>
                  <option value="6000">Between 4k - 6k</option>
                  <option value="12000">Between 7k - 12k</option>
                  <option value="20000">More than 20k</option>
                </Field>
                <span className="text-red-600 text-xs">
                  <ErrorMessage name="budget" />
                </span>
              </label>

              <label className="w-full max-w-xl">
                <Field
                  as="textarea"
                  name="message"
                  placeholder="Tell me about you proyect"
                  className="px-2 py-3 w-full outline-0 focus:shadow-lg focus:placeholder:text-secondary placeholder:text-primary border-b-2 border-primary focus:border-secondary text-primary focus:text-secondary focus:bg-primary"
                  rows={4}
                />
              </label>
              <button
                type="submit"
                className={`text-primary text-lg md:text-2xl bg-secondary py-2 px-6 rounded-xl hover:shadow-xl hover:bg-secondary-contrast `}
              >
                enviar
              </button>
            </Form>
          </Formik>
        </div>
      </div>
    </section>
  );
}
