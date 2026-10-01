import Image from "next/image";
import dimensions from "./asset-dimensions.json";
export function FigmaIcon({ file }: { file: string }) {
  const size = dimensions[file as keyof typeof dimensions];
  if (!size) throw new Error(`Unknown Figma asset: ${file}`);
  return <Image src={`/figma/dashboard/${file}`} alt="" width={size.width} height={size.height} loading="eager" unoptimized className="figma-native-asset" />;
}
