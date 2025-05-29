import { Curse } from "../models/curseModel";

export function sendCurse(name, email, type) {
  const curse = new Curse(name, email, type);
  console.log("Maldição enviada:", curse);
  // Aqui poderia ir uma chamada de API
  return curse;
}
