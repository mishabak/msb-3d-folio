import { CuboidCollider, RigidBody } from "@react-three/rapier";

function TableCollider() {
  return (
    <RigidBody type="fixed" colliders={false}>
      {[
        { p: [0, 0.1, -2.2], r: [0, 0, 0], a: [7.4, 1.4, 1.3] },
        { p: [5.4, 0.1, 1.3], r: [0, 0.504, 0], a: [0.3, 1.4, 2.6] },
        { p: [7.1, 0.1, 1.2], r: [0, -0.1, 0], a: [0.1, 1.4, 2.2] },
        { p: [-5.4, 0.1, 1.3], r: [0, -0.504, 0], a: [0.3, 1.4, 2.6] },
        { p: [-7.1, 0.1, 1.2], r: [0, 0.1, 0], a: [0.1, 1.4, 2.2] },
      ].map(({ p, r, a }, idx) => (
        <CuboidCollider key={idx} position={p} rotation={r} args={a} />
      ))}
    </RigidBody>
  );
}

export default TableCollider;
