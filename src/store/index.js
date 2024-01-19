import { proxy } from "valtio";

const state = proxy({
     intro: true,
     color: '#EFBD48',
     isLogoTexture: true,
     isFullTexture: false,
     logoDecal: './my-image.png',
     fullDecal: './my-image.png'
});

export default state;