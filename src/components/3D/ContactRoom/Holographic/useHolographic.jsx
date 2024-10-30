import { useSelector } from "react-redux";
import { selector_rooms } from "../../../../features/js/selector";
import { useEffect, useMemo, useRef } from "react";
import { CustomParticles } from "../../../2D";
import { useSpring } from "@react-spring/three";

function useHolographic({ height, id }) {
  const currentRoom = useSelector(selector_rooms.currentRoom);
  const childRef = useRef(null);

  const [parentSpring, parentApi] = useSpring(() => ({
    height: 0,
    opacity: 0,
  }));

  const [childSpring, childApi] = useSpring(() => ({
    display: "none",
  }));

  useEffect(() => {
    parentApi.start({
      height: currentRoom === "floor_5" ? height : 0,
      opacity: currentRoom === "floor_5" ? 1 : 0,
      delay: currentRoom === "floor_5" ? 1800 : 500,
      config: { duration: 600 },
    });

    childApi.start({
      display: "none",
    });
  }, [currentRoom, height]);

  const Particles = useMemo(() => <CustomParticles id={id} />, [id]);

  function videoCallback() {
    childApi.start({
      display: "block",
      config: { duration: 600 },
    });
  }
  return {
    Particles,
    parentSpring,
    childSpring,
    childRef,
    currentRoom,
    videoCallback,
  };
}

export default useHolographic;
