import Image from "next/image";
const assets = {
  shield: ["5f313.svg", 10.3148, 10.9355], email: ["df4c0.svg", 14, 10.5], lock: ["d945d.svg", 12.25, 14],
  eye: ["9f38e.svg", 17.5078, 14.0078], project: ["986f7.svg", 15.7521, 14], chevron: ["11950.svg", 10.5, 6],
  arrow: ["05f5b.svg", 10.5, 9], key: ["fe62b.svg", 12, 12], badge: ["4a28f.svg", 10.5, 10.5],
  support: ["894ef.svg", 12, 12], operations: ["c8e5b.svg", 13.5, 10.5], compliance: ["6c74e.svg", 9.625, 11],
} as const;
export function LoginIcon({ name }: { name: keyof typeof assets }) {
  const [file, width, height] = assets[name];
  return <Image className="login-icon" src={`/figma/login/${file}`} alt="" width={width} height={height} unoptimized />;
}
