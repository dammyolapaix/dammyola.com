import { ImageResponse } from "next/og";
import { readFile } from "fs/promises";
import { join } from "path";

// Image metadata
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

// Image generation
export default async function Image() {
  // Load the profile image from public folder and convert to data URL
  let profileImageDataUrl: string | null = null;
  try {
    const imagePath = join(process.cwd(), "public", "Dammy Ola Profile.png");
    const imageBuffer = await readFile(imagePath);
    const base64 = imageBuffer.toString("base64");
    profileImageDataUrl = `data:image/png;base64,${base64}`;
  } catch (error) {
    // Fallback if image not found
    console.error("Failed to load profile image:", error);
  }

  return new ImageResponse(
    <div
      style={{
        background: "#f7f7f7", // bg-muted/30 equivalent (light gray)
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "80px",
        fontFamily: "system-ui, -apple-system, sans-serif",
      }}
    >
      {/* Left side - Text content */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
          maxWidth: "600px",
          gap: "24px",
        }}
      >
        <h1
          style={{
            fontSize: "64px",
            fontWeight: 800,
            color: "#1a1a1a", // foreground (black)
            lineHeight: 1.1,
            margin: 0,
          }}
        >
          Build Your Product Without Learning to Code
        </h1>
        <p
          style={{
            fontSize: "28px",
            color: "#666666", // muted-foreground (gray)
            lineHeight: 1.4,
            margin: 0,
          }}
        >
          We build software and AI products for non-technical founders. No
          technical co-founder needed. No hiring a full team. Just you, your
          idea, and us.
        </p>
        {/* CTA - same as Navbar: profile image + Book a Call with Dammy */}
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            marginTop: "24px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "14px",
              background: "#1447e6",
              padding: "16px 28px",
              borderRadius: "8px",
            }}
          >
            {profileImageDataUrl ? (
              <img
                src={profileImageDataUrl}
                alt="Dammy Ola - the person behind this site"
                width={40}
                height={40}
                style={{
                  borderRadius: "50%",
                  objectFit: "cover",
                  border: "2px solid rgba(255,255,255,0.3)",
                }}
              />
            ) : (
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: "50%",
                  background: "rgba(255,255,255,0.3)",
                }}
              />
            )}
            <span
              style={{
                fontSize: "24px",
                fontWeight: 600,
                color: "white",
              }}
            >
              Book a Call with Dammy
            </span>
          </div>
        </div>
      </div>

      {/* Right side - Profile picture circle */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginLeft: "60px",
        }}
      >
        {profileImageDataUrl ? (
          <img
            src={profileImageDataUrl}
            alt="Dammy Ola - the person behind this site"
            width={320}
            height={320}
            style={{
              borderRadius: "50%",
              objectFit: "cover",
              border: "2px solid #e5e5e5", // border color
            }}
          />
        ) : (
          <div
            style={{
              width: "320px",
              height: "320px",
              borderRadius: "50%",
              background: "#1447e6", // primary blue as fallback
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontSize: "48px",
              fontWeight: "bold",
            }}
          >
            Dammy Ola
          </div>
        )}
      </div>
    </div>,
    {
      ...size,
    },
  );
}
