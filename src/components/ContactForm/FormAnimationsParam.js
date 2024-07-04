import animationLoading from "/src/animations/animationLoading.json";
import animationSuccess from "/src/animations/animationSuccess.json";

const loadingOptions = {
    loop: true,
    autoplay: true,
    animationData: animationLoading,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  
  const successOptions = {
    loop: false,
    autoplay: true,
    animationData: animationSuccess,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

export { loadingOptions, successOptions };