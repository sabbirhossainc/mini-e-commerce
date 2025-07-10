import { useClickOutside } from "../../hooks/useClickOutside";
import { usePortal } from "../../hooks/usePortal";
import CheckoutForm from "../forms/CheckoutForm";

const CheckoutModal = () => {
  const { close } = usePortal();
  const { modalRef } = useClickOutside({ close });

  return (
    <div
      ref={modalRef}
      className="bg-white w-full max-w-sm p-6 rounded-lg shadow-lg relative mx-4 space-y-3"
    >
      <button className="text-left text-gray-500" onClick={() => close()}>
        &#8619; Back
      </button>
      <div className="flex justify-center items-center">
        <CheckoutForm />
      </div>
    </div>
  );
};

export default CheckoutModal;
