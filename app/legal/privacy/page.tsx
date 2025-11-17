export default function PrivacyPage() {
  return (
    <div className="container-balanced py-16 md:py-24 prose prose-slate max-w-3xl">
      <h1>Privacy Policy</h1>
      <p>We collect only what is necessary to provide the service. We minimize stored personal information and provide deletion upon request.</p>
      <h2>Data we process</h2>
      <ul>
        <li>Lead contact information you submit</li>
        <li>Forwarded documents for parsing (during pilot, by agreement)</li>
      </ul>
      <h2>Security</h2>
      <p>We apply least-privilege access, encryption at rest and in transit, and audit logging.</p>
    </div>
  );
}
