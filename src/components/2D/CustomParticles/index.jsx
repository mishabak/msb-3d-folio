import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";

import { loadSlim } from "@tsparticles/slim";
import { PARTICLES_PROPERTY } from "../../../util/constants";
export default function Index({ id = 1 }) {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  return (
    init && (
      <Particles
        id={`tsparticles_${id}`}
        options={PARTICLES_PROPERTY}
      />
    )
  );
}
