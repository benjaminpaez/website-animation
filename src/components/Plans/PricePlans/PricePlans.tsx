import MotionTransition from "@/components/MotionTransition/MotionTransition";
import { dataPricePlans } from "./PricePlans.data";
import { PricesPlansProps } from "./PricePlans.types";

export default function PricePlans(props: PricesPlansProps) {
  const { isMonthly } = props;
  return (
    <div id="pricing" className="grid gap-8 my-5 md:grid-cols-3">
      {dataPricePlans.map(
        ({ id, name, description, prices, features, primary }) => (
          <MotionTransition key={id}>
            <div className="p-5 shadow-lg rounded-xl shadow-blue-200">
              <h4 className="mb-5 text-3xl font-bold text-center">{name}</h4>
              <p className="text-center text-base">{description}</p>
              <div className="flex items-end justify-center my-7">
                <span
                  className={`text-2xl font-black ${
                    isMonthly ? "text-pink-500" : "text-blue-700"
                  }`}
                >
                  {isMonthly ? prices[0].price : prices[1].price}
                </span>
                <span className="ml-3 text-xl font-extrabold text-slate-400">
                  {isMonthly ? prices[0].name : prices[1].name}
                </span>
              </div>
              {features.map(({ id, name, active }) => (
                <div key={id} className="flex justify-evently my-4 ml-3">
                  {active ? <CheckIcon /> : <CloseIcon />}
                  <span className="ml-3 text-base">{name}</span>
                </div>
              ))}
              <div className="my-5 text-center">
                <button
                  className={`px-6 py-2 rounded-xl border-2 text-base ${
                    primary ? " text-white" : "text-white"
                  } ${isMonthly ? "bg-pink-500 " : "bg-blue-700 "}`}
                >
                  Obtener plan
                </button>
              </div>
            </div>
          </MotionTransition>
        )
      )}
    </div>
  );
}

const CheckIcon = () => {
  return (
    <svg
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="w-5 h-5 fill-green-400"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
      />
    </svg>
  );
};

const CloseIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="w-5 h-5 fill-red-500"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
};
