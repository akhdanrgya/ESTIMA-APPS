"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

// Native Figma chart layers, kept at their design dimensions and scaled as a group.
function PlotFrame({ width, height, label, children }: { width: number; height: number; label: string; children: React.ReactNode }) {
 const ref = useRef<HTMLDivElement>(null); const [scale, setScale] = useState(1);
 useEffect(() => { const el = ref.current; if (!el) return; const resize = new ResizeObserver(([entry]) => setScale(Math.min(entry.contentRect.width / width, 1.5))); resize.observe(el); return () => resize.disconnect(); }, [width]);
 return <div ref={ref} className="figma-plot" role="img" aria-label={label} style={{ height: height * scale }}><div style={{ width, height, transform: `scale(${scale})`, transformOrigin: "top left", position: "relative" }}>{children}</div></div>;
}

export function SCurvePlot() { return <PlotFrame width={546} height={280} label="Cumulative progress: planned 68.4%, actual 64.2% at week 12; target 100% by week 28."><div className="relative h-full w-full" data-node-id="1:531" data-name="SVG">
            <div className="absolute inset-[8.33%_2.94%_91.67%_5.88%]" data-node-id="1:532" data-name="Vector">
              <div className="absolute inset-[-0.49px_0]">
                <Image src="/figma/dashboard/01582.svg" alt="" width={483.837} height={0.973524} loading="eager" unoptimized className="figma-native-asset" />
              </div>
            </div>
            <div className="absolute inset-[29.17%_2.94%_70.83%_5.88%]" data-node-id="1:533" data-name="Vector">
              <div className="absolute inset-[-0.49px_0]">
                <Image src="/figma/dashboard/01582.svg" alt="" width={483.837} height={0.973524} loading="eager" unoptimized className="figma-native-asset" />
              </div>
            </div>
            <div className="absolute bottom-1/2 left-[5.88%] right-[2.94%] top-1/2" data-node-id="1:534" data-name="Vector">
              <div className="absolute inset-[-0.49px_0]">
                <Image src="/figma/dashboard/01582.svg" alt="" width={483.837} height={0.973524} loading="eager" unoptimized className="figma-native-asset" />
              </div>
            </div>
            <div className="absolute inset-[70.83%_2.94%_29.17%_5.88%]" data-node-id="1:535" data-name="Vector">
              <div className="absolute inset-[-0.49px_0]">
                <Image src="/figma/dashboard/01582.svg" alt="" width={483.837} height={0.973524} loading="eager" unoptimized className="figma-native-asset" />
              </div>
            </div>
            <div className="absolute inset-[91.67%_2.94%_8.33%_5.88%]" data-node-id="1:536" data-name="Vector">
              <div className="absolute inset-[-0.73px_0]">
                <Image src="/figma/dashboard/32a1d.svg" alt="" width={483.837} height={1.46029} loading="eager" unoptimized className="figma-native-asset" />
              </div>
            </div>
            <div className="absolute h-[14.116px] left-[24.97px] top-[16.7px] w-[30.921px]" data-node-id="1:537" data-name="Text">
              <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-normal h-[14.116px] justify-center leading-[0] left-0 not-italic text-[#75777d] text-[12px] top-[7.06px] w-[30.921px]" data-node-id="1:538">
                <p className="leading-[normal]">100%</p>
              </div>
            </div>
            <div className="absolute h-[14.116px] left-[24.97px] top-[75.03px] w-[24.866px]" data-node-id="1:539" data-name="Text">
              <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-normal h-[14.116px] justify-center leading-[0] left-0 not-italic text-[#75777d] text-[12px] top-[7.06px] w-[24.866px]" data-node-id="1:540">
                <p className="leading-[normal]">75%</p>
              </div>
            </div>
            <div className="absolute h-[14.116px] left-[24.97px] top-[133.36px] w-[25.737px]" data-node-id="1:541" data-name="Text">
              <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-normal h-[14.116px] justify-center leading-[0] left-0 not-italic text-[#75777d] text-[12px] top-[7.06px] w-[25.737px]" data-node-id="1:542">
                <p className="leading-[normal]">50%</p>
              </div>
            </div>
            <div className="absolute h-[14.116px] left-[24.97px] top-[191.7px] w-[25.492px]" data-node-id="1:543" data-name="Text">
              <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-normal h-[14.116px] justify-center leading-[0] left-0 not-italic text-[#75777d] text-[12px] top-[7.06px] w-[25.492px]" data-node-id="1:544">
                <p className="leading-[normal]">25%</p>
              </div>
            </div>
            <div className="absolute h-[14.116px] left-[24.97px] top-[250.03px] w-[18.816px]" data-node-id="1:545" data-name="Text">
              <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-normal h-[14.116px] justify-center leading-[0] left-0 not-italic text-[#75777d] text-[12px] top-[7.06px] w-[18.816px]" data-node-id="1:546">
                <p className="leading-[normal]">0%</p>
              </div>
            </div>
            <div className="absolute inset-[6.25%_48.53%_8.33%_51.47%]" data-node-id="1:547" data-name="Vector">
              <div className="absolute inset-[0_-0.73px]">
                <Image src="/figma/dashboard/ead7b.svg" alt="" width={1.46029} height={239.167} loading="eager" unoptimized className="figma-native-asset" />
              </div>
            </div>
            <div className="absolute inset-[0.83%_42.06%_91.67%_45%]" data-node-id="1:548" data-name="Vector">
              <div className="absolute inset-[-2.32%_-0.71%]">
                <Image src="/figma/dashboard/a5e2d.svg" alt="" width={69.6472} height={21.9735} loading="eager" unoptimized className="figma-native-asset" />
              </div>
            </div>
            <div className="absolute h-[12.705px] left-[273.13px] top-[6.16px] w-[118.053px]" data-node-id="1:549" data-name="Text">
              <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-normal h-[12.705px] justify-center leading-[0] left-0 not-italic text-[#b45309] text-[10px] top-[6.35px] w-[118.053px]" data-node-id="1:550">
                <p className="leading-[normal]">CUT-OFF W12 (TODAY)</p>
              </div>
            </div>
            <div className="absolute inset-[16.67%_23.53%_8.33%_76.47%]" data-node-id="1:551" data-name="Vector">
              <div className="absolute inset-[0_-0.49px]">
                <Image src="/figma/dashboard/1faf1.svg" alt="" width={0.973524} height={210} loading="eager" unoptimized className="figma-native-asset" />
              </div>
            </div>
            <div className="absolute h-[12.705px] left-[405.8px] top-[29.49px] w-[75.997px]" data-node-id="1:552" data-name="Text">
              <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-normal h-[12.705px] justify-center leading-[0] left-0 not-italic text-[#75777d] text-[10px] top-[6.35px] w-[75.997px]" data-node-id="1:553">
                <p className="leading-[normal]">MS: Pre-Comm</p>
              </div>
            </div>
            <div className="absolute inset-[6.25%_5.88%_8.33%_94.12%]" data-node-id="1:554" data-name="Vector">
              <div className="absolute inset-[0_-0.49px]">
                <Image src="/figma/dashboard/94f2e.svg" alt="" width={0.973524} height={239.167} loading="eager" unoptimized className="figma-native-asset" />
              </div>
            </div>
            <div className="absolute h-[12.705px] left-[499.44px] top-[1.49px] w-[45.896px]" data-node-id="1:555" data-name="Text">
              <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-normal h-[12.705px] justify-center leading-[0] left-0 not-italic text-[#15803d] text-[10px] top-[6.35px] w-[45.896px]" data-node-id="1:556">
                <p className="leading-[normal]">MS: COD</p>
              </div>
            </div>
            <div className="absolute inset-[8.33%_2.94%_9.17%_5.88%]" data-node-id="1:557" data-name="Vector">
              <div className="absolute inset-[-0.32%_0]">
                <Image src="/figma/dashboard/68d24.svg" alt="" width={483.921} height={232.458} loading="eager" unoptimized className="figma-native-asset" />
              </div>
            </div>
            <div className="absolute inset-[8.33%_2.94%_9.17%_5.88%]" data-node-id="1:558" data-name="Vector">
              <div className="absolute inset-[-0.53%_0_-0.52%_0]">
                <Image src="/figma/dashboard/52129.svg" alt="" width={484.018} height={233.425} loading="eager" unoptimized className="figma-native-asset" />
              </div>
            </div>
            <div className="absolute inset-[8.33%_2.94%_61.83%_51.47%]" data-node-id="1:559" data-name="Vector">
              <div className="absolute inset-[-1.13%_0_-1.1%_-0.13%]">
                <Image src="/figma/dashboard/bb11f.svg" alt="" width={242.486} height={85.3939} loading="eager" unoptimized className="figma-native-asset" />
              </div>
            </div>
            <div className="absolute inset-[38.17%_48.53%_8.33%_5.88%]" data-node-id="1:560" data-name="Vector">
              <Image src="/figma/dashboard/e22af.svg" alt="" width={241.919} height={149.8} loading="eager" unoptimized className="figma-native-asset" />
            </div>
            <div className="absolute inset-[38.17%_48.53%_9.17%_5.88%]" data-node-id="1:561" data-name="Vector">
              <div className="absolute inset-[-0.7%_-0.56%_-1.15%_0]">
                <Image src="/figma/dashboard/fda12.svg" alt="" width={243.42} height={150.195} loading="eager" unoptimized className="figma-native-asset" />
              </div>
            </div>
            <div className="absolute inset-[88.75%_84.85%_8.75%_14.26%]" data-node-id="1:562" data-name="Vector">
              <Image src="/figma/dashboard/e099a.svg" alt="" width={4.68229} height={7} loading="eager" unoptimized className="figma-native-asset" />
            </div>
            <div className="absolute inset-[80.42%_73.09%_17.08%_26.03%]" data-node-id="1:563" data-name="Vector">
              <Image src="/figma/dashboard/caec9.svg" alt="" width={4.68229} height={7} loading="eager" unoptimized className="figma-native-asset" />
            </div>
            <div className="absolute inset-[64.58%_61.32%_32.92%_37.79%]" data-node-id="1:564" data-name="Vector">
              <Image src="/figma/dashboard/caec9.svg" alt="" width={4.68229} height={7} loading="eager" unoptimized className="figma-native-asset" />
            </div>
            <div className="absolute inset-[36.08%_47.79%_59.75%_50.74%]" data-node-id="1:565" data-name="Vector">
              <div className="absolute inset-[-8.34%_-12.47%]">
                <Image src="/figma/dashboard/56060.svg" alt="" width={9.75087} height={13.6137} loading="eager" unoptimized className="figma-native-asset" />
              </div>
            </div>
            <div className="absolute inset-[32.5%_22.64%_57.5%_52.65%]" data-node-id="1:566" data-name="Vector">
              <Image src="/figma/dashboard/1dd1a.svg" alt="" width={131.123} height={28} loading="eager" unoptimized className="figma-native-asset" />
            </div>
            <div className="absolute h-[15.528px] left-[312.93px] top-[97.23px] w-[94.351px]" data-node-id="1:567" data-name="Text">
              <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-normal h-[15.528px] justify-center leading-[0] left-0 not-italic text-[13px] text-white top-[7.76px] w-[94.351px]" data-node-id="1:568">
                <p className="leading-[normal]">64.2% (-4.2%)</p>
              </div>
            </div>
            <div className="absolute inset-[33%_47.94%_63.67%_50.88%]" data-node-id="1:569" data-name="Vector">
              <div className="absolute inset-[-7.82%_-11.7%]">
                <Image src="/figma/dashboard/13493.svg" alt="" width={7.70335} height={10.7936} loading="eager" unoptimized className="figma-native-asset" />
              </div>
            </div>
            <div className="absolute h-[14.116px] left-[31.22px] top-[262.86px] w-[23.601px]" data-node-id="1:570" data-name="Text">
              <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-normal h-[14.116px] justify-center leading-[0] left-0 not-italic text-[#75777d] text-[12px] top-[7.06px] w-[23.601px]" data-node-id="1:571">
                <p className="leading-[normal]">W01</p>
              </div>
            </div>
            <div className="absolute h-[14.116px] left-[85.84px] top-[262.86px] w-[26.392px]" data-node-id="1:572" data-name="Text">
              <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-normal h-[14.116px] justify-center leading-[0] left-0 not-italic text-[#75777d] text-[12px] top-[7.06px] w-[26.392px]" data-node-id="1:573">
                <p className="leading-[normal]">W04</p>
              </div>
            </div>
            <div className="absolute h-[14.116px] left-[148.27px] top-[262.86px] w-[26.073px]" data-node-id="1:574" data-name="Text">
              <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-normal h-[14.116px] justify-center leading-[0] left-0 not-italic text-[#75777d] text-[12px] top-[7.06px] w-[26.073px]" data-node-id="1:575">
                <p className="leading-[normal]">W08</p>
              </div>
            </div>
            <div className="absolute h-[14.116px] left-[273.13px] top-[262.86px] w-[61.848px]" data-node-id="1:576" data-name="Text">
              <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-normal h-[14.116px] justify-center leading-[0] left-0 not-italic text-[#0b1c30] text-[12px] top-[7.06px] w-[61.848px]" data-node-id="1:577">
                <p className="leading-[normal]">W12 (Now)</p>
              </div>
            </div>
            <div className="absolute h-[14.116px] left-[343.37px] top-[262.86px] w-[23.476px]" data-node-id="1:578" data-name="Text">
              <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-normal h-[14.116px] justify-center leading-[0] left-0 not-italic text-[#75777d] text-[12px] top-[7.06px] w-[23.476px]" data-node-id="1:579">
                <p className="leading-[normal]">W16</p>
              </div>
            </div>
            <div className="absolute h-[14.116px] left-[405.8px] top-[262.86px] w-[25.971px]" data-node-id="1:580" data-name="Text">
              <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-normal h-[14.116px] justify-center leading-[0] left-0 not-italic text-[#75777d] text-[12px] top-[7.06px] w-[25.971px]" data-node-id="1:581">
                <p className="leading-[normal]">W20</p>
              </div>
            </div>
            <div className="absolute h-[14.116px] left-[468.23px] top-[262.86px] w-[25.965px]" data-node-id="1:582" data-name="Text">
              <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-normal h-[14.116px] justify-center leading-[0] left-0 not-italic text-[#75777d] text-[12px] top-[7.06px] w-[25.965px]" data-node-id="1:583">
                <p className="leading-[normal]">W24</p>
              </div>
            </div>
            <div className="absolute h-[14.116px] left-[515.05px] top-[262.86px] w-[25.828px]" data-node-id="1:584" data-name="Text">
              <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-normal h-[14.116px] justify-center leading-[0] left-0 not-italic text-[#75777d] text-[12px] top-[7.06px] w-[25.828px]" data-node-id="1:585">
                <p className="leading-[normal]">W28</p>
              </div>
            </div>
          </div></PlotFrame>; }

export function ManpowerPlot() { return <PlotFrame width={365.33} height={248} label="Manpower by week: 118, 124, 132, 138, 140 and 142 people. Planned peak: 150."><div className="relative h-full w-full" data-node-id="1:613" data-name="SVG">
            <div className="absolute inset-[15%_2.38%_85%_5.95%]" data-node-id="1:614" data-name="Vector">
              <div className="absolute inset-[-0.79px_0]">
                <Image src="/figma/dashboard/078f2.svg" alt="" width={334.886} height={1.58238} loading="eager" unoptimized className="figma-native-asset" />
              </div>
            </div>
            <div className="absolute h-[13.503px] left-[354.89px] top-[18.95px] w-[121.098px]" data-node-id="1:615" data-name="Text">
              <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-normal h-[13.503px] justify-center leading-[0] left-0 not-italic text-[#ba1a1a] text-[11px] top-[6.75px] w-[121.098px]" data-node-id="1:616">
                <p className="leading-[normal]">Planned Peak: 150 Pax</p>
              </div>
            </div>
            <div className="absolute inset-[37.5%_2.38%_62.5%_7.14%]" data-node-id="1:617" data-name="Vector">
              <div className="absolute inset-[-0.53px_0]">
                <Image src="/figma/dashboard/acfd7.svg" alt="" width={330.537} height={1.05492} loading="eager" unoptimized className="figma-native-asset" />
              </div>
            </div>
            <div className="absolute inset-[60%_2.38%_40%_7.14%]" data-node-id="1:618" data-name="Vector">
              <div className="absolute inset-[-0.53px_0]">
                <Image src="/figma/dashboard/acfd7.svg" alt="" width={330.537} height={1.05492} loading="eager" unoptimized className="figma-native-asset" />
              </div>
            </div>
            <div className="absolute inset-[82.5%_2.38%_17.5%_7.14%]" data-node-id="1:619" data-name="Vector">
              <div className="absolute inset-[-0.53px_0]">
                <Image src="/figma/dashboard/9a0bb.svg" alt="" width={330.537} height={1.05492} loading="eager" unoptimized className="figma-native-asset" />
              </div>
            </div>
            <div className="absolute h-[13.503px] left-[20.88px] top-[30.11px] w-[18.2px]" data-node-id="1:620" data-name="Text">
              <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-normal h-[13.503px] justify-center leading-[0] left-0 not-italic text-[#75777d] text-[11px] top-[6.75px] w-[18.2px]" data-node-id="1:621">
                <p className="leading-[normal]">150</p>
              </div>
            </div>
            <div className="absolute h-[13.503px] left-[20.88px] top-[85.91px] w-[18.62px]" data-node-id="1:622" data-name="Text">
              <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-normal h-[13.503px] justify-center leading-[0] left-0 not-italic text-[#75777d] text-[11px] top-[6.75px] w-[18.62px]" data-node-id="1:623">
                <p className="leading-[normal]">100</p>
              </div>
            </div>
            <div className="absolute h-[13.503px] left-[20.88px] top-[141.71px] w-[13.661px]" data-node-id="1:624" data-name="Text">
              <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-normal h-[13.503px] justify-center leading-[0] left-0 not-italic text-[#75777d] text-[11px] top-[6.75px] w-[13.661px]" data-node-id="1:625">
                <p className="leading-[normal]">50</p>
              </div>
            </div>
            <div className="absolute h-[13.503px] left-[20.88px] top-[197.51px] w-[7.04px]" data-node-id="1:626" data-name="Text">
              <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-normal h-[13.503px] justify-center leading-[0] left-0 not-italic text-[#75777d] text-[11px] top-[6.75px] w-[7.04px]" data-node-id="1:627">
                <p className="leading-[normal]">0</p>
              </div>
            </div>
            <div className="absolute inset-[76%_81.19%_17.5%_10.71%]" data-node-id="1:628" data-name="Vector">
              <Image src="/figma/dashboard/80884.svg" alt="" width={29.5743} height={16.12} loading="eager" unoptimized className="figma-native-asset" />
            </div>
            <div className="absolute inset-[68%_81.19%_24%_10.71%]" data-node-id="1:629" data-name="Vector">
              <Image src="/figma/dashboard/26a75.svg" alt="" width={29.5743} height={19.84} loading="eager" unoptimized className="figma-native-asset" />
            </div>
            <div className="absolute inset-[52%_81.19%_32%_10.71%]" data-node-id="1:630" data-name="Vector">
              <Image src="/figma/dashboard/902eb.svg" alt="" width={29.5743} height={39.68} loading="eager" unoptimized className="figma-native-asset" />
            </div>
            <div className="absolute inset-[29%_81.19%_48%_10.71%]" data-node-id="1:631" data-name="Vector">
              <Image src="/figma/dashboard/b6c33.svg" alt="" width={29.5743} height={57.04} loading="eager" unoptimized className="figma-native-asset" />
            </div>
            <div className="absolute h-[15.004px] left-[53.93px] top-[211.19px] w-[26.816px]" data-node-id="1:632" data-name="Text">
              <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-normal h-[15.004px] justify-center leading-[0] left-0 not-italic text-[#75777d] text-[12px] top-[7.5px] w-[26.816px]" data-node-id="1:633">
                <p className="leading-[normal]">W07</p>
              </div>
            </div>
            <div className="absolute h-[13.503px] left-[53.93px] top-[53.67px] w-[16.582px]" data-node-id="1:634" data-name="Text">
              <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-normal h-[13.503px] justify-center leading-[0] left-0 not-italic text-[#0b1c30] text-[11px] top-[6.75px] w-[16.582px]" data-node-id="1:635">
                <p className="leading-[normal]">118</p>
              </div>
            </div>
            <div className="absolute bottom-[17.5%] left-1/4 right-[66.9%] top-[76%]" data-node-id="1:636" data-name="Vector">
              <Image src="/figma/dashboard/ee97f.svg" alt="" width={29.5743} height={16.12} loading="eager" unoptimized className="figma-native-asset" />
            </div>
            <div className="absolute bottom-[24%] left-1/4 right-[66.9%] top-[67%]" data-node-id="1:637" data-name="Vector">
              <Image src="/figma/dashboard/80ecc.svg" alt="" width={29.5743} height={22.32} loading="eager" unoptimized className="figma-native-asset" />
            </div>
            <div className="absolute bottom-[33%] left-1/4 right-[66.9%] top-1/2" data-node-id="1:638" data-name="Vector">
              <Image src="/figma/dashboard/418b4.svg" alt="" width={29.5743} height={42.16} loading="eager" unoptimized className="figma-native-asset" />
            </div>
            <div className="absolute bottom-1/2 left-1/4 right-[66.9%] top-[26.5%]" data-node-id="1:639" data-name="Vector">
              <Image src="/figma/dashboard/b809f.svg" alt="" width={29.5743} height={58.28} loading="eager" unoptimized className="figma-native-asset" />
            </div>
            <div className="absolute h-[15.004px] left-[106.12px] top-[211.19px] w-[27.712px]" data-node-id="1:640" data-name="Text">
              <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-normal h-[15.004px] justify-center leading-[0] left-0 not-italic text-[#75777d] text-[12px] top-[7.5px] w-[27.712px]" data-node-id="1:641">
                <p className="leading-[normal]">W08</p>
              </div>
            </div>
            <div className="absolute h-[13.503px] left-[106.12px] top-[47.47px] w-[18.931px]" data-node-id="1:642" data-name="Text">
              <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-normal h-[13.503px] justify-center leading-[0] left-0 not-italic text-[#0b1c30] text-[11px] top-[6.75px] w-[18.931px]" data-node-id="1:643">
                <p className="leading-[normal]">124</p>
              </div>
            </div>
            <div className="absolute inset-[76.5%_52.62%_17.5%_39.29%]" data-node-id="1:644" data-name="Vector">
              <Image src="/figma/dashboard/fd189.svg" alt="" width={29.5743} height={14.88} loading="eager" unoptimized className="figma-native-asset" />
            </div>
            <div className="absolute inset-[67%_52.62%_23.5%_39.29%]" data-node-id="1:645" data-name="Vector">
              <Image src="/figma/dashboard/59915.svg" alt="" width={29.5743} height={23.56} loading="eager" unoptimized className="figma-native-asset" />
            </div>
            <div className="absolute inset-[48%_52.62%_33%_39.29%]" data-node-id="1:646" data-name="Vector">
              <Image src="/figma/dashboard/93480.svg" alt="" width={29.5743} height={47.12} loading="eager" unoptimized className="figma-native-asset" />
            </div>
            <div className="absolute inset-[23%_52.62%_52%_39.29%]" data-node-id="1:647" data-name="Vector">
              <Image src="/figma/dashboard/da260.svg" alt="" width={29.5743} height={62} loading="eager" unoptimized className="figma-native-asset" />
            </div>
            <div className="absolute h-[15.004px] left-[158.31px] top-[211.19px] w-[27.73px]" data-node-id="1:648" data-name="Text">
              <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-normal h-[15.004px] justify-center leading-[0] left-0 not-italic text-[#75777d] text-[12px] top-[7.5px] w-[27.73px]" data-node-id="1:649">
                <p className="leading-[normal]">W09</p>
              </div>
            </div>
            <div className="absolute h-[13.503px] left-[158.31px] top-[38.79px] w-[18.773px]" data-node-id="1:650" data-name="Text">
              <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-normal h-[13.503px] justify-center leading-[0] left-0 not-italic text-[#0b1c30] text-[11px] top-[6.75px] w-[18.773px]" data-node-id="1:651">
                <p className="leading-[normal]">132</p>
              </div>
            </div>
            <div className="absolute inset-[76.5%_38.33%_17.5%_53.57%]" data-node-id="1:652" data-name="Vector">
              <Image src="/figma/dashboard/fd189.svg" alt="" width={29.5743} height={14.88} loading="eager" unoptimized className="figma-native-asset" />
            </div>
            <div className="absolute inset-[66.5%_38.33%_23.5%_53.57%]" data-node-id="1:653" data-name="Vector">
              <Image src="/figma/dashboard/78f83.svg" alt="" width={29.5743} height={24.8} loading="eager" unoptimized className="figma-native-asset" />
            </div>
            <div className="absolute inset-[46.5%_38.33%_33.5%_53.57%]" data-node-id="1:654" data-name="Vector">
              <Image src="/figma/dashboard/f1b40.svg" alt="" width={29.5743} height={49.6} loading="eager" unoptimized className="figma-native-asset" />
            </div>
            <div className="absolute inset-[20%_38.33%_53.5%_53.57%]" data-node-id="1:655" data-name="Vector">
              <Image src="/figma/dashboard/44836.svg" alt="" width={29.5743} height={65.72} loading="eager" unoptimized className="figma-native-asset" />
            </div>
            <div className="absolute h-[15.004px] left-[210.5px] top-[211.19px] w-[25.085px]" data-node-id="1:656" data-name="Text">
              <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-normal h-[15.004px] justify-center leading-[0] left-0 not-italic text-[#75777d] text-[12px] top-[7.5px] w-[25.085px]" data-node-id="1:657">
                <p className="leading-[normal]">W10</p>
              </div>
            </div>
            <div className="absolute h-[13.503px] left-[210.5px] top-[31.35px] w-[18.963px]" data-node-id="1:658" data-name="Text">
              <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-normal h-[13.503px] justify-center leading-[0] left-0 not-italic text-[#0b1c30] text-[11px] top-[6.75px] w-[18.963px]" data-node-id="1:659">
                <p className="leading-[normal]">138</p>
              </div>
            </div>
            <div className="absolute inset-[76.5%_24.05%_17.5%_67.86%]" data-node-id="1:660" data-name="Vector">
              <Image src="/figma/dashboard/fd189.svg" alt="" width={29.5743} height={14.88} loading="eager" unoptimized className="figma-native-asset" />
            </div>
            <div className="absolute inset-[66.5%_24.05%_23.5%_67.86%]" data-node-id="1:661" data-name="Vector">
              <Image src="/figma/dashboard/78f83.svg" alt="" width={29.5743} height={24.8} loading="eager" unoptimized className="figma-native-asset" />
            </div>
            <div className="absolute inset-[46%_24.05%_33.5%_67.86%]" data-node-id="1:662" data-name="Vector">
              <Image src="/figma/dashboard/541fd.svg" alt="" width={29.5743} height={50.84} loading="eager" unoptimized className="figma-native-asset" />
            </div>
            <div className="absolute inset-[19%_24.05%_54%_67.86%]" data-node-id="1:663" data-name="Vector">
              <Image src="/figma/dashboard/ab158.svg" alt="" width={29.5743} height={66.96} loading="eager" unoptimized className="figma-native-asset" />
            </div>
            <div className="absolute h-[15.004px] left-[262.69px] top-[211.19px] w-[22.305px]" data-node-id="1:664" data-name="Text">
              <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-normal h-[15.004px] justify-center leading-[0] left-0 not-italic text-[#75777d] text-[12px] top-[7.5px] w-[22.305px]" data-node-id="1:665">
                <p className="leading-[normal]">W11</p>
              </div>
            </div>
            <div className="absolute h-[13.503px] left-[262.69px] top-[28.87px] w-[19.514px]" data-node-id="1:666" data-name="Text">
              <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-normal h-[13.503px] justify-center leading-[0] left-0 not-italic text-[#0b1c30] text-[11px] top-[6.75px] w-[19.514px]" data-node-id="1:667">
                <p className="leading-[normal]">140</p>
              </div>
            </div>
            <div className="absolute inset-[12%_8.81%_16%_82.14%]" data-node-id="1:668" data-name="Vector">
              <Image src="/figma/dashboard/85068.svg" alt="" width={33.0537} height={178.56} loading="eager" unoptimized className="figma-native-asset" />
            </div>
            <div className="absolute inset-[76.5%_9.29%_17.5%_82.62%]" data-node-id="1:669" data-name="Vector">
              <Image src="/figma/dashboard/ebbea.svg" alt="" width={29.5743} height={14.88} loading="eager" unoptimized className="figma-native-asset" />
            </div>
            <div className="absolute inset-[66.5%_9.29%_23.5%_82.62%]" data-node-id="1:670" data-name="Vector">
              <Image src="/figma/dashboard/405ce.svg" alt="" width={29.5743} height={24.8} loading="eager" unoptimized className="figma-native-asset" />
            </div>
            <div className="absolute inset-[45.5%_9.29%_33.5%_82.62%]" data-node-id="1:671" data-name="Vector">
              <Image src="/figma/dashboard/a3869.svg" alt="" width={29.5743} height={52.08} loading="eager" unoptimized className="figma-native-asset" />
            </div>
            <div className="absolute inset-[18%_9.29%_54.5%_82.62%]" data-node-id="1:672" data-name="Vector">
              <Image src="/figma/dashboard/85556.svg" alt="" width={29.5743} height={68.2} loading="eager" unoptimized className="figma-native-asset" />
            </div>
            <div className="absolute h-[15.004px] left-[316.62px] top-[211.19px] w-[26.023px]" data-node-id="1:673" data-name="Text">
              <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-normal h-[15.004px] justify-center leading-[0] left-0 not-italic text-[#0b1c30] text-[12px] top-[7.5px] w-[26.023px]" data-node-id="1:674">
                <p className="leading-[normal]">W12</p>
              </div>
            </div>
            <div className="absolute h-[15.004px] left-[316.62px] top-[22.71px] w-[21.543px]" data-node-id="1:675" data-name="Text">
              <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-normal h-[15.004px] justify-center leading-[0] left-0 not-italic text-[#15803d] text-[12px] top-[7.5px] w-[21.543px]" data-node-id="1:676">
                <p className="leading-[normal]">142</p>
              </div>
            </div>
          </div></PlotFrame>; }

export function ScaffoldDonut() { return <PlotFrame width={144} height={144} label="Scaffold tags: 218 green, 34 yellow, 32 red. Total 284."><div className="relative h-full w-full" data-node-id="1:693" data-name="SVG Donut Chart">
            <div className="flex h-[144px] items-center justify-center relative shrink-0 w-full" data-node-id="1:694" style={{ containerType: "size" }}>
              <div className="-rotate-90 flex-none h-[100cqw]">
                <div className="h-full overflow-clip relative w-[144px]" data-name="SVG">
                  <div className="absolute inset-[12%]" data-node-id="1:695" data-name="Vector">
                    <div className="absolute inset-[-7.89%]">
                      <Image src="/figma/dashboard/453d9.svg" alt="" width={126.72} height={126.72} loading="eager" unoptimized className="figma-native-asset" />
                    </div>
                  </div>
                  <div className="absolute bottom-[25.42%] left-[78.98%] right-[12%] top-1/2" data-node-id="1:696" data-name="Vector">
                    <div className="absolute inset-[0_-66.5%_-15.79%_-50.71%]">
                      <Image src="/figma/dashboard/aab69.svg" alt="" width={28.2204} height={40.9873} loading="eager" unoptimized className="figma-native-asset" />
                    </div>
                  </div>
                  <div className="absolute inset-[74.58%_21.02%_12.24%_54.24%]" data-node-id="1:697" data-name="Vector">
                    <div className="absolute inset-[-29.45%_-18.49%_-45.24%_-2.7%]">
                      <Image src="/figma/dashboard/8de24.svg" alt="" width={43.1791} height={33.1559} loading="eager" unoptimized className="figma-native-asset" />
                    </div>
                  </div>
                  <div className="absolute inset-[12%]" data-node-id="1:698" data-name="Vector">
                    <div className="absolute inset-[-7.89%]">
                      <Image src="/figma/dashboard/9c89f.svg" alt="" width={126.721} height={126.724} loading="eager" unoptimized className="figma-native-asset" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute content-stretch flex flex-col inset-0 items-center justify-center" data-node-id="1:699" data-name="Container">
              <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="1:700" data-name="Container">
                <div className="[word-break:break-word] flex flex-col font-sans font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#0b1c30] text-[20px] tracking-[-0.2px] whitespace-nowrap" data-node-id="1:701">
                  <p className="leading-[20px]">284</p>
                </div>
              </div>
              <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="1:702" data-name="Container">
                <div className="[word-break:break-word] flex flex-col font-sans font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#44474c] text-[11px] tracking-[0.22px] whitespace-nowrap" data-node-id="1:703">
                  <p className="leading-[14px]">Units</p>
                </div>
              </div>
            </div>
          </div></PlotFrame>; }
