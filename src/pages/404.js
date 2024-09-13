import Link from "next/link";

const Custom404 = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <Link href="/" legacyBehavior>
        <a style={{ color: "blue", textDecoration: "underline" }}>
          Go back to Homepage
        </a>
      </Link>
    </div>
  );
};

export default Custom404;
