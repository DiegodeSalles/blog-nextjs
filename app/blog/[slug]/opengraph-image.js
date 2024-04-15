import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "A blog post";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image({ params }) {
  const interSemiBold = fetch(new URL("./inter.ttf", import.meta.url)).then(
    (res) => res.arrayBuffer()
  );

  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 84,
          color: "rgb(209, 213, 219)",
          background: "rgb(17, 24, 39)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={{ margin: 25 }}>{params.slug}</div>
        <div style={{ margin: 25, fontSize: 32 }}>
          This is a description of the blog post
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Inter",
          data: await interSemiBold,
          style: "normal",
          weight: 400,
        },
      ],
    }
  );
}
