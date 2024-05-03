import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  username: Yup.string().required("Enter Username"),
  email: Yup.string().email("Enter a valid Email").required("Enter Email"),
  password: Yup.string().min(6, "Password must be at least 6 characters").required("Enter Password"),
  confirmpass: Yup.string().oneOf([Yup.ref("password"), null], "Passwords must match").required("Enter Confirm Password"),
});

const ReactFormik = () => {
  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <Formik
      initialValues={{ username: "", email: "", password: "", confirmpass: "" }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ handleSubmit, handleChange, values }) => (
        <div>
          <div>
            <label htmlFor="username">Username</label>
            <Field type="text" id="username" name="username" onChange={handleChange} value={values.username} />
            <ErrorMessage name="username" component="div" />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <Field type="email" id="email" name="email" onChange={handleChange} value={values.email} />
            <ErrorMessage name="email" component="div" />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <Field type="password" id="password" name="password" onChange={handleChange} value={values.password} />
            <ErrorMessage name="password" component="div" />
          </div>
          <div>
            <label htmlFor="confirmpass">Confirm Password</label>
            <Field type="password" id="confirmpass" name="confirmpass" onChange={handleChange} value={values.confirmpass} />
            <ErrorMessage name="confirmpass" component="div" />
          </div>
          <button onClick={handleSubmit}>Submit</button>
        </div>
      )}
    </Formik>
  );
};

export default ReactFormik;
