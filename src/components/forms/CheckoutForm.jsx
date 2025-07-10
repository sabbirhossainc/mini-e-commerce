import Field from "../common/Field";

const CheckoutForm = () => {
  const errors = {};

  const handleSubmit = () => {
    alert("success");
  };

  return (
    <form onSubmit={handleSubmit}>
      <FieldWrapper>
        <Field error={errors.name}>
          <input
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
        <Field error={errors.email}>
          <input
            id="email"
            type="text"
            name="email"
            className="form-input"
            placeholder="Your Email..."
            aria-label="Mobile Number or Email"
          />
        </Field>
      </FieldWrapper>

      <FieldWrapper>
        <Field error={errors.address}>
          <input
            id="address"
            type="text"
            name="address"
            className="form-input"
            placeholder="Your address..."
            aria-label="address"
          />
        </Field>
      </FieldWrapper>

      <div className="mb-2">
        <button type="submit" className="chekout-button">
          Sign up
        </button>
      </div>
    </form>
  );
};

export default CheckoutForm;

const FieldWrapper = ({ children, className }) => {
  return (
    <div className={className ?? "mb-2 w-full"}>
      <div className="relative">{children}</div>
    </div>
  );
};
