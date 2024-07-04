// Animation handler
import Lottie from "react-lottie";

// Animation Parameters
import { loadingOptions, successOptions } from "./FormAnimationsParam";

const FormSubmitButton = ({isLoading, isSuccessful}) => {
  return (
    <div
              className={`h-12 flex items-center justify-center w-full bg-gradient-to-r ${
                isLoading
                  ? "from-blue-500 to-cyan-500"
                  : isSuccessful
                  ? "from-emerald-400 to-green-500"
                  : "from-blue-500 to-cyan-500"
              }
                  rounded-lg p-[1px] mt-3`}
            >
              <button
                className={`${
                  isLoading ? "!bg-opacity-0" : isSuccessful ? "!bg-opacity-0" : ""
                } flex justify-center items-center w-full h-full bg-neutral-800 px-6 rounded-lg bg-opacity-95 font-bold duration-300 hover:bg-opacity-0`}
              >
                {/*  */}
                <div className="bg-transparent">
                  {isLoading ? (
                    <div className="h-full">
                      <Lottie
                        options={loadingOptions}
                        height={70}
                        direction={-1}
                      />
                    </div>
                  ) : isSuccessful ? (
                    <div className="h-full">
                      <Lottie options={successOptions} height={48} />
                    </div>
                  ) : (
                    "Submit"
                  )}
                </div>
              </button>
            </div>
  )
}
export default FormSubmitButton