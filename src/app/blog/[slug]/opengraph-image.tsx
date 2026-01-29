import { ImageResponse } from "next/og";
import { getBlogPostMetadata } from "@/lib/blog-utils";

// Image metadata
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

// Image generation
export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const metadata = await getBlogPostMetadata(slug);

  if (!metadata) {
    // Fallback to default image
    return new ImageResponse(
      (
        <div
          style={{
            fontSize: 48,
            background: "white",
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "80px",
          }}
        >
          <div style={{ fontSize: 72, fontWeight: "bold", marginBottom: 20 }}>
            Blog Post
          </div>
          <div style={{ fontSize: 32, color: "#666" }}>
            dammyola.com
          </div>
        </div>
      ),
      {
        ...size,
      }
    );
  }

  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 48,
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "80px",
          color: "white",
        }}
      >
        <div
          style={{
            fontSize: 72,
            fontWeight: "bold",
            marginBottom: 20,
            textAlign: "center",
            lineHeight: 1.2,
          }}
        >
          {metadata.title}
        </div>
        {metadata.description && (
          <div
            style={{
              fontSize: 32,
              opacity: 0.9,
              textAlign: "center",
              maxWidth: "900px",
              lineHeight: 1.4,
            }}
          >
            {metadata.description}
          </div>
        )}
        <div
          style={{
            position: "absolute",
            bottom: 40,
            right: 40,
            fontSize: 24,
            opacity: 0.8,
          }}
        >
          dammyola.com
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
