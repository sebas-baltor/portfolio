import styles from "@/style";
import { TypingText } from "../const/TypingText";
import { Formik, Field, ErrorMessage, Form } from "formik";
import * as Yup from "yup";
import { Isuscriber } from "@/utils/interfaces";
import LoadingModal from "../LoadingModal";
import { useState } from "react";
import { IloadingModalState } from "@/utils/interfaces";

export default function Contact() {
  const initialValues: Isuscriber = {
    name: "",
    email: "",
    budget: 0,
    message: "",
  };
  const [loadingState, setLoadingState] = useState<IloadingModalState>({
    isLoading: false,
    status: null,
  });
  const [errorForm, setErrorForm] = useState<string>("");
  return (
    <section className={`min-h-screen ${styles.flexCenter}`} id="contact">
      <LoadingModal
        isLoading={loadingState.isLoading}
        status={loadingState.status}
      />
      <div
        className={`w-full ${styles.paddings} ${styles.innerWidth} ${styles.flexCenter}`}
      >
        <Formik
          initialValues={initialValues}
          validationSchema={Yup.object({
            name: Yup.string()
              .max(100, "It would be less than 100 characters")
              .required("Who you are?"),
            email: Yup.string()
              .matches(
                /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                "Your email is important, make sure write it correctly"
              )
              .required("I need a way to contact you"),
            budget: Yup.number().required(
              "Is necessary to know the budget you have for"
            ),
            message: Yup.string(),
          })}
          onSubmit={async (values, { resetForm }) => {
            setLoadingState({ isLoading: true, status: null });
            await fetch("http://localhost:3000/api/suscribe", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(values),
            })
              .then((res) => res.json())
              .then((data) => {
                console.log(data);
                setLoadingState({ isLoading: true, status: data.status });
                if (data.status < 300) {
                  resetForm();
                } else {
                  setErrorForm(data.message);
                }
              });
            // .catch((err) => {
            //   setLoadingState({ isLoading: true, status: 500 });
            // });
            setTimeout(() => {
              setLoadingState({ isLoading: false, status: null });
            }, 3000);
          }}
        >
          <Form
            className={`${styles.flexColCenter} gap-12 w-full md:w-[50vw] p-8 bg-gradient-to-br from-gray-blue-bot to-gray-blue-top rounded-2xl shadow-2xl`}
          >
            <TypingText title="Any proyect?" />

            <div className={`${styles.flexColCenter} gap-6 w-full`}>
              <label className="w-full max-w-xl">
                <Field
                  type="text"
                  name="name"
                  placeholder="Name *"
                  className="px-4 py-2 w-full rounded-lg outline-0 bg-gray-200/5 placeholder:text-gray-500 text-gray-400 border border-gray-200/5"
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
                  className="px-4 py-2 w-full rounded-lg outline-0 bg-gray-200/5 placeholder:text-gray-500 text-gray-400 border border-gray-200/5"
                />
                <span className="text-red-600 text-xs">
                  <ErrorMessage name="email" />
                </span>
              </label>

              <label className="w-full max-w-xl">
                <Field
                  as="select"
                  name="budget"
                  className="px-4 py-2 w-full rounded-lg outline-0 bg-gray-200/5 placeholder:text-gray-500 text-gray-400 border border-gray-200/5"
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
                  className="px-4 py-2 w-full rounded-lg outline-0 bg-gray-200/5 placeholder:text-gray-500 text-gray-400 border border-gray-200/5"
                  rows={4}
                />
              </label>
            </div>
            <button
              type="submit"
              className={`px-3 py-1 rounded-md bg-secondary/80 hover:bg-secondary transition border-2 border-secondary text-primary font-bold`}
            >
              send
            </button>
            {errorForm && (
              <span className="text-red-600 text-xs">{errorForm}</span>
            )}
          </Form>
        </Formik>
      </div>
    </section>
  );
}
