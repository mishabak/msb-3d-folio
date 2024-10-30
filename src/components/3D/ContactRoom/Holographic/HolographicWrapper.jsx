import { animated } from "@react-spring/web";
import { Html } from "@react-three/drei";
import Video from "./Video";
import useHolographic from "./useHolographic";
import { Provider } from "react-redux";
import { store } from "../../../../store/redux";

function HolographicWrapper({
  children,
  width,
  height,
  position,
  rotation,
  id,
}) {
  const {
    Particles,
    childRef,
    parentSpring,
    childSpring,
    currentRoom,
    videoCallback,
  } = useHolographic({
    height,
    id,
  });

  return (
    <Html
      occlude="blending"
      scale={0.1}
      className="h-auto w-auto ring-1 ring-black"
      position={position}
      rotation={rotation}
      transform
    >
      <Provider store={store}>
        {Particles}

        <div
          className="flex flex-col justify-end overflow-hidden"
          style={{ width, height }}
        >
          <animated.div
            className="font-holographic p-2 text-[#00e8ff] w-full overflow-hidden"
            style={{
              opacity: parentSpring.opacity,
              height: parentSpring.height,
              background:
                "linear-gradient(0deg, #3ab7ca -1%, #036d7e70 4%, #ffffff00 105%)",
            }}
          >
            {currentRoom === "floor_5" && (
              <Video
                id={id}
                muted={id !== 2}
                className={id !== 2 ? "mt-[150px]" : "first-line:"}
                videoCallback={videoCallback}
              />
            )}
            <animated.div
              style={{ display: childSpring.display }}
              ref={childRef}
              className="w-full h-full"
            >
              {children}
            </animated.div>
          </animated.div>
        </div>
      </Provider>
    </Html>
  );
}

export default HolographicWrapper;
