import { TextureLoader } from "three";
import { dirtImg, grassImg, glassImg, woodImg, logImg } from "./images";

export const dirtTexture = new TextureLoader(dirtImg);
export const grassTexture = new TextureLoader(grassImg);
export const glassTexture = new TextureLoader(glassImg);
export const woodTexture = new TextureLoader(woodImg);
export const logTexture = new TextureLoader(logImg);
