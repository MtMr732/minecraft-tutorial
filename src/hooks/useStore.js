import { nanoid } from "nanoid";
import create from "zustand";

export const useStore = create((set) => ({
  texture: "dirt",
  cubes: [
    {
      key: nanoid(),
      pos: [2, 0.5, 0],
      texture: "dirt",
    },
    {
      key: nanoid(),
      pos: [1, 0.5, 0],
      texture: "wood",
    },
  ],
  addCube: (x, y, z) => {
    set((prev) => ({
      cubes: [
        ...prev.cubes,
        { key: nanoid(), pos: [x, y, z], texture: prev.texture },
      ],
    }));
  },
  removeCube: (x, y, z) => {
    console.log("removeCubes", x, y, z);
    set((prev) => ({
      cubes: prev.cubes.filter((cube) => {
        const [X, Y, Z] = cube.pos;
        return X !== x || Y !== y || Z !== z;
      }),
    }));
  },
  setTexture: (texture) => {
    set(() => ({
      texture,
    }));
  },
  saveWorld: () => {},
  resetWorld: () => {},
}));
