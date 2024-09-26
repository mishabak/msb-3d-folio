import { Box, useAnimations, useGLTF } from "@react-three/drei";
import { useRef } from "react";

function Room(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('./models/3d-room.glb')
  // const { actions } = useAnimations(animations, group)

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <mesh
          name="Rooms"
          castShadow
          receiveShadow
          geometry={nodes.Rooms.geometry}
          material={nodes.Rooms.material}
          position={[0, 0.2, 0]}
          scale={[2.103, 0.108, 1.618]}
        />
        <group
          name="Door1"
          position={[-3.413, 0.301, 6.536]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={[0.507, 0.59, 0.507]}>
          <mesh
            name="Back_low"
            castShadow
            receiveShadow
            geometry={nodes.Back_low.geometry}
            material={materials.lambert1}
          />
          <mesh
            name="Bricks_low"
            castShadow
            receiveShadow
            geometry={nodes.Bricks_low.geometry}
            material={materials.lambert1}
          />
          <mesh
            name="Metal_low"
            castShadow
            receiveShadow
            geometry={nodes.Metal_low.geometry}
            material={materials.lambert1}
            position={[-1.107, -0.065, -2.332]}
          />
        </group>
        <group
          name="Door2"
          position={[1.861, 0.304, 3.212]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.507, 0.59, 0.507]}>
          <mesh
            name="Back_low001"
            castShadow
            receiveShadow
            geometry={nodes.Back_low001.geometry}
            material={materials.lambert1}
          />
          <mesh
            name="Bricks_low001"
            castShadow
            receiveShadow
            geometry={nodes.Bricks_low001.geometry}
            material={materials.lambert1}
          />
          <mesh
            name="Metal_low001"
            castShadow
            receiveShadow
            geometry={nodes.Metal_low001.geometry}
            material={materials.lambert1}
            position={[-1.107, -0.065, -2.332]}
          />
        </group>
        <group
          name="Door3"
          position={[-3.411, 0.304, -0.084]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.507, 0.59, 0.507]}>
          <mesh
            name="Back_low002"
            castShadow
            receiveShadow
            geometry={nodes.Back_low002.geometry}
            material={materials.lambert1}
          />
          <mesh
            name="Bricks_low002"
            castShadow
            receiveShadow
            geometry={nodes.Bricks_low002.geometry}
            material={materials.lambert1}
          />
          <mesh
            name="Metal_low002"
            castShadow
            receiveShadow
            geometry={nodes.Metal_low002.geometry}
            material={materials.lambert1}
            position={[-1.107, -0.065, -2.332]}
          />
        </group>
        <group
          name="Door5"
          position={[-3.411, 0.304, -6.374]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={[0.507, 0.59, 0.507]}>
          <mesh
            name="Back_low004"
            castShadow
            receiveShadow
            geometry={nodes.Back_low004.geometry}
            material={materials.lambert1}
          />
          <mesh
            name="Bricks_low004"
            castShadow
            receiveShadow
            geometry={nodes.Bricks_low004.geometry}
            material={materials.lambert1}
          />
          <mesh
            name="Metal_low004"
            castShadow
            receiveShadow
            geometry={nodes.Metal_low004.geometry}
            material={materials.lambert1}
            position={[-1.107, -0.065, -2.332]}
          />
        </group>
        <group
          name="Door6"
          position={[6.472, 0.304, -6.374]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={[0.507, 0.59, 0.507]}>
          <mesh
            name="Back_low005"
            castShadow
            receiveShadow
            geometry={nodes.Back_low005.geometry}
            material={materials.lambert1}
          />
          <mesh
            name="Bricks_low005"
            castShadow
            receiveShadow
            geometry={nodes.Bricks_low005.geometry}
            material={materials.lambert1}
          />
          <mesh
            name="Metal_low005"
            castShadow
            receiveShadow
            geometry={nodes.Metal_low005.geometry}
            material={materials.lambert1}
            position={[-1.107, -0.065, -2.332]}
          />
        </group>
        <group
          name="Door7"
          position={[11.066, 0.304, -3.373]}
          rotation={[Math.PI / 2, 0, Math.PI]}
          scale={[0.507, 0.59, 0.507]}>
          <mesh
            name="Back_low006"
            castShadow
            receiveShadow
            geometry={nodes.Back_low006.geometry}
            material={materials.lambert1}
          />
          <mesh
            name="Bricks_low006"
            castShadow
            receiveShadow
            geometry={nodes.Bricks_low006.geometry}
            material={materials.lambert1}
          />
          <mesh
            name="Metal_low006"
            castShadow
            receiveShadow
            geometry={nodes.Metal_low006.geometry}
            material={materials.lambert1}
            position={[-1.107, -0.065, -2.332]}
          />
        </group>
        <group
          name="Door8"
          position={[11.066, 0.304, 3.214]}
          rotation={[Math.PI / 2, 0, Math.PI]}
          scale={[0.507, 0.59, 0.507]}>
          <mesh
            name="Back_low007"
            castShadow
            receiveShadow
            geometry={nodes.Back_low007.geometry}
            material={materials.lambert1}
          />
          <mesh
            name="Bricks_low007"
            castShadow
            receiveShadow
            geometry={nodes.Bricks_low007.geometry}
            material={materials.lambert1}
          />
          <mesh
            name="Metal_low007"
            castShadow
            receiveShadow
            geometry={nodes.Metal_low007.geometry}
            material={materials.lambert1}
            position={[-1.107, -0.065, -2.332]}
          />
        </group>
        <group
          name="Door4"
          position={[-8.455, 0.304, -3.373]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.507, 0.59, 0.507]}>
          <mesh
            name="Back_low003"
            castShadow
            receiveShadow
            geometry={nodes.Back_low003.geometry}
            material={materials.lambert1}
          />
          <mesh
            name="Bricks_low003"
            castShadow
            receiveShadow
            geometry={nodes.Bricks_low003.geometry}
            material={materials.lambert1}
          />
          <mesh
            name="Metal_low003"
            castShadow
            receiveShadow
            geometry={nodes.Metal_low003.geometry}
            material={materials.lambert1}
            position={[-1.107, -0.065, -2.332]}
          />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/3d-room.glb')
export default Room;
