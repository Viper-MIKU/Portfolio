import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

function ParticlesBg() {

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <Particles
      init={particlesInit}
      options={{
        background: {
          color: "#000"
        },
        fpsLimit: 60,
        particles: {
          number: { value: 60 },
          color: { value: "#00e5a0" },
          links: {
            enable: true,
            color: "#00e5a0",
            distance: 150
          },
          move: {
            enable: true,
            speed: 1
          },
          size: {
            value: 3
          }
        }
      }}
      className="absolute top-0 left-0 -z-10"
    />
  );
}

export default ParticlesBg;