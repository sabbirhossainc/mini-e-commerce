import Field from "../common/Field";

import { LOGIN_ROUTE, REGISTER_ENDPOINT } from "../../consts";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { api } from "../../api/index";
import { useDialog } from "../../hooks";
import CreatedDialog from "../modals/CreatedDialog";
import ToastDialog from "../modals/ToastDialog";

const RegistrationForm = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();

  const [show, setShow] = useState(false);
  const [authSuccess, setAuthSuccess] = useState(false);

  const submitForm = async (formData) => {
    try {
      let response = await api.post(REGISTER_ENDPOINT, formData);

      if (response.status === 201) {
        setAuthSuccess(true);
        navigate(LOGIN_ROUTE);
      }
    } catch ({ response }) {
      setError("root.random", {
        type: "random",
        message: response?.data?.message,
      });
    }
  };

  useDialog({
    trigger: authSuccess,
    destination: null,
    jsx: <CreatedDialog />,
  });

  useDialog({
    trigger: errors?.root?.random?.message,
    destination: null,
    jsx: <ToastDialog message={errors?.root?.random?.message} type="error" />,
  });

  return (
    <form onSubmit={handleSubmit(submitForm)}>
      <FieldWrapper>
        <Field error={errors.email}>
          <input
            {...register("email", {
              required: "Mobile Number or Email ID is Required",
            })}
            id="email"
            type="text"
            name="email"
            className="form-input"
            placeholder="Mobile Number or Email"
            aria-label="Mobile Number or Email"
          />
        </Field>
      </FieldWrapper>

      <FieldWrapper>
        <Field error={errors.name}>
          <input
            {...register("name", { required: "Name is Required" })}
            id="name"
            type="text"
            name="name"
            className="form-input"
            placeholder="Full Name"
            aria-label="Full Name"
          />
        </Field>
      </FieldWrapper>

      <FieldWrapper>
        <Field>
          <input
            {...register("username")}
            id="username"
            type="text"
            name="username"
            className="form-input"
            placeholder="Username"
            aria-label="Username"
          />
        </Field>
      </FieldWrapper>

      <FieldWrapper className="mb-3">
        <Field error={errors.password}>
          <input
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Your password must be at least 8 characters",
              },
            })}
            id="password"
            type={show ? "text" : "password"}
            name="password"
            className="form-input"
            placeholder="Password"
            aria-label="Password"
          />
          <button
            onClick={() => setShow((prev) => !prev)}
            type="button"
            className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-500 text-xs"
          >
            Show
          </button>
        </Field>
      </FieldWrapper>

      <div className="mb-2">
        <button type="submit" className="signup-button">
          Sign up
        </button>
      </div>

      <div className="or-separator">OR</div>

      <div className="mb-4">
        <button type="submit" className="signup-button" disabled>
          Sign up with Google
        </button>
      </div>
    </form>
  );
};

export default RegistrationForm;

const FieldWrapper = ({ children, className }) => {
  return (
    <div className={className ?? "mb-2"}>
      <div className="relative">{children}</div>
    </div>
  );
};
